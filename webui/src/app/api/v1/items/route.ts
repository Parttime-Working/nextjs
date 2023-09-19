
import { NextResponse } from "next/server";

export async function GET() {
  // TODO: fetch items list
  return NextResponse.json(
    {
      foo: "bar",
    },
    { status: 200 }
  );
}

export async function POST() {
  // TODO: create item
  return NextResponse.json(
    {
      foo: "bar",
    },
    { status: 201 }
  );
}
