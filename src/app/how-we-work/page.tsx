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
    n: "01",
    title: "Clarify",
    body: "Define what matters and what’s possible.",
    tone: "green" as const,
  },
  {
    n: "02",
    title: "Choose",
    body: "Prioritize the right bets and commit.",
    tone: "terracotta" as const,
  },
  {
    n: "03",
    title: "Act",
    body: "Execute with focus and discipline.",
    tone: "green" as const,
  },
  {
    n: "04",
    title: "Stay",
    body: "Adapt, learn, and compound over time.",
    tone: "terracotta" as const,
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

/** How We Work elevation — exact approved mockup */
export default function HowWeWorkPage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden pb-8 pt-20 md:pb-10 md:pt-24">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--green) 10%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-8 h-[380px] w-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 9%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative mx-auto max-w-2xl text-center">
          <h1 className="display text-[clamp(2.3rem,4.6vw,3.5rem)] text-[var(--green)]">
            How Keptilon works
          </h1>
          <p className="mt-4 font-[family-name:var(--font-cormorant)] text-[1.15rem] text-[var(--terracotta)] md:text-[1.3rem]">
            Two roles. One commitment: better decisions, built to last.
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[var(--green)]" />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container relative grid gap-5 md:grid-cols-2 md:gap-7">
          <article className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem]">
            <div className="relative flex min-h-[440px] flex-col md:min-h-[520px]">
              <div className="relative min-h-[260px] flex-1">
                <Image
                  src="/images/visual-cofwaf-hero.jpg"
                  alt="Operators"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
              <div className="relative bg-[var(--green)] px-8 py-9 text-center text-[#faf7f2]">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--destiny)_85%,white)] text-[var(--green)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 20c-1-4 1.5-6 4-8-2 .2-4.5 1-5.5 3C9.5 12 7 11 5 12c2.5 1.5 4.5 4 4.5 8h2.5z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20c1-4-1.5-6-4-8 2 .2 4.5 1 5.5 3C14.5 12 17 11 19 12c-2.5 1.5-4.5 4-4.5 8H12z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="display text-3xl text-[#faf7f2]">Operators</h2>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/88">
                  We run ventures and build what endures.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem]">
            <div className="relative flex min-h-[440px] flex-col md:min-h-[520px]">
              <div className="relative min-h-[260px] flex-1">
                <Image
                  src="/images/visual-destiny-hero.jpg"
                  alt="Guides"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div
                className="relative px-8 py-9 text-center text-[#faf7f2]"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in srgb, var(--terracotta) 72%, #1c1917) 0%, var(--terracotta) 100%)",
                }}
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--destiny)_85%,white)] text-[var(--terracotta)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
                    <path
                      d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </span>
                <h2 className="display text-3xl text-[#faf7f2]">Guides</h2>
                <p className="mx-auto mt-3 max-w-[28ch] text-sm text-white/88">
                  We bring perspective, challenge, and clarity.
                </p>
              </div>
            </div>
          </article>

          <p className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-5 py-2.5 font-[family-name:var(--font-cormorant)] text-base shadow-[var(--shadow-lift)] md:block">
            <span className="text-[var(--green)]">Insight</span>
            <span className="mx-2 text-[var(--ink-3)]">→</span>
            <span className="text-[var(--terracotta)]">Action</span>
          </p>
        </div>
      </section>

      {/* Method timeline — not four cards */}
      <section className="section border-t border-[var(--line)]">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)]">
                Our method
              </p>
              <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] text-[var(--green)]">
                Clarify → Choose
                <br />
                → Act → Stay
              </h2>
            </div>

            <ol className="relative">
              <div
                className="pointer-events-none absolute left-[12%] right-[12%] top-[18px] hidden h-px bg-[var(--terracotta)] opacity-50 md:block"
                aria-hidden
              />
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
                {steps.map((step) => {
                  const color =
                    step.tone === "green" ? "var(--green)" : "var(--terracotta)";
                  return (
                    <li key={step.title} className="relative text-center md:text-left">
                      <span
                        className="relative z-[1] mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] bg-[var(--bg)] text-[0.7rem] font-bold md:mx-0"
                        style={{ borderColor: color, color }}
                      >
                        {step.n}
                      </span>
                      <h3
                        className="font-[family-name:var(--font-cormorant)] text-xl font-semibold"
                        style={{ color }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-snug text-[var(--ink-2)]">
                        {step.body}
                      </p>
                    </li>
                  );
                })}
              </div>
            </ol>
          </div>
        </div>
      </section>

      {/* Capabilities as quiet chips — AI behind the curtain */}
      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <h2 className="display mt-4 max-w-[22ch] text-[clamp(1.6rem,3vw,2.3rem)] text-[var(--green)]">
            Tools behind the guidance — not the headline.
          </h2>
          <p className="lede mt-4">
            AI, voice, video and human specialists support the ventures. They
            never replace the operator or the guide.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {capabilities.map((c) => (
              <li
                key={c.title}
                className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-2.5"
                title={c.body}
              >
                <span className="text-sm font-semibold text-[var(--ink)]">
                  {c.title}
                </span>
                <span className="ml-2 hidden text-sm text-[var(--ink-3)] sm:inline">
                  — {c.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="display text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--green)]">
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
