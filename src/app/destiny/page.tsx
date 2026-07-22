import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArcCrumb } from "@/components/ventures/ArcCrumb";
import { destinyElsewhere } from "@/data/content";

export const metadata: Metadata = {
  title: "Destiny — Astrology, Numerology & Wellness",
  description:
    "Your birth chart does not make you rich or healthy. Your decisions do. Destiny reads the chart, then stays until you have acted on it.",
};

const steps = [
  [
    "Discover yourself",
    "Astrology, numerology, personality and karma, read together.",
  ],
  [
    "Build your plan",
    "Career, money, relationships, health and timing — one plan.",
  ],
  [
    "Take action",
    "Setup, opportunities, mentorship, introductions, execution.",
  ],
  [
    "Grow with guidance",
    "Monthly reviews and course corrections after the reading.",
  ],
] as const;

/** Destiny elevation — approved mockup direction, locked content */
export default function DestinyPage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden pb-8 pt-8 md:pt-10">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[440px] w-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--destiny) 14%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-[380px] w-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--green) 8%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative">
          <div className="mb-8 flex items-center gap-3">
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.12em] text-[var(--green)]"
            >
              KEPTILON
            </Link>
            <span className="text-[var(--line)]" aria-hidden>
              |
            </span>
            <span className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--destiny)]">
              Destiny
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <div className="max-w-xl py-2 lg:py-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--destiny)]">
                Astrology · Numerology · Wellness
              </p>
              <h1 className="display mt-4 text-[clamp(2.2rem,4.2vw,3.35rem)] text-[var(--destiny)]">
                Your birth chart does not make you rich or healthy. Your
                decisions do.
              </h1>
              <p className="lede mt-6 text-[1.08rem]">
                We read the chart, then we stay until you have acted on it.
                Insight that stops at the reading is entertainment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#enroll">Begin your reading</Button>
                <Button href="/#arc" variant="ghost">
                  Back to the Arc
                </Button>
              </div>
            </div>

            <div className="relative aspect-[5/4] min-h-[280px] w-full overflow-hidden lg:min-h-[460px]">
              <Image
                src="/images/visual-destiny-hero.jpg"
                alt="Calm guidance space for Destiny readings"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent md:w-24"
                aria-hidden
              />
            </div>
          </div>

          <div className="mt-10">
            <ArcCrumb active="destiny" />
          </div>
        </div>
      </section>

      {/* Two branches — editorial split, not panels */}
      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--destiny)" }}>
            What we do
          </p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)] text-[var(--destiny)]">
            Two branches, one root.
          </h2>
          <p className="lede mt-4">
            One reads the chart and acts on it. The other keeps you steady enough
            to do the acting. Most people need both — priced as one path.
          </p>

          <div className="relative mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className="pointer-events-none absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-[var(--line)] lg:block"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-[1] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--destiny)] lg:block"
              aria-hidden
            />

            <article>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--destiny)]">
                Astrology & Numerology
              </p>
              <h3 className="display mt-3 text-3xl">Astro X Karma</h3>
              <p className="mt-4 text-[var(--ink-2)]">
                Astrology reveals your strengths and your timing. Without action,
                nothing changes — so we stay as the partner who executes the
                insight with you.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--ink-2)]">
                {[
                  "Find the right career path",
                  "Evaluate ideas and locations",
                  "Build a personal strategy",
                  "Push through the obstacle",
                  "Monthly journey reviews",
                  "Introductions that matter",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--destiny)]">·</span> {i}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--green)]">
                Mind & Balance
              </p>
              <h3 className="display mt-3 text-3xl">Wellness</h3>
              <p className="mt-4 text-[var(--ink-2)]">
                Growth needs a mind that can carry it. We keep you clear, rested
                and steady enough to act on what the chart told you.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--ink-2)]">
                {[
                  "1-on-1 wellness consults",
                  "Stress management therapy",
                  "Mind-body programmes",
                  "Nature and detox retreats",
                  "Inner transformation work",
                  "Post-retreat support",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--green)]">·</span> {i}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Steps — connected timeline */}
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--destiny)" }}>
            How it works
          </p>
          <h2 className="display mt-4 text-[var(--destiny)]">
            Four steps, in order.
          </h2>
          <ol className="relative mt-12">
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-[14px] hidden h-px bg-[var(--destiny)] opacity-40 md:block"
              aria-hidden
            />
            <div className="grid gap-10 md:grid-cols-4 md:gap-6">
              {steps.map(([t, b], i) => (
                <li key={t} className="relative">
                  <span className="relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border border-[var(--destiny)] bg-[var(--bg)] text-[0.7rem] font-bold text-[var(--destiny)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-4 text-xl text-[var(--destiny)]">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-2)]">{b}</p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* Elsewhere — hairline rows */}
      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--destiny)" }}>
            Why Destiny
          </p>
          <h2 className="display mt-4 max-w-[18ch] text-[var(--destiny)]">
            Most readings end. This one keeps going.
          </h2>
          <div className="mt-10">
            {destinyElsewhere.map(([from, to]) => (
              <div
                key={from}
                className="grid gap-3 border-b border-[var(--line)] py-5 last:border-b-0 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6"
              >
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                    Elsewhere
                  </p>
                  <p className="mt-1 text-[var(--ink-3)]">{from}</p>
                </div>
                <span className="text-[var(--destiny)]">→</span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--destiny)]">
                    With Destiny
                  </p>
                  <p className="mt-1 text-[var(--ink)]">{to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section scroll-mt-24">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow" style={{ color: "var(--destiny)" }}>
              Begin
            </p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--destiny)]">
              Full Destiny Reading
            </h2>
            <p className="lede mt-4">
              One enrollment, and a person on the other side of it. Your reading
              starts as soon as we have your birth details.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--ink-2)]">
              <li>· 1-on-1 confidential sessions</li>
              <li>· Astrology and numerology mapping</li>
              <li>· Career and wellness optimisation</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact?venture=destiny">Enquire to enrol</Button>
              <Button
                href="mailto:hello@keptilon.com?subject=Destiny%20enrolment"
                variant="ghost"
              >
                Email hello@keptilon.com
              </Button>
            </div>
            <p className="mt-6 text-sm text-[var(--ink-3)]">
              You can review everything before you pay. Practitioner profiles will
              appear here when provided.
            </p>
          </div>

          <aside className="border-l-2 border-[var(--destiny)] pl-6 md:pl-8">
            <h3 className="display text-2xl">Practitioners, not fortune-tellers</h3>
            <p className="mt-4 text-[var(--ink-2)]">
              Destiny is a small practice inside the Keptilon universe. We take
              astrology and numerology seriously — and refuse to use them to
              frighten you. No fatalism. One person reads your chart, and the
              same person is still there months later.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Action over prophecy", "The reading is where the work begins."],
                [
                  "One person, throughout",
                  "The practitioner who reads stays with your journey.",
                ],
                [
                  "Held in confidence",
                  "Birth details and everything after stay between you.",
                ],
              ].map(([t, b]) => (
                <li key={t}>
                  <p className="font-bold text-[var(--ink)]">{t}</p>
                  <p className="text-sm text-[var(--ink-2)]">{b}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <p className="container mt-12 text-center text-sm text-[var(--ink-3)]">
          <Link href="/#arc" className="underline hover:text-[var(--ink)]">
            Destiny is one of five — back to the Arc
          </Link>
        </p>
      </section>
    </main>
  );
}
