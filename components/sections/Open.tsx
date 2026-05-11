import { BRAND_TAGLINE } from "@/lib/data";
import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

export default function Open() {
  return (
    <Section
      id="open"
      label="Open"
      className="items-center justify-center bg-page"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <TypeIn
          as="h1"
          text={BRAND_TAGLINE}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        />
        <AnimatedUnderline
          className="mt-8 w-20 sm:w-28"
          colorClass="bg-brand"
          delay={1.4}
        />
      </div>
    </Section>
  );
}
