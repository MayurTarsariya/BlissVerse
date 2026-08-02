import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Normalises the ASIN casing in QR / typed URLs.
 *
 * `app/p/[asin]` sets `dynamicParams = false`, so only the exact params from
 * generateStaticParams() match — and those are uppercase. On a case-insensitive
 * filesystem (Windows dev) `/p/b0hb3z3s9y` happens to resolve; on Linux
 * (Vercel and most hosts) it 404s. Redirecting here makes the behaviour the
 * same everywhere, so a URL read off a printed insert card still works.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalized = pathname.replace(
    /^\/p\/([^/]+)$/,
    (_, asin: string) => `/p/${asin.toUpperCase()}`,
  );

  if (normalized === pathname) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = normalized;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: "/p/:asin",
};
