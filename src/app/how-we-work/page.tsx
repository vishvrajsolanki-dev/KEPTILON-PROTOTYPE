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
      <section className="section pb-10 pt-24 md:pt-28">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="display text-[clamp(2.2rem,4.5vw,3.4rem)]">
            How Keptilon works
          </h1>
          <p className="mt-4 text-[var(--terracotta)]">
            Two roles. One commitment: better decisions, built to last.
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-[var(--green)]" />
        </div>
      </section>

      <section className="pb-16">
        <div className="container relative grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] md:rounded-[3rem]">
            <div className="relative aspect-[3/4] min-h-[380px]">
              <Image
                src="/images/visual-cofwaf-hero.jpg"
                alt="Operators"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.85)] via-[rgba(28,25,23,0.2)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center text-white">
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--green)]">
                  ⌗
                </span>
                <h2 className="display text-3xl">Operators</h2>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/85">
                  We run systems on real floors before we recommend them.
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] md:rounded-[3rem]">
            <div className="relative aspect-[3/4] min-h-[380px]">
              <Image
                src="/images/visual-destiny-hero.jpg"
                alt="Guides"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.85)] via-[rgba(28,25,23,0.2)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center text-white">
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--terracotta)]">
                  ◆
                </span>
                <h2 className="display text-3xl">Guides</h2>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/85">
                  We stay until the decision becomes action.
                </p>
              </div>
            </div>
          </article>
          <p className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold shadow-[var(--shadow-lift)] md:block">
            <span className="text-[var(--green)]">Insight</span>
            <span className="mx-2 text-[var(--terracotta)]">→</span>
            <span className="text-[var(--terracotta)]">Action</span>
          </p>
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
