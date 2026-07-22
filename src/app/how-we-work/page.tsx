import type { Metadata } from "next";
import Image from "next/image";
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
  { title: "Hinglish-first AI", body: "Built for how people actually speak." },
  { title: "24×7 AI employee", body: "Keeps working between conversations." },
  { title: "Voice conversations", body: "Talk the way you talk to an advisor." },
  { title: "Video coaching", body: "When guidance needs a person on the other side." },
  { title: "Task completion", body: "Finishes work — not another to-do list." },
  { title: "Business mentoring", body: "Stays through decisions, not just diagnosis." },
  { title: "Human experts on call", body: "Specialists when the stakes justify one." },
];

export default function HowWeWorkPage() {
  return (
    <main id="main">
      <section className="section pb-12 pt-24 md:pt-28">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How we work</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)]">
              We don&apos;t stop at advice.
            </h1>
            <p className="lede mt-6 text-[1.1rem]">
              Keptilon is a house of operators and guides. Insight matters — the
              work after it matters more.
            </p>
          </div>
          <div className="media-frame relative aspect-[16/11]">
            <Image
              src="/images/visual-operators-guides.jpg"
              alt="Operators and guides — craft and counsel"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container grid gap-6 md:grid-cols-2">
          <article
            className="rounded-2xl border border-[var(--line)] p-8 md:p-10"
            style={{
              background:
                "linear-gradient(160deg, var(--terracotta-soft), var(--bg-elevated))",
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
                "linear-gradient(160deg, var(--green-soft), var(--bg-elevated))",
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
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="panel relative p-6 pt-10">
                <span className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-[var(--green)] shadow-[0_0_0_5px_var(--green-soft)]" />
                <span className="display text-5xl text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--green)_28%,transparent)]">
                  {i + 1}
                </span>
                <h3 className="display mt-2 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-2)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <h2 className="display mt-4 max-w-[22ch] text-[clamp(1.6rem,3vw,2.3rem)]">
            Tools behind the guidance — not the headline.
          </h2>
          <p className="lede mt-4">
            AI, voice, video and human specialists support the ventures. They
            never replace the operator or the guide.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li key={c.title} className="panel p-5">
                <h3 className="font-bold text-[var(--ink)]">{c.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink-2)]">{c.body}</p>
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
