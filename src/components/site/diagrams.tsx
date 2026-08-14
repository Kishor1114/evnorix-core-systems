import { cn } from "@/lib/utils";

/**
 * Hero system visualisation — "Connected Business Systems".
 * Business workflow -> Application/Operations -> Data -> Connected systems -> Outcome
 */
export function HeroSystemDiagram({ className }: { className?: string }) {
  const lanes = [
    { y: 44, label: "Workflow", note: "Origination · Collections" },
    { y: 120, label: "Operations", note: "Tasks · Verification · Field" },
    { y: 196, label: "Data", note: "Repository · Sync · Mirror" },
  ];

  return (
    <div className={cn("panel relative overflow-hidden p-5 md:p-7", className)}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="meta-label flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-brand node-pulse" />
          System map
        </span>
        <span className="meta-label hidden sm:block">Workflow → Operations → Data → Outcome</span>
      </div>

      <svg
        viewBox="0 0 640 280"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram showing business workflow feeding operations, which write to data repositories, connecting through integration into measurable business outcomes."
      >
        <defs>
          <linearGradient id="hero-line" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.44 0.117 262)" />
            <stop offset="100%" stopColor="oklch(0.72 0.117 195)" />
          </linearGradient>
          <linearGradient id="hero-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.26 0.026 258)" />
            <stop offset="100%" stopColor="oklch(0.2 0.023 258)" />
          </linearGradient>
        </defs>

        {/* lanes */}
        {lanes.map((lane) => (
          <g key={lane.label}>
            <rect
              x="8"
              y={lane.y}
              width="182"
              height="56"
              rx="8"
              fill="url(#hero-card)"
              stroke="oklch(1 0 0 / 12%)"
            />
            <text
              x="24"
              y={lane.y + 24}
              fill="oklch(0.97 0.004 250)"
              fontSize="13"
              fontFamily="var(--font-display)"
              fontWeight="600"
            >
              {lane.label}
            </text>
            <text
              x="24"
              y={lane.y + 41}
              fill="oklch(0.7 0.017 254)"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              {lane.note}
            </text>

            {/* connector into the hub */}
            <path
              d={`M190 ${lane.y + 28} H250 Q272 ${lane.y + 28} 272 140`}
              fill="none"
              stroke="url(#hero-line)"
              strokeWidth="1.25"
              opacity="0.75"
            />
            <path
              d={`M190 ${lane.y + 28} H250 Q272 ${lane.y + 28} 272 140`}
              fill="none"
              stroke="oklch(0.83 0.084 192)"
              strokeWidth="1.5"
              className="flow-dash"
              opacity="0.9"
            />
            <circle cx="190" cy={lane.y + 28} r="3" fill="oklch(0.72 0.117 195)" className="node-pulse" />
          </g>
        ))}

        {/* integration hub */}
        <g>
          <rect
            x="272"
            y="96"
            width="128"
            height="88"
            rx="10"
            fill="url(#hero-card)"
            stroke="oklch(0.72 0.117 195 / 45%)"
          />
          <text
            x="336"
            y="130"
            textAnchor="middle"
            fill="oklch(0.97 0.004 250)"
            fontSize="13"
            fontFamily="var(--font-display)"
            fontWeight="600"
          >
            Integration
          </text>
          <text
            x="336"
            y="149"
            textAnchor="middle"
            fill="oklch(0.7 0.017 254)"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            connected systems
          </text>
          <text
            x="336"
            y="166"
            textAnchor="middle"
            fill="oklch(0.72 0.117 195)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            audited · monitored
          </text>
        </g>

        {/* hub to outcomes */}
        <path
          d="M400 140 H452"
          stroke="url(#hero-line)"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M400 140 H452" stroke="oklch(0.83 0.084 192)" strokeWidth="1.5" className="flow-dash" />

        {/* outcomes */}
        {[
          { y: 56, t: "Visibility" },
          { y: 118, t: "Reliability" },
          { y: 180, t: "Continuity" },
        ].map((o) => (
          <g key={o.t}>
            <path
              d={`M452 140 Q470 140 470 ${o.y + 18} H492`}
              fill="none"
              stroke="oklch(0.72 0.117 195 / 45%)"
              strokeWidth="1.25"
            />
            <rect
              x="492"
              y={o.y}
              width="140"
              height="36"
              rx="8"
              fill="url(#hero-card)"
              stroke="oklch(1 0 0 / 12%)"
            />
            <circle cx="510" cy={o.y + 18} r="3.5" fill="oklch(0.72 0.117 195)" />
            <text
              x="524"
              y={o.y + 22}
              fill="oklch(0.9 0.008 250)"
              fontSize="12"
              fontFamily="var(--font-sans)"
            >
              {o.t}
            </text>
          </g>
        ))}

        <circle cx="452" cy="140" r="4" fill="oklch(0.83 0.084 192)" className="node-pulse" />
      </svg>
    </div>
  );
}

/** Reusable step flow used by service pages and process sections. */
export function SystemFlow({
  steps,
  accentIndex,
  className,
}: {
  steps: { label: string; note: string }[];
  accentIndex?: number;
  className?: string;
}) {
  return (
    <ol className={cn("relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {steps.map((s, i) => {
        const active = accentIndex === i;
        return (
          <li
            key={s.label}
            className={cn(
              "group relative overflow-hidden rounded-lg border border-border bg-surface/60 p-4 transition-colors duration-300 hover:border-brand/50",
              active && "border-brand/60",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="meta-label text-brand/80">{String(i + 1).padStart(2, "0")}</span>
              <span aria-hidden className="rule-brand h-px flex-1 opacity-30" />
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-brand opacity-60 transition-opacity group-hover:opacity-100"
              />
            </div>
            <p className="mt-3 font-display text-[0.95rem] font-semibold">{s.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
          </li>
        );
      })}
    </ol>
  );
}

/** Compact per-service mini diagram used on the home service cards. */
export function MiniFlow({ nodes, variant }: { nodes: string[]; variant: 0 | 1 | 2 }) {
  return (
    <svg
      viewBox="0 0 260 88"
      className="h-auto w-full"
      role="img"
      aria-label={`Simplified flow: ${nodes.join(" then ")}`}
    >
      <defs>
        <linearGradient id={`mf-${variant}`} x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.44 0.117 262)" />
          <stop offset="100%" stopColor="oklch(0.72 0.117 195)" />
        </linearGradient>
      </defs>

      {variant === 0 && (
        <>
          <path d="M14 44 H246" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
          <path d="M14 44 H246" stroke={`url(#mf-0)`} strokeWidth="1.5" className="flow-dash" />
          {nodes.map((n, i) => {
            const x = 14 + (i * 232) / (nodes.length - 1);
            return (
              <g key={n}>
                <rect x={x - 6} y={32} width="12" height="24" rx="3" fill="oklch(0.26 0.026 258)" stroke="oklch(0.72 0.117 195 / 50%)" />
                <text x={x} y={72} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="oklch(0.7 0.017 254)">
                  {n}
                </text>
              </g>
            );
          })}
        </>
      )}

      {variant === 1 && (
        <>
          {nodes.map((n, i) => {
            const x = 20 + i * 60;
            const y = i % 2 === 0 ? 26 : 58;
            return (
              <g key={n}>
                {i < nodes.length - 1 && (
                  <path
                    d={`M${x + 8} ${y} L${x + 52} ${i % 2 === 0 ? 58 : 26}`}
                    stroke="oklch(0.72 0.117 195 / 55%)"
                    strokeWidth="1.25"
                    className="flow-dash"
                  />
                )}
                <circle cx={x} cy={y} r="7" fill="oklch(0.26 0.026 258)" stroke="oklch(0.72 0.117 195 / 60%)" />
                <circle cx={x} cy={y} r="2.5" fill="oklch(0.83 0.084 192)" />
                <text x={x} y={y === 26 ? 14 : 78} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="oklch(0.7 0.017 254)">
                  {n}
                </text>
              </g>
            );
          })}
        </>
      )}

      {variant === 2 && (
        <>
          <rect x="14" y="20" width="66" height="48" rx="6" fill="oklch(0.24 0.024 258)" stroke="oklch(1 0 0 / 12%)" />
          <rect x="180" y="8" width="66" height="34" rx="6" fill="oklch(0.24 0.024 258)" stroke="oklch(0.72 0.117 195 / 45%)" />
          <rect x="180" y="48" width="66" height="34" rx="6" fill="oklch(0.24 0.024 258)" stroke="oklch(0.72 0.117 195 / 45%)" />
          <path d="M80 44 H130 Q148 44 148 25 H180" fill="none" stroke="url(#mf-2)" strokeWidth="1.5" className="flow-dash" />
          <path d="M80 44 H130 Q148 44 148 65 H180" fill="none" stroke="url(#mf-2)" strokeWidth="1.5" className="flow-dash" />
          <text x="47" y="48" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="oklch(0.85 0.01 250)">
            {nodes[0]}
          </text>
          <text x="213" y="29" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="oklch(0.85 0.01 250)">
            {nodes[1]}
          </text>
          <text x="213" y="69" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="oklch(0.85 0.01 250)">
            {nodes[2]}
          </text>
          <circle cx="148" cy="44" r="3.5" fill="oklch(0.72 0.117 195)" className="node-pulse" />
        </>
      )}
    </svg>
  );
}
