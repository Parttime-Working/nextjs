import { PrismaClient } from '@prisma/client';
import { db } from "@/lib/db";

interface FormData {
  empno: string;
  username: string;
  items: Array<{ item: string; qty: number }>;
  remark: string;
}

async function ItemInsert(data: FormData) {
  // 创建一个新表单并插入到数据库
  const newForm = await db.rcv_form.create({
    data: {
      empno: data.empno,
      name: data.username,
      items: {
        create: [
          { item: 'Product 1', qty: 5 },
          { item: 'Product 2', qty: 3 },
          // 添加更多产品...
        ],
      },
      remark: data.remark
    },
    include: {
      items: true, // 用于返回关联产品的信息
    },
  });

  return newForm;
}


export default ItemInsert;
