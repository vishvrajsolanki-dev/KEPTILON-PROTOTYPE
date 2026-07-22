import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { faqHome, ventureImages } from "@/data/content";
import { arcVentures } from "@/data/ventures";

export function VisionMission() {
  return (
    <section className="section border-y border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
        <article className="panel p-8 md:p-10">
          <p className="eyebrow">Vision</p>
          <p className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(1.35rem,2.3vw,1.85rem)] leading-snug text-[var(--ink)]">
            A world-class ecosystem of ventures that solves critical human
            challenges through clarity and purpose.
          </p>
        </article>
        <article className="panel p-8 md:p-10">
          <p className="eyebrow">Mission</p>
          <p className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(1.35rem,2.3vw,1.85rem)] leading-snug text-[var(--ink)]">
            To give people uncompromising guidance and the means to act on it,
            at every stage of the journey.
          </p>
        </article>
      </div>
    </section>
  );
}

export function VentureGallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The house</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)]">
              Five worlds. One craft.
            </h2>
          </div>
          <p className="max-w-md text-[var(--ink-2)]">
            Each venture keeps its accent and offer — connected by the Arc and
            the same standard: stay until the work is real.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {arcVentures.map((v) => (
            <Link
              key={v.id}
              href={v.href}
              className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={ventureImages[v.id]}
                  alt={v.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 20vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(28,25,23,0.75)] to-transparent p-3 pt-10">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/70">
                    {v.stage}
                  </p>
                  <p className="font-[family-name:var(--font-fraunces)] text-lg text-white">
                    {v.name}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-[var(--ink-2)]">{v.oneLiner}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="container max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
          Quick answers
        </h2>
        <div className="mt-8 space-y-3">
          {faqHome.map((item) => (
            <details
              key={item.q}
              className="panel group open:shadow-[var(--shadow-soft)]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                {item.q}
                <span className="text-[var(--green)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[var(--line)] px-5 py-4 text-[var(--ink-2)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section relative overflow-hidden text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--green-soft), transparent 70%)",
        }}
      />
      <div className="container relative">
        <p className="eyebrow justify-center">Begin</p>
        <h2 className="display mx-auto mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">
          Start where you are.
        </h2>
        <p className="lede mx-auto mt-4">
          Whether you need direction or you&apos;re building the company that
          gives it to others — one of these five was built for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/#arc">Explore the Arc</Button>
          <Button href="/contact" variant="ghost">
            Contact Keptilon
          </Button>
        </div>
      </div>
    </section>
  );
}
