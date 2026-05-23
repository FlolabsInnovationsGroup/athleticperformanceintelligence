import { Copy } from "@/components/ui/copy";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        !bleed && "px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className={cn(!bleed && "mx-auto max-w-6xl")}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl space-y-2",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
          {eyebrow}
        </p>
      ) : null}
      <Copy
        as="h2"
        className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </Copy>
      {subtitle ? (
        <Copy
          as="p"
          className="text-base leading-relaxed text-muted sm:text-lg"
        >
          {subtitle}
        </Copy>
      ) : null}
    </div>
  );
}
