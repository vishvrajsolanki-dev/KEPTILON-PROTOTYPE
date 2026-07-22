"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { arcStages } from "@/data/arc";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/#arc", label: "The Arc" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--green)] focus:px-4 focus:py-3 focus:text-[var(--bg)] focus:font-bold"
      >
        Skip to content
      </a>
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-fraunces)] text-[1.15rem] font-semibold tracking-[0.08em] text-[var(--ink)]"
          aria-label="Keptilon home"
        >
          KEPTILON
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-[0.82rem] font-medium tracking-wide text-[var(--ink-2)] transition-colors hover:text-[var(--ink)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--green)] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === link.href ? "text-[var(--ink)] after:scale-x-100" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setVenturesOpen(true)}
            onMouseLeave={() => setVenturesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 text-[0.82rem] font-medium tracking-wide text-[var(--ink-2)] hover:text-[var(--ink)]"
              aria-expanded={venturesOpen}
              aria-haspopup="true"
              onClick={() => setVenturesOpen((v) => !v)}
            >
              Ventures
              <span aria-hidden className="text-[0.65rem]">
                ▾
              </span>
            </button>
            {venturesOpen && (
              <div className="absolute left-0 top-full min-w-[240px] rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-2 shadow-[var(--shadow-lift)]">
                {arcStages.map((v) => (
                  <Link
                    key={v.id}
                    href={v.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--ink-2)] hover:bg-[var(--green-soft)] hover:text-[var(--ink)]"
                    onClick={() => setVenturesOpen(false)}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: v.accent }}
                      aria-hidden
                    />
                    <span className="font-semibold text-[var(--ink)]">{v.name}</span>
                    <span className="ml-auto text-xs text-[var(--ink-3)]">{v.stage}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-2)] transition hover:border-[var(--ink-3)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green)]"
            aria-label={theme === "parchment" ? "Switch to night mode" : "Switch to parchment mode"}
          >
            {theme === "parchment" ? "☾" : "☀"}
          </button>
          <div className="hidden sm:block">
            <Button href="/#arc" variant="primary" className="!min-h-11 !px-5 !text-[0.82rem]">
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-medium text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink-3)]">
              Ventures
            </p>
            {arcStages.map((v) => (
              <Link
                key={v.id}
                href={v.href}
                className="flex items-center gap-3 rounded-lg px-3 py-3"
                onClick={() => setOpen(false)}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: v.accent }} />
                {v.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/#arc" className="w-full">
                Start where you are
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
