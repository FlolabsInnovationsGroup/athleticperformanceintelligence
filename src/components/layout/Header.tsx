"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navigationLinks } from "@/content/footer-links";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="FloLabs logo" width={44} height={44} priority />
          <span className="font-display hidden text-lg font-semibold leading-tight tracking-tight text-foreground sm:inline md:text-xl">
            Athletic Performance Intelligence
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg border border-card-border px-3 py-1.5 text-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-card-border bg-background lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-3 py-4">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
