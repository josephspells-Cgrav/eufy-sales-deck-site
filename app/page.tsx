import Open from "@/components/sections/Open";
import ProductSection from "@/components/sections/ProductSection";
import Comparison from "@/components/sections/Comparison";
import Reviews from "@/components/sections/Reviews";
import Close from "@/components/sections/Close";
import SectionIndex from "@/components/ui/SectionIndex";
import { PRODUCTS } from "@/lib/data";

// Higgsfield rotation videos land per-product on a follow-up pass.
// Until then S01–S04 ship as static product cards.

export default function Home() {
  return (
    <>
      <SectionIndex />
      {/* tabIndex=0 makes the scroll container keyboard-focusable so
          arrow-key scrolling works for sighted keyboard users — axe-core
          scrollable-region-focusable rule. */}
      <main className="snap-deck" tabIndex={0}>
        <Open />
        {PRODUCTS.map((product, i) => (
          <ProductSection
            key={product.slug}
            product={product}
            index={i}
            total={PRODUCTS.length}
          />
        ))}
        <Comparison />
        <Reviews />
        <Close />
      </main>
    </>
  );
}
