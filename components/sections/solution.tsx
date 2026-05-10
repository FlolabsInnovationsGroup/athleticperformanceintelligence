import Image from "next/image";
import { Check } from "lucide-react";
import { media, solution, brand } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

export function SolutionSection() {
  return (
    <SectionShell id="solution" className="py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow={solution.lead}
            title={solution.title}
            subtitle={solution.body.join(" ")}
          />
          <ul className="mt-8 space-y-4">
            {solution.bullets.map((b, i) => (
              <MotionReveal key={b} staggerIndex={i}>
                <li className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {b}
                  </span>
                </li>
              </MotionReveal>
            ))}
          </ul>
        </div>

        <MotionReveal className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5]">
              <Image
                src={media.solution.src}
                alt={media.solution.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {brand.brain}
                </p>
                <p className="mt-2 max-w-sm text-sm text-foreground/90">
                  Structured models, unified reporting, and an adoption path that
                  respects how your organization works today.
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
