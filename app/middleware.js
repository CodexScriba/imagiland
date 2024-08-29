// middleware.js
import { NextResponse } from "next/server";
import { availableLanguageTags, sourceLanguageTag } from "@/paraglide/runtime";
import geoip from "geoip-lite";

export function middleware(req) {
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  const PUBLIC_FILE = /\.(.*)$/;

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const preferredLocale = req.cookies.get("preferredLocale");
  if (preferredLocale && availableLanguageTags.includes(preferredLocale)) {
    return NextResponse.next();
  }

  const ip = req.ip || req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  const geo = ip === "127.0.0.1" || !ip ? { country: "US" } : geoip.lookup(ip);

  const spanishSpeakingCountries = ["ES", "MX", "AR", "CO", "CL", "CR", "VE", "PE", "GT", "CU", "BO", "DO", "HN", "PY", "SV", "NI", "UY", "PA", "EC", "PR"];

  const geoPreferredLocale = spanishSpeakingCountries.includes(geo?.country || "US") ? "es" : "en";

  if (!pathname.startsWith(`/${geoPreferredLocale}`)) {
    return NextResponse.redirect(new URL(`/${geoPreferredLocale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};