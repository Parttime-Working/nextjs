import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";
import { syscoSqlProxyClient } from "./lib/syscoSqlProxyClient";
import { mockDataPromise } from "./mockData";

export async function GET(req: NextRequest) {
  // some param
  const query = qs.parse(req.nextUrl.search.slice(1));

  if (process.env.USE_MOCK === "true") {
    const mockData = await mockDataPromise;

    return NextResponse.json(mockData, { status: HttpStatusCode.Ok });
  }

  const resp = await syscoSqlProxyClient.search(query);

  if (!resp) {
    return NextResponse.json(
      { errors: [{ message: "unknown error" }] },
      { status: 500 }
    );
  }

  return NextResponse.json(resp.data, { status: HttpStatusCode.Ok });
}
