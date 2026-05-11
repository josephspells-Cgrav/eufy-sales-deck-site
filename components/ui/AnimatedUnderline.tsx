"use client";

import { motion } from "framer-motion";

// TP-02: a thin scaleX(0→1) underline on primary section headings.
// Animated independently from the text so the underline confirms the
// title rather than racing with the typed-in characters.

type AnimatedUnderlineProps = {
  className?: string;
  delay?: number;
  colorClass?: string;
};

export default function AnimatedUnderline({
  className = "",
  delay = 0.6,
  colorClass = "bg-brand",
}: AnimatedUnderlineProps) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px origin-left ${colorClass} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
