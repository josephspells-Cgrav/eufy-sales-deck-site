"use client";

import { motion } from "framer-motion";

// Recipe 37 — Above-the-Fold Reveal (King Maker v8).
// whileInView + viewport.amount=0.01 triggers on the smallest possible
// intersection, so hero headlines reveal on first paint instead of waiting
// for a scroll event that may never come.

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
      <span aria-hidden="true" className="inline-flex flex-wrap">
        {words.map((word, wi) => {
          const charCountBefore = words
            .slice(0, wi)
            .reduce((n, w) => n + w.length, 0);
          return (
            <span key={wi} className="inline-flex whitespace-pre">
              {Array.from(word).map((ch, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  initial={{ opacity: 0, y: "0.4em", filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once, amount: 0.01 }}
                  transition={{
                    duration: 0.55,
                    delay: delay + (charCountBefore + ci) * 0.018,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
              {wi < words.length - 1 && <span>&nbsp;</span>}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
