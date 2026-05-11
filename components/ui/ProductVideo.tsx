// Autoplay-loop product rotation. Server component — no client interactivity
// needed, the browser handles the loop natively.
//
// Why autoplay + muted + playsInline are all required:
//  - iOS Safari requires muted to allow autoplay
//  - playsInline prevents iOS from yanking the video into the system
//    fullscreen player (deal-breaker for an in-context product visual)
//  - loop continuously rotates so the rep doesn't have to interact
//
// Why NOT scroll-scrub here:
//  - Doctrine §1.7 / PP-11 forbids playbackRate < 1.0; scroll-scrub does
//    NOT trigger that rule (it seeks currentTime), but the engineering
//    cost (GSAP ScrollTrigger inside a snap-scroll container) is high
//    and the visual delta from autoplay is small for a 5s loop.
//  - Sticky-pin scrub is a polish item documented in the after-action.
//
// Decorative: aria-hidden + alt-equivalent product info is already
// conveyed by the surrounding h2/tagline/bullets.

type ProductVideoProps = {
  src: string;
  className?: string;
};

export default function ProductVideo({ src, className = "" }: ProductVideoProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl bg-surface ring-1 ring-border-soft sm:max-w-[320px] ${className}`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
