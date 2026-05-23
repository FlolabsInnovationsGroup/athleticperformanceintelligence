import { Sparkles } from "lucide-react";
import { tiers } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { Button } from "@/components/ui/button";
import { Copy } from "@/components/ui/copy";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

export function TiersSection() {
  return (
    <SectionShell id="tiers" className="py-24 sm:py-28">
      <SectionHeader
        title={tiers.title}
        subtitle={tiers.subtitle}
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.items.map((tier, i) => (
          <MotionReveal key={tier.name} staggerIndex={i}>
            <article
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-8",
                tier.featured
                  ? "border-accent/35 bg-gradient-to-b from-accent/10 via-background to-background shadow-[0_0_0_1px_rgba(45,212,191,0.12)]"
                  : "border-white/10 bg-white/[0.02]",
              )}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {tier.name}
              </p>
              {tier.featured ? (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Most adopted
                </div>
              ) : null}

              <Copy
                as="h3"
                className="font-display text-2xl font-semibold text-foreground"
              >
                {tier.label}
              </Copy>
              <Copy
                as="p"
                className="mt-3 text-sm leading-relaxed text-muted"
              >
                {tier.description}
              </Copy>

              <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6 text-sm text-foreground/85">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    <Copy as="span">{h}</Copy>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="#cta" variant={tier.featured ? "primary" : "secondary"} className="w-full">
                  Explore this tier
                </Button>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
