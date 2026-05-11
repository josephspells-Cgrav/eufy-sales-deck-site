import {
  REVIEW_AGGREGATE_COUNT,
  REVIEW_AGGREGATE_RATING,
} from "@/lib/data";
import Section from "@/components/ui/Section";
import TypeIn from "@/components/ui/TypeIn";
import Counter from "@/components/ui/Counter";

export default function Reviews() {
  return (
    <Section
      id="reviews"
      label="Reviews"
      className="items-center justify-center bg-page"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex items-start justify-center">
          <Counter
            value={REVIEW_AGGREGATE_COUNT}
            className="text-[clamp(4rem,18vw,9rem)] font-semibold leading-none tracking-tight text-ink"
          />
          <span className="ml-2 text-[clamp(2rem,8vw,4rem)] font-semibold leading-none tracking-tight text-brand">
            +
          </span>
        </div>
        <TypeIn
          as="p"
          text={`Verified ${REVIEW_AGGREGATE_RATING} / 5+ star reviews on eufy security products.`}
          delay={0.6}
          className="mt-8 max-w-xl text-balance text-base text-ink-muted sm:text-lg md:text-xl"
        />
      </div>
    </Section>
  );
}
