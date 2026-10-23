"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import {
  LOCALE_COOKIE_NAME,
  localizedPath,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { BrandMark } from "./BrandMark";
import { DirectionalArrow, LanguageGlobeIcon } from "./Icons";

function buildAlternatePath(
  pathname: string | null,
  searchString: string,
  targetLocale: Locale
): string {
  if (!pathname) return `/${targetLocale}`;
  const segments = pathname.split("/");
  if (segments[1] === "en" || segments[1] === "fa") {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }
  const joined = segments.join("/") || `/${targetLocale}`;
  return searchString ? `${joined}?${searchString}` : joined;
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dict = getDictionary(locale);
  const searchString = searchParams?.toString() ?? "";

  const otherLocale: Locale = locale === "en" ? "fa" : "en";
  const targetHref = buildAlternatePath(pathname, searchString, otherLocale);

  const persistChoice = (nextLocale: Locale) => {
    try {
      localStorage.setItem(LOCALE_COOKIE_NAME, nextLocale);
      document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // Ignore storage restrictions
    }
  };

  return (
    <div
      role="group"
      aria-label={dict.a11y.switchLanguage}
      className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-950/80 p-0.5 text-xs font-medium"
    >
      <Link
        href={locale === "en" ? buildAlternatePath(pathname, searchString, "en") : targetHref}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "true" : undefined}
        onClick={() => persistChoice("en")}
        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-blue-600/20 text-blue-300 border border-blue-500/40"
            : "text-slate-400 hover:text-slate-100"
        }`}
      >
        <LanguageGlobeIcon className="h-3.5 w-3.5" />
        <span>EN</span>
      </Link>
      <Link
        href={locale === "fa" ? buildAlternatePath(pathname, searchString, "fa") : targetHref}
        hrefLang="fa"
        lang="fa"
        aria-current={locale === "fa" ? "true" : undefined}
        onClick={() => persistChoice("fa")}
        className={`inline-flex items-center rounded-md px-2.5 py-1.5 transition-colors ${
          locale === "fa"
            ? "bg-blue-600/20 text-blue-300 border border-blue-500/40"
            : "text-slate-400 hover:text-slate-100"
        }`}
      >
        <span>فارسی</span>
      </Link>
    </div>
  );
}

function LanguageSwitcherFallback({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  return (
    <div
      role="group"
      aria-label={dict.a11y.switchLanguage}
      className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-950/80 p-0.5 text-xs font-medium"
    >
      <Link
        href={buildAlternatePath(pathname, "", "en")}
        hrefLang="en"
        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 ${
          locale === "en"
            ? "bg-blue-600/20 text-blue-300 border border-blue-500/40"
            : "text-slate-400 hover:text-slate-100"
        }`}
      >
        <LanguageGlobeIcon className="h-3.5 w-3.5" />
        <span>EN</span>
      </Link>
      <Link
        href={buildAlternatePath(pathname, "", "fa")}
        hrefLang="fa"
        className={`inline-flex items-center rounded-md px-2.5 py-1.5 ${
          locale === "fa"
            ? "bg-blue-600/20 text-blue-300 border border-blue-500/40"
            : "text-slate-400 hover:text-slate-100"
        }`}
      >
        <span>فارسی</span>
      </Link>
    </div>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const currentKey = pathname ?? "/";
  const mobileOpen = openMenuPath === currentKey;

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenuPath(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { href: localizedPath(locale, ""), label: dict.nav.home, exact: true },
    { href: localizedPath(locale, "/services"), label: dict.nav.services, exact: false },
    { href: localizedPath(locale, "/projects"), label: dict.nav.projects, exact: false },
    { href: localizedPath(locale, "/process"), label: dict.nav.process, exact: false },
    { href: localizedPath(locale, "/about"), label: dict.nav.about, exact: false },
    { href: localizedPath(locale, "/faq"), label: dict.nav.faq, exact: false },
    { href: localizedPath(locale, "/contact"), label: dict.nav.contact, exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (!pathname) return false;
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#050811]/88 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={localizedPath(locale, "")}
          className="rounded-lg py-1 focus-visible:outline-2"
        >
          <BrandMark />
        </Link>

        {/* Desktop Primary Navigation */}
        <nav
          aria-label={dict.a11y.mainNav}
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-900/90 text-white"
                    : "text-slate-300 hover:bg-slate-900/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Suspense fallback={<LanguageSwitcherFallback locale={locale} />}>
            <LanguageSwitcher locale={locale} />
          </Suspense>

          <Link
            href={localizedPath(locale, "/contact")}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.65)] transition hover:bg-blue-500"
          >
            <span>{dict.nav.startProject}</span>
            <DirectionalArrow className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <Suspense fallback={<LanguageSwitcherFallback locale={locale} />}>
            <LanguageSwitcher locale={locale} />
          </Suspense>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="gazanova-mobile-menu"
            aria-label={
              mobileOpen ? dict.a11y.mobileMenuClose : dict.a11y.mobileMenuOpen
            }
            onClick={() =>
              setOpenMenuPath((prev) => (prev === currentKey ? null : currentKey))
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 transition hover:border-blue-500/50 hover:text-white"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen ? (
        <div
          id="gazanova-mobile-menu"
          className="border-t border-slate-800/90 bg-[#070B16] px-4 pt-3 pb-6 shadow-2xl lg:hidden"
        >
          <nav aria-label={dict.a11y.mainNav} className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpenMenuPath(null)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition ${
                    active
                      ? "border border-blue-500/30 bg-blue-600/15 text-white"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {active ? (
                    <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-slate-800/80 pt-4">
            <Link
              href={localizedPath(locale, "/contact")}
              onClick={() => setOpenMenuPath(null)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.65)] transition hover:bg-blue-500"
            >
              <span>{dict.nav.startProject}</span>
              <DirectionalArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
