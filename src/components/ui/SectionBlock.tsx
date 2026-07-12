import type { ReactNode } from "react";

type SectionBlockProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function SectionBlocks({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`grid gap-6 ${className}`}>{children}</div>;
}

export function SectionBlock({ title, children, className = "" }: SectionBlockProps) {
  return (
    <article
      className={`content-surface rounded-xl p-5 md:p-6 ${className}`}
    >
      {title ? (
        <h3 className="mb-3 text-base font-semibold leading-snug text-foreground">{title}</h3>
      ) : null}
      <div className="section-block-body space-y-3 text-base leading-relaxed text-muted">
        {children}
      </div>
    </article>
  );
}
