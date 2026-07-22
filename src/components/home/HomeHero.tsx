"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";

/** Design Lock §5 Home Hero — elevation v2 (approved) */
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

  const lifts = [40, 6, 18, 48, 4];
  const pathYs = [158, 72, 118, 158, 52];
  const pathXs = [40, 155, 280, 410, 520];

  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
      {/* Atmospheric washes — approved elevation */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--green) 9%, transparent) 0%, transparent 68%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-24 h-[480px] w-[480px] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 8%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* Left — statement */}
          <div className="relative z-[1] max-w-xl pt-1">
            <motion.h1
              className="display text-[clamp(2.9rem,5.6vw,4.5rem)]"
              {...fade(0)}
            >
              One house for the whole arc.
            </motion.h1>
            <motion.p className="lede mt-6 text-[1.125rem]" {...fade(0.1)}>
              Guidance that does not stop at advice — for people, professionals,
              founders and businesses.
            </motion.p>
            <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.18)}>
              <Button href="/#arc">Start where you are</Button>
              <Button href="/how-we-work" variant="secondary">
                Explore how we work
              </Button>
            </motion.div>

            {/* Larger atmospheric house vignette */}
            <motion.div
              className="pointer-events-none relative mt-10 hidden h-[220px] w-[300px] md:block lg:mt-14 lg:h-[260px] lg:w-[340px]"
              {...fade(0.28)}
              aria-hidden
            >
              <Image
                src="/images/hero-house-vignette.png"
                alt=""
                fill
                className="object-contain object-left-bottom opacity-[0.92]"
                sizes="340px"
                priority
              />
            </motion.div>
          </div>

          {/* Right — Arc diagram */}
          <motion.div className="relative w-full pt-2 lg:pt-6" {...fade(0.12)}>
            <div
              className="pointer-events-none absolute left-1/2 top-8 h-[280px] w-[90%] -translate-x-1/2 rounded-full opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse at center, color-mix(in srgb, var(--bg-elevated) 80%, transparent) 0%, transparent 72%)",
              }}
              aria-hidden
            />

            <div className="relative mx-auto max-w-[580px] px-1 pb-6 pt-2">
              <svg
                viewBox="0 0 560 200"
                className="absolute inset-x-0 top-14 h-[150px] w-full"
                aria-hidden
              >
                <path
                  d="M40 158 C 140 35, 220 38, 280 118 S 430 198, 520 52"
                  fill="none"
                  stroke="var(--terracotta)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.72"
                />
                {pathXs.map((x, i) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={pathYs[i]}
                    r="4"
                    fill="var(--terracotta)"
                  />
                ))}
              </svg>

              <ol className="relative grid grid-cols-5 gap-1">
                {arcStages.map((stage, i) => (
                  <li key={stage.id} style={{ marginTop: lifts[i] }}>
                    <Link
                      href={stage.href}
                      className="group flex flex-col items-center px-0.5 text-center"
                    >
                      <span
                        className="flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[var(--shadow-lift)] sm:h-[70px] sm:w-[70px]"
                        style={{
                          borderColor:
                            "color-mix(in srgb, var(--terracotta) 60%, transparent)",
                        }}
                      >
                        <StageIcon
                          name={stage.icon}
                          color="var(--terracotta)"
                          size={26}
                        />
                      </span>
                      <span className="mt-3 font-[family-name:var(--font-cormorant)] text-[1.05rem] font-semibold text-[var(--ink)]">
                        {stage.stage}
                      </span>
                      <span className="mt-1.5 hidden max-w-[11ch] text-[0.7rem] leading-snug text-[var(--ink-2)] sm:block">
                        {stage.blurb}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="mt-12 flex flex-col items-center text-center">
                <div className="mb-3 flex w-full items-center gap-3" aria-hidden>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-40" />
                  <span className="text-[var(--terracotta)]">⌂</span>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-40" />
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[var(--ink-3)]">
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
