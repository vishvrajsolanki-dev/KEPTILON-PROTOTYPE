import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Keptilon Universe Pvt Ltd.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="section pt-24 md:pt-28">
      <article className="container max-w-3xl prose-like">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--ink-3)]">Last updated: 22 Jul 2026</p>

        <section className="mt-12 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">Who we are</h2>
          <p>
            Keptilon Universe Pvt Ltd is the data controller (in Indian law, the
            “Data Fiduciary”) responsible for the information described in this
            policy.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Registered office: [REGISTERED OFFICE ADDRESS — TO BE FILLED]</li>
            <li>
              Privacy contact:{" "}
              <a className="text-[var(--green)] underline" href="mailto:privacy@keptilon.com">
                privacy@keptilon.com
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">Information we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact details — name, email, phone when you enrol or message us.</li>
            <li>WhatsApp number and message content when you message our bot.</li>
            <li>Birth details (Destiny) — date, time and place of birth.</li>
            <li>Business information (Venture) — plans, financials, company details.</li>
            <li>Professional information (TalentX, Academy) — CV, career history, skills.</li>
            <li>Payment information via Razorpay — we never store card/UPI credentials.</li>
            <li>Service records needed to fulfil your order.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">How we use information</h2>
          <p>
            To deliver services across Destiny, Venture, TalentX and Academy; to
            reply on WhatsApp and email; to take payment; and to keep order and
            support records. We do not sell your personal information.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">Sharing</h2>
          <p>
            We share only with Meta (WhatsApp), Razorpay, hosting/database
            providers, with your explicit consent (e.g. pitch to investor), or
            where the law requires it.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">How to delete your data</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>WhatsApp: send DELETE to our WhatsApp business number.</li>
            <li>
              Email{" "}
              <a className="text-[var(--green)] underline" href="mailto:privacy@keptilon.com">
                privacy@keptilon.com
              </a>{" "}
              with subject “Delete my data”.
            </li>
          </ul>
          <p>We confirm identity and delete within 30 days, retaining only legally required records.</p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">Contact and grievance officer</h2>
          <p>
            Email{" "}
            <a className="text-[var(--green)] underline" href="mailto:privacy@keptilon.com">
              privacy@keptilon.com
            </a>
            . Grievance Officer: [NAME — TO BE FILLED] ·{" "}
            <a className="text-[var(--green)] underline" href="mailto:grievance@keptilon.com">
              grievance@keptilon.com
            </a>
            · Address: [TO BE FILLED].
          </p>
        </section>

        <p className="mt-12 text-sm text-[var(--ink-3)]">
          <Link href="/" className="underline hover:text-[var(--ink)]">
            ← Back to Keptilon
          </Link>
        </p>
      </article>
    </main>
  );
}
