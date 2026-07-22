import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function OperatorsTeaser() {
  return (
    <section className="section border-y border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">
            How Keptilon works
          </h2>
          <p className="mt-4 text-[var(--terracotta)]">
            Two roles. One commitment: better decisions, built to last.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-[var(--green)]" />
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] md:rounded-[3rem]">
            <div className="relative aspect-[3/4] min-h-[420px]">
              <Image
                src="/images/visual-cofwaf-hero.jpg"
                alt="Operators — systems on real floors"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.82)] via-[rgba(28,25,23,0.25)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center text-[#f3eee6]">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--green)] text-lg text-white">
                  ⌗
                </span>
                <h3 className="display text-3xl">Operators</h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/85">
                  We run systems on real floors before we recommend them.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] md:rounded-[3rem]">
            <div className="relative aspect-[3/4] min-h-[420px]">
              <Image
                src="/images/visual-destiny-hero.jpg"
                alt="Guides — stay until action"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.82)] via-[rgba(28,25,23,0.25)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center text-[#f3eee6]">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--terracotta)] text-lg text-white">
                  ◆
                </span>
                <h3 className="display text-3xl">Guides</h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/85">
                  We stay until the decision becomes action.
                </p>
              </div>
            </div>
          </article>

          <p className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold shadow-[var(--shadow-lift)] md:block">
            <span className="text-[var(--green)]">Insight</span>
            <span className="mx-2 text-[var(--terracotta)]">→</span>
            <span className="text-[var(--terracotta)]">Action</span>
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--green)]">Grounded in experience. Aligned in purpose.</p>
          <p className="mt-1 text-[var(--terracotta)]">
            That&apos;s how we create outcomes that endure.
          </p>
          <div className="mt-8">
            <Button href="/how-we-work" variant="ghost">
              See how we work →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
