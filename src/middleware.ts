import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // console.log(1);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin",
};
