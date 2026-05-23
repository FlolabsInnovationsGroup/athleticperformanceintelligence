"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { DashboardMock, DashboardMockSecondary } from "@/components/ui/dashboard-mock";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { Copy } from "@/components/ui/copy";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <div
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32"
    >
      <HeroBackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-background/75 sm:bg-background/65" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent lg:via-background/55" />
      <div className="pointer-events-none absolute inset-0 gradient-mesh noise opacity-90" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[340px] w-[340px] rounded-full bg-accent/10 blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[280px] w-[280px] rounded-full bg-violet/10 blur-3xl sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="space-y-6 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/90">
            {hero.eyebrow}
          </p>
          <Copy
            as="h1"
            className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </Copy>
          <Copy
            as="p"
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subtitle}
          </Copy>
          <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
            {hero.chips.map((c) => (
              <Chip
                key={c}
                className="w-full justify-center px-3 py-1.5 text-center text-xs sm:px-4 sm:text-sm"
              >
                <Copy as="span">{c}</Copy>
              </Chip>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-3 md:gap-4">
            <Button
              href={hero.secondaryCta.href}
              variant="primary"
              className="w-full px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base"
            >
              {hero.secondaryCta.label}
            </Button>
            <a
              href={hero.pdfBrief.href}
              download={hero.pdfBrief.downloadName}
              className="inline-flex w-full items-center justify-center rounded-full border border-accent/40 bg-white/5 px-4 py-2.5 text-center text-sm font-medium leading-snug text-foreground/90 shadow-[0_0_0_1px_rgba(45,212,191,0.12)] transition-colors hover:border-accent/60 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] sm:px-5 sm:py-3 sm:text-base"
            >
              {hero.pdfBrief.label}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div
            className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm sm:rounded-[1.75rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />

            <div className="relative z-10 p-4 sm:p-6">
              <div className="grid content-start grid-rows-[auto_auto] gap-3 lg:gap-4">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className="relative z-10 w-full"
                >
                  <DashboardMock compact />
                </motion.div>
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.55 }}
                  className="relative z-10 w-[76%] self-end sm:w-[70%] lg:w-[58%]"
                >
                  <DashboardMockSecondary />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div
            className="pointer-events-none absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-3xl border border-white/10 bg-accent/10 blur-xl sm:block"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
