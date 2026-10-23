import type { ServiceIconKey } from "@/data/services";

export function DirectionalArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`${className} rtl:-scale-x-100 transition-transform`}
    >
      <path
        d="M4.5 10H15.5M15.5 10L10.75 5.25M15.5 10L10.75 14.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.5 10.5L8.25 14.25L15.75 6.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LanguageGlobeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.1 10H16.9M10 2.75C11.9 4.75 12.95 7.3 12.95 10C12.95 12.7 11.9 15.25 10 17.25C8.1 15.25 7.05 12.7 7.05 10C7.05 7.3 8.1 4.75 10 2.75Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServiceIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: ServiceIconKey;
  className?: string;
}) {
  switch (icon) {
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3.8 12H20.2M12 3.5C14.3 5.9 15.6 8.85 15.6 12C15.6 15.15 14.3 18.1 12 20.5C9.7 18.1 8.4 15.15 8.4 12C8.4 8.85 9.7 5.9 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 4L20.5 8.5L12 13L3.5 8.5L12 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12.5L12 17L20.5 12.5M3.5 16.5L12 21L20.5 16.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect
            x="6.5"
            y="3"
            width="11"
            height="18"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10.5 17.8H13.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 3.5L14.1 9.4L20 11.5L14.1 13.6L12 19.5L9.9 13.6L4 11.5L9.9 9.4L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 4V7M17.5 5.5H20.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M5 6.5C5 5.4 5.9 4.5 7 4.5H17C18.1 4.5 19 5.4 19 6.5V14.5C19 15.6 18.1 16.5 17 16.5H9.5L5 20V6.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9.5H15.5M8.5 12.5H13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bot":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect
            x="4.5"
            y="7.5"
            width="15"
            height="12"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 4V7.5M9.5 13H9.51M14.5 13H14.51M9.5 16.2H14.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M8 8L4 12L8 16M16 8L20 12L16 16M13.5 5.5L10.5 18.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect
            x="3.5"
            y="4.5"
            width="17"
            height="15"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3.5 9.5H20.5M9.5 9.5V19.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect
            x="3"
            y="7.5"
            width="18"
            height="10"
            rx="4.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 11V14M7 12.5H10M15 11.5H15.01M17 13.5H17.01"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 3.5L19 6.5V12C19 16.4 16 19.7 12 21C8 19.7 5 16.4 5 12V6.5L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12.2L11.1 14.1L15 10.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
