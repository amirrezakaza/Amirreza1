import Link from "next/link";
import { headers } from "next/headers";
import { BrandMark } from "@/components/BrandMark";
import {
  DEFAULT_LOCALE,
  isValidLocale,
  LOCALE_HEADER_NAME,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const headerStore = await headers();
  const rawLocale = headerStore.get(LOCALE_HEADER_NAME);
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <main className="bg-hero-atmosphere flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      <BrandMark />
      <p className="font-mono-tech mt-8 text-sm font-semibold tracking-widest text-blue-400">
        {dict.notFound.code}
      </p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
        {dict.notFound.description}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        {dict.notFound.backHome}
      </Link>
    </main>
  );
}
