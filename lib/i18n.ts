import { createI18n } from "@inlang/paraglide-js-adapter-next";
import type { AvailableLanguageTag } from "@/paraglide/runtime";

export const { Link, useRouter, usePathname, redirect, permanentRedirect } = createI18n<AvailableLanguageTag>({
  pathnames: {
    "/story-creation": {
      en: "/story-creation",
      es: "/creacion-de-historia",
    },
    // Add more path translations as needed
  },
});

export { setLanguageTag } from "@/paraglide/runtime";