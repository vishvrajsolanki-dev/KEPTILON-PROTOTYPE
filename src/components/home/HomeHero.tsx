"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StageIcon } from "@/components/ui/StageIcon";
import { arcStages } from "@/data/arc";

/**
 * Home elevation v2 — composition locked to approved mockup:
 * left statement + classical house · right ascending terracotta Arc
 */
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

  /* Node positions % — Self low-left → Capital high-right (mockup arc) */
  const nodes = [
    { left: "2%", top: "58%" },
    { left: "22%", top: "28%" },
    { left: "42%", top: "42%" },
    { left: "64%", top: "18%" },
    { left: "84%", top: "2%" },
  ];

  return (
    <section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-12">
      <div
        className="pointer-events-none absolute -left-28 top-0 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--green) 10%, transparent) 0%, transparent 68%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--terracotta) 9%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-2 xl:gap-6">
          {/* LEFT — statement + house */}
          <div className="relative z-[1] max-w-[34rem] pt-2">
            <motion.h1
              className="display text-[clamp(2.85rem,5.4vw,4.35rem)] text-[var(--green)]"
              {...fade(0)}
            >
              One house for the whole arc.
            </motion.h1>
            <motion.p className="lede mt-5 text-[1.08rem] md:text-[1.125rem]" {...fade(0.08)}>
              Guidance that does not stop at advice — for people, professionals,
              founders and businesses.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.16)}>
              <Button href="/#arc">Start where you are</Button>
              <Button href="/how-we-work" variant="secondary">
                Explore how we work
              </Button>
            </motion.div>

            <motion.div
              className="pointer-events-none relative mt-8 hidden h-[250px] w-[340px] md:block lg:mt-10 lg:h-[290px] lg:w-[380px]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 75% 70% at 40% 55%, #000 42%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 70% at 40% 55%, #000 42%, transparent 78%)",
              }}
              {...fade(0.26)}
              aria-hidden
            >
              <Image
                src="/images/hero-house-vignette.png"
                alt=""
                fill
                className="object-contain object-left-bottom drop-shadow-[0_8px_24px_rgba(28,25,23,0.08)]"
                sizes="380px"
                priority
              />
            </motion.div>
          </div>

          {/* RIGHT — ascending Arc */}
          <motion.div className="relative w-full lg:pt-4" {...fade(0.1)}>
            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="relative h-[340px] w-full sm:h-[380px] lg:h-[420px]">
                <svg
                  viewBox="0 0 620 420"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden
                >
                  <path
                    d="M48 310 C 140 290, 170 145, 210 155 S 300 250, 340 210 S 430 95, 490 120 S 560 55, 575 70"
                    fill="none"
                    stroke="var(--terracotta)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>

                <ol className="absolute inset-0 m-0 list-none p-0">
                  {arcStages.map((stage, i) => (
                    <li
                      key={stage.id}
                      className="absolute w-[112px] -translate-x-1/2 sm:w-[120px]"
                      style={{ left: nodes[i].left, top: nodes[i].top }}
                    >
                      <Link
                        href={stage.href}
                        className="group flex flex-col items-center text-center"
                      >
                        <span
                          className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[1.5px] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:shadow-[var(--shadow-lift)] sm:h-[68px] sm:w-[68px]"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--terracotta) 70%, transparent)",
                          }}
                        >
                          <StageIcon
                            name={stage.icon}
                            color="var(--terracotta)"
                            size={26}
                          />
                        </span>
                        <span className="mt-2.5 font-[family-name:var(--font-cormorant)] text-[1.1rem] font-semibold leading-none text-[var(--terracotta)] sm:text-[1.25rem]">
                          {stage.stage}
                        </span>
                        <span className="mt-1.5 hidden text-[0.66rem] leading-snug text-[var(--ink-2)] sm:block">
                          {stage.blurb}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-2 flex flex-col items-center text-center sm:mt-4">
                <div className="mb-3 flex w-full max-w-md items-center gap-3" aria-hidden>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-45" />
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    className="text-[var(--terracotta)]"
                  >
                    <path
                      d="M2 18h20M4 18V10l8-7 8 7v8"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinejoin="round"
                    />
                    <path d="M10 18v-6h4v6" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M4 10h16" stroke="currentColor" strokeWidth="1.1" />
                  </svg>
                  <span className="h-px flex-1 bg-[var(--terracotta)] opacity-45" />
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-[1.05rem] italic text-[var(--ink-3)]">
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
