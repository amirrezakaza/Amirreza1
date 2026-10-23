import Link from "next/link";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { DirectionalArrow } from "./Icons";

export function CtaBanner({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0B152C] via-[#091022] to-[#11122C] px-6 py-12 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 end-0 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
              {dict.ctaBanner.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {dict.ctaBanner.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {dict.ctaBanner.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-6px_rgba(37,99,235,0.7)] transition hover:bg-blue-500"
            >
              <span>{dict.ctaBanner.primaryButton}</span>
              <DirectionalArrow className="h-4 w-4" />
            </Link>

            <Link
              href={localizedPath(locale, "/faq")}
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              {dict.ctaBanner.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
