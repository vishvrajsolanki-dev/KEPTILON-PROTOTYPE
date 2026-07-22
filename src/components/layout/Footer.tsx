import Link from "next/link";
import { arcVentures, CONTACT_EMAIL } from "@/data/ventures";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="container py-14">
        <div className="mb-10">
          <p className="eyebrow mb-4">The Arc</p>
          <div className="flex flex-wrap items-center gap-3 md:gap-2">
            {arcVentures.map((v, i) => (
              <div key={v.id} className="flex items-center gap-2 md:gap-3">
                <Link
                  href={v.href}
                  className="group flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-sm transition hover:border-[var(--green)]"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: v.accent }}
                    aria-hidden
                  />
                  <span className="font-semibold text-[var(--ink)]">{v.stage}</span>
                  <span className="text-[var(--ink-3)]">·</span>
                  <span className="text-[var(--ink-2)] group-hover:text-[var(--ink)]">
                    {v.name}
                  </span>
                </Link>
                {i < arcVentures.length - 1 && (
                  <span className="hidden text-[var(--ink-3)] md:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--ink-3)]">
            © {new Date().getFullYear()} Keptilon Universe Pvt Ltd
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ink-3)]" aria-label="Legal">
            <Link href="/contact" className="min-h-11 inline-flex items-center hover:text-[var(--ink)]">
              Contact
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="min-h-11 inline-flex items-center hover:text-[var(--ink)]"
            >
              {CONTACT_EMAIL}
            </a>
            <Link href="/privacy" className="min-h-11 inline-flex items-center hover:text-[var(--ink)]">
              Privacy
            </Link>
            <Link href="/terms" className="min-h-11 inline-flex items-center hover:text-[var(--ink)]">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
