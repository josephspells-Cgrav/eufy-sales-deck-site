import type { ReactNode } from "react";
import type { SectionId } from "@/lib/data";

type SectionProps = {
  id: SectionId;
  label: string;
  children: ReactNode;
  className?: string;
};

// Snap-deck section wrapper. Server component — no client overhead.
// Every real section in app/page.tsx uses this so the snap container,
// aria-label, and consistent padding stay in one place.
export default function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`snap-section ${className}`}
    >
      {children}
    </section>
  );
}
