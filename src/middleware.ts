import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");

  if (authHeader !== process.env.TOKEN) {
    return NextResponse.json(
      { error: "Unauthorized: No token provided" },
      { status: 401 }
    );
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher:
    "/((?!studio|fonts|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.css|.*\\.js|.*\\.png|.*\\.jpg).*)",
};
