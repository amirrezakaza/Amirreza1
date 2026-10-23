"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  getDirection,
  isValidLocale,
  LOCALE_COOKIE_NAME,
  type Locale,
} from "@/i18n/config";

export function LocaleDocumentSync({ initialLocale }: { initialLocale: Locale }) {
  const pathname = usePathname();

  useEffect(() => {
    const seg = pathname?.split("/")[1];
    const activeLocale: Locale = isValidLocale(seg) ? seg : initialLocale;
    const dir = getDirection(activeLocale);

    document.documentElement.lang = activeLocale;
    document.documentElement.dir = dir;

    try {
      localStorage.setItem(LOCALE_COOKIE_NAME, activeLocale);
      document.cookie = `${LOCALE_COOKIE_NAME}=${activeLocale}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // Storage blocked in strict privacy mode — safe no-op
    }
  }, [pathname, initialLocale]);

  return null;
}
