import Link from "next/link";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";
import { CONTACT_EMAIL } from "@/data/ventures";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="container py-14">
        <div className="mb-12 text-center md:text-left">
          <p className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.12em] text-[var(--green)]">
            KEPTILON
          </p>
          <p className="mt-2 text-sm text-[var(--ink-3)]">
            One house for the whole arc.
          </p>
        </div>

        <div className="mb-12">
          <p className="mb-5 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)] md:text-left">
            The Arc
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
            {arcStages.map((v, i) => (
              <div key={v.id} className="flex items-center gap-4 md:gap-6">
                <Link
                  href={v.href}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full border bg-[var(--bg-elevated)] transition group-hover:-translate-y-0.5"
                    style={{ borderColor: `${v.accent}66` }}
                  >
                    <StageIcon name={v.icon as "self"} color={v.accent} size={20} />
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                    {v.stage}
                  </span>
                </Link>
                {i < arcStages.length - 1 && (
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
          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ink-3)]"
            aria-label="Legal"
          >
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
