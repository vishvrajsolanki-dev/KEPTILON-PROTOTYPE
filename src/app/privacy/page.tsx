import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Keptilon Universe Pvt Ltd.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 space-y-4 text-[var(--ink-2)] first:mt-14">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--green)]" aria-hidden />
        <h2 className="display text-2xl text-[var(--green)]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

/** Privacy — legal elevation (content unchanged) */
export default function PrivacyPage() {
  return (
    <main id="main" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--green) 9%, transparent) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      <article className="container relative max-w-3xl pb-24 pt-24 md:pt-28">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.2rem,4vw,3.2rem)] text-[var(--green)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[var(--ink-3)]">Last updated: 22 Jul 2026</p>
        <div className="mt-8 h-px w-full bg-[var(--line)]" />

        <Section title="Who we are">
          <p>
            Keptilon Universe Pvt Ltd is the data controller (in Indian law, the
            “Data Fiduciary”) responsible for the information described in this
            policy.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Registered office: [REGISTERED OFFICE ADDRESS — TO BE FILLED]</li>
            <li>
              Privacy contact:{" "}
              <a
                className="text-[var(--green)] underline"
                href="mailto:privacy@keptilon.com"
              >
                privacy@keptilon.com
              </a>
            </li>
          </ul>
        </Section>

        <Section title="Information we collect">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Contact details — name, email, phone when you enrol or message us.
            </li>
            <li>WhatsApp number and message content when you message our bot.</li>
            <li>Birth details (Destiny) — date, time and place of birth.</li>
            <li>
              Business information (Venture) — plans, financials, company details.
            </li>
            <li>
              Professional information (TalentX, Academy) — CV, career history,
              skills.
            </li>
            <li>
              Payment information via Razorpay — we never store card/UPI
              credentials.
            </li>
            <li>Service records needed to fulfil your order.</li>
          </ul>
        </Section>

        <Section title="How we use information">
          <p>
            To deliver services across Destiny, Venture, TalentX and Academy; to
            reply on WhatsApp and email; to take payment; and to keep order and
            support records. We do not sell your personal information.
          </p>
        </Section>

        <Section title="Sharing">
          <p>
            We share only with Meta (WhatsApp), Razorpay, hosting/database
            providers, with your explicit consent (e.g. pitch to investor), or
            where the law requires it.
          </p>
        </Section>

        <Section title="How to delete your data">
          <ul className="list-disc space-y-2 pl-5">
            <li>WhatsApp: send DELETE to our WhatsApp business number.</li>
            <li>
              Email{" "}
              <a
                className="text-[var(--green)] underline"
                href="mailto:privacy@keptilon.com"
              >
                privacy@keptilon.com
              </a>{" "}
              with subject “Delete my data”.
            </li>
          </ul>
          <p>
            We confirm identity and delete within 30 days, retaining only legally
            required records.
          </p>
        </Section>

        <Section title="Contact and grievance officer">
          <p>
            Email{" "}
            <a
              className="text-[var(--green)] underline"
              href="mailto:privacy@keptilon.com"
            >
              privacy@keptilon.com
            </a>
            . Grievance Officer: [NAME — TO BE FILLED] ·{" "}
            <a
              className="text-[var(--green)] underline"
              href="mailto:grievance@keptilon.com"
            >
              grievance@keptilon.com
            </a>
            · Address: [TO BE FILLED].
          </p>
        </Section>

        <p className="mt-14 text-sm text-[var(--ink-3)]">
          <Link href="/" className="underline hover:text-[var(--ink)]">
            ← Back to Keptilon
          </Link>
          {" · "}
          <Link href="/terms" className="underline hover:text-[var(--ink)]">
            Terms and Conditions
          </Link>
        </p>
      </article>
    </main>
  );
}
