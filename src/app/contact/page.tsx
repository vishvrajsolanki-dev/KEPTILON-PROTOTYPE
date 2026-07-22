import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Keptilon — tell us where you are on the arc and we’ll route you to the right venture.",
};

export default function Page() {
  return (
    <Suspense fallback={<main id="main" className="section pt-28 container">Loading…</main>}>
      <ContactPage />
    </Suspense>
  );
}
