"use client";

import { motion, type Variants } from "framer-motion";

// Recipe 37 — Above-the-Fold Reveal (King Maker v8), per-word variant.
//
// Why per-word instead of per-char:
//  - Per-char (30+ motion.spans nested under non-motion per-word wrappers)
//    broke the variant cascade on the live deploy — staggerChildren only
//    counts direct motion children, so the stagger never reached chars
//    beyond the first few. Verified via DOM eval after deploy.
//  - Per-word puts motion.span as a direct child of the orchestrator —
//    cascade is reliable, dramatically fewer composited layers, and the
//    visual feel reads almost identically (words pop in left-to-right).
//  - Documented deviation from TP-01 ("characters reveal"). Engineering
//    rules outrank soft taste defaults (§0.1).

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type TypeInProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function TypeIn({
  text,
  as = "h2",
  className = "",
  delay = 0,
  once = true,
}: TypeInProps) {
  const Tag = as as React.ElementType;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="inline-flex flex-wrap justify-center gap-x-[0.25em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.05 }}
        variants={containerVariants}
        transition={{ delayChildren: delay }}
      >
        {words.map((word, wi) => (
          <motion.span
            key={wi}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
