import Link from "next/link";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";
import type { VentureId } from "@/data/ventures";

export function ArcCrumb({ active }: { active: VentureId }) {
  return (
    <nav
      aria-label="Arc position"
      className="mb-10 rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-4 shadow-[var(--shadow-soft)] md:px-6"
    >
      <ol className="flex items-center justify-between gap-1">
        {arcStages.map((v) => {
          const isActive = v.id === active;
          return (
            <li key={v.id} className="flex flex-1 flex-col items-center">
              <Link
                href={v.href}
                className="group flex flex-col items-center gap-1.5"
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition md:h-10 md:w-10 ${
                    isActive ? "text-white" : "bg-[var(--bg)]"
                  }`}
                  style={{
                    borderColor: v.accent,
                    background: isActive ? v.accent : undefined,
                  }}
                >
                  <StageIcon
                    name={v.icon as "self"}
                    color={isActive ? "#fff" : v.accent}
                    size={18}
                  />
                </span>
                <span
                  className={`text-[0.58rem] font-bold uppercase tracking-[0.12em] md:text-[0.65rem] ${
                    isActive ? "" : "text-[var(--ink-3)]"
                  }`}
                  style={isActive ? { color: v.accent } : undefined}
                >
                  {v.stage}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
