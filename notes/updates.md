# language update
//app/next.config.js
const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "es"], // Supported locales
		defaultLocale: "en", // Default locale
	},
};

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
		const withPWA = require("@ducanh2912/next-pwa").default({
			dest: "public",
		});
		return withPWA(nextConfig);
	}
	return nextConfig;
};
