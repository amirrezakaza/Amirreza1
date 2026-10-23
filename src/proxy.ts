import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  isValidLocale,
  LOCALE_COOKIE_NAME,
  LOCALE_HEADER_NAME,
} from "./i18n/config";

const PUBLIC_FILE_REGEX = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE_REGEX.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (isValidLocale(maybeLocale)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER_NAME, maybeLocale);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    if (request.cookies.get(LOCALE_COOKIE_NAME)?.value !== maybeLocale) {
      response.cookies.set(LOCALE_COOKIE_NAME, maybeLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const targetLocale = isValidLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const suffix = pathname === "/" ? "" : pathname;
  const redirectUrl = new URL(`/${targetLocale}${suffix}${search}`, request.url);

  return NextResponse.redirect(redirectUrl, 307);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
