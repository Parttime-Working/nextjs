import { NextRequest, NextResponse } from "next/server";
import ItemInsert from "./lib/ItemInsert";

export async function GET() {
  // TODO: fetch items list
  return NextResponse.json(
    {
      foo: "bar",
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  // 輸入資料
  const body = await req.json();
  // CALL prisma to insert data
  await ItemInsert(body);
  console.log(body);

  return NextResponse.json(
    {
      body,
    },
    { status: 201 }
  );
}
