import { db } from "@/lib/db";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";
import { FormSearchParamsSchema } from "./lib/FormSearchParamsSchema";

export async function GET(req: NextRequest) {
  const queryParams = qs.parse(req.nextUrl.search.slice(1));

  const parsedQuery = FormSearchParamsSchema.safeParse(queryParams);

  if (!parsedQuery.success) {
    return NextResponse.json(
      {
        errors: parsedQuery.error.issues,
      },
      { status: HttpStatusCode.BadRequest }
    );
  }

  const query = parsedQuery.data;
  const searchCondition = {
    ...(query.empno && {
      empno: { startsWith: query.empno },
    }),
    ...(query.name && {
      name: { contains: query.name },
    }),
    ...(query.process !== undefined && { process: query.process }),
  };

  if (process.env.USE_MOCK) {
    return NextResponse.json(
      {
        items: [
          {
            id: 1,
            itemno: "wtf",
            item_spec: "wt is this?",
            qty: 1.23,
            formid: 1,
          },
        ],
        page: 1,
        pageSize: query.pageSize,
        total: 1,
        totalPages: Math.ceil(1 / query.pageSize),
      },
      { status: 200 }
    );
  }

  const [forms, total] = await Promise.all([
    db.supplementary_form.findMany({
      orderBy: [
        {
          created_at: "desc",
        },
      ],
      where: searchCondition,
      skip: query.pageSize * (query.page - 1),
      take: query.pageSize,
      include: {
        items: true,
      },
    }),
    db.supplementary_form.count({ where: searchCondition }),
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
