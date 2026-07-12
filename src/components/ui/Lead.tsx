import type { ReactNode } from "react";

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-pretty text-lg leading-relaxed text-foreground md:text-xl ${className}`}
    >
      {children}
    </p>
  );
}
