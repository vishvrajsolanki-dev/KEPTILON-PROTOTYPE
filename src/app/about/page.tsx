import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { arcVentures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "About",
  description:
    "Keptilon Universe Pvt Ltd — a house of ventures for clearer decisions across self, skill, team, business and capital.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="section pt-24 md:pt-28">
        <div className="container max-w-3xl">
          <p className="eyebrow">About Keptilon</p>
          <h1 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)]">
            A house of ventures for clearer decisions.
          </h1>
          <p className="lede mt-6">
            Keptilon Universe Pvt Ltd is the parent behind five specialised
            ventures. Together they cover a person&apos;s arc — from the first
            question they ask about themselves to the company they end up
            running.
          </p>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl leading-snug">
              A world-class ecosystem of ventures that solves critical human
              challenges through clarity and purpose.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl leading-snug">
              To give people uncompromising guidance and the means to act on it,
              at every stage of the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Brand architecture</p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">
            One house. Five independent doors.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {arcVentures.map((v) => (
              <li key={v.id}>
                <Link
                  href={v.href}
                  className="block h-full rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-5 transition hover:border-[var(--green)]"
                >
                  <span
                    className="mb-3 block h-2 w-2 rounded-full"
                    style={{ background: v.accent }}
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                    {v.stage}
                  </p>
                  <p className="display mt-2 text-xl">{v.name}</p>
                  <p className="mt-2 text-sm text-[var(--ink-2)]">{v.oneLiner}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-[var(--line)]">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="display text-2xl">What we are</h2>
            <ul className="mt-4 space-y-2 text-[var(--ink-2)]">
              <li>A multi-venture advisory house</li>
              <li>Operators and guides who stay through the work</li>
              <li>A parent brand that orients; ventures that convert</li>
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl">What we are not</h2>
            <ul className="mt-4 space-y-2 text-[var(--ink-2)]">
              <li>A chatbot product with five marketing skins</li>
              <li>A slide-deck consultancy that leaves at diagnosis</li>
              <li>A fortune-telling or pedigree-only talent shop</li>
            </ul>
          </div>
        </div>
        <div className="container mt-14">
          <p className="text-sm text-[var(--ink-3)]">
            Legal entity: Keptilon Universe Pvt Ltd · Contact:{" "}
            <a className="underline hover:text-[var(--ink)]" href="mailto:hello@keptilon.com">
              hello@keptilon.com
            </a>
          </p>
          <p className="mt-2 text-sm text-[var(--ink-3)]">
            Leadership profiles will appear here when provided.
          </p>
          <div className="mt-8">
            <Button href="/contact">Contact Keptilon</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
