"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";

export function HomeHero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 50% at 85% 15%, var(--green-soft), transparent 60%), radial-gradient(50% 40% at 10% 90%, var(--terracotta-soft), transparent 55%)",
        }}
      />
      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        {/* Locked Statement + CTAs (4+3 mockup left) */}
        <div className="max-w-xl">
          <motion.p className="eyebrow" {...fade(0)}>
            Keptilon Universe
          </motion.p>
          <motion.h1
            className="display mt-5 text-[clamp(2.8rem,5.5vw,4.4rem)]"
            {...fade(0.08)}
          >
            One house for the whole arc.
          </motion.h1>
          <motion.p className="lede mt-6 text-[1.125rem]" {...fade(0.16)}>
            Guidance that does not stop at advice — for people, professionals,
            founders and businesses.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.24)}>
            <Button href="/#arc">
              Start where you are <span aria-hidden>→</span>
            </Button>
            <Button href="/how-we-work" variant="secondary">
              Explore how we work
            </Button>
          </motion.div>
          <motion.p
            className="mt-10 max-w-[28ch] font-[family-name:var(--font-fraunces)] text-base italic text-[var(--ink-3)]"
            {...fade(0.32)}
          >
            One house. Every stage. Real support.
          </motion.p>
        </div>

        {/* Locked Arc diagram (4+3 mockup right) */}
        <motion.div
          className="relative mx-auto w-full max-w-[560px]"
          {...fade(0.18)}
        >
          <div className="relative px-2 pt-4 pb-2">
            <svg
              viewBox="0 0 520 220"
              className="absolute inset-x-0 top-10 h-[140px] w-full"
              aria-hidden
            >
              <path
                d="M40 150 C 130 40, 200 40, 260 110 S 400 200, 480 70"
                fill="none"
                stroke="var(--ink-3)"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                opacity="0.55"
              />
            </svg>

            <ol className="relative grid grid-cols-5 gap-1 sm:gap-2">
              {arcStages.map((stage, i) => {
                const lift = [28, 0, 10, 36, 4][i];
                return (
                  <li key={stage.id} style={{ marginTop: lift }}>
                    <Link
                      href={stage.href}
                      className="group flex flex-col items-center text-center"
                    >
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full border bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)] sm:h-16 sm:w-16"
                        style={{ borderColor: `${stage.accent}55` }}
                      >
                        <StageIcon name={stage.icon as "self"} color={stage.accent} size={26} />
                      </span>
                      <span
                        className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
                        style={{ color: stage.accent }}
                      >
                        {stage.stage}
                      </span>
                      <span className="mt-1 hidden text-[0.7rem] leading-snug text-[var(--ink-2)] sm:block">
                        {stage.blurb}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
