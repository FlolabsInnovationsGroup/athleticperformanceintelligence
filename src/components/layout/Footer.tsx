"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SendIcon } from "@/components/icons/send";
import { socialIcons } from "@/components/icons/social";
import {
  companyLinks,
  navigationLinks,
  projectLinks,
  socialLinks,
} from "@/content/footer-links";
import { footerBrand } from "@/content/site-content";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@flolabs.com";

function getCompanyNav(email: string) {
  const [careers, merch] = companyLinks;
  return [
    { label: careers.label, href: careers.href, external: true },
    { label: "Contact Us", href: `mailto:${email}`, external: false },
    { label: merch.label, href: merch.href, external: true },
    {
      label: "Initial consultation",
      href: `mailto:${email}?subject=Initial%20consultation`,
      external: false,
    },
  ];
}

const linkClass = "text-muted transition hover:text-brand";
const footerHeadingClass =
  "text-sm font-bold uppercase tracking-wider text-foreground";

export function Footer() {
  const [email, setEmail] = useState("");
  const companyNavItems = getCompanyNav(contactEmail);

  const handleNewsletter = (event: FormEvent) => {
    event.preventDefault();
    if (!email) return;
    window.location.href = `mailto:${contactEmail}?subject=Newsletter%20signup&body=${encodeURIComponent(email)}`;
  };

  return (
    <footer className="border-t border-card-border bg-footer-bg text-foreground">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="FloLabs logo" width={36} height={36} />
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-lg font-semibold leading-tight tracking-tight">
                {footerBrand.title}
              </span>
              <span className="text-sm text-muted">{footerBrand.subtitle}</span>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted">
            {footerBrand.description}
          </p>

          <div>
            <p className={`mb-2 ${footerHeadingClass}`}>
              Newsletter
            </p>
            <p className="mb-3 text-sm text-muted">{footerBrand.newsletterLabel}</p>
            <form onSubmit={handleNewsletter} className="flex max-w-md overflow-hidden rounded-lg border border-card-border">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="min-w-0 flex-1 bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send newsletter signup"
                className="flex shrink-0 items-center justify-center bg-brand px-3 text-surface-dark transition hover:opacity-90"
              >
                <SendIcon />
              </button>
            </form>
          </div>

          <div>
            <p className={`mb-3 ${footerHeadingClass}`}>
              Social Media
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`FloLabs on ${link.label}`}
                    className="inline-flex size-7 shrink-0 items-center justify-center text-foreground transition hover:text-brand"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className={`mb-4 ${footerHeadingClass}`}>
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className={`mb-4 ${footerHeadingClass}`}>
            Projects
          </p>
          <ul className="space-y-2 text-sm">
            {projectLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className={`mb-4 ${footerHeadingClass}`}>
            Company
          </p>
          <ul className="space-y-2 text-sm">
            {companyNavItems.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-card-border">
        <Container className="py-5 text-center text-sm text-muted">
          {footerBrand.tagline}
        </Container>
      </div>
    </footer>
  );
}
