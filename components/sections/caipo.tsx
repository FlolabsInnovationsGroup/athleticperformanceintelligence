import Image from "next/image";
import { caipo, media } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { Button } from "@/components/ui/button";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

export function CaipoSection() {
  return (
    <SectionShell id="caipo" className="py-24 sm:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-background to-violet/10">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet/15 blur-3xl" />

        <div className="grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-14 lg:py-16">
          <MotionReveal>
            <SectionHeader
              eyebrow="Ecosystem"
              title={caipo.title}
              subtitle={caipo.subtitle}
            />
            <ul className="mt-8 space-y-4">
              {caipo.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#cta" variant="primary">
                Request a walkthrough
              </Button>
              <Button href="#architecture" variant="ghost">
                View architecture
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl sm:aspect-video lg:aspect-[5/6]">
              <Image
                src={media.caipo.src}
                alt={media.caipo.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(60%,14rem)] bg-gradient-to-t from-background/95 via-background/45 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm font-semibold text-foreground">
                  Companion layer
                </p>
                <p className="mt-1 text-xs text-muted">
                  Designed for flexible hardware strategies, not single-vendor lock-in.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
