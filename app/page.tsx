import Open from "@/components/sections/Open";
import Comparison from "@/components/sections/Comparison";
import Reviews from "@/components/sections/Reviews";
import Close from "@/components/sections/Close";
import SectionIndex from "@/components/ui/SectionIndex";
import Section from "@/components/ui/Section";
import { PRODUCTS, type SectionId } from "@/lib/data";

// Product sections (S01–S04) ship as content-only placeholders until the
// VideoScrubber primitive lands and the Seedance 2.0 rotation videos render.
// Real ProductSection component will replace this inline block.

export default function Home() {
  return (
    <>
      <SectionIndex />
      <main className="snap-deck">
        <Open />
        {PRODUCTS.map((p) => (
          <Section
            key={p.slug}
            id={p.slug as SectionId}
            label={p.name}
            className="items-center justify-center bg-page"
          >
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs">
                Product
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
                {p.name}
              </h2>
              <p className="mt-4 text-lg text-ink-muted sm:text-xl">
                {p.tagline}
              </p>
              <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
                Rotation video lands here next
              </p>
            </div>
          </Section>
        ))}
        <Comparison />
        <Reviews />
        <Close />
      </main>
    </>
  );
}
