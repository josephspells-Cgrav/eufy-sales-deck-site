"use client";

import { motion, type Variants } from "framer-motion";
import type { Product, SectionId } from "@/lib/data";
import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import ProductVideo from "@/components/ui/ProductVideo";

// S01–S04. Product card with optional rotation video. The video block
// renders when product.videoSrc is set; otherwise the section is the
// static layout from v1.

const bulletListVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.9 },
  },
};

const bulletItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

type ProductSectionProps = {
  product: Product;
  index: number;
  total: number;
};

export default function ProductSection({
  product,
  index,
  total,
}: ProductSectionProps) {
  return (
    <Section
      id={product.slug as SectionId}
      label={product.name}
      className="items-center justify-center bg-page"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs">
          Product {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </p>

        {product.videoSrc && (
          <ProductVideo
            src={product.videoSrc}
            className="mt-3 max-w-[200px] sm:mt-4 sm:max-w-[280px]"
          />
        )}

        <h2 className={`text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl ${product.videoSrc ? "mt-4 sm:mt-5" : "mt-3 sm:mt-4"}`}>
          {product.name}
        </h2>

        <TypeIn
          as="p"
          text={`"${product.tagline}"`}
          delay={0.25}
          className="mt-2 text-balance text-lg italic text-ink-muted sm:mt-3 sm:text-xl md:text-2xl"
        />

        <AnimatedUnderline
          className="mt-5 w-14 sm:mt-6 sm:w-16"
          colorClass="bg-brand"
          delay={0.75}
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={bulletListVariants}
          className="mt-7 grid w-full max-w-2xl grid-cols-1 gap-x-6 gap-y-2 text-left sm:mt-8 sm:grid-cols-2 sm:gap-y-2.5"
        >
          {product.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              variants={bulletItemVariants}
              className="flex items-start gap-3 text-sm leading-snug text-ink sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-[3px] w-3 shrink-0 rounded-full bg-brand"
              />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            delay: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 rounded-xl bg-brand-tint px-5 py-4 ring-1 ring-brand/15 sm:mt-10 sm:px-6 sm:py-5"
        >
          <p className="text-balance text-base font-semibold text-brand-deep sm:text-lg">
            {product.callout}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
