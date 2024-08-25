// middleware.js

import { NextResponse } from "next/server";
import geoip from "geoip-lite";

export function middleware(req) {
	const { nextUrl } = req;
	const { pathname } = nextUrl;

	const PUBLIC_FILE = /\.(.*)$/;

	// Ignore requests for public files or API routes
	if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
		return NextResponse.next();
	}

	// Check if user has set a preferred language via cookie
	const preferredLocale = req.cookies.get("preferredLocale");
	if (preferredLocale) {
		if (nextUrl.locale !== preferredLocale) {
			const localePathname = `/${preferredLocale}${pathname}`;
			return NextResponse.redirect(new URL(localePathname, req.url));
		}
		return NextResponse.next();
	}

	// Fallback to geo-location based language detection
	const ip =
		req.ip ||
		req.headers.get("x-forwarded-for") ||
		req.headers.get("x-real-ip");

	// Handle cases where geoip lookup might fail (e.g., localhost, private networks)
	const geo = ip === "127.0.0.1" || !ip ? { country: "US" } : geoip.lookup(ip);

	// Default to English if GeoIP fails or if not in a Spanish-speaking country
	const country = geo?.country || "US";
	const spanishSpeakingCountries = [
		"ES",
		"MX",
		"AR",
		"CO",
		"CL",
		"CR",
		"VE",
		"PE",
		"GT",
		"CU",
		"BO",
		"DO",
		"HN",
		"PY",
		"SV",
		"NI",
		"UY",
		"PA",
		"EC",
		"PR",
	];

	const geoPreferredLocale = spanishSpeakingCountries.includes(country)
		? "es"
		: "en";

	// Redirect to the appropriate locale only if necessary
	if (nextUrl.locale !== geoPreferredLocale) {
		const localePathname = `/${geoPreferredLocale}${pathname}`;
		return NextResponse.redirect(new URL(localePathname, req.url));
	}

	return NextResponse.next();
}
