interface BrandMarkProps {
  showTag?: boolean;
  tagText?: string;
}

export function BrandMark({ showTag = false, tagText }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-600/25 via-slate-900 to-indigo-950 shadow-[0_0_24px_rgba(37,99,235,0.22)]"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-5 w-5 text-blue-400"
        >
          <path
            d="M16 3.5L27 9.8V22.2L16 28.5L5 22.2V9.8L16 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 11.5H13.2L10.5 16L13.2 20.5H19.5V16.2H15.8"
            stroke="#F8FAFC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="21.5" cy="11.5" r="1.5" fill="#60A5FA" />
        </svg>
      </span>
      <span className="flex flex-col text-start">
        <span className="text-base font-bold tracking-[0.16em] text-slate-50">
          GAZANOVA
        </span>
        {showTag && tagText ? (
          <span className="text-[11px] font-medium text-slate-400">
            {tagText}
          </span>
        ) : null}
      </span>
    </span>
  );
}
