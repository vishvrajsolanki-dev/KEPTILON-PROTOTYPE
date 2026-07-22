import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArcCrumb } from "@/components/ventures/ArcCrumb";
import { ventureImages } from "@/data/content";
import { ventures, type VentureId } from "@/data/ventures";

/* Early ventures — elevated skeleton matching Destiny/CofWaf */

type EarlySpec = {
  id: VentureId;
  kicker: string;
  title: string;
  lede: string;
  offerings: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  why: [string, string][];
  ethos: string;
  principles: { title: string; body: string }[];
};

const specs: Record<"academy" | "talentx" | "venture", EarlySpec> = {
  academy: {
    id: "academy",
    kicker: "Professional education",
    title: "A course you finished is not the same as a skill you have.",
    lede: "Executive education built for application, not completion. Rigour first, certificates second.",
    offerings: [
      {
        title: "Executive programs",
        body: "Strategy and leadership for people already carrying the decisions.",
      },
      {
        title: "AI learning",
        body: "Working fluency with the tools, not a vocabulary lesson about them.",
      },
      {
        title: "Cohorts",
        body: "You learn beside people whose problems look like yours.",
      },
      {
        title: "Mentorship",
        body: "A specialist who reviews your actual work, not a hypothetical case.",
      },
    ],
    steps: [
      {
        title: "Assess",
        body: "Find the gap between what you can do and what your role now demands.",
      },
      {
        title: "Teach",
        body: "A programme aimed squarely at that gap, and nothing else.",
      },
      {
        title: "Apply",
        body: "You ship real work, and we review it.",
      },
    ],
    why: [
      ["A course you finish and forget.", "A skill you can still use on Monday."],
      [
        "A certificate that proves attendance.",
        "Work you shipped that proves capability.",
      ],
      [
        "Generic video libraries.",
        "One programme aimed at the gap in your role.",
      ],
    ],
    ethos: "Educators who care whether it worked.",
    principles: [
      {
        title: "Application over completion",
        body: "Judged by what you can do on Monday.",
      },
      {
        title: "Taught by practitioners",
        body: "People who still do the work they teach.",
      },
      {
        title: "Reviewed, not just delivered",
        body: "Someone senior tells you the truth about your work.",
      },
    ],
  },
  talentx: {
    id: "talentx",
    kicker: "Assessment & placement",
    title:
      "A résumé tells you where someone has been. It does not tell you what they can do.",
    lede: "We measure capability directly, then match it to the companies that actually need it.",
    offerings: [
      {
        title: "Capability assessment",
        body: "Structured evaluation of what a person can actually deliver.",
      },
      {
        title: "Executive search",
        body: "Senior roles where a bad fit is expensive and slow to undo.",
      },
      {
        title: "Talent mapping",
        body: "A picture of the market before you open the role.",
      },
      {
        title: "Retention",
        body: "Placement is not the finish line; staying is.",
      },
    ],
    steps: [
      {
        title: "Measure",
        body: "Assess capability rather than reading it off a CV.",
      },
      {
        title: "Match",
        body: "Pair that capability with companies that need exactly it.",
      },
      {
        title: "Hold",
        body: "Follow the placement — a hire that leaves is a hire that failed.",
      },
    ],
    why: [
      [
        "A résumé of where someone has been.",
        "An assessment of what they can do.",
      ],
      ["Screening for school and last logo.", "Measuring the work itself."],
      [
        "A placement, then you're alone.",
        "A hire we follow, because staying is the result.",
      ],
    ],
    ethos: "We measure capability, not pedigree.",
    principles: [
      {
        title: "Capability, measured directly",
        body: "Evaluate the work, not the words describing it.",
      },
      {
        title: "Fit over pedigree",
        body: "School and logo stop deciding who gets the room.",
      },
      {
        title: "Placement is not the finish line",
        body: "We follow the hire.",
      },
    ],
  },
  venture: {
    id: "venture",
    kicker: "Capital & company building",
    title:
      "Capital without direction is just money. Direction without capital is just a plan.",
    lede: "We stand between founders who need funding and investors who need somewhere worth putting it.",
    offerings: [
      {
        title: "Fundraising",
        body: "Getting you ready to raise, then getting you in the room.",
      },
      {
        title: "Consulting",
        body: "The strategy work that decides whether the raise was worth doing.",
      },
      {
        title: "Company building",
        body: "Formation, licensing, structure — the unglamorous half.",
      },
      {
        title: "Investor network",
        body: "Introductions to people who fund things that look like yours.",
      },
    ],
    steps: [
      {
        title: "Sharpen",
        body: "Pressure-test the business until the story holds up.",
      },
      {
        title: "Connect",
        body: "Put it in front of capital that is a genuine fit.",
      },
      {
        title: "Build",
        body: "Stay through execution — where most of it is won or lost.",
      },
    ],
    why: [
      [
        "Capital with no direction.",
        "Capital pointed at a company worth building.",
      ],
      [
        "A pitch deck and a wish.",
        "A business pressure-tested until the story holds.",
      ],
      ["Funded, then left alone.", "A partner who stays through the build."],
    ],
    ethos: "We stay through the part that is hard.",
    principles: [
      {
        title: "Direction before capital",
        body: "Sharpen first, then find the money.",
      },
      {
        title: "The right room, not any room",
        body: "Investors who fund things like yours.",
      },
      {
        title: "Present through the build",
        body: "Stay through execution, not just the raise.",
      },
    ],
  },
};

function EarlyVenturePage({ spec }: { spec: EarlySpec }) {
  const v = ventures[spec.id];
  return (
    <main id="main">
      <section className="relative overflow-hidden pb-8 pt-8 md:pt-10">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[440px] w-[440px] rounded-full"
          style={{
            background: `radial-gradient(circle, color-mix(in srgb, ${v.accent} 12%, transparent) 0%, transparent 68%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--green) 7%, transparent) 0%, transparent 70%)",
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
            <span
              className="font-[family-name:var(--font-cormorant)] text-lg"
              style={{ color: v.accent }}
            >
              {v.name}
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <div className="max-w-xl py-2 lg:py-8">
              <p
                className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: v.accent }}
              >
                {spec.kicker}
              </p>
              <h1
                className="display mt-4 text-[clamp(2rem,4vw,3.15rem)]"
                style={{ color: v.accent }}
              >
                {spec.title}
              </h1>
              <p className="lede mt-6 text-[1.08rem]">{spec.lede}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={v.ctaHref}>{v.cta}</Button>
                <Button href="/#arc" variant="ghost">
                  See the Arc
                </Button>
              </div>
              {v.statusNote && (
                <p className="mt-6 text-sm italic text-[var(--ink-3)]">
                  {v.statusNote}
                </p>
              )}
            </div>

            <div className="relative aspect-[5/4] min-h-[280px] w-full overflow-hidden lg:min-h-[460px]">
              <Image
                src={ventureImages[spec.id]}
                alt={`${v.name} — ${spec.kicker}`}
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
            <ArcCrumb active={spec.id} />
          </div>
        </div>
      </section>

      {spec.id === "talentx" && (
        <section className="border-t border-[var(--line)] py-12 md:py-14">
          <div className="container">
            <p
              className="text-center text-[0.72rem] font-bold uppercase tracking-[0.18em]"
              style={{ color: v.accent }}
            >
              Choose your door
            </p>
            <div className="relative mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
              <div
                className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-[var(--line)] md:block"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-[1] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
                style={{ background: v.accent }}
                aria-hidden
              />
              <Link
                href="/contact?venture=talentx&role=employer"
                className="group text-center md:text-left"
              >
                <p
                  className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: v.accent }}
                >
                  Employer
                </p>
                <h3 className="display mt-3 text-2xl transition group-hover:translate-x-1">
                  I&apos;m hiring
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">
                  Capability measured, then matched — before the résumé decides.
                </p>
                <span
                  className="mt-4 inline-block text-sm font-bold"
                  style={{ color: v.accent }}
                >
                  Talk to TalentX →
                </span>
              </Link>
              <Link
                href="/contact?venture=talentx&role=candidate"
                className="group text-center md:text-left"
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--green)]">
                  Candidate
                </p>
                <h3 className="display mt-3 text-2xl transition group-hover:translate-x-1">
                  I&apos;m a candidate
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">
                  Show what you can do — not only where you have been.
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-[var(--green)]">
                  Talk to TalentX →
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {spec.id === "venture" && (
        <section className="border-t border-[var(--line)] py-12 md:py-14">
          <div className="container">
            <p
              className="text-center text-[0.72rem] font-bold uppercase tracking-[0.18em]"
              style={{ color: v.accent }}
            >
              Choose your door
            </p>
            <div className="relative mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
              <div
                className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-[var(--line)] md:block"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-[1] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
                style={{ background: v.accent }}
                aria-hidden
              />
              <Link
                href="/contact?venture=venture&role=founder"
                className="group text-center md:text-left"
              >
                <p
                  className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: v.accent }}
                >
                  Founder
                </p>
                <h3 className="display mt-3 text-2xl transition group-hover:translate-x-1">
                  I&apos;m a founder
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">
                  Direction first — then the room that funds it.
                </p>
                <span
                  className="mt-4 inline-block text-sm font-bold"
                  style={{ color: v.accent }}
                >
                  Talk to Venture →
                </span>
              </Link>
              <Link
                href="/contact?venture=venture&role=investor"
                className="group text-center md:text-left"
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--green)]">
                  Investor
                </p>
                <h3 className="display mt-3 text-2xl transition group-hover:translate-x-1">
                  I&apos;m an investor
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">
                  Companies pressure-tested before capital arrives.
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-[var(--green)]">
                  Talk to Venture →
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Offerings — editorial list, not card grid */}
      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: v.accent }}>
            What we do
          </p>
          <h2 className="display mt-4" style={{ color: v.accent }}>
            Inside {v.name}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {spec.offerings.map((o) => (
              <li key={o.title} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: v.accent }}
                  aria-hidden
                />
                <div>
                  <h3 className="display text-xl">{o.title}</h3>
                  <p className="mt-2 text-[var(--ink-2)]">{o.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps — connected timeline */}
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ color: v.accent }}>
            How it works
          </p>
          <h2 className="display mt-4" style={{ color: v.accent }}>
            Three steps, in order.
          </h2>
          <ol className="relative mt-12">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[14px] hidden h-px opacity-40 md:block"
              style={{ background: v.accent }}
              aria-hidden
            />
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {spec.steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span
                    className="relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border bg-[var(--bg)] text-[0.7rem] font-bold"
                    style={{ borderColor: v.accent, color: v.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-4 text-2xl" style={{ color: v.accent }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[var(--ink-2)]">{s.body}</p>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* Elsewhere — hairline rows */}
      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: v.accent }}>
            Why {v.name}
          </p>
          <div className="mt-8">
            {spec.why.map(([from, to]) => (
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
                <span style={{ color: v.accent }}>→</span>
                <div>
                  <p
                    className="text-[0.65rem] font-bold uppercase tracking-[0.14em]"
                    style={{ color: v.accent }}
                  >
                    With {v.name}
                  </p>
                  <p className="mt-1 text-[var(--ink)]">{to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <p
            className="display max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.2rem)] italic"
            style={{ color: v.accent }}
          >
            {spec.ethos}
          </p>
          <ul className="space-y-6">
            {spec.principles.map((p) => (
              <li
                key={p.title}
                className="border-l-2 pl-5"
                style={{ borderColor: v.accent }}
              >
                <h3 className="display text-xl">{p.title}</h3>
                <p className="mt-1 text-[var(--ink-2)]">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="waitlist"
        className="section scroll-mt-24 border-t border-[var(--line)] bg-[var(--bg-soft)] text-center"
      >
        <div className="container max-w-2xl">
          <h2
            className="display text-[clamp(1.8rem,3.2vw,2.6rem)]"
            style={{ color: v.accent }}
          >
            {v.cta}
          </h2>
          {v.statusNote && <p className="lede mx-auto mt-4">{v.statusNote}</p>}
          <div className="mt-8">
            <Button href={v.ctaHref}>{v.cta}</Button>
          </div>
          <p className="mt-8 text-sm text-[var(--ink-3)]">
            <Link href="/#arc" className="underline hover:text-[var(--ink)]">
              {v.name} is one of five — back to the Arc
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export function makeEarlyPage(id: "academy" | "talentx" | "venture") {
  const spec = specs[id];
  function Page() {
    return <EarlyVenturePage spec={spec} />;
  }
  return Page;
}

export function makeEarlyMetadata(
  id: "academy" | "talentx" | "venture",
): Metadata {
  const v = ventures[id];
  return {
    title: `${v.name}`,
    description: v.oneLiner,
  };
}
