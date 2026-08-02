import type { ReactNode } from "react";

export function ContentCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="content-surface rounded-xl p-5 md:p-6">
      <h3 className="mb-3 text-base font-semibold leading-snug text-foreground">{title}</h3>
      <div className="content-card-body space-y-3 text-sm leading-relaxed text-muted">{children}</div>
    </article>
  );
}
