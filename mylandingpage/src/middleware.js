import { NextResponse } from "next/server";

export function middleware(req) {
  const maintenance = process.env.MAINTENANCE_MODE;

  if (maintenance === "true") {
    return new NextResponse(
      "<h1 style='text-align:center;margin-top:100px'>Site Under Maintenance</h1>",
      { headers: { "content-type": "text/html" } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
