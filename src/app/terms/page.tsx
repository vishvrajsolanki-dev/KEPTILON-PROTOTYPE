import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Keptilon Universe Pvt Ltd.",
};

export default function TermsPage() {
  return (
    <main id="main" className="section pt-24 md:pt-28">
      <article className="container max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-4xl">Terms and Conditions</h1>
        <p className="mt-4 text-sm text-[var(--ink-3)]">Last updated: 22 Jul 2026</p>

        <section className="mt-12 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">1. Introduction</h2>
          <p>
            Welcome to Keptilon — a house of ventures serving individuals,
            professionals, founders and leaders. By accessing or using our
            services, you agree to these Terms and Conditions.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">2. Venture-specific terms</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="text-[var(--ink)]">Destiny:</strong> Astrological,
              numerological and wellness guidance is for personal growth and
              self-reflection. It is not a substitute for professional medical,
              legal or financial advice.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Venture:</strong> We provide
              consulting and matchmaking. We do not guarantee funding, returns or
              business success.
            </li>
            <li>
              <strong className="text-[var(--ink)]">TalentX:</strong> We facilitate
              introductions. We do not guarantee employment or candidate
              performance.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Academy:</strong> Outcomes depend
              on individual participation and application.
            </li>
            <li>
              <strong className="text-[var(--ink)]">CofWaf:</strong> Restaurant
              consulting guidance does not guarantee commercial results; owners
              remain responsible for their operations and decisions.
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">3. Payments and refunds</h2>
          <p>
            Payments are processed securely. Fees are non-refundable unless
            explicitly stated in a service agreement or required by law.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">4. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Keptilon and its affiliates
            shall not be liable for indirect, incidental, special, consequential
            or punitive damages. Keptilon provides guidance; you remain
            accountable for your decisions and actions.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[var(--ink-2)]">
          <h2 className="display text-2xl text-[var(--ink)]">5. Contact</h2>
          <p>
            Questions:{" "}
            <a className="text-[var(--green)] underline" href="mailto:hello@keptilon.com">
              hello@keptilon.com
            </a>
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
