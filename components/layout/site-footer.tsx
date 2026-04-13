import Link from "next/link";
import { footer, brand } from "@/data/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {brand.name}
            </p>
            <p className="mt-2 text-sm text-muted">{footer.description}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-muted">
          {footer.legal.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}
