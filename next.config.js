// Import required constants and plugins
const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
  } = require("next/constants");
  
  const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
  });
  
  // Import the Paraglide plugin
  const withParaglide = require("@inlang/paraglide-js-adapter-next/plugin")();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
	reactStrictMode: true,
	i18n: {
	  locales: ["en", "es"], // Supported locales
	  defaultLocale: "en", // Default locale
	},
  };
  
  module.exports = (phase) => {
	let config = nextConfig;
  
	if (phase === PHASE_PRODUCTION_BUILD) {
	  // Apply PWA configuration in production
	  config = withPWA(config);
	}
  
	// Apply Paraglide plugin in all phases
	config = withParaglide(config);
  
	return config;
  };
  