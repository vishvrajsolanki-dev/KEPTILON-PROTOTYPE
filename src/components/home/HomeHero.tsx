"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteStats } from "@/data/content";

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
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20">
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.p className="eyebrow" {...fade(0)}>
              Keptilon Universe
            </motion.p>
            <motion.h1
              className="display mt-5 max-w-[14ch] text-[clamp(2.7rem,5.8vw,4.5rem)]"
              {...fade(0.08)}
            >
              One house for the whole arc.
            </motion.h1>
            <motion.p className="lede mt-6 text-[1.125rem]" {...fade(0.16)}>
              Guidance that does not stop at advice — for people, professionals,
              founders and businesses. Five specialised ventures. One clear
              starting point.
            </motion.p>
            <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.24)}>
              <Button href="/#arc">Start where you are</Button>
              <Button href="/how-we-work" variant="secondary">
                How we work
              </Button>
            </motion.div>
            <motion.dl
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--line)] pt-8"
              {...fade(0.32)}
            >
              {siteStats.map((s) => (
                <div key={s.label}>
                  <dt className="display text-2xl text-[var(--green)] md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-[var(--ink-3)]">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            className="media-frame relative aspect-[4/3] lg:aspect-[5/4]"
            {...fade(0.18)}
          >
            <Image
              src="/images/visual-arc-atmosphere.jpg"
              alt="Abstract arc atmosphere — paths of guidance across Keptilon"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(28,25,23,0.18)] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/25 bg-[rgba(28,25,23,0.55)] px-4 py-3 text-sm text-[#f3eee6] backdrop-blur-sm md:bottom-5 md:left-5 md:right-auto md:max-w-xs">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#c9a227]">
                The Arc
              </p>
              <p className="mt-1 font-[family-name:var(--font-fraunces)] text-base italic">
                Self → Skill → Team → Business → Capital
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
