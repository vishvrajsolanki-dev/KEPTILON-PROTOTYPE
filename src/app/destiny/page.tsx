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

export default function DestinyPage() {
  return (
    <main id="main">
      <section className="section pb-12 pt-20 md:pt-24">
        <div className="container">
          <ArcCrumb active="destiny" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--destiny)]">
                Astrology · Numerology · Wellness
              </p>
              <h1 className="display mt-4 text-[clamp(2.1rem,4.2vw,3.4rem)]">
                Your birth chart does not make you rich or healthy. Your decisions do.
              </h1>
              <p className="lede mt-6 text-[1.1rem]">
                We read the chart, then we stay until you have acted on it.
                Insight that stops at the reading is entertainment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#enroll">Start Journey</Button>
                <Button href="/#arc" variant="ghost">
                  Back to the Arc
                </Button>
              </div>
            </div>
            <div className="media-frame relative aspect-[4/3]">
              <Image
                src="/images/visual-destiny-hero.jpg"
                alt="Calm guidance space for Destiny readings"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">
            Two branches, one root.
          </h2>
          <p className="lede mt-4">
            One reads the chart and acts on it. The other keeps you steady enough
            to do the acting. Most people need both — priced as one path.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="panel p-8">
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
            <article className="panel p-8">
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
              <li key={t} className="panel relative overflow-hidden p-6 pt-10">
                <span className="display absolute -top-1 left-4 text-6xl text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--destiny)_30%,transparent)]">
                  {i + 1}
                </span>
                <h3 className="display relative mt-8 text-xl">{t}</h3>
                <p className="relative mt-2 text-sm text-[var(--ink-2)]">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">Why Destiny</p>
          <h2 className="display mt-4 max-w-[18ch]">Most readings end. This one keeps going.</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
            {destinyElsewhere.map(([from, to]) => (
              <div
                key={from}
                className="grid gap-3 border-b border-[var(--line)] p-5 last:border-b-0 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-6"
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
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Begin</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)]">
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
              <Button href="mailto:hello@keptilon.com?subject=Destiny%20enrolment" variant="ghost">
                Email hello@keptilon.com
              </Button>
            </div>
            <p className="mt-6 text-sm text-[var(--ink-3)]">
              You can review everything before you pay. Practitioner profiles will
              appear here when provided.
            </p>
          </div>
          <div className="panel p-8">
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
                ["One person, throughout", "The practitioner who reads stays with your journey."],
                ["Held in confidence", "Birth details and everything after stay between you."],
              ].map(([t, b]) => (
                <li key={t} className="border-l-2 border-[var(--destiny)] pl-4">
                  <p className="font-bold text-[var(--ink)]">{t}</p>
                  <p className="text-sm text-[var(--ink-2)]">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="container mt-10 text-center text-sm text-[var(--ink-3)]">
          <Link href="/#arc" className="underline hover:text-[var(--ink)]">
            Destiny is one of five — back to the Arc
          </Link>
        </p>
      </section>
    </main>
  );
}
