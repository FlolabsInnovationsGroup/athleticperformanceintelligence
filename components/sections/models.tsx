import { MotionReveal } from "@/components/motion/motion-reveal";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { models } from "@/data/site-content";

export function ModelsSection() {
  return (
    <SectionShell id="models" className="py-24 sm:py-28">
      <SectionHeader
        title={models.title}
        subtitle={models.subtitle}
        align="center"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.items.map((m, i) => (
          <MotionReveal key={m.name} staggerIndex={i}>
            <article className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-colors hover:border-accent/25">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">
                Model
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{m.description}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
