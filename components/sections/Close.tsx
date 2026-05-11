import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";

export default function Close() {
  return (
    <Section
      id="close"
      label="Close"
      className="items-center justify-center bg-page"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <TypeIn
          as="h2"
          text="Want this at your place?"
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        />
        <AnimatedUnderline
          className="mt-8 w-20 sm:w-28"
          colorClass="bg-brand"
          delay={1.2}
        />
      </div>
    </Section>
  );
}
