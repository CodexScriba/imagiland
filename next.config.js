// next.config.js

const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
});

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en", "es"], // Supported locales
		defaultLocale: "en", // Default locale
	},
};

module.exports = (phase) => {
	if (phase === PHASE_PRODUCTION_BUILD) {
		// Apply PWA configuration in production
		return withPWA(nextConfig);
	}
	return nextConfig;
};
