import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--green)] text-[var(--bg)] hover:bg-[var(--green-hover)] shadow-[var(--shadow-soft)]",
  secondary:
    "bg-transparent text-[var(--ink)] border-2 border-[var(--terracotta)] hover:bg-[var(--terracotta-soft)]",
  ghost:
    "bg-transparent text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink-3)]",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
} & Omit<ComponentProps<"button">, "className" | "onClick">;

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  external,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full text-[0.9rem] font-bold whitespace-nowrap transition-transform duration-300 ease-[var(--ease)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${styles[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={onClick as ComponentProps<"a">["onClick"]}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick as ComponentProps<"a">["onClick"]}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
