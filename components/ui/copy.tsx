import { cn } from "@/lib/utils";

type CopyProps = {
  children: string;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  /** Use balance for headings, pretty for body copy. */
  wrap?: "balance" | "pretty";
};

/** Keeps the last two words on the same line so orphans do not appear when text wraps. */
export function Copy({
  children,
  className,
  as: Tag = "span",
  wrap,
}: CopyProps) {
  const wrapClass =
    wrap ??
    (Tag === "h1" || Tag === "h2" || Tag === "h3" || Tag === "h4"
      ? "balance"
      : "pretty");

  const words = children.trim().split(/\s+/);

  if (words.length < 2) {
    return (
      <Tag
        className={cn(
          wrapClass === "balance" ? "text-balance" : "text-pretty",
          Tag === "span" && "min-w-0",
          className,
        )}
      >
        {children}
      </Tag>
    );
  }

  const head = words.slice(0, -2).join(" ");
  const [secondLast, last] = words.slice(-2);

  return (
    <Tag
      className={cn(
        wrapClass === "balance" ? "text-balance" : "text-pretty",
        Tag === "span" && "min-w-0",
        className,
      )}
    >
      {head.length > 0 ? `${head} ` : null}
      {secondLast}
      {"\u00A0"}
      {last}
    </Tag>
  );
}
