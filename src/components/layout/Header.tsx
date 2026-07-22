"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { arcStages } from "@/data/arc";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/Button";

const utilityLinks = [
  { href: "/#arc", label: "The Arc" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--green)] focus:px-4 focus:py-3 focus:text-[var(--bg)] focus:font-bold"
      >
        Skip to content
      </a>
      <div className="container flex h-[72px] items-center justify-between gap-3 xl:gap-4">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-cormorant)] text-[1.2rem] font-semibold tracking-[0.12em] text-[var(--green)] xl:text-[1.28rem]"
          aria-label="Keptilon home"
        >
          KEPTILON
        </Link>

        {/* Desktop: ventures directly in navbar + utility links */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
          aria-label="Primary"
        >
          {arcStages.map((v) => {
            const active = pathname === v.href;
            return (
              <Link
                key={v.id}
                href={v.href}
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[0.78rem] font-semibold tracking-wide transition xl:px-3 xl:text-[0.82rem] ${
                  active
                    ? "bg-[var(--green-soft)] text-[var(--ink)]"
                    : "text-[var(--ink-2)] hover:bg-[var(--green-soft)] hover:text-[var(--ink)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: v.accent }}
                  aria-hidden
                />
                {v.name}
              </Link>
            );
          })}
          <span className="mx-1 hidden h-4 w-px bg-[var(--line)] xl:block" aria-hidden />
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hidden py-2 text-[0.78rem] font-medium tracking-wide text-[var(--ink-2)] transition-colors hover:text-[var(--ink)] xl:inline ${
                pathname === link.href
                  ? "text-[var(--ink)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[var(--green)]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-2)] transition hover:border-[var(--ink-3)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)]"
            aria-label={theme === "parchment" ? "Switch to night mode" : "Switch to parchment mode"}
          >
            {theme === "parchment" ? "☾" : "☀"}
          </button>
          <div className="hidden sm:block">
            <Button
              href="/#arc"
              variant="primary"
              className="!min-h-11 !px-4 !text-[0.78rem] xl:!px-5 xl:!text-[0.82rem]"
              showArrow={false}
            >
              Start where you are
            </Button>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg" aria-hidden>
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink-3)]">
              Ventures
            </p>
            {arcStages.map((v) => (
              <Link
                key={v.id}
                href={v.href}
                className="flex items-center gap-3 rounded-lg px-3 py-3 font-medium"
                onClick={() => setOpen(false)}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: v.accent }} />
                <span>{v.name}</span>
                <span className="ml-auto text-xs text-[var(--ink-3)]">{v.stage}</span>
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink-3)]">
              House
            </p>
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-medium text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/#arc" className="w-full" showArrow={false}>
                Start where you are
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
