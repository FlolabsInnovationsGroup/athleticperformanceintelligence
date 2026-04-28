import { cn } from "@/lib/utils";

/** Abstract UI composition, decorative, no fabricated metrics. */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950 p-4 shadow-2xl",
        className,
      )}
      aria-hidden
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <div className="h-1.5 w-24 rounded-full bg-white/10" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 space-y-2 rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
              Intelligence surface
            </span>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent">
              Live
            </span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="flex items-end gap-1.5">
              {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent/80"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="h-px w-full bg-white/10" />
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                <div className="h-1.5 w-full rounded-full bg-white/5" />
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                <div className="h-1.5 w-full rounded-full bg-white/5" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border border-white/5 bg-violet/10 p-2">
            <p className="text-[9px] font-medium uppercase tracking-wide text-violet/90">
              FloBrain
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1 rounded-full bg-white/15" />
              <div className="h-1 rounded-full bg-white/10" />
              <div className="h-1 w-4/5 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="rounded-xl border border-gold/20 bg-gold/5 p-2">
            <p className="text-[9px] font-medium uppercase tracking-wide text-gold">
              Context layer
            </p>
            <div className="mt-2 h-12 rounded-lg border border-white/5 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockSecondary({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-slate-950/80 p-3 shadow-xl backdrop-blur-md",
        className,
      )}
      aria-hidden
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] text-muted">Squad overview</span>
        <span className="h-1.5 w-10 rounded-full bg-accent/40" />
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1.5"
          >
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
            <div className="flex-1 space-y-1">
              <div className="h-1 w-24 rounded-full bg-white/15" />
              <div className="h-1 w-16 rounded-full bg-white/5" />
            </div>
            <div className="h-6 w-10 rounded-md bg-white/5" />
          </div>
        ))}
      </div>
    </div>
  );
}
