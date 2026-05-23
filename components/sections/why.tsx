import { Building2, Cpu, Headphones, Layers3 } from "lucide-react";
import { whyUs } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { Copy } from "@/components/ui/copy";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

const icons = [Layers3, Cpu, Headphones, Building2];

export function WhySection() {
  return (
    <SectionShell id="why" className="py-24 sm:py-28">
      <SectionHeader
        title={whyUs.title}
        subtitle={whyUs.subtitle}
        align="center"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {whyUs.items.map((item, i) => {
          const Icon = icons[i] ?? Layers3;
          return (
            <MotionReveal key={item.title} staggerIndex={i}>
              <div className="glass flex gap-4 rounded-2xl p-6 transition-colors hover:border-white/15">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <Copy
                    as="h3"
                    className="font-display text-lg font-semibold text-foreground"
                  >
                    {item.title}
                  </Copy>
                  <Copy
                    as="p"
                    className="mt-2 text-sm leading-relaxed text-muted"
                  >
                    {item.body}
                  </Copy>
                </div>
              </div>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
