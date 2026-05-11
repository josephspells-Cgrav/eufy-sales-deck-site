"use client";

import { motion } from "framer-motion";
import { COMPARISON_ROWS } from "@/lib/data";
import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

// Recipe 30 — Audit Ledger Card. The moral pivot. Highest visual weight.
// Mobile: each row stacks (attribute on top, then eufy + other pills side-by-side).
// sm+: classic 3-column horizontal grid.

export default function Comparison() {
  return (
    <Section
      id="comparison"
      label="Comparison"
      className="items-center justify-center bg-surface"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <TypeIn
            as="h2"
            text="What you actually get."
            className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          />
          <AnimatedUnderline
            className="mx-auto mt-5 w-16"
            colorClass="bg-brand"
            delay={1.0}
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-page ring-1 ring-border-soft shadow-[0_1px_3px_rgba(15,20,25,0.06),0_12px_32px_rgba(15,20,25,0.06)] sm:mt-10">
          {/* Column headers — desktop only */}
          <div className="hidden gap-4 border-b border-border-soft px-6 pb-3 pt-4 sm:grid sm:grid-cols-[1.2fr_1fr_1fr]">
            <div />
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-positive">
              eufy
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-alert">
              The other system
            </div>
          </div>

          {COMPARISON_ROWS.map((row, i) => (
            <motion.div
              key={row.attribute}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-border-soft px-4 py-4 last:border-0 sm:grid sm:grid-cols-[1.2fr_1fr_1fr] sm:items-stretch sm:gap-4 sm:px-6"
            >
              <div className="text-center text-sm font-medium text-ink-muted sm:flex sm:items-center sm:text-left sm:text-base">
                {row.attribute}
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 sm:contents">
                <div className="flex flex-col gap-0.5 rounded-md bg-positive-tint px-3 py-2 text-sm font-semibold text-positive sm:flex-row sm:items-center sm:gap-0 sm:text-base">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-positive/70 sm:hidden">
                    eufy
                  </span>
                  <span>{row.eufy}</span>
                </div>
                <div className="flex flex-col gap-0.5 rounded-md bg-alert-tint px-3 py-2 text-sm font-semibold text-alert sm:flex-row sm:items-center sm:gap-0 sm:text-base">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-alert/70 sm:hidden">
                    Other
                  </span>
                  <span>{row.other}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-dim">
          Not naming names.
        </p>
      </div>
    </Section>
  );
}
