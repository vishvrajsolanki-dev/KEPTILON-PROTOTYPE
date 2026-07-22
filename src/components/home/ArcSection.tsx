"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { arcVentures } from "@/data/ventures";
import { ventureImages } from "@/data/content";

export function ArcSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();

  return (
    <section id="arc" className="section scroll-mt-24 bg-[var(--bg-soft)]" ref={ref}>
      <div className="container">
        <div className="mb-12 max-w-[42rem]">
          <p className="eyebrow">The Arc</p>
          <h2 className="display mt-4 text-[clamp(2rem,3.8vw,3rem)]">
            Start where you are.
          </h2>
          <p className="lede mt-4">
            Five stages of a life and a company. Pick the door that sounds like
            you — each venture keeps its own world under one house.
          </p>
        </div>

        <div className="mb-14 hidden overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6 md:block md:p-8">
          <svg
            viewBox="0 0 1000 180"
            className="w-full"
            role="img"
            aria-label="Life arc from Self to Capital"
          >
            <motion.path
              d="M50 110 C 220 30, 360 30, 500 95 S 780 170, 950 75"
              fill="none"
              stroke="var(--green)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={inView || reduce ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: reduce ? 0 : 1.05, ease: [0.16, 1, 0.3, 1] }}
            />
            {arcVentures.map((v, i) => {
              const x = 50 + i * 225;
              const y = [110, 58, 72, 118, 78][i];
              return (
                <g key={v.id}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill={v.accent}
                    initial={reduce ? false : { opacity: 0, scale: 0.5 }}
                    animate={
                      inView || reduce
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ delay: reduce ? 0 : 0.18 + i * 0.1 }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill="none"
                    stroke={v.accent}
                    strokeOpacity="0.25"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={inView || reduce ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: reduce ? 0 : 0.28 + i * 0.1 }}
                  />
                  <text
                    x={x}
                    y={y + 42}
                    textAnchor="middle"
                    fill="var(--ink-3)"
                    style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em" }}
                  >
                    {v.stage.toUpperCase()}
                  </text>
                  <text
                    x={x}
                    y={y + 64}
                    textAnchor="middle"
                    fill="var(--ink)"
                    style={{ fontSize: 17, fontFamily: "var(--font-fraunces)" }}
                  >
                    {v.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <ul className="arc-list flex flex-col gap-3">
          {arcVentures.map((v) => (
            <li key={v.id}>
              <Link
                href={v.href}
                className="arc-row group grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] md:grid-cols-[140px_1fr_auto]"
              >
                <div className="relative hidden h-full min-h-[110px] md:block">
                  <Image
                    src={ventureImages[v.id]}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="140px"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 px-5 py-5 md:px-7">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-3)]">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                      style={{ background: v.accent }}
                    />
                    {v.stage} · {v.who}
                  </span>
                  <span className="font-[family-name:var(--font-fraunces)] text-[clamp(1.35rem,2.5vw,1.9rem)] italic leading-snug text-[var(--ink)] transition duration-300 group-hover:translate-x-1">
                    “{v.desire.replace(/\.$/, "")}”
                  </span>
                  <span className="text-sm text-[var(--ink-2)]">{v.oneLiner}</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] px-5 py-4 md:border-t-0 md:px-6">
                  <span className="text-sm font-bold text-[var(--ink)]">{v.name}</span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-sm text-[var(--ink)] transition duration-300 group-hover:border-transparent group-hover:text-white"
                    style={{ ["--accent" as string]: v.accent }}
                    aria-hidden
                  >
                    <span className="group-hover:hidden">→</span>
                    <span
                      className="hidden h-10 w-10 items-center justify-center rounded-full group-hover:flex"
                      style={{ background: v.accent }}
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
