import type { ProjectItem } from "@/data/projects";

interface ProjectBlueprintDiagramProps {
  variant: ProjectItem["visualVariant"];
  nodes: [string, string, string, string];
  alt: string;
  compact?: boolean;
}

export function ProjectBlueprintDiagram({
  variant,
  nodes,
  alt,
  compact = false,
}: ProjectBlueprintDiagramProps) {
  const accentColor =
    variant === "rag" || variant === "simulation"
      ? "#60A5FA"
      : variant === "bot" || variant === "gateway"
        ? "#38BDF8"
        : "#818CF8";

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-800/90 bg-[#060B16] ${
        compact ? "p-4" : "p-6 sm:p-8"
      }`}
    >
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative z-10">
        {/* Top schematic bar */}
        <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-mono-tech uppercase tracking-wider text-blue-400">
            SYS::{variant.toUpperCase()}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono-tech">BLUEPRINT</span>
          </span>
        </div>

        {/* Geometric SVG Topology */}
        <svg
          viewBox="0 0 400 74"
          fill="none"
          role="img"
          aria-label={alt}
          className="mb-4 h-auto w-full"
        >
          <path
            d="M32 37H368"
            stroke="#1E293B"
            strokeWidth="2"
          />
          <path
            d="M32 37C95 37 115 16 165 16C215 16 235 58 285 58C325 58 340 37 368 37"
            stroke={accentColor}
            strokeWidth="1.75"
            strokeOpacity="0.85"
          />
          {[44, 148, 252, 356].map((cx, i) => (
            <g key={cx}>
              <rect
                x={cx - 16}
                y={23}
                width="32"
                height="28"
                rx="6"
                fill="#0B1324"
                stroke={i === 0 || i === 3 ? accentColor : "#334155"}
                strokeWidth="1.5"
              />
              <circle
                cx={cx}
                cy={37}
                r="3.2"
                fill={i % 2 === 0 ? accentColor : "#E2E8F0"}
              />
            </g>
          ))}
        </svg>

        {/* Localized Architecture Flow Nodes */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {nodes.map((nodeLabel, idx) => (
            <div
              key={nodeLabel}
              className="rounded-lg border border-slate-800/90 bg-slate-950/85 px-2.5 py-2 text-start"
            >
              <span className="font-mono-tech block text-[10px] text-blue-400">
                0{idx + 1}
              </span>
              <span className="mt-0.5 block text-xs font-medium text-slate-200 leading-snug">
                {nodeLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
