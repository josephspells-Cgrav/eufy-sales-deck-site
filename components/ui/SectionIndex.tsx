"use client";

import { useEffect, useState } from "react";
import { SECTIONS, type SectionId } from "@/lib/data";

// Floating dot nav, right edge, tap-to-jump.
// Customer occasionally takes the phone — rep recovers with one tap (§6.5).
// Dots live in the bottom-60% reach zone of the viewport (one-handed reach).

export default function SectionIndex() {
  const [active, setActive] = useState<SectionId>("open");

  useEffect(() => {
    const sectionEls = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Take the entry with highest intersectionRatio that's currently
        // intersecting. This matches snap-scroll's "one section at a time"
        // behavior without flickering during the snap transition.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        threshold: [0.4, 0.6, 0.8],
        rootMargin: "0px",
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section index"
      className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-5"
    >
      <ul className="flex flex-col gap-3">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleJump(section.id)}
                aria-label={`Jump to ${section.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-12 w-12 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "h-3 w-3 bg-brand"
                      : "h-2 w-2 bg-ink-dim/40 group-hover:bg-ink-dim group-hover:h-2.5 group-hover:w-2.5"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-page opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                    isActive ? "opacity-100" : ""
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
