import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArcCrumb } from "@/components/ventures/ArcCrumb";

export const metadata: Metadata = {
  title: "Destiny — Astrology, Numerology & Wellness",
  description:
    "Your birth chart does not make you rich or healthy. Your decisions do. Destiny reads the chart, then stays until you have acted on it.",
};

export default function DestinyPage() {
  return (
    <main id="main">
      <section className="section pb-12 pt-20 md:pt-24">
        <div className="container max-w-3xl">
          <ArcCrumb active="destiny" />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--destiny)]">
            Astrology · Numerology · Wellness
          </p>
          <h1 className="display mt-4 text-[clamp(2.1rem,4.2vw,3.4rem)]">
            Your birth chart does not make you rich or healthy. Your decisions do.
          </h1>
          <p className="lede mt-6">
            We read the chart, then we stay until you have acted on it. Insight
            that stops at the reading is entertainment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#enroll">Start Journey</Button>
            <Button href="/#arc" variant="ghost">
              Back to the Arc
            </Button>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">
            Two branches, one root.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--destiny)]">
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
                  "Monthly journey reviews",
                ].map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--green)]">
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
                  "Stress management",
                  "Mind-body programmes",
                  "Post-retreat support",
                ].map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-4">Four steps, in order.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Discover yourself", "Astrology, numerology, personality and karma, read together."],
              ["Build your plan", "Career, money, relationships, health and timing — one plan."],
              ["Take action", "Setup, opportunities, mentorship, introductions, execution."],
              ["Grow with guidance", "Monthly reviews and course corrections after the reading."],
            ].map(([t, b], i) => (
              <li key={t} className="relative pt-8">
                <span className="display absolute top-0 text-5xl text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--destiny)_35%,transparent)]">
                  {i + 1}
                </span>
                <h3 className="display relative mt-6 text-xl">{t}</h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enroll" className="section scroll-mt-24 border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container max-w-2xl text-center">
          <p className="eyebrow justify-center">Begin</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)]">
            Full Destiny Reading
          </h2>
          <p className="lede mx-auto mt-4">
            One enrollment, and a person on the other side of it. Your reading
            starts as soon as we have your birth details.
          </p>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-[var(--ink-2)]">
            <li>· 1-on-1 confidential sessions</li>
            <li>· Astrology and numerology mapping</li>
            <li>· Career and wellness optimisation</li>
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact?venture=destiny">Enquire to enrol</Button>
            <Button href="mailto:hello@keptilon.com?subject=Destiny%20enrolment" variant="ghost">
              Email hello@keptilon.com
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--ink-3)]">
            You can review everything before you pay. Practitioner profiles will
            appear here when provided.
          </p>
          <p className="mt-8 text-sm">
            <Link href="/#arc" className="underline text-[var(--ink-3)] hover:text-[var(--ink)]">
              Destiny is one of five — back to the Arc
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
