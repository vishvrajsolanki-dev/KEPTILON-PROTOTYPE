import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArcCrumb } from "@/components/ventures/ArcCrumb";
import { ventures, type VentureId } from "@/data/ventures";

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
      { title: "Executive programs", body: "Strategy and leadership for people already carrying the decisions." },
      { title: "AI learning", body: "Working fluency with the tools, not a vocabulary lesson about them." },
      { title: "Cohorts", body: "You learn beside people whose problems look like yours." },
      { title: "Mentorship", body: "A specialist who reviews your actual work, not a hypothetical case." },
    ],
    steps: [
      { title: "Assess", body: "Find the gap between what you can do and what your role now demands." },
      { title: "Teach", body: "A programme aimed squarely at that gap, and nothing else." },
      { title: "Apply", body: "You ship real work, and we review it." },
    ],
    why: [
      ["A course you finish and forget.", "A skill you can still use on Monday."],
      ["A certificate that proves attendance.", "Work you shipped that proves capability."],
      ["Generic video libraries.", "One programme aimed at the gap in your role."],
    ],
    ethos: "Educators who care whether it worked.",
    principles: [
      { title: "Application over completion", body: "Judged by what you can do on Monday." },
      { title: "Taught by practitioners", body: "People who still do the work they teach." },
      { title: "Reviewed, not just delivered", body: "Someone senior tells you the truth about your work." },
    ],
  },
  talentx: {
    id: "talentx",
    kicker: "Assessment & placement",
    title: "A résumé tells you where someone has been. It does not tell you what they can do.",
    lede: "We measure capability directly, then match it to the companies that actually need it.",
    offerings: [
      { title: "Capability assessment", body: "Structured evaluation of what a person can actually deliver." },
      { title: "Executive search", body: "Senior roles where a bad fit is expensive and slow to undo." },
      { title: "Talent mapping", body: "A picture of the market before you open the role." },
      { title: "Retention", body: "Placement is not the finish line; staying is." },
    ],
    steps: [
      { title: "Measure", body: "Assess capability rather than reading it off a CV." },
      { title: "Match", body: "Pair that capability with companies that need exactly it." },
      { title: "Hold", body: "Follow the placement — a hire that leaves is a hire that failed." },
    ],
    why: [
      ["A résumé of where someone has been.", "An assessment of what they can do."],
      ["Screening for school and last logo.", "Measuring the work itself."],
      ["A placement, then you're alone.", "A hire we follow, because staying is the result."],
    ],
    ethos: "We measure capability, not pedigree.",
    principles: [
      { title: "Capability, measured directly", body: "Evaluate the work, not the words describing it." },
      { title: "Fit over pedigree", body: "School and logo stop deciding who gets the room." },
      { title: "Placement is not the finish line", body: "We follow the hire." },
    ],
  },
  venture: {
    id: "venture",
    kicker: "Capital & company building",
    title: "Capital without direction is just money. Direction without capital is just a plan.",
    lede: "We stand between founders who need funding and investors who need somewhere worth putting it.",
    offerings: [
      { title: "Fundraising", body: "Getting you ready to raise, then getting you in the room." },
      { title: "Consulting", body: "The strategy work that decides whether the raise was worth doing." },
      { title: "Company building", body: "Formation, licensing, structure — the unglamorous half." },
      { title: "Investor network", body: "Introductions to people who fund things that look like yours." },
    ],
    steps: [
      { title: "Sharpen", body: "Pressure-test the business until the story holds up." },
      { title: "Connect", body: "Put it in front of capital that is a genuine fit." },
      { title: "Build", body: "Stay through execution — where most of it is won or lost." },
    ],
    why: [
      ["Capital with no direction.", "Capital pointed at a company worth building."],
      ["A pitch deck and a wish.", "A business pressure-tested until the story holds."],
      ["Funded, then left alone.", "A partner who stays through the build."],
    ],
    ethos: "We stay through the part that is hard.",
    principles: [
      { title: "Direction before capital", body: "Sharpen first, then find the money." },
      { title: "The right room, not any room", body: "Investors who fund things like yours." },
      { title: "Present through the build", body: "Stay through execution, not just the raise." },
    ],
  },
};

function EarlyVenturePage({ spec }: { spec: EarlySpec }) {
  const v = ventures[spec.id];
  return (
    <main id="main">
      <section className="section pb-12 pt-20 md:pt-24">
        <div className="container max-w-3xl">
          <ArcCrumb active={spec.id} />
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: v.accent }}>
            {spec.kicker}
          </p>
          <h1 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">{spec.title}</h1>
          <p className="lede mt-6">{spec.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={v.ctaHref}>{v.cta}</Button>
            <Button href="/#arc" variant="ghost">
              See the Arc
            </Button>
          </div>
          {v.statusNote && (
            <p className="mt-6 inline-block rounded-full border border-dashed border-[var(--line)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--ink-3)]">
              {v.statusNote}
            </p>
          )}
        </div>
      </section>

      {spec.id === "talentx" && (
        <section className="pb-8">
          <div className="container flex flex-wrap gap-3">
            <Button href="/contact?venture=talentx&role=employer" variant="secondary">
              I&apos;m hiring
            </Button>
            <Button href="/contact?venture=talentx&role=candidate" variant="ghost">
              I&apos;m a candidate
            </Button>
          </div>
        </section>
      )}

      {spec.id === "venture" && (
        <section className="pb-8">
          <div className="container flex flex-wrap gap-3">
            <Button href="/contact?venture=venture&role=founder" variant="secondary">
              I&apos;m a founder
            </Button>
            <Button href="/contact?venture=venture&role=investor" variant="ghost">
              I&apos;m an investor
            </Button>
          </div>
        </section>
      )}

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-4">Inside {v.name}</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {spec.offerings.map((o) => (
              <article key={o.title} className="bg-[var(--bg)] p-6 md:p-8">
                <h3 className="display text-xl">{o.title}</h3>
                <p className="mt-3 text-[var(--ink-2)]">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-4">Three steps, in order.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {spec.steps.map((s, i) => (
              <li key={s.title} className="relative pt-8">
                <span
                  className="absolute left-0 top-[21px] h-2.5 w-2.5 rounded-full"
                  style={{ background: v.accent }}
                />
                <span className="display text-5xl text-transparent" style={{ WebkitTextStroke: `1px color-mix(in srgb, ${v.accent} 30%, transparent)` }}>
                  {i + 1}
                </span>
                <h3 className="display mt-2 text-2xl">{s.title}</h3>
                <p className="mt-2 text-[var(--ink-2)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">Why {v.name}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)]">
            {spec.why.map(([from, to]) => (
              <div
                key={from}
                className="grid gap-3 border-b border-[var(--line)] p-5 last:border-b-0 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:p-6"
              >
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                    Elsewhere
                  </p>
                  <p className="mt-1 text-[var(--ink-3)]">{from}</p>
                </div>
                <span className="text-[var(--green)] md:rotate-0 rotate-90 justify-self-start md:justify-self-center">
                  →
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--green)]">
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
          <p className="display max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.2rem)] italic">
            {spec.ethos}
          </p>
          <ul className="space-y-6">
            {spec.principles.map((p) => (
              <li key={p.title} className="border-l border-[var(--line)] pl-5">
                <span className="mb-2 block h-5 w-0.5 -ml-5 bg-[var(--green)]" aria-hidden />
                <h3 className="display text-xl">{p.title}</h3>
                <p className="mt-1 text-[var(--ink-2)]">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="waitlist" className="section scroll-mt-24 border-t border-[var(--line)] bg-[var(--bg-soft)] text-center">
        <div className="container max-w-2xl">
          <h2 className="display text-[clamp(1.8rem,3.2vw,2.6rem)]">{v.cta}</h2>
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

export function makeEarlyMetadata(id: "academy" | "talentx" | "venture"): Metadata {
  const v = ventures[id];
  return {
    title: `${v.name}`,
    description: v.oneLiner,
  };
}
