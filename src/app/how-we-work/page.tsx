import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Operators and guides — Keptilon clarifies, helps you choose, acts with you, and stays. AI and tools sit behind the work.",
};

const steps = [
  {
    title: "Clarify",
    body: "Find the real gap — in a kitchen, a chart, a team, or a raise — before anyone sells a solution.",
  },
  {
    title: "Choose",
    body: "Pick the path you can stand behind. We will tell you honestly if we are the wrong people.",
  },
  {
    title: "Act",
    body: "Install systems, make the decision, ship the work — not a deck you are left to execute alone.",
  },
  {
    title: "Stay",
    body: "Reviews, course-corrections, retention. Advice that ends at delivery is not our model.",
  },
];

const capabilities = [
  "Hinglish-first AI",
  "24×7 AI employee",
  "Voice conversations",
  "Video coaching",
  "Task completion",
  "Business mentoring",
  "Human experts on call",
];

export default function HowWeWorkPage() {
  return (
    <main id="main">
      <section className="section pb-12 pt-24 md:pt-28">
        <div className="container max-w-3xl">
          <p className="eyebrow">How we work</p>
          <h1 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)]">
            We don&apos;t stop at advice.
          </h1>
          <p className="lede mt-6">
            Keptilon is a house of operators and guides. Insight matters — the
            work after it matters more.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container grid gap-6 md:grid-cols-2">
          <article
            className="rounded-2xl border border-[var(--line)] p-8 md:p-10"
            style={{
              background:
                "linear-gradient(160deg, var(--terracotta-soft), var(--bg-soft))",
            }}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
              Operators
            </p>
            <h2 className="display mt-3 text-3xl">Real floors first</h2>
            <p className="mt-4 text-[var(--ink-2)]">
              We run systems on our own restaurant floor — The Krater — before
              we recommend them. If it does not survive a Saturday rush, it does
              not reach a client.
            </p>
          </article>
          <article
            className="rounded-2xl border border-[var(--line)] p-8 md:p-10"
            style={{
              background:
                "linear-gradient(160deg, var(--green-soft), var(--bg-soft))",
            }}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--green)]">
              Guides
            </p>
            <h2 className="display mt-3 text-3xl">Through the decision</h2>
            <p className="mt-4 text-[var(--ink-2)]">
              Readings, plans and mentoring that continue until action is taken —
              careers chosen, habits changed, companies built.
            </p>
          </article>
        </div>
      </section>

      <section className="section border-t border-[var(--line)]">
        <div className="container">
          <p className="eyebrow">Method</p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">
            Clarify → Choose → Act → Stay
          </h2>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <div
              className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-[var(--green)] to-transparent md:block"
              aria-hidden
            />
            {steps.map((step, i) => (
              <li key={step.title} className="relative pt-10">
                <span
                  className="absolute left-0 top-[21px] h-2.5 w-2.5 rounded-full bg-[var(--green)] shadow-[0_0_0_5px_var(--green-soft)]"
                  aria-hidden
                />
                <span className="display absolute -top-2 left-0 text-6xl text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--green)_28%,transparent)]">
                  {i + 1}
                </span>
                <h3 className="display relative mt-8 text-2xl">{step.title}</h3>
                <p className="mt-3 text-[var(--ink-2)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <h2 className="display mt-4 max-w-[20ch] text-[clamp(1.6rem,3vw,2.3rem)]">
            Tools behind the guidance — not the headline.
          </h2>
          <p className="lede mt-4">
            AI, voice, video and human specialists support the ventures. They
            never replace the operator or the guide.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold text-[var(--ink-2)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)]">
            Ready to begin?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Talk to Keptilon</Button>
            <Button href="/#arc" variant="secondary">
              Start where you are
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
