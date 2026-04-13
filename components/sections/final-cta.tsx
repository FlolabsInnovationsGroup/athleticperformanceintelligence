"use client";

import { FormEvent, useState } from "react";
import { cta } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionShell id="cta" className="py-24 sm:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/10 via-background to-background px-6 py-12 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_50%)]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Enterprise next step
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {cta.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={cta.primary.href} variant="primary">
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="secondary">
                {cta.secondary.label}
              </Button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-medium text-muted">
                  Name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={cta.form.namePlaceholder}
                    className={cn(
                      "mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60",
                      "focus-visible:border-accent/50 focus-visible:outline-none",
                    )}
                  />
                </label>
                <label className="block text-xs font-medium text-muted">
                  Organization
                  <input
                    name="organization"
                    required
                    autoComplete="organization"
                    placeholder={cta.form.orgPlaceholder}
                    className={cn(
                      "mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60",
                      "focus-visible:border-accent/50 focus-visible:outline-none",
                    )}
                  />
                </label>
              </div>
              <label className="block text-xs font-medium text-muted">
                Work email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={cta.form.emailPlaceholder}
                  className={cn(
                    "mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60",
                    "focus-visible:border-accent/50 focus-visible:outline-none",
                  )}
                />
              </label>
              <label className="block text-xs font-medium text-muted">
                Context
                <textarea
                  name="note"
                  rows={4}
                  placeholder={cta.form.notePlaceholder}
                  className={cn(
                    "mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60",
                    "focus-visible:border-accent/50 focus-visible:outline-none",
                  )}
                />
              </label>
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                {cta.form.submit}
              </Button>
              {submitted ? (
                <p className="text-sm text-accent" role="status">
                  Thanks — this demo form captured your submission locally. Connect it
                  to your backend when ready.
                </p>
              ) : (
                <p className="text-xs leading-relaxed text-muted">
                  {cta.form.disclaimer}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
