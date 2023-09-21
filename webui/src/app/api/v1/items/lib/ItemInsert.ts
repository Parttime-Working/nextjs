import { PrismaClient } from '@prisma/client';
import { db } from "@/lib/db";

interface FormData {
  empno: string;
  username: string;
  cost_dept: string;
  rcv_dept: string;
  items: Array<{ itemno: string; qty: number }>;
  remark: string;
}

async function ItemInsert(data: FormData) {
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
      remark: data.remark
    },
    include: {
      items: true, // 用於返回關聯產品的信息
    },
  });

  return newForm;
}


export default ItemInsert;
