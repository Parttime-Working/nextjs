import { HttpStatusCode } from "axios";
import { syscoProxyClient, syscoSqlProxyClient } from "./lib/syscoProxyClient";
import { NextRequest, NextResponse } from "next/server";
import qs from "qs";

export async function GET(req: NextRequest) {
  // some param
  const query = qs.parse(req.nextUrl.search.slice(1));
  const resp = await syscoProxyClient.search(query);

  if (!resp) {
    return NextResponse.json(
      { errors: [{ message: "unknown error" }] },
      { status: 500 }
    );
  }

  return NextResponse.json(resp.data, { status: HttpStatusCode.Ok });
}
