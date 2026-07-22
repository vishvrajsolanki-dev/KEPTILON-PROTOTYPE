import { Button } from "@/components/ui/Button";
import { faqHome } from "@/data/content";

export function VisionMission() {
  return (
    <section className="section">
      <div className="container grid gap-6 md:grid-cols-2 md:gap-10">
        <article className="border-l-2 border-[var(--green)] pl-6 md:pl-8">
          <p className="eyebrow">Vision</p>
          <p className="mt-5 max-w-[26ch] font-[family-name:var(--font-fraunces)] text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-[var(--ink)]">
            A world-class ecosystem of ventures that solves critical human
            challenges through clarity and purpose.
          </p>
        </article>
        <article className="border-l-2 border-[var(--terracotta)] pl-6 md:pl-8">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            Mission
          </p>
          <p className="mt-5 max-w-[26ch] font-[family-name:var(--font-fraunces)] text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-[var(--ink)]">
            To give people uncompromising guidance and the means to act on it,
            at every stage of the journey.
          </p>
        </article>
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
            <details key={item.q} className="group border-b border-[var(--line)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-[var(--green)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-4 text-[var(--ink-2)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section text-center">
      <div className="container">
        <p className="eyebrow justify-center">Begin</p>
        <h2 className="display mx-auto mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">
          Start where you are.
        </h2>
        <p className="lede mx-auto mt-4">
          Whether you need direction or you&apos;re building the company that
          gives it to others — one of these five was built for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/#arc">
            Explore the Arc <span aria-hidden>→</span>
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Keptilon
          </Button>
        </div>
      </div>
    </section>
  );
}
