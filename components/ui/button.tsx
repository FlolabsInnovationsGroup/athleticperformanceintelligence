import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-accent text-slate-950 shadow-[0_0_0_1px_rgba(45,212,191,0.2)] hover:brightness-110 focus-visible:outline-[color:var(--accent)]",
  secondary:
    "border border-white/15 bg-white/5 text-foreground hover:bg-white/10 focus-visible:outline-white/40",
  ghost: "text-foreground/90 hover:bg-white/5 focus-visible:outline-white/30",
  gold: "bg-gold/15 text-gold border border-gold/25 hover:bg-gold/25 focus-visible:outline-gold/50",
} as const;

export type ButtonVariant = keyof typeof variants;

type Common = {
  className?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
};

type ButtonAsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "className" | "children">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const className = cn(base, variants[variant], props.className);

  if ("href" in props && props.href) {
    const { href, children, className: _c, variant: _v, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className: _c,
    variant: _v,
    type = "button",
    ...rest
  } = props as ButtonAsButton;

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
