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

export default function CofWafPage() {
  return (
    <main id="main">
      <section className="section pb-16 pt-20 md:pt-24">
        <div className="container">
          <ArcCrumb active="cofwaf" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--terracotta)]">
                Restaurant · Café · QSR Consulting
              </p>
              <h1 className="display mt-4 text-[clamp(2.3rem,4.4vw,3.6rem)]">
                Find your missing piece.
              </h1>
              <p className="lede mt-6 text-[1.1rem]">
                Every restaurant runs on three things — Profit, Identity and
                Experience. CofWaf finds the one that has gone missing, then
                helps you put it back on the plate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={WHATSAPP_COFWAF} external variant="secondary">
                  Talk on WhatsApp
                </Button>
                <Button href="#services" variant="ghost">
                  See services
                </Button>
              </div>
              <p className="mt-4 text-sm text-[var(--ink-3)]">+91 99744 06111 · usually answers same day</p>
            </div>
            <div className="media-frame relative aspect-[4/3]">
              <Image
                src="/images/visual-cofwaf-hero.jpg"
                alt="Vegetarian fine-dining plating — CofWaf culinary craft"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2">
            {cofwafExtras.chips.map((c) => (
              <li key={c} className="chip">
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
            <h2 className="display mt-4 text-[clamp(1.9rem,3.2vw,2.7rem)]">
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
          <div className="media-frame relative aspect-[5/4]">
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

      <section id="services" className="section scroll-mt-24">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>
            The menu
          </p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)]">
            Build. Scale. Sustain.
          </h2>
          <p className="lede mt-4">
            Three courses, in the order they are served. Each WhatsApp button
            opens with that enquiry already written.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {courses.map((c, i) => (
              <article key={c.title} className="panel flex flex-col p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                  {c.label}
                </p>
                <p className="display mt-2 text-5xl text-[color-mix(in_srgb,var(--terracotta)_35%,transparent)]">
                  {i + 1}
                </p>
                <h3 className="display -mt-4 text-3xl">{c.title}</h3>
                <p className="mt-4 flex-1 text-[var(--ink-2)]">{c.body}</p>
                <p className="mt-4 text-sm text-[var(--ink-3)]">{c.for}</p>
                <div className="mt-6">
                  <Button href={wa(c.title)} external variant="secondary" className="w-full">
                    Ask about {c.title}
                  </Button>
                </div>
              </article>
            ))}
          </div>
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
                  className="group block rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--terracotta)] hover:shadow-[var(--shadow-lift)]"
                >
                  <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[var(--ink)]">
                    “{p.quote}”
                  </p>
                  <p className="mt-3 text-sm font-bold text-[var(--terracotta)]">
                    {p.title}{" "}
                    <span className="inline-block transition group-hover:translate-x-1">→</span>
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
            <h2 className="display mt-4 text-[clamp(1.9rem,3vw,2.8rem)]">The Krater</h2>
            <p className="lede mt-4">
              Our own floor. Every system we recommend — SOPs, review discipline,
              Instagram cadence — runs at The Krater first. If it does not
              survive a Saturday rush, it does not reach a client.
            </p>
            <blockquote className="mt-8 border-l-2 border-[var(--terracotta)] pl-5 font-[family-name:var(--font-fraunces)] text-xl italic text-[var(--ink)]">
              The food was always good. What changed is that the business behind
              it finally runs as well as the kitchen does.
              <footer className="mt-3 text-sm not-italic text-[var(--ink-3)]">
                — The Krater floor team
              </footer>
            </blockquote>
            <div className="mt-8">
              <Button href={wa("The Krater systems for my restaurant")} external variant="secondary">
                Ask for this in my restaurant
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {[
              { v: "3.2×", l: "Instagram engagement growth" },
              { v: "4.5★", l: "Google rating maintained" },
              { v: "24h", l: "Every review answered within" },
            ].map((s) => (
              <div key={s.l} className="panel p-4 text-center md:p-6">
                <dt className="display text-3xl text-[var(--terracotta)] md:text-4xl">{s.v}</dt>
                <dd className="mt-2 text-xs leading-snug text-[var(--ink-3)]">{s.l}</dd>
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
          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
            {cofwafExtras.elsewhere.map(([from, to]) => (
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
          <h2 className="display mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">Shubh Aarambh</h2>
          <p className="lede mt-4">
            Once the operations are right, we also help you get the timing right —
            optional, always after the operational work.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cofwafExtras.shubh.map((s) => (
              <article key={s.title} className="panel p-5">
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
          <h2 className="display text-[clamp(1.9rem,3.4vw,2.8rem)]">
            Tell us about your restaurant.
          </h2>
          <p className="lede mx-auto mt-4">
            One message. No forms, no sign-up. WhatsApp opens with a short note
            already written — edit it, then send.
          </p>
          <div className="mt-8">
            <Button href={WHATSAPP_COFWAF} external variant="secondary">
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
        <Button href={WHATSAPP_COFWAF} external variant="secondary" className="w-full">
          Chat on WhatsApp · +91 99744 06111
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </main>
  );
}
