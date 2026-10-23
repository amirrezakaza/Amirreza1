import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary, PROJECT_TYPES } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolved: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(resolved);

  return buildPageMetadata({
    locale: resolved,
    routePath: "/contact",
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  });
}

function getVerifiedContactChannels() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "";
  const isReal = (v: string) =>
    Boolean(v) && !v.toLowerCase().includes("example.com");

  return {
    email: isReal(email) ? email : null,
    telegram: isReal(telegram) ? telegram : null,
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const resolvedSearch = await searchParams;
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const copy = dict.contactPage;
  const channels = getVerifiedContactChannels();

  return (
    <div className="bg-hero-atmosphere">
      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Project Inquiry Form */}
          <div className="lg:col-span-8">
            <ProjectInquiryForm
              locale={locale}
              initialProjectType={resolvedSearch?.type}
            />
          </div>

          {/* Right/End Sidebar: Next Steps, Service Categories & Privacy Notice */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Next Steps */}
            <div className="surface-card rounded-2xl p-6 sm:p-7">
              <h2 className="text-lg font-bold text-white">
                {copy.nextStepsTitle}
              </h2>
              <ol className="mt-5 space-y-5">
                {copy.nextSteps.map((step) => (
                  <li key={step.step} className="flex items-start gap-3.5">
                    <span className="font-mono-tech inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-blue-500/35 bg-blue-950/40 text-xs font-bold text-blue-300">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Supported Service Categories */}
            <div className="surface-card rounded-2xl p-6 sm:p-7">
              <h2 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
                {copy.form.projectTypeLabel}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {PROJECT_TYPES.map((typeKey) => (
                  <span
                    key={typeKey}
                    className="rounded-md border border-slate-800 bg-[#060B16] px-2.5 py-1 text-xs text-slate-300"
                  >
                    {copy.form.projectTypes[typeKey]}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Business Contact Info (only rendered when configured) */}
            <div className="surface-card rounded-2xl p-6 sm:p-7">
              <h2 className="text-base font-bold text-white">
                {copy.verifiedContactTitle}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {copy.directFormNote}
              </p>

              {channels.email || channels.telegram ? (
                <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-4 text-sm">
                  {channels.email ? (
                    <p>
                      <a
                        href={`mailto:${channels.email}`}
                        dir="ltr"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {channels.email}
                      </a>
                    </p>
                  ) : null}
                  {channels.telegram ? (
                    <p>
                      <a
                        href={channels.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Telegram
                      </a>
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Privacy Notice */}
            <div className="rounded-2xl border border-slate-800/90 bg-[#070C18] p-6">
              <h2 className="text-sm font-semibold text-slate-200">
                {copy.privacyTitle}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {copy.privacyBody}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
