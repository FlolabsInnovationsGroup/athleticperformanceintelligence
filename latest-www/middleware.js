import { NextResponse } from "next/server";

/** Ignore pre-hydration template placeholder asset requests like /{{ w.img }} */
export function middleware(request) {
  const path = decodeURIComponent(request.nextUrl.pathname);
  if (path.includes("{{") || path.includes("}}")) {
    return new NextResponse(null, { status: 204 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
