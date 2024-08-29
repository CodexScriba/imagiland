import { Link, usePathname } from "@/lib/i18n";
import { availableLanguageTags } from "@/paraglide/runtime";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  return (
    <div>
      {availableLanguageTags.map((lang) => (
        <Link key={lang} href={pathname} locale={lang} hreflang={lang}>
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}