import { howItWorks } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { Copy } from "@/components/ui/copy";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

export function HowItWorksSection() {
  return (
    <SectionShell id="how" className="py-24 sm:py-28">
      <SectionHeader
        title={howItWorks.title}
        subtitle={howItWorks.subtitle}
        align="center"
      />

      <div className="relative mx-auto max-w-4xl">
        <div
          className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent sm:left-5"
          aria-hidden
        />

        <ol className="space-y-10">
          {howItWorks.steps.map((step, i) => (
            <MotionReveal key={step.title} staggerIndex={i}>
              <li className="relative flex gap-5 sm:gap-7">
                <div
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-background text-sm font-semibold text-accent shadow-[0_0_0_6px_rgba(5,8,20,1)]"
                  aria-hidden
                >
                  {i + 1}
                </div>
                <div className="min-w-0 pt-0.5">
                  <Copy
                    as="h3"
                    className="font-display text-lg font-semibold text-foreground"
                  >
                    {step.title}
                  </Copy>
                  <Copy
                    as="p"
                    className="mt-2 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {step.body}
                  </Copy>
                </div>
              </li>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
