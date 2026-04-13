import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/85 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
