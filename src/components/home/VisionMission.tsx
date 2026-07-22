import { Button } from "@/components/ui/Button";

export function VisionMission() {
  return (
    <section className="section">
      <div className="container grid gap-16 md:grid-cols-2 md:gap-20">
        <article>
          <p className="eyebrow">Vision</p>
          <p className="mt-6 max-w-[26ch] font-[family-name:var(--font-fraunces)] text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug text-[var(--ink)]">
            A world-class ecosystem of ventures that solves critical human
            challenges through clarity and purpose.
          </p>
        </article>
        <article className="md:border-l md:border-[var(--line)] md:pl-12">
          <p className="eyebrow">Mission</p>
          <p className="mt-6 max-w-[26ch] font-[family-name:var(--font-fraunces)] text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug text-[var(--ink)]">
            To give people uncompromising guidance and the means to act on it,
            at every stage of the journey.
          </p>
        </article>
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
          <Button href="/#arc">Explore the Arc</Button>
          <Button href="/contact" variant="ghost">
            Contact Keptilon
          </Button>
        </div>
      </div>
    </section>
  );
}
