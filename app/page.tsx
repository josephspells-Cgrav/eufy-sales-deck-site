import { SECTIONS } from "@/lib/data";

// Placeholder shell — every section is wired to the snap-deck so we can
// confirm scroll-snap, sticky index, and Vercel deploy before authoring
// any section content. Real S00–S07 implementations replace these.

export default function Home() {
  return (
    <main className="snap-deck">
      {SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-label={section.label}
          className="snap-section items-center justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-mono text-sm tracking-widest text-ink-dim">
              S{String(index).padStart(2, "0")}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {section.label}
            </h1>
            <p className="mt-3 max-w-md text-base text-ink-muted">
              Placeholder for the {section.label} section. Real content lands next.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
