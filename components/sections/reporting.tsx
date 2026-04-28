import Image from "next/image";
import { reporting, media } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { DashboardMock } from "@/components/ui/dashboard-mock";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";

export function ReportingSection() {
  return (
    <SectionShell id="reporting" className="py-24 sm:py-28">
      <SectionHeader
        title={reporting.title}
        subtitle={reporting.subtitle}
        align="center"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {reporting.perspectives.map((p, i) => (
          <MotionReveal key={p.title} staggerIndex={i}>
            <div className="glass flex h-full flex-col gap-5 rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs font-medium text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal className="mt-12">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
          <div className="relative aspect-[21/9] min-h-[240px]">
            <Image
              src={media.reporting.src}
              alt={media.reporting.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full max-w-md flex-col justify-center gap-4 p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Operational clarity
              </p>
              <p className="font-display text-2xl font-semibold leading-tight text-foreground">
                Dashboard surfaces tuned for decisions, not distraction.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 hidden w-[min(100%,380px)] sm:block lg:bottom-8 lg:right-8">
              <DashboardMock className="shadow-2xl" />
            </div>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
