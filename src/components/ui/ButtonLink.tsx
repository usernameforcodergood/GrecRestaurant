import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "brass" | "outline" | "outline-light" | "ghost-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold tracking-[0.08em] uppercase transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-soft)] active:scale-[0.98] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-petrol-800 text-cream-50 shadow-[0_8px_24px_-12px_rgb(17_42_46/0.7)] hover:bg-petrol-700",
  brass:
    "bg-brass-300 text-petrol-950 shadow-[0_10px_30px_-12px_rgb(176_133_68/0.8)] hover:bg-cream-100",
  outline: "border border-petrol-800/30 text-petrol-900 hover:border-petrol-800 hover:bg-petrol-800 hover:text-cream-50",
  "outline-light":
    "border border-cream-50/50 text-cream-50 backdrop-blur-sm hover:border-cream-50 hover:bg-cream-50 hover:text-petrol-950",
  "ghost-light": "text-cream-50 hover:text-brass-300",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.72rem]",
  lg: "h-13 px-7 text-[0.78rem] sm:h-14 sm:px-8",
};

interface ButtonLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  // tel:, mailto:, hash and external links use a plain anchor
  if (external || /^(tel:|mailto:|#|https?:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
