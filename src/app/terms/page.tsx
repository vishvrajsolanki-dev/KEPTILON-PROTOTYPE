import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Keptilon Universe Pvt Ltd.",
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

/** Terms — legal elevation (content unchanged) */
export default function TermsPage() {
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
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-[var(--ink-3)]">Last updated: 22 Jul 2026</p>
        <div className="mt-8 h-px w-full bg-[var(--line)]" />

        <Section title="1. Introduction">
          <p>
            Welcome to Keptilon — a house of ventures serving individuals,
            professionals, founders and leaders. By accessing or using our
            services, you agree to these Terms and Conditions.
          </p>
        </Section>

        <Section title="2. Venture-specific terms">
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
        </Section>

        <Section title="3. Payments and refunds">
          <p>
            Payments are processed securely. Fees are non-refundable unless
            explicitly stated in a service agreement or required by law.
          </p>
        </Section>

        <Section title="4. Limitation of liability">
          <p>
            To the maximum extent permitted by law, Keptilon and its affiliates
            shall not be liable for indirect, incidental, special, consequential
            or punitive damages. Keptilon provides guidance; you remain
            accountable for your decisions and actions.
          </p>
        </Section>

        <Section title="5. Contact">
          <p>
            Questions:{" "}
            <a
              className="text-[var(--green)] underline"
              href="mailto:hello@keptilon.com"
            >
              hello@keptilon.com
            </a>
          </p>
        </Section>

        <p className="mt-14 text-sm text-[var(--ink-3)]">
          <Link href="/" className="underline hover:text-[var(--ink)]">
            ← Back to Keptilon
          </Link>
          {" · "}
          <Link href="/privacy" className="underline hover:text-[var(--ink)]">
            Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  );
}
