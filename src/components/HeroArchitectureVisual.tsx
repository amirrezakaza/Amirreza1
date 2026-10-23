import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function HeroArchitectureVisual({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="relative rounded-2xl border border-slate-800/90 bg-gradient-to-b from-[#0C1426] to-[#070C18] p-5 sm:p-7 shadow-[0_24px_64px_-20px_rgba(2,6,23,0.95)]">
      {/* Subtle top accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent"
      />

      {/* Blueprint Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
          />
          <span className="font-mono-tech text-xs font-semibold tracking-wider text-blue-300">
            {dict.hero.visualTitle}
          </span>
        </div>
        <span className="font-mono-tech rounded border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-[11px] text-slate-400">
          GAZANOVA // ARCH
        </span>
      </div>

      {/* SVG Node Topology Header Graphic */}
      <div className="mt-5 rounded-xl border border-slate-800/75 bg-[#060A14] p-4">
        <svg
          viewBox="0 0 440 92"
          fill="none"
          role="img"
          aria-label={dict.hero.visualTitle}
          className="h-auto w-full"
        >
          <defs>
            <linearGradient id="gzLineGrad" x1="0" y1="0" x2="440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          {/* Precision grid lines */}
          <path
            d="M16 24H424M16 46H424M16 68H424"
            stroke="#1E293B"
            strokeWidth="0.75"
            strokeDasharray="3 5"
          />
          {/* Signal paths */}
          <path
            d="M48 46C108 46 116 22 172 22C228 22 236 68 292 68C344 68 352 46 396 46"
            stroke="url(#gzLineGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M48 46C110 46 122 68 172 68C222 68 238 22 292 22C342 22 354 46 396 46"
            stroke="#3B82F6"
            strokeOpacity="0.35"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Nodes */}
          <circle cx="48" cy="46" r="7" fill="#0F172A" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="48" cy="46" r="2.5" fill="#60A5FA" />

          <rect x="158" y="13" width="28" height="18" rx="4" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5" />
          <rect x="158" y="59" width="28" height="18" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />

          <rect x="278" y="13" width="28" height="18" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
          <rect x="278" y="59" width="28" height="18" rx="4" fill="#0F172A" stroke="#6366F1" strokeWidth="1.5" />

          <circle cx="396" cy="46" r="8" fill="#1D4ED8" fillOpacity="0.25" stroke="#60A5FA" strokeWidth="2" />
          <circle cx="396" cy="46" r="3" fill="#F8FAFC" />
        </svg>
      </div>

      {/* Layered Stack Cards */}
      <div className="mt-4 space-y-2.5">
        {dict.hero.visualLayers.map((layer, index) => (
          <div
            key={layer.code}
            className="flex flex-col gap-1 rounded-xl border border-slate-800/80 bg-slate-950/65 px-4 py-3 transition hover:border-blue-500/40"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono-tech text-[11px] font-semibold text-blue-400">
                {layer.code}
              </span>
              <span className="font-mono-tech text-[11px] text-slate-500">
                0{index + 1}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-100">{layer.name}</p>
            <p className="text-xs text-slate-400">{layer.spec}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        {dict.hero.visualCaption}
      </p>
    </div>
  );
}
