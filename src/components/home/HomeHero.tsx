"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(90% 60% at 80% -10%, var(--green-soft), transparent 55%), radial-gradient(70% 50% at 0% 80%, var(--terracotta-soft), transparent 50%)",
        }}
      />
      <div className="container relative text-center">
        <motion.p className="eyebrow justify-center" {...fade(0)}>
          Keptilon Universe
        </motion.p>
        <motion.h1
          className="display mx-auto mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,4.6rem)]"
          {...fade(0.08)}
        >
          One house for the whole arc.
        </motion.h1>
        <motion.p className="lede mx-auto mt-6" {...fade(0.16)}>
          Guidance that does not stop at advice — for people, professionals,
          founders and businesses.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          {...fade(0.24)}
        >
          <Button href="/#arc">Start where you are</Button>
          <Button href="/how-we-work" variant="secondary">
            How we work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
