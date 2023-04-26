import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "admin"
    )
      return NextResponse.rewrite(
        new URL("/login?message=You are not authorized!", req.url)
      );

    if (
      req.nextUrl.pathname.startsWith("/user") &&
      req.nextauth.token?.role !== "user"
    )
      return NextResponse.rewrite(
        new URL("/login?message=You are not logged in!", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
