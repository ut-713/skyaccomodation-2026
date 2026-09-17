import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Variant = "gold" | "outline" | "navy";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950 shadow-md shadow-gold-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30",
  outline:
    "border-2 border-white/50 text-white hover:bg-white/10 hover:-translate-y-0.5",
  navy: "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/20",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  block?: boolean;
} & ComponentPropsWithoutRef<typeof Link>;

export function Button({
  href,
  variant = "navy",
  block,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], block && "w-full", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
