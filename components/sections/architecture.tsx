import { ArrowRight, Cpu, Radio } from "lucide-react";
import { architecture } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

export function ArchitectureSection() {
  return (
    <SectionShell id="architecture" className="py-24 sm:py-28">
      <SectionHeader
        title={architecture.title}
        subtitle={architecture.subtitle}
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <MotionReveal>
          <div className="glass flex h-full flex-col gap-4 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-accent">
                <Cpu className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {architecture.withoutWearables.title}
              </h3>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              {architecture.withoutWearables.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>

        <MotionReveal className="lg:min-w-[260px]">
          <div className="relative flex h-full min-h-[200px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-violet/25 bg-gradient-to-b from-violet/15 to-background p-8 text-center lg:min-h-full">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(167,139,250,0.25),transparent_55%)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet/90">
              {architecture.center.subtitle}
            </p>
            <p className="font-display text-3xl font-semibold text-foreground">
              {architecture.center.title}
            </p>
            <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="max-w-xs text-xs leading-relaxed text-muted">
              Unified intelligence, reporting, and governance, regardless of
              where your signals originate.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal>
          <div className="glass flex h-full flex-col gap-4 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-gold">
                <Radio className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {architecture.withWearables.title}
              </h3>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              {architecture.withWearables.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
