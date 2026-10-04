import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // console.log("Proxy is running:", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  if(pathname === "/landing"){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

