// Source-of-truth constants per Doctrine TP-19.
// Numbers, copy, and structural locks all live here. If a number needs to
// change, change it in this file once — every section reads from here.
//
// Source: docs/EUFY_SALES_DECK_SITE_BRIEF.md (v1.1, locked 2026-05-10).

export const BRAND_TAGLINE = "Real cameras. Local storage. Yours.";

// §S06 — aggregate review stat. Verify before launch.
export const REVIEW_AGGREGATE_COUNT = 50000;
export const REVIEW_AGGREGATE_RATING = 4.7;
export const REVIEW_SOURCE_STRIP: readonly string[] = [];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  bullets: readonly string[];
  callout: string;
  motion: "360" | "180";
  /** Optional rotation video. Path under /public, e.g. "/videos/solocam-e30.mp4".
   *  When undefined, the ProductSection renders without the video block. */
  videoSrc?: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    slug: "solocam-e30",
    name: "eufy SoloCam E30",
    tagline: "One camera. Whole side yard.",
    bullets: [
      "Solar + battery — set it once",
      "Enhanced 2K with f/1.6 night vision",
      "360° pan & tilt — covers everything",
      "AI: human, vehicle, pet",
      "IP65 — Carolina weather-proof",
      "3-month battery (forever with sun)",
    ],
    callout: "Replaces 3 fixed cameras with 1.",
    motion: "360",
    videoSrc: "/videos/solocam-e30.mp4",
  },
  {
    slug: "solocam-s220",
    name: "eufy SoloCam S220",
    tagline: "Small. Solar. Set-and-forget.",
    bullets: [
      "Built-in solar (3 hours of sun = forever)",
      "2K resolution",
      "IP67 — any weather",
      "8GB storage built in",
      "135° wide field of view",
      "On-device AI motion detection",
    ],
    callout: "4-month battery standalone. Lifetime with the sun.",
    motion: "360",
    videoSrc: "/videos/solocam-s220.mp4",
  },
  {
    slug: "video-doorbell-e340",
    name: "Video Doorbell E340",
    tagline: "Two cameras. Zero blind spots.",
    bullets: [
      "DUAL camera — one out, one down",
      "2K with color night vision",
      "Package detection (Delivery Guard)",
      "Battery OR existing doorbell wiring",
      "Detachable battery — swap in 30 seconds",
      "Works with existing chimes, Alexa, Google",
    ],
    callout: "The downward camera sees what's on your porch. Most doorbells don't.",
    motion: "180",
    videoSrc: "/videos/video-doorbell-e340.mp4",
  },
  {
    slug: "homebase-s380",
    name: "eufy HomeBase S380",
    tagline: "Where your footage actually lives.",
    bullets: [
      "Up to 16TB local storage",
      "Military-grade encryption (AES-256 + RSA-1024)",
      "BionicMind AI — learns the people in your life",
      "Connects every eufy camera + doorbell + lock",
      "One box per house",
    ],
    callout: "Your footage. Your house. Your call.",
    motion: "360",
    videoSrc: "/videos/homebase-s380.mp4",
  },
] as const;

export type ComparisonRow = {
  attribute: string;
  eufy: string;
  other: string;
};

// §S05 — Moral pivot. Five rows. Locked. Competitor never named.
export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  { attribute: "Where footage lives",     eufy: "Your HomeBase, your house", other: "Their cloud" },
  { attribute: "Who can view it",         eufy: "You",                       other: "Them + you" },
  { attribute: "Locked into a contract",  eufy: "No",                        other: "Yes" },
  { attribute: "You own it",              eufy: "Day one",                   other: "When the contract ends" },
  { attribute: "Walk away anytime",       eufy: "Yes",                       other: "No" },
] as const;

export type SectionId =
  | "open"
  | "solocam-e30"
  | "solocam-s220"
  | "video-doorbell-e340"
  | "homebase-s380"
  | "comparison"
  | "reviews"
  | "close";

export const SECTIONS: readonly { id: SectionId; label: string }[] = [
  { id: "open",                 label: "Open" },
  { id: "solocam-e30",          label: "SoloCam E30" },
  { id: "solocam-s220",         label: "SoloCam S220" },
  { id: "video-doorbell-e340",  label: "Doorbell E340" },
  { id: "homebase-s380",        label: "HomeBase S380" },
  { id: "comparison",           label: "Comparison" },
  { id: "reviews",              label: "Reviews" },
  { id: "close",                label: "Close" },
] as const;
