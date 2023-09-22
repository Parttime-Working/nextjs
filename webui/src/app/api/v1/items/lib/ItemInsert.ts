import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ItemInsert, ItemInsertSchema } from "./ItemInsertSchema";
import { ZodIssue } from "zod";
import { HttpStatusCode } from "axios";

const BadRequestError = (issues: ZodIssue[]) =>
  NextResponse.json(
    {
      errors: issues,
    },
    { status: HttpStatusCode.BadRequest }
  );

async function ItemInsert(data: ItemInsert) {
  const validationResult = ItemInsertSchema.safeParse(data);

  if (!validationResult.success) {
    // all !success request is returned here
    return BadRequestError(validationResult.error.issues);
  }

  // 創建一個新表單並插入到數據庫
  const newForm = await db.rcv_form.create({
    data: {
      empno: data.empno,
      name: data.username,
      cost_dept: data.cost_dept,
      rcv_dept: data.rcv_dept,
      items: {
        create: data.items,
      },
      remark: data.remark,
    },
    include: {
      items: true, // 用於返回關聯產品的信息
    },
  });

  return newForm;
}

export default ItemInsert;
