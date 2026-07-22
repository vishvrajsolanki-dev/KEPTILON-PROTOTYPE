import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function OperatorsTeaser() {
  return (
    <section className="section border-y border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="container">
        <p className="eyebrow">Operators &amp; Guides</p>
        <h2 className="display mt-4 max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.9rem)]">
          We don&apos;t stop at advice.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-8 md:p-10">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
              Operators
            </p>
            <h3 className="display mt-3 text-2xl">Systems on real floors</h3>
            <p className="mt-4 text-[var(--ink-2)]">
              We run what we recommend — starting with The Krater — before it
              ever reaches a client kitchen.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-8 md:p-10">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--green)]">
              Guides
            </p>
            <h3 className="display mt-3 text-2xl">Stay until action</h3>
            <p className="mt-4 text-[var(--ink-2)]">
              Insight that ends at a reading is entertainment. We stay through
              the decision and the work that follows.
            </p>
          </article>
        </div>
        <div className="mt-10">
          <Button href="/how-we-work" variant="ghost">
            See how we work →
          </Button>
        </div>
        <p className="mt-8 max-w-[36ch] font-[family-name:var(--font-fraunces)] text-xl italic text-[var(--ink)]">
          Insight → Action
        </p>
        <Link href="/how-we-work" className="sr-only">
          How we work
        </Link>
      </div>
    </section>
  );
}
