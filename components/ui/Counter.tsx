"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

// Animated stat counter using Framer's useMotionValue so we get
// requestAnimationFrame-driven updates without React re-renders per frame
// (PP-10: no setInterval). Triggers once when the element enters the viewport.

type CounterProps = {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
};

const defaultFormat = (n: number) => Math.round(n).toLocaleString("en-US");

export default function Counter({
  value,
  duration = 1.8,
  format = defaultFormat,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(format(0));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(format(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration, format, mv]);

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {display}
    </span>
  );
}
