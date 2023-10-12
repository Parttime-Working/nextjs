import { NextRequest, NextResponse } from "next/server";
import { ItemIdParams, ItemIdParamsSchema } from "../lib/ItemIdParamsSchema";
import { db } from "@/lib/db";
import { ZodIssue } from "zod";
import { HttpStatusCode } from "axios";

// you can refactor out the not found error to /api/lib, then other api can use it
const BadRequestError = (issues: ZodIssue[]) =>
  NextResponse.json(
    {
      errors: issues,
    },
    { status: HttpStatusCode.BadRequest }
  );

export async function GET(
  req: NextRequest,
  ctx: {
    params: ItemIdParams;
  }
) {
  // parse id from ctx
  const pathParams = ItemIdParamsSchema.safeParse(ctx.params);

  if (!pathParams.success) {
    // all !success request is returned here
    return BadRequestError(pathParams.error.issues);
  }

  // so, only success parsed data get into here, therefore pathParams.data exists

  const { itemId } = pathParams.data;

  const item = await db.supplementary_item.findUnique({ where: { id: itemId } });

  // item can be null
  if (!item) {
    // can refactor out like BadRequestError
    return NextResponse.json(
      {
        errors: [
          {
            message: "resource not found",
          },
        ],
      },
      { status: HttpStatusCode.NotFound }
    );
  }

  return NextResponse.json(item, { status: 200 });
}
