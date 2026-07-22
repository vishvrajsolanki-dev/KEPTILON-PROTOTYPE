"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";

/** Design Lock §5 Home Hero — mockup 43-01 exact blueprint */
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

  const lifts = [36, 4, 14, 44, 8];

  return (
    <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="container relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Left — statement (LOCKED) */}
          <div className="relative z-[1] max-w-xl pt-2">
            <motion.p className="eyebrow" {...fade(0)}>
              Keptilon Universe
            </motion.p>
            <motion.h1
              className="display mt-5 text-[clamp(2.8rem,5.4vw,4.35rem)]"
              {...fade(0.08)}
            >
              One house for the whole arc.
            </motion.h1>
            <motion.p className="lede mt-6 text-[1.125rem]" {...fade(0.16)}>
              Guidance that does not stop at advice — for people, professionals,
              founders and businesses.
            </motion.p>
            <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.24)}>
              <Button href="/#arc">Start where you are</Button>
              <Button href="/how-we-work" variant="secondary">
                Explore how we work
              </Button>
            </motion.div>

            {/* Locked vignette — bottom-left classical house */}
            <motion.div
              className="pointer-events-none relative mt-12 hidden h-[160px] w-[220px] opacity-90 md:block"
              {...fade(0.36)}
              aria-hidden
            >
              <Image
                src="/images/hero-house-vignette.png"
                alt=""
                fill
                className="object-contain object-left-bottom"
                sizes="220px"
              />
            </motion.div>
          </div>

          {/* Right — Arc diagram (LOCKED) */}
          <motion.div className="relative w-full pt-4" {...fade(0.18)}>
            <div className="relative mx-auto max-w-[560px] px-1 pb-8 pt-2">
              <svg
                viewBox="0 0 560 200"
                className="absolute inset-x-0 top-12 h-[150px] w-full"
                aria-hidden
              >
                <path
                  d="M36 155 C 140 35, 220 35, 280 115 S 430 195, 524 55"
                  fill="none"
                  stroke="var(--terracotta)"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                {[36, 155, 280, 410, 524].map((x, i) => {
                  const y = [155, 70, 115, 155, 55][i];
                  return (
                    <circle
                      key={x}
                      cx={x}
                      cy={y}
                      r="3.5"
                      fill="var(--terracotta)"
                    />
                  );
                })}
              </svg>

              <ol className="relative grid grid-cols-5 gap-1">
                {arcStages.map((stage, i) => (
                  <li key={stage.id} style={{ marginTop: lifts[i] }}>
                    <Link
                      href={stage.href}
                      className="group flex flex-col items-center px-0.5 text-center"
                    >
                      <span
                        className="flex h-[58px] w-[58px] items-center justify-center rounded-full border bg-[var(--bg-elevated)] transition duration-300 group-hover:scale-105 group-hover:shadow-[var(--shadow-lift)] sm:h-[64px] sm:w-[64px]"
                        style={{ borderColor: "color-mix(in srgb, var(--terracotta) 55%, transparent)" }}
                      >
                        <StageIcon
                          name={stage.icon}
                          color="var(--terracotta)"
                          size={24}
                        />
                      </span>
                      <span className="mt-3 font-[family-name:var(--font-fraunces)] text-[0.95rem] text-[var(--ink)]">
                        {stage.stage}
                      </span>
                      <span className="mt-1 hidden text-[0.68rem] leading-snug text-[var(--ink-2)] sm:block">
                        {stage.blurb}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-col items-center text-center">
                <div className="mb-3 flex w-full items-center gap-3" aria-hidden>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-40" />
                  <span className="text-[var(--terracotta)]">⌂</span>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-40" />
                </div>
                <p className="font-[family-name:var(--font-fraunces)] text-sm italic text-[var(--ink-3)]">
                  One house. Every stage. Real support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
