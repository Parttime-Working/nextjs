import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function ItemInsert(data) {
  // 创建一个新表单并插入到数据库
  const newForm = await prisma.rcv_form.create({
    data: {
      empno: '22004',
      name: data.username,
      items: {
        create: [
          { item: 'Product 1', qty: 5 },
          { item: 'Product 2', qty: 3 },
          // 添加更多产品...
        ],
      },
    },
    include: {
      items: true, // 用于返回关联产品的信息
    },
  });

  return newForm;
}


export default ItemInsert;
