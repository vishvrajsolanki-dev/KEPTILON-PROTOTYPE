"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";

export function ArcSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <section id="arc" className="section scroll-mt-24" ref={ref}>
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow justify-center">The Arc</p>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3rem)]">
            Start where you are.
          </h2>
          <p className="lede mx-auto mt-4">
            Five ventures. Five life stages. One continuous journey.
          </p>
        </div>

        {/* Locked A: Stepping-stone / column journey */}
        <div className="relative mb-16 hidden md:block">
          <svg
            className="pointer-events-none absolute left-[6%] right-[6%] top-[72px] h-16 w-[88%]"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M20 50 C 180 10, 320 10, 500 45 S 820 90, 980 30"
              fill="none"
              stroke="var(--green)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={inView || reduce ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: reduce ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <ol className="relative grid grid-cols-5 gap-4">
            {arcStages.map((stage, i) => (
              <li key={stage.id}>
                <Link
                  href={stage.href}
                  className="group flex h-full flex-col items-center px-2 text-center"
                >
                  <motion.span
                    className="mb-3 font-[family-name:var(--font-fraunces)] text-[0.95rem] italic leading-snug"
                    style={{ color: stage.accent }}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={
                      inView || reduce
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 8 }
                    }
                    transition={{ delay: reduce ? 0 : 0.1 + i * 0.08 }}
                  >
                    “{stage.desire.replace(/\.$/, "")}”
                  </motion.span>
                  <span
                    className="relative z-[1] flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 bg-[var(--bg)] shadow-[var(--shadow-soft)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)]"
                    style={{ borderColor: stage.accent }}
                  >
                    <StageIcon
                      name={stage.icon as "self"}
                      color={stage.accent}
                      size={30}
                    />
                  </span>
                  <span
                    className="mt-5 display text-2xl"
                    style={{ color: stage.accent }}
                  >
                    {stage.name}
                  </span>
                  <span
                    className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em]"
                    style={{ color: stage.accent }}
                  >
                    {stage.stage}
                  </span>
                  <span className="mt-3 text-sm leading-snug text-[var(--ink-2)]">
                    {stage.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Locked B: Editorial rows (primary on mobile, companion on desktop) */}
        <div>
          <p className="mb-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)] md:text-left">
            Choose your door
          </p>
          <ul className="arc-list flex flex-col gap-2">
            {arcStages.map((stage) => (
              <li key={stage.id}>
                <Link
                  href={stage.href}
                  className="arc-row group grid grid-cols-1 items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-4 transition md:grid-cols-[12rem_1fr_auto] md:gap-6 md:px-6 md:py-5"
                >
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)] transition group-hover:text-[var(--ink)]">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                      style={{ background: stage.accent }}
                    />
                    {stage.who}
                  </span>
                  <span className="font-[family-name:var(--font-fraunces)] text-[clamp(1.3rem,2.4vw,1.85rem)] italic text-[var(--ink)] transition duration-300 group-hover:translate-x-2">
                    “{stage.desire.replace(/\.$/, "")}”
                  </span>
                  <span
                    className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.1em]"
                    style={{ color: stage.accent }}
                  >
                    {stage.name}
                    <span aria-hidden className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
