"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";
import { arcVentures, CONTACT_EMAIL, WHATSAPP_COFWAF } from "@/data/ventures";

const fieldClass =
  "mt-2 w-full min-h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 text-[var(--ink)] transition focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]";

/** Contact elevation — exact approved mockup */
export default function ContactClient() {
  const params = useSearchParams();
  const initialVenture = params.get("venture") ?? "";
  const [venture, setVenture] = useState(initialVenture);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const showWhatsApp = venture === "cofwaf";

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Keptilon enquiry${venture ? ` — ${venture}` : ""}`,
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
  }, [venture]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const stage = venture;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nVenture/Stage: ${stage || "not sure"}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Keptilon enquiry — ${stage || "general"}`,
    )}&body=${body}`;
    setStatus("sent");
  }

  const chips = [
    { id: "", label: "Not sure yet", accent: "var(--ink-3)" },
    ...arcVentures.map((v) => ({
      id: v.id,
      label: v.name,
      accent: v.accent,
    })),
  ];

  return (
    <main id="main">
      <section className="relative overflow-hidden pb-12 pt-20 md:pb-16 md:pt-24">
        <div
          className="pointer-events-none absolute -left-28 bottom-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--green) 10%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-10 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 9%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="container relative grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="max-w-xl pt-2">
            <h1 className="display text-[clamp(2.3rem,4.6vw,3.5rem)] text-[var(--green)]">
              Tell us where you are on the arc.
            </h1>
            <p className="lede mt-6 text-[1.1rem]">
              Not sure which venture fits? Send a short note — we&apos;ll route
              you honestly.
            </p>
            <div className="mt-8 h-px w-16 bg-[var(--line)]" />
            <p className="mt-6 text-sm text-[var(--ink-2)]">
              Prefer email? Write to us at{" "}
              <a
                className="font-semibold text-[var(--green)] underline underline-offset-2"
                href={mailto}
              >
                {CONTACT_EMAIL}
              </a>
            </p>

            {showWhatsApp && (
              <div className="mt-8 border-l-2 border-[var(--terracotta)] pl-5">
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--ink)]">
                  Restaurant enquiry?
                </p>
                <p className="mt-2 text-sm text-[var(--ink-2)]">
                  CofWaf answers fastest on WhatsApp.
                </p>
                <div className="mt-4">
                  <Button href={WHATSAPP_COFWAF} external variant="secondary">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Interaction surface — only allowed card */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] md:p-8"
          >
            <input type="hidden" name="venture" value={venture} />

            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--ink)]">
              Where are you on your journey?
            </p>

            <fieldset className="mt-5">
              <legend className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--ink-3)]">
                Stage / venture
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((chip) => {
                  const active = venture === chip.id;
                  return (
                    <button
                      key={chip.id || "unsure"}
                      type="button"
                      onClick={() => setVenture(chip.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-[var(--green)] bg-[var(--green-soft)] text-[var(--ink)]"
                          : "border-[var(--line)] bg-[var(--bg)] text-[var(--ink-2)] hover:border-[var(--ink-3)] hover:text-[var(--ink)]"
                      }`}
                      aria-pressed={active}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: chip.accent }}
                        aria-hidden
                      />
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="mt-6 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
              Name
              <input required name="name" className={fieldClass} />
            </label>

            <label className="mt-5 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
              Email
              <input required type="email" name="email" className={fieldClass} />
            </label>

            <label className="mt-5 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
              Phone
              <input name="phone" type="tel" className={fieldClass} />
            </label>

            <label className="mt-5 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className={`${fieldClass} py-3`}
              />
            </label>

            <div className="mt-7 flex flex-col items-start gap-3 sm:items-center">
              <Button type="submit">Send message</Button>
              <p className="text-center text-xs text-[var(--ink-3)]">
                We typically respond within 2 business days.
              </p>
            </div>
            {status === "sent" && (
              <p className="mt-4 text-sm text-[var(--green)]" role="status">
                Opening your email client…
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Quiet Arc routing cue — locked Self→Capital */}
      <section className="border-t border-[var(--line)] py-14 md:py-16">
        <div className="container">
          <p className="text-center font-[family-name:var(--font-cormorant)] text-2xl text-[var(--green)]">
            The Arc
          </p>
          <p className="mx-auto mt-2 max-w-[42ch] text-center text-sm text-[var(--ink-2)]">
            Five stages. One steady path from where you are to where you&apos;re
            going.
          </p>

          <div className="relative mx-auto mt-10 max-w-4xl">
            <svg
              viewBox="0 0 800 80"
              className="pointer-events-none absolute inset-x-0 top-5 hidden h-14 w-full md:block"
              aria-hidden
            >
              <path
                d="M40 50 C 160 10, 280 10, 400 45 S 640 90, 760 25"
                fill="none"
                stroke="var(--terracotta)"
                strokeWidth="1.3"
                strokeDasharray="4 6"
                opacity="0.55"
              />
            </svg>

            <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
              {arcStages.map((stage, i) => (
                <li key={stage.id} className="text-center">
                  <Link
                    href={stage.href}
                    className="group inline-flex flex-col items-center"
                  >
                    <span
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--bg)] transition group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-soft)]"
                      style={{ borderColor: stage.accent }}
                    >
                      <StageIcon
                        name={stage.icon}
                        color={stage.accent}
                        size={18}
                      />
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--ink)]">
                      {stage.stage}
                    </span>
                    <span className="mt-1 max-w-[14ch] text-[0.7rem] leading-snug text-[var(--ink-2)]">
                      {stage.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
