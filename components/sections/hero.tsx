"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { DashboardMock, DashboardMockSecondary } from "@/components/ui/dashboard-mock";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <div
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <HeroBackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-background/75 sm:bg-background/65" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent lg:via-background/55" />
      <div className="pointer-events-none absolute inset-0 gradient-mesh noise opacity-90" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="space-y-6 lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/90">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {hero.chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
            <a
              href={hero.pdfBrief.href}
              download={hero.pdfBrief.downloadName}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              {hero.pdfBrief.label}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm sm:aspect-[5/6]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />

            <div className="absolute inset-0 p-4 sm:p-6">
              <div className="flex h-full flex-col justify-end gap-4">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className="relative z-10"
                >
                  <DashboardMock />
                </motion.div>
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.55 }}
                  className="relative z-10 w-[88%] self-end sm:w-4/5"
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
