"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { arcVentures, CONTACT_EMAIL, WHATSAPP_COFWAF } from "@/data/ventures";

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
    const stage = String(data.get("venture") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nVenture/Stage: ${stage}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Keptilon enquiry — ${stage || "general"}`,
    )}&body=${body}`;
    setStatus("sent");
  }

  return (
    <main id="main">
      <section className="section pt-24 md:pt-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.4rem)]">
              Tell us where you are on the arc.
            </h1>
            <p className="lede mt-6">
              Not sure which venture fits? Send a short note — we&apos;ll route
              you honestly.
            </p>
            <p className="mt-8 text-sm text-[var(--ink-2)]">
              Or email{" "}
              <a className="font-semibold text-[var(--green)] underline" href={mailto}>
                {CONTACT_EMAIL}
              </a>
            </p>
            {showWhatsApp && (
              <div className="mt-8 rounded-xl border border-[var(--terracotta)] bg-[var(--terracotta-soft)] p-5">
                <p className="font-semibold text-[var(--ink)]">Restaurant enquiry?</p>
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

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-6 md:p-8"
          >
            <label className="block text-sm font-semibold text-[var(--ink)]">
              Stage / venture
              <select
                name="venture"
                value={venture}
                onChange={(e) => setVenture(e.target.value)}
                className="mt-2 w-full min-h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 text-[var(--ink)] focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]"
              >
                <option value="">Not sure yet</option>
                {arcVentures.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.stage} — {v.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block text-sm font-semibold text-[var(--ink)]">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full min-h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold text-[var(--ink)]">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full min-h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold text-[var(--ink)]">
              Phone
              <input
                name="phone"
                type="tel"
                className="mt-2 w-full min-h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]"
              />
            </label>

            <label className="mt-5 block text-sm font-semibold text-[var(--ink)]">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[var(--green-soft)]"
              />
            </label>

            <div className="mt-6">
              <Button type="submit" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </div>
            {status === "sent" && (
              <p className="mt-4 text-sm text-[var(--green)]" role="status">
                Opening your email client…
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
