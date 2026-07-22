import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

/** Design Lock §3 Buttons — p5-06 exact variants */
const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--green)] text-[#faf7f2] hover:bg-[var(--green-hover)] shadow-[var(--shadow-soft)]",
  secondary:
    "bg-transparent text-[var(--terracotta)] border-[1.5px] border-[var(--terracotta)] hover:bg-[var(--terracotta-soft)]",
  ghost:
    "bg-transparent text-[var(--ink)] border-transparent underline-offset-4 hover:underline",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
} & Omit<ComponentProps<"button">, "className" | "onClick">;

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  external,
  showArrow = true,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full text-[0.9rem] font-bold whitespace-nowrap transition-[transform,background-color,border-color,color,text-decoration] duration-300 ease-[var(--ease)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${styles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow ? <span aria-hidden>→</span> : null}
    </>
  );

  if (href) {
    if (
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("https://wa.me")
    ) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          onClick={onClick as ComponentProps<"a">["onClick"]}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick as ComponentProps<"a">["onClick"]}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
