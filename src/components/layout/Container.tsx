import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full px-[clamp(1.25rem,5vw,150px)] ${className}`}>
      {children}
    </div>
  );
}
