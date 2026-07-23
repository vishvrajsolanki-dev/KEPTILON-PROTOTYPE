import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArcCrumb } from "@/components/ventures/ArcCrumb";
import { cofwafExtras } from "@/data/content";
import { WHATSAPP_COFWAF } from "@/data/ventures";

export const metadata: Metadata = {
  title: "CofWaf — Restaurant, Café & QSR Consulting",
  description:
    "Restaurant consulting for independent owners — Build, Scale, Sustain. Menu engineering, food cost, SOPs, delivery and more. Operators who run The Krater.",
};

function wa(topic: string) {
  return `https://wa.me/919974406111?text=${encodeURIComponent(
    `Hi Keptilon CofWaf\n\nI came from keptilon.com.\nI'd like to ask about: ${topic}\n\nRestaurant / brand:\nCity:\n`,
  )}`;
}

const courses = [
  {
    label: "First course",
    title: "Build",
    body: "You have the idea. We build the restaurant around it — open on a date you chose, with a menu that already makes money on day one.",
    for: "For you if you have not opened yet.",
  },
  {
    label: "Main course",
    title: "Scale",
    body: "The food works. Now make the business grow — same kitchen, same team, materially better month.",
    for: "For you if you are open and the business is not keeping up.",
  },
  {
    label: "Standing order",
    title: "Sustain",
    body: "Stay excellent long after opening week. Someone is watching the numbers every month — and it is not only you.",
    for: "For you if systems exist and you want them next year.",
  },
];

const problems = [
  { quote: "I am busy but I am not making money.", title: "Food-cost rescue" },
  { quote: "My best-selling dish might be losing me money.", title: "Menu engineering" },
  { quote: "The aggregators take everything and I still rank badly.", title: "Delivery-platform tune-up" },
  { quote: "I do not own a single one of my customers.", title: "Your own ordering channel" },
  { quote: "One bad month of reviews is still hurting me.", title: "Reviews and reputation" },
  { quote: "We post constantly and nothing comes of it.", title: "Social content that sells" },
  { quote: "We look like everyone else on the street.", title: "Brand and identity" },
  { quote: "It only runs properly when I am standing there.", title: "SOPs and staff training" },
  { quote: "I want to grow but I am scared to.", title: "Second outlet & franchise" },
  { quote: "I need funding and my numbers are a mess.", title: "Investor and pitch support" },
];

/** CofWaf elevation — exact approved mockup direction */
export default function CofWafPage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden pb-8 pt-8 md:pt-10">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 12%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full"
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
            <span className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--terracotta)]">
              CofWaf
            </span>
          </div>

          {/* Hero — open composition, image as visual plane */}
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <div className="max-w-xl py-2 lg:py-8">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
                Restaurant · Café · QSR Consulting
              </p>
              <h1 className="display mt-4 text-[clamp(2.5rem,4.6vw,3.7rem)] text-[var(--terracotta)]">
                Find your missing piece.
              </h1>
              <p className="lede mt-6 text-[1.08rem]">
                CofWaf helps food businesses grow through{" "}
                <span className="font-semibold text-[var(--terracotta)]">
                  Profit, Identity, and Experience
                </span>
                . Every restaurant is missing one — we find it, then put it back
                on the plate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={WHATSAPP_COFWAF}
                  external
                  className="!bg-[var(--terracotta)] !text-[#faf7f2] hover:!bg-[color-mix(in_srgb,var(--terracotta)_88%,black)]"
                  showArrow={false}
                >
                  Talk on WhatsApp
                </Button>
                <Button href="#services" variant="secondary">
                  See Build · Scale · Sustain
                </Button>
              </div>
              <p className="mt-4 text-sm text-[var(--ink-3)]">+91 99744 06111</p>
            </div>

            <div className="relative aspect-[5/4] min-h-[280px] w-full overflow-hidden lg:min-h-[460px]">
              <Image
                src="/images/visual-cofwaf-hero.jpg"
                alt="Chef plating — CofWaf culinary operations"
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
            <ArcCrumb active="cofwaf" />
          </div>

          <ul className="mt-2 flex flex-wrap gap-2">
            {cofwafExtras.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3.5 py-1.5 text-[0.78rem] font-semibold text-[var(--ink-2)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
              The kitchen
            </p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.7rem)] text-[var(--terracotta)]">
              {cofwafExtras.kitchen.title}
            </h2>
            <p className="lede mt-4">{cofwafExtras.kitchen.body}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {cofwafExtras.kitchen.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[var(--ink-2)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/visual-operators-guides.jpg"
              alt="Kitchen operations atmosphere"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* Build · Scale · Sustain — editorial timeline, not three cards */}
      <section id="services" className="section scroll-mt-24">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            The menu
          </p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--terracotta)]">
            Build. Scale. Sustain.
          </h2>
          <p className="lede mt-4">
            Three courses, in the order they are served. Each WhatsApp button
            opens with that enquiry already written.
          </p>

          <ol className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-[14px] hidden h-px bg-[var(--terracotta)] opacity-40 lg:block"
              aria-hidden
            />
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
              {courses.map((c, i) => (
                <li key={c.title} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border border-[var(--terracotta)] bg-[var(--bg)] text-[0.7rem] font-bold text-[var(--terracotta)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                      {c.label}
                    </span>
                  </div>
                  <h3 className="display mt-4 text-3xl text-[var(--terracotta)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[var(--ink-2)]">{c.body}</p>
                  <p className="mt-3 text-sm text-[var(--ink-3)]">{c.for}</p>
                  <div className="mt-6">
                    <Button href={wa(c.title)} external variant="secondary">
                      Ask about {c.title}
                    </Button>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            À la carte
          </p>
          <h2 className="display mt-4 max-w-[18ch] text-[clamp(1.8rem,3vw,2.6rem)]">
            Or just the one thing that is bleeding.
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {problems.map((p) => (
              <li key={p.title}>
                <a
                  href={wa(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-[var(--line)] py-5 transition hover:border-[var(--terracotta)] md:border md:border-[var(--line)] md:rounded-xl md:bg-[var(--bg)] md:px-5 md:py-5"
                >
                  <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[var(--ink)]">
                    “{p.quote}”
                  </p>
                  <p className="mt-3 text-sm font-bold text-[var(--terracotta)]">
                    {p.title}{" "}
                    <span className="inline-block transition group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
              Case study
            </p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3vw,2.8rem)] text-[var(--terracotta)]">
              The Krater
            </h2>
            <p className="lede mt-4">
              Our own floor. Every system we recommend — SOPs, review discipline,
              Instagram cadence — runs at The Krater first. If it does not
              survive a Saturday rush, it does not reach a client.
            </p>
            <blockquote className="mt-8 border-l-2 border-[var(--terracotta)] pl-5 font-[family-name:var(--font-cormorant)] text-xl italic text-[var(--ink)]">
              The food was always good. What changed is that the business behind
              it finally runs as well as the kitchen does.
              <footer className="mt-3 text-sm not-italic text-[var(--ink-3)]">
                — The Krater floor team
              </footer>
            </blockquote>
            <div className="mt-8">
              <Button
                href={wa("The Krater systems for my restaurant")}
                external
                variant="secondary"
              >
                Ask for this in my restaurant
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-6 border-y border-[var(--line)] py-6">
            {[
              { v: "3.2×", l: "Instagram engagement growth" },
              { v: "4.5★", l: "Google rating maintained" },
              { v: "24h", l: "Every review answered within" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <dt className="display text-3xl text-[var(--terracotta)] md:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-2 text-xs leading-snug text-[var(--ink-3)]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            Why CofWaf
          </p>
          <h2 className="display mt-4 max-w-[20ch] text-[clamp(1.8rem,3vw,2.5rem)]">
            Most consultants leave a deck. We leave a kitchen that runs.
          </h2>
          <div className="mt-10">
            {cofwafExtras.elsewhere.map(([from, to]) => (
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
                <span className="text-[var(--terracotta)]">→</span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--terracotta)]">
                    With CofWaf
                  </p>
                  <p className="mt-1 text-[var(--ink)]">{to}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            Signature add-on
          </p>
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--terracotta)]">
            Shubh Aarambh
          </h2>
          <p className="lede mt-4">
            Once the operations are right, we also help you get the timing right —
            optional, always after the operational work.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cofwafExtras.shubh.map((s) => (
              <article key={s.title} className="border-t border-[var(--terracotta)] pt-4">
                <h3 className="display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-2)]">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button href={wa("Shubh Aarambh")} external variant="ghost">
              Ask about Shubh Aarambh
            </Button>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--line)] bg-[var(--bg-soft)] text-center">
        <div className="container max-w-3xl">
          <h2 className="display text-[clamp(1.9rem,3.4vw,2.8rem)] text-[var(--terracotta)]">
            Tell us about your restaurant.
          </h2>
          <p className="lede mx-auto mt-4">
            One message. No forms, no sign-up. WhatsApp opens with a short note
            already written — edit it, then send.
          </p>
          <div className="mt-8">
            <Button
              href={WHATSAPP_COFWAF}
              external
              className="!bg-[var(--terracotta)] !text-[#faf7f2] hover:!bg-[color-mix(in_srgb,var(--terracotta)_88%,black)]"
              showArrow={false}
            >
              Tell us about your restaurant
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--ink-3)]">
            <Link href="/#arc" className="underline hover:text-[var(--ink)]">
              Back to the Arc
            </Link>
          </p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--nav-bg)] p-3 backdrop-blur-md md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <Button
          href={WHATSAPP_COFWAF}
          external
          className="w-full !bg-[var(--terracotta)] !text-[#faf7f2]"
          showArrow={false}
        >
          Chat on WhatsApp · +91 99744 06111
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </main>
  );
}
