import { cn } from "@/lib/utils";

export function DashboardMock({
  className,
  compact = false,
  previewOnly = false,
}: {
  className?: string;
  compact?: boolean;
  previewOnly?: boolean;
}) {
  const preview = previewOnly;
  const days = [
    { day: "Mon", hrv: 58, sleep: 70, risk: 24, training: 28 },
    { day: "Tue", hrv: 62, sleep: 68, risk: 30, training: 35 },
    { day: "Wed", hrv: 56, sleep: 72, risk: 36, training: 42 },
    { day: "Thu", hrv: 60, sleep: 69, risk: 28, training: 31 },
    { day: "Fri", hrv: 63, sleep: 71, risk: 20, training: 25 },
    { day: "Sat", hrv: 57, sleep: 68, risk: 32, training: 39 },
    { day: "Sun", hrv: 59, sleep: 70, risk: 26, training: 33 },
  ];
  const chartWidth = 700;
  const chartHeight = 180;
  const columnWidth = chartWidth / days.length;
  const lineYMin = 18;
  const lineYMax = 148;

  function pointX(index: number) {
    return index * columnWidth + columnWidth / 2;
  }

  function pointY(training: number) {
    const ratio = 1 - training / 100;
    return lineYMin + ratio * (lineYMax - lineYMin);
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/12 bg-[#06161b]/95 shadow-2xl",
        preview ? "p-1.5 sm:p-2" : "p-2.5 sm:p-3",
        compact ? "h-auto" : "h-full",
        className,
      )}
      aria-hidden
    >
      <div className={cn("rounded-xl border border-emerald-200/10 bg-[#041319]/90", compact ? "h-auto" : "h-full")}>
        <div>
          <div className={cn("flex items-center justify-between border-b border-white/8", preview ? "px-2 py-1.5" : "px-2.5 py-2")}>
            <p className={cn("font-semibold text-foreground/90", preview ? "text-[8px] sm:text-[9px]" : "text-[10px]")}>
              Athlete Report - Alex Thompson
            </p>
            <div className={cn("flex flex-wrap items-center justify-end", preview ? "gap-1 text-[7px] sm:text-[8px]" : "gap-1.5 text-[9px]")}>
              <span className={cn("rounded-md border border-white/15 bg-white/[0.02] text-foreground/85", preview ? "px-1.5 py-0.5" : "px-2 py-1")}>
                7 days
              </span>
              <span className={cn("rounded-md border border-white/15 bg-white/[0.02] text-muted", preview ? "px-1.5 py-0.5" : "px-2 py-1")}>
                30 days
              </span>
              <span className={cn("rounded-md border border-accent/35 bg-accent/12 text-accent", preview ? "px-1.5 py-0.5" : "px-2 py-1")}>
                Live
              </span>
            </div>
          </div>

          <div className={cn("grid grid-cols-2 gap-0 border-b border-white/8 sm:grid-cols-4", preview ? "text-[7px] sm:text-[8px]" : "text-[8px]")}>
            <div className={cn(preview ? "px-2 py-1.5" : "px-2.5 py-2")}>
              <p className="uppercase tracking-wide text-muted">Readiness score</p>
              <p className={cn("font-semibold text-gold", preview ? "mt-1 text-lg sm:text-xl" : "mt-1.5 text-xl")}>78</p>
              <p className="text-muted">Confident, moderate load</p>
            </div>
            <div className={cn("border-l border-white/8", preview ? "px-2 py-1.5" : "px-2.5 py-2")}>
              <p className="uppercase tracking-wide text-muted">HRV trend</p>
              <p className={cn("font-semibold text-amber-300", preview ? "mt-1 text-lg sm:text-xl" : "mt-1.5 text-xl")}>Moderate</p>
              <p className="text-muted">Monitor training load</p>
            </div>
            <div className={cn("border-t border-white/8 sm:border-t-0 sm:border-l", preview ? "px-2 py-1.5" : "px-2.5 py-2")}>
              <p className="uppercase tracking-wide text-muted">Recovery level</p>
              <p className={cn("font-semibold text-amber-300", preview ? "mt-1 text-lg sm:text-xl" : "mt-1.5 text-xl")}>Moderate</p>
              <p className="text-muted">Muscle fatigue</p>
            </div>
            <div className={cn("border-l border-t border-white/8 sm:border-t-0", preview ? "px-2 py-1.5" : "px-2.5 py-2")}>
              <p className="uppercase tracking-wide text-muted">Injury risk</p>
              <p className={cn("font-semibold text-accent", preview ? "mt-1 text-lg sm:text-xl" : "mt-1.5 text-xl")}>Low</p>
              <p className="text-muted">Optimize sleep and stress</p>
            </div>
          </div>

          {!previewOnly ? (
            <>
              <div className="border-b border-white/8 px-2.5 pt-1.5">
                <div className="flex items-center gap-4 text-[9px]">
                  <span className="border-b border-accent pb-1 font-medium text-accent">Overview</span>
                  <span className="pb-1 text-muted">Squad view</span>
                </div>
              </div>

              <div className="px-2.5 pt-1.5">
            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-muted">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-[2px] bg-emerald-400/80" />
                HRV
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-[2px] bg-sky-400/80" />
                Sleep score
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-[2px] bg-amber-300/85" />
                Training load
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-[2px] bg-rose-400/75" />
                Risk level
              </span>
            </div>

            <div className="relative h-32 rounded-lg border border-white/7 bg-black/20 p-2 sm:h-36">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-full w-full" preserveAspectRatio="none">
                {[36, 72, 108, 144].map((y) => (
                  <line
                    key={`row-${y}`}
                    x1="0"
                    y1={y}
                    x2={chartWidth}
                    y2={y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {days.map((_, i) => (
                  <line
                    key={`col-${i}`}
                    x1={i * columnWidth}
                    y1="0"
                    x2={i * columnWidth}
                    y2={chartHeight}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                ))}
                {days.map((item, i) => {
                  const x = pointX(i);
                  const barW = 20;
                  const gap = 4;
                  return (
                    <g key={`bars-${item.day}`}>
                      <rect
                        x={x - barW - gap}
                        y={lineYMax - (item.hrv / 100) * (lineYMax - 8)}
                        width={barW}
                        height={(item.hrv / 100) * (lineYMax - 8)}
                        rx="2"
                        fill="rgba(52,211,153,0.18)"
                        stroke="rgba(110,231,183,0.75)"
                      />
                      <rect
                        x={x}
                        y={lineYMax - (item.sleep / 100) * (lineYMax - 8)}
                        width={barW}
                        height={(item.sleep / 100) * (lineYMax - 8)}
                        rx="2"
                        fill="rgba(56,189,248,0.18)"
                        stroke="rgba(125,211,252,0.75)"
                      />
                      <rect
                        x={x + barW + gap}
                        y={lineYMax - (item.risk / 100) * (lineYMax - 8)}
                        width={barW}
                        height={(item.risk / 100) * (lineYMax - 8)}
                        rx="2"
                        fill="rgba(251,113,133,0.22)"
                        stroke="rgba(253,164,175,0.55)"
                      />
                    </g>
                  );
                })}
                <polyline
                  points={days.map((value, i) => `${pointX(i)},${pointY(value.training)}`).join(" ")}
                  fill="none"
                  stroke="rgba(245, 158, 11, 0.95)"
                  strokeWidth="2"
                />
                {days.map((value, i) => (
                  <circle
                    key={`pt-${value.day}`}
                    cx={pointX(i)}
                    cy={pointY(value.training)}
                    r="3"
                    fill="rgba(245, 158, 11, 0.98)"
                  />
                ))}
              </svg>
            </div>

            <div className="grid grid-cols-7 px-1 pt-1.5 text-center text-[8px] uppercase tracking-wide text-muted">
              {days.map((item) => (
                <span key={`label-${item.day}`}>{item.day}</span>
              ))}
            </div>
              </div>

              {!compact ? (
                <div className="mt-1.5 grid grid-cols-1 gap-0 border-t border-white/8 text-[8px] sm:grid-cols-3">
                  <div className="px-2.5 py-2">
                    <p className="uppercase tracking-wide text-muted">Main Cause</p>
                    <p className="mt-1 font-medium text-foreground/90">Muscle fatigue - recent training</p>
                    <p className="text-muted">Post-session soreness trend</p>
                  </div>
                  <div className="border-t border-white/8 px-2.5 py-2 sm:border-l sm:border-t-0">
                    <p className="uppercase tracking-wide text-muted">Condition</p>
                    <p className="mt-1 font-medium text-foreground/90">Monitor training load</p>
                    <p className="text-muted">Reduce load 1-3 days</p>
                  </div>
                  <div className="border-t border-white/8 px-2.5 py-2 sm:border-l sm:border-t-0">
                    <p className="uppercase tracking-wide text-muted">Risk Classification</p>
                    <p className="mt-1 inline-block rounded-md bg-gold/20 px-1.5 py-0.5 font-medium text-gold">
                      Low
                    </p>
                    <p className="mt-1 text-muted">Optimize sleep and stress management</p>
                  </div>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function DashboardMockSecondary({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-slate-950/85 p-3 shadow-xl backdrop-blur-md",
        className,
      )}
      aria-hidden
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] text-muted">Signal snapshot</span>
        <span className="text-[9px] text-accent">Demo values</span>
      </div>
      <div className="grid grid-cols-1 gap-2 text-[9px] sm:grid-cols-3">
        <div className="rounded-md border border-white/8 bg-white/[0.03] p-2.5">
          <p className="text-muted">HRV</p>
          <p className="mt-1 text-base font-semibold text-accent">59 ms</p>
          <p className="text-muted">Weekly avg</p>
        </div>
        <div className="rounded-md border border-white/8 bg-white/[0.03] p-2.5">
          <p className="text-muted">Sleep score</p>
          <p className="mt-1 text-base font-semibold text-sky-300">70%</p>
          <p className="text-muted">Weekly avg</p>
        </div>
        <div className="rounded-md border border-white/8 bg-white/[0.03] p-2.5">
          <p className="text-muted">Training load</p>
          <p className="mt-1 text-base font-semibold text-amber-300">33</p>
          <p className="text-muted">Moderate</p>
        </div>
      </div>
    </div>
  );
}
