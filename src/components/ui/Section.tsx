import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import {
  getSectionBackgroundScrimClass,
  sectionEyebrowOnSurfaceClass,
  type SectionBackgroundScrim,
} from "@/components/ui/sectionBackgroundScrim";

type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  backgroundImage?: string;
  backgroundScrim?: SectionBackgroundScrim;
  backgroundSize?: "cover" | "contain";
  backgroundOpacity?: number;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  backgroundImage,
  backgroundScrim = "default",
  backgroundSize = "cover",
  backgroundOpacity = 1,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      data-has-bg={backgroundImage ? "true" : "false"}
      className={`relative scroll-mt-24 border-b border-card-border py-16 md:py-20 ${className}`}
    >
      {backgroundImage ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: backgroundOpacity,
          }}
          aria-hidden
        />
      ) : null}
      {backgroundImage ? (
        <div
          className={`absolute inset-0 ${getSectionBackgroundScrimClass(backgroundScrim)}`}
          aria-hidden
        />
      ) : null}
      <Container className={backgroundImage ? "relative z-10" : undefined}>
        <div className="w-full text-left">
          {(eyebrow || title) && (
            <header className="mb-8 space-y-3 md:mb-10">
              {eyebrow ? (
                <p
                  className={
                    backgroundImage
                      ? sectionEyebrowOnSurfaceClass
                      : "text-xs font-semibold uppercase tracking-[0.2em] text-brand"
                  }
                >
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
                  {title}
                </h2>
              ) : null}
            </header>
          )}
          <div
            className={`section-content w-full space-y-6 text-base leading-relaxed ${backgroundImage ? "text-foreground" : "text-muted"}`}
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
