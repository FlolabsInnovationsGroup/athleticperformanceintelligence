import Image from "next/image";
import { AlertTriangle, Layers, Split, Workflow } from "lucide-react";
import { media, problem } from "@/data/site-content";
import { MotionReveal } from "@/components/motion/motion-reveal";
import { Copy } from "@/components/ui/copy";
import { SectionHeader, SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

const icons = [Layers, AlertTriangle, Workflow, Split];

export function ProblemSection() {
  return (
    <SectionShell id="problem" className="py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <MotionReveal className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5]">
            <Image
              src={media.problem.src}
              alt={media.problem.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/20 to-transparent" />
          </div>
        </MotionReveal>

        <div>
          <SectionHeader title={problem.title} subtitle={problem.description} />
          <div className="grid gap-4 sm:grid-cols-2">
            {problem.items.map((item, i) => {
              const Icon = icons[i] ?? Layers;
              return (
                <MotionReveal key={item.title} staggerIndex={i} className="h-full">
                  <article
                    className={cn(
                      "glass flex h-full flex-col gap-3 rounded-2xl p-5 transition-colors hover:border-white/15",
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <Copy
                      as="h3"
                      className="font-display text-lg font-semibold text-foreground"
                    >
                      {item.title}
                    </Copy>
                    <Copy
                      as="p"
                      className="text-sm leading-relaxed text-muted"
                    >
                      {item.body}
                    </Copy>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
