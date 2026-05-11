"use client";

import { motion } from "framer-motion";
import { COMPARISON_ROWS } from "@/lib/data";
import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

// Recipe 30 — Audit Ledger Card. The moral pivot.
// Highest visual weight on the site. Per-row stagger driven by per-element
// delay; whileInView avoids the hooks-in-loop trap (§1.2) entirely because
// `whileInView` is a prop, not a hook.

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

        <div className="mt-10 overflow-hidden rounded-2xl bg-page ring-1 ring-border-soft shadow-[0_1px_3px_rgba(15,20,25,0.06),0_12px_32px_rgba(15,20,25,0.06)]">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-3 border-b border-border-soft px-4 pb-3 pt-4 sm:gap-4 sm:px-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-dim sm:text-xs">
              {/* attribute column intentionally blank in header */}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-positive sm:text-xs">
              eufy
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-alert sm:text-xs">
              The other system
            </div>
          </div>

          {COMPARISON_ROWS.map((row, i) => (
            <motion.div
              key={row.attribute}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[1.2fr_1fr_1fr] items-stretch gap-3 border-b border-border-soft px-4 py-3 last:border-0 sm:gap-4 sm:px-6 sm:py-4"
            >
              <div className="flex items-center text-sm font-medium text-ink-muted sm:text-base">
                {row.attribute}
              </div>
              <div className="flex items-center rounded-md bg-positive-tint px-3 py-2 text-sm font-semibold text-positive sm:text-base">
                {row.eufy}
              </div>
              <div className="flex items-center rounded-md bg-alert-tint px-3 py-2 text-sm font-semibold text-alert sm:text-base">
                {row.other}
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
