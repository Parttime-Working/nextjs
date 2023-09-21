import { db } from "@/lib/db";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";
import { z } from "zod";

const PaginationSchema = z.object({
  page: z
    .preprocess((process) => parseInt(String(process)), z.number().min(1))
    .default(1),
  pageSize: z
    .preprocess((process) => parseInt(String(process)), z.number().min(1))
    .default(25),
});

const SearchParamsSchema = z
  .object({
    empno: z.string().optional(),
    name: z.string().optional(),
    process: z
      .preprocess((process) => parseInt(String(process)), z.number())
      .optional(),
  })
  .merge(PaginationSchema);

export async function GET(req: NextRequest) {
  const queryParams = qs.parse(req.nextUrl.search.slice(1));

  const parsedQuery = SearchParamsSchema.safeParse(queryParams);

  if (!parsedQuery.success) {
    return NextResponse.json(
      {
        errors: parsedQuery.error.issues,
      },
      { status: HttpStatusCode.BadRequest }
    );
  }

  const query = parsedQuery.data;
  // console.log(query);

  const searchCondition = {
    ...(query.empno && {
      empno: { startsWith: query.empno },
    }),
    ...(query.name && {
      name: { contains: query.name },
    }),
    ...(query.process !== undefined && { process: query.process }),
  };

  const [forms, total] = await Promise.all([
    db.rcv_form.findMany({
      where: searchCondition,
      skip: query.pageSize * (query.page - 1),
      take: query.pageSize,
    }),
    db.rcv_form.count({ where: searchCondition }),
  ]);

  return NextResponse.json(
    {
      items: forms,
      page: query.page,
      pageSize: query.pageSize,
      total,
      totalPages: Math.ceil(total / query.pageSize),
    },
    { status: 200 }
  );
}
