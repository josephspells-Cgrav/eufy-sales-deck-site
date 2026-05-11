"use client";

import { motion, type Variants } from "framer-motion";

// Recipe 37 — Above-the-Fold Reveal (King Maker v8), production-tuned.
//
// Why variants + staggerChildren instead of per-element whileInView:
//  - One parent observer fires once; staggerChildren cascades to chars.
//  - With 30+ chars per headline, per-element observers were not firing
//    reliably for chars deep in the queue (verified on live build —
//    chars n>5 stayed in initial state indefinitely).
//
// Why no filter: blur():
//  - 30+ simultaneous GPU blur passes per frame froze the CDP renderer
//    on the live deploy. Composited transforms (opacity + translateY)
//    are nearly free and read just as cleanly.

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.022 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
        className="inline-flex flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.05 }}
        variants={containerVariants}
        transition={{ staggerChildren: 0.022, delayChildren: delay }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex whitespace-pre">
            {Array.from(word).map((ch, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                variants={charVariants}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
