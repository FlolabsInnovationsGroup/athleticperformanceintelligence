import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-brand text-surface-dark hover:opacity-90 active:opacity-80 border border-brand",
  secondary:
    "border border-card-border bg-card text-foreground hover:border-brand hover:text-brand active:opacity-80",
  accent:
    "bg-accent text-surface-dark hover:opacity-90 active:opacity-80 border border-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
