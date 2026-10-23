import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { BrandMark } from "./BrandMark";
import { DirectionalArrow } from "./Icons";

function getVerifiedPublicChannels() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "";
  const github = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "";

  const isReal = (v: string) =>
    Boolean(v) && !v.toLowerCase().includes("example.com");

  return {
    email: isReal(email) ? email : null,
    telegram: isReal(telegram) ? telegram : null,
    github: isReal(github) ? github : null,
    linkedin: isReal(linkedin) ? linkedin : null,
  };
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const channels = getVerifiedPublicChannels();
  const hasAnyChannel = Boolean(
    channels.email || channels.telegram || channels.github || channels.linkedin
  );

  const studioLinks = [
    { href: localizedPath(locale, ""), label: dict.nav.home },
    { href: localizedPath(locale, "/services"), label: dict.nav.services },
    { href: localizedPath(locale, "/projects"), label: dict.nav.projects },
    { href: localizedPath(locale, "/process"), label: dict.nav.process },
    { href: localizedPath(locale, "/about"), label: dict.nav.about },
    { href: localizedPath(locale, "/faq"), label: dict.nav.faq },
    { href: localizedPath(locale, "/contact"), label: dict.nav.contact },
  ];

  const featuredServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer className="border-t border-slate-800/80 bg-[#04070F]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href={localizedPath(locale, "")} className="inline-block">
              <BrandMark />
            </Link>
            <p className="mt-4 text-sm font-semibold text-blue-400">
              {dict.footer.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {dict.footer.description}
            </p>

            {hasAnyChannel ? (
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                {channels.email ? (
                  <a
                    href={`mailto:${channels.email}`}
                    className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 hover:border-blue-500/40 hover:text-white"
                  >
                    {channels.email}
                  </a>
                ) : null}
                {channels.github ? (
                  <a
                    href={channels.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 hover:border-blue-500/40 hover:text-white"
                  >
                    GitHub
                  </a>
                ) : null}
                {channels.linkedin ? (
                  <a
                    href={channels.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 hover:border-blue-500/40 hover:text-white"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {channels.telegram ? (
                  <a
                    href={channels.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5 hover:border-blue-500/40 hover:text-white"
                  >
                    Telegram
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              {dict.footer.navigationHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              {dict.footer.capabilitiesHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`${localizedPath(locale, "/services")}#${service.slug}`}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {service.content[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion Column */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
              {dict.footer.inquiriesHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {dict.footer.inquiriesText}
            </p>
            <div className="mt-5">
              <Link
                href={localizedPath(locale, "/contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-600/15 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-600 hover:text-white"
              >
                <span>{dict.footer.startConversation}</span>
                <DirectionalArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/70 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>{dict.footer.copyright}</p>
          <p>{dict.footer.honestyNote}</p>
        </div>
      </div>
    </footer>
  );
}
