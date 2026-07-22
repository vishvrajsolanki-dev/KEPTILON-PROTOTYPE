"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { arcVentures } from "@/data/ventures";

export function ArcSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <section id="arc" className="section scroll-mt-24" ref={ref}>
      <div className="container">
        <div className="mb-12 max-w-[40rem]">
          <p className="eyebrow">The Arc</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)]">
            Start where you are.
          </h2>
          <p className="lede mt-4">
            Five stages. Five specialised ventures. Pick the door that sounds
            like you.
          </p>
        </div>

        {/* Desktop stepping stones */}
        <div className="mb-12 hidden md:block">
          <svg
            viewBox="0 0 1000 160"
            className="w-full"
            role="img"
            aria-label="Life arc from Self to Capital"
          >
            <motion.path
              d="M40 100 C 200 20, 350 20, 500 90 S 800 160, 960 70"
              fill="none"
              stroke="var(--green)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={inView || reduce ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: reduce ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
            />
            {arcVentures.map((v, i) => {
              const x = 40 + i * 230;
              const y = [100, 55, 70, 110, 70][i];
              return (
                <g key={v.id}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="10"
                    fill={v.accent}
                    initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                    animate={
                      inView || reduce
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.6 }
                    }
                    transition={{ delay: reduce ? 0 : 0.15 + i * 0.12 }}
                  />
                  <text
                    x={x}
                    y={y + 36}
                    textAnchor="middle"
                    fill="var(--ink-3)"
                    style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em" }}
                  >
                    {v.stage.toUpperCase()}
                  </text>
                  <text
                    x={x}
                    y={y + 56}
                    textAnchor="middle"
                    fill="var(--ink)"
                    style={{ fontSize: 16, fontFamily: "var(--font-fraunces)" }}
                  >
                    {v.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Editorial rows — primary interaction */}
        <ul className="flex flex-col gap-2">
          {arcVentures.map((v) => (
            <li key={v.id}>
              <Link
                href={v.href}
                className="group grid grid-cols-1 items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-5 py-4 transition duration-300 ease-[var(--ease)] hover:border-[var(--green)] hover:shadow-[var(--shadow-lift)] md:grid-cols-[11rem_1fr_auto] md:gap-6 md:px-6 md:py-5 [&:hover~li]:opacity-100"
                style={{ ["--row-accent" as string]: v.accent }}
              >
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)] transition group-hover:text-[var(--row-accent)]">
                  <span
                    className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                    style={{ background: v.accent }}
                  />
                  {v.who}
                </span>
                <span className="font-[family-name:var(--font-fraunces)] text-[clamp(1.25rem,2.4vw,1.85rem)] italic text-[var(--ink)] transition group-hover:translate-x-2">
                  “{v.desire.replace(/\.$/, "")}”
                </span>
                <span className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[var(--ink-3)] transition group-hover:text-[var(--row-accent)]">
                  {v.name}
                  <span aria-hidden className="translate-x-0 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
