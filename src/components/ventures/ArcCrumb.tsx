import Link from "next/link";
import { arcVentures, type VentureId } from "@/data/ventures";

export function ArcCrumb({ active }: { active: VentureId }) {
  return (
    <nav aria-label="Arc position" className="mb-8 overflow-x-auto">
      <ol className="flex min-w-max items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-3)]">
        <li>
          <Link href="/#arc" className="hover:text-[var(--ink)]">
            Arc
          </Link>
        </li>
        {arcVentures.map((v) => (
          <li key={v.id} className="flex items-center gap-2">
            <span aria-hidden>›</span>
            <Link
              href={v.href}
              className={
                v.id === active
                  ? "text-[var(--ink)]"
                  : "hover:text-[var(--ink)]"
              }
              aria-current={v.id === active ? "page" : undefined}
            >
              <span
                className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
                style={{ background: v.accent }}
              />
              {v.stage}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
