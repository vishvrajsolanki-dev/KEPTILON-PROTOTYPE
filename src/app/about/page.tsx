import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { arcStages } from "@/data/arc";

export const metadata: Metadata = {
  title: "About",
  description:
    "Keptilon Universe Pvt Ltd — a house of ventures for clearer decisions across self, skill, team, business and capital.",
};

/** About elevation — exact approved mockup */
export default function AboutPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 10%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[10%] h-[320px] w-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--green) 9%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="max-w-xl">
            <h1 className="display text-[clamp(2.3rem,4.6vw,3.6rem)] text-[var(--green)]">
              A house of ventures for clearer decisions.
            </h1>
            <p className="lede mt-6 text-[1.1rem]">
              Keptilon Universe Pvt Ltd is the parent behind five specialised
              ventures. Together they cover a person&apos;s arc — from the first
              question they ask about themselves to the company they end up
              running.
            </p>
          </div>

          {/* Full visual plane — not floated media card */}
          <div className="relative aspect-[5/4] w-full overflow-hidden md:aspect-[16/11]">
            <Image
              src="/images/visual-about-house.jpg"
              alt="Classical Keptilon house — arches and colonnade"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Vision / Mission — editorial columns, no cards */}
      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container grid gap-14 md:grid-cols-2 md:gap-16">
          <article>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--terracotta)]" aria-hidden />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
                Our vision
              </p>
              <span className="text-[var(--terracotta)]" aria-hidden>
                ✦
              </span>
            </div>
            <p className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(1.45rem,2.4vw,1.85rem)] leading-snug text-[var(--ink)]">
              A world-class ecosystem of ventures that solves critical human
              challenges through clarity and purpose.
            </p>
          </article>

          <article>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--green)]" aria-hidden />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                Our mission
              </p>
              <span className="text-[var(--green)]" aria-hidden>
                ✦
              </span>
            </div>
            <p className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(1.45rem,2.4vw,1.85rem)] leading-snug text-[var(--ink)]">
              To give people uncompromising guidance and the means to act on it,
              at every stage of the journey.
            </p>
          </article>
        </div>
      </section>

      {/* Five doors — Arc stepping doors, not card grid */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-soft)] py-16 md:py-24">
        <div className="container">
          <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
            The Arc
          </p>
          <h2 className="display mx-auto mt-4 max-w-[18ch] text-center text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--green)]">
            One house. Five independent doors.
          </h2>

          <div className="relative mx-auto mt-14 max-w-4xl">
            {/* Stepped terrain + doors illustration */}
            <svg
              viewBox="0 0 880 220"
              className="mx-auto hidden h-auto w-full md:block"
              aria-hidden
            >
              <path
                d="M20 180 C 120 175, 160 150, 220 155 S 320 175, 380 160 S 480 130, 540 145 S 640 170, 700 150 S 800 120, 860 130"
                fill="none"
                stroke="var(--line)"
                strokeWidth="1.4"
              />
              <path
                d="M40 190 L 200 190 L 240 160 L 400 160 L 440 135 L 600 135 L 640 155 L 800 155 L 840 125"
                fill="none"
                stroke="color-mix(in srgb, var(--ink-3) 35%, transparent)"
                strokeWidth="1"
              />
              {/* soft tree marks */}
              {[110, 300, 470, 650, 780].map((x) => (
                <g key={x} opacity="0.35" stroke="var(--ink-3)" fill="none">
                  <path d={`M${x} 150 v28`} strokeWidth="1" />
                  <path
                    d={`M${x} 150 c-8-10 -6-18 0-22 c6 4 8 12 0 22`}
                    strokeWidth="1"
                  />
                </g>
              ))}
            </svg>

            <ul className="relative z-[1] mt-2 grid grid-cols-2 gap-6 sm:grid-cols-3 md:-mt-36 md:grid-cols-5 md:gap-3">
              {arcStages.map((stage) => (
                <li key={stage.id} className="text-center">
                  <Link
                    href={stage.href}
                    className="group inline-flex flex-col items-center"
                  >
                    <span
                      className="mb-3 h-2.5 w-2.5 rounded-full transition group-hover:scale-125"
                      style={{ background: stage.accent }}
                      aria-hidden
                    />
                    {/* Arched doorway */}
                    <span className="relative flex h-[88px] w-[64px] items-end justify-center transition duration-300 group-hover:-translate-y-1">
                      <svg
                        width="64"
                        height="88"
                        viewBox="0 0 64 88"
                        fill="none"
                        className="text-[var(--ink)]"
                        aria-hidden
                      >
                        <path
                          d="M8 88 V36 A24 24 0 0 1 56 36 V88"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M18 88 V42 A14 14 0 0 1 46 42 V88"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          opacity="0.45"
                        />
                        <circle
                          cx="42"
                          cy="58"
                          r="1.6"
                          fill="currentColor"
                          opacity="0.5"
                        />
                      </svg>
                    </span>
                    <span className="mt-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--ink)] transition group-hover:text-[var(--green)]">
                      {stage.name}
                    </span>
                    <span
                      className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: stage.accent }}
                    >
                      {stage.stage}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we are / aren't — editorial, no panels */}
      <section className="border-t border-[var(--line)] py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display text-2xl text-[var(--green)]">What we are</h2>
            <ul className="mt-5 space-y-3 text-[var(--ink-2)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                A multi-venture advisory house
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                Operators and guides who stay through the work
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                A parent brand that orients; ventures that convert
              </li>
            </ul>
          </div>
          <div>
            <h2 className="display text-2xl text-[var(--terracotta)]">
              What we are not
            </h2>
            <ul className="mt-5 space-y-3 text-[var(--ink-2)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                A chatbot product with five marketing skins
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                A slide-deck consultancy that leaves at diagnosis
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                A fortune-telling or pedigree-only talent shop
              </li>
            </ul>
          </div>
        </div>

        <div className="container mt-14 border-t border-[var(--line)] pt-10">
          <p className="text-sm text-[var(--ink-3)]">
            Legal entity: Keptilon Universe Pvt Ltd · Contact:{" "}
            <a
              className="underline hover:text-[var(--ink)]"
              href="mailto:hello@keptilon.com"
            >
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
