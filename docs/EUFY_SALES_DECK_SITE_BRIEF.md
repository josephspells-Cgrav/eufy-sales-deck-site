# EUFY SALES DECK SITE — Build Brief

**Brief Version:** v1.1 (LOCKED — disclosure stripped per JS directive 2026-05-10)
**Date:** 2026-05-10
**Author:** Joseph Spells
**Doctrine:** KING_MAKER_MASTER v8.0
**Build executor:** Claude Opus 4.7 in Claude Code (CCR session)

---

## v1.1 Changelog (delta from v1.0)

- **Footer disclosure removed** from every section. Rep is physically present on the porch — the independent-installer / non-affiliation context is obvious in person and does not need to live on-screen.
- Source-of-truth constant `DISCLOSURE_LINE` removed from §11.
- Verification check "Disclosure presence" removed from §14.
- Risk Appendix B updated — eufy IP mitigation now relies on rep verbal context + zero use of eufy logo as our brand mark.
- No other content changes from v1.0.

---

## 1. Project Identity

An interactive **sales tool for door-to-door reps** pitching eufy security cameras + installation services. The rep opens this on a phone or tablet while standing on a customer's porch. The customer watches as the rep narrates. The rep swipes section-to-section. The site supplies visual ammunition; the rep supplies the voice.

**It is:**
- A pitch deck disguised as a website
- A scroll-snap interactive controlled by the rep's thumb
- A trust artifact ("would a fly-by-night operator have this?")
- Visual proof the rep can point at

**It is not:**
- A website customers visit on their own
- A lead-gen funnel
- A B2C marketing surface
- An ecommerce surface
- An SEO target

**The customer never sees this site without a rep present.** Every design decision flows from that.

---

## 2. Goal & Success Criteria

**Primary goal:** Give the rep something polished and interactive to show on a customer's doorstep that closes the trust gap and earns the rep the right to talk about install + next steps.

**Success looks like:**
- Customer's eyes stay on the screen while the rep narrates
- Customer asks a follow-up question after the comparison ledger ("wait, I'd own it day one?")
- Rep ends the conversation with a scheduled walk-through, not "let me think about it"
- Site holds up under porch glare at 2-foot viewing distance

**Anti-goals (HARD LINES):**
- **Zero pricing language anywhere on the site.** No dollar amounts, no financial terms, no fee claims. Rep handles all cost conversation verbally. Build-time grep enforces — see §14.
- No CTAs that bypass the rep
- No ecommerce chrome
- No suggestion that we ARE eufy

---

## 3. The Two Users

| User | Role | Needs |
|---|---|---|
| **The rep** | Operator | Big tap targets, predictable section flow, talking points visible per section, no surprise modals, works one-handed on a phone |
| **The customer** | Viewer | Sees something polished and credible, big imagery they can absorb in 5 seconds per section, no walls of text |

Every UX decision optimizes for the rep first (operator) and customer second (viewer).

---

## 4. Reference DNA — What We Keep From Eufy.com

### Palette (proposed — validate during build)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#FFFFFF` | Primary background |
| `--surface` | `#F7F8FA` | Card / elevated surface |
| `--surface-2` | `#EEF1F5` | Hover / secondary elevation |
| `--border` | `#E2E6EC` | Subtle dividers |
| `--text` | `#0F1419` | Primary text |
| `--text-muted` | `#4A5562` | Secondary text |
| `--text-dim` | `#6E7886` | Captions, labels |
| `--brand` | `#0066CC` | Eufy-adjacent blue, used sparingly |
| `--brand-deep` | `#004A99` | Pressed states |
| `--positive` | `#16A34A` | "Yes" cells in comparison ledger |
| `--alert` | `#D14343` | "No" cells in comparison ledger |

Validated on a phone in direct sun before launch (§6.5).

### Typography

- **Primary sans:** Geist or General Sans
- **Body type minimum:** 16px (no smaller — 2-foot viewing in sunlight)
- **Headlines:** 32px+ for sections, 48px+ for hero
- **Numerals:** tabular cut, generous weight

### What we DROP from Eufy.com

All ecommerce chrome. Filter sidebars. Multi-product grids. Footer link forests. Banner promos. Eufy's full nav (we have NO nav — sticky section index is enough).

---

## 5. Doctrine Layering

- **Engineering rules + operating principles:** v8 strict (Priority 5)
- **Recipes:** v8 library, D2D-adapted
- **Reference site:** Eufy.com for visual DNA only. Structure is our call.
- **Aesthetic mode:** Minimalist (see §6)
- **New pattern:** Scroll-Snap Section (Recipe 38 candidate if it ships clean)

---

## 6. Aesthetic Mode

**Minimalist mode** with dials:

| Dial | Value | Why |
|---|---|---|
| DESIGN_VARIANCE | 3/10 | Restrained — credibility through quiet polish |
| MOTION_INTENSITY | 5/10 | Visible but not flashy — rep is the show |
| VISUAL_DENSITY | 2/10 | Sparse — every section earns its existence |

Single Eufy-blue accent does the heavy lifting. §S05 comparison ledger is the one section that breaks density rules — moral pivot earns the weight.

---

## 6.5. D2D UX Requirements

Operated by a thumb on a phone in someone's front yard. Designed accordingly.

| Requirement | Detail |
|---|---|
| **Scroll-snap sections** | `scroll-snap-type: y mandatory` on main wrapper, `scroll-snap-align: start` per section |
| **One-handed reach** | All interactive elements in bottom 60% of viewport |
| **Tap targets** | Min 48×48px; 56×56px for primary actions |
| **Outdoor glare contrast** | Body text 7:1 minimum (AAA). Validate live in sunlight. |
| **No surprise modals** | Nothing interrupts the rep's flow |
| **Sticky section index** | Customer occasionally takes the phone — rep recovers with one tap |
| **Asset weight on cellular** | Total <5MB. Hero <2MB. Each rotation video <1.5MB. |
| **Loud first paint** | First section paints within 1.5s on 4G |
| **No autoplay audio** | Silent porch is awkward enough |

---

## 7. Product Lineup (LOCKED)

| Product | Power | Notable |
|---|---|---|
| eufy SoloCam E30 | Solar + Battery | 360° pan/tilt, Enhanced 2K, IP65 |
| eufy SoloCam S220 | Solar + Battery | IP67, 2K, 8GB built-in, 135° FOV |
| Video Doorbell E340 | Battery or Wired | 2K dual-cam, color night vision, package detection |
| HomeBase S380 (HomeBase 3) | AC | Up to 16TB local, BionicMind AI, AES-256/RSA-1024 encryption |

---

## 8. Section Architecture (8 slides)

Each section = one snap-scroll viewport. Rep swipes, section locks.

### S00 — Brand Open

**Visual:** clean white. Headline only — no opener visual, no logo, no scroll hint, no nav.

**Headline (LOCKED):**
> *Real cameras. Local storage. Yours.*

### S01 — eufy SoloCam E30

**Visual:** Higgsfield 360° rotation (scroll-scrub on desktop, swipe-scrub on mobile)

**Product name:** *eufy SoloCam E30*
**Tagline:** *"One camera. Whole side yard."*

**Bullets:**
- Solar + battery — set it once
- Enhanced 2K with f/1.6 night vision
- 360° pan & tilt — covers everything
- AI: human, vehicle, pet
- IP65 — Carolina weather-proof
- 3-month battery (forever with sun)

**One callout:**
> *Replaces 3 fixed cameras with 1.*

### S02 — eufy SoloCam S220

**Visual:** Higgsfield 360° rotation

**Product name:** *eufy SoloCam S220*
**Tagline:** *"Small. Solar. Set-and-forget."*

**Bullets:**
- Built-in solar (3 hours of sun = forever)
- 2K resolution
- IP67 — any weather
- 8GB storage built in
- 135° wide field of view
- On-device AI motion detection

**One callout:**
> *4-month battery standalone. Lifetime with the sun.*

### S03 — Video Doorbell E340

**Visual:** Higgsfield 180° arc (back is flat mount plate, not worth rotating)

**Product name:** *Video Doorbell E340*
**Tagline:** *"Two cameras. Zero blind spots."*

**Bullets:**
- DUAL camera — one out, one down
- 2K with color night vision
- Package detection (Delivery Guard)
- Battery OR existing doorbell wiring
- Detachable battery — swap in 30 seconds
- Works with existing chimes, Alexa, Google

**One callout:**
> *The downward camera sees what's on your porch. Most doorbells don't.*

### S04 — HomeBase S380 — The Brain

**Visual:** Higgsfield 360° rotation (small white cube, photogenic)

**Product name:** *eufy HomeBase S380*
**Tagline:** *"Where your footage actually lives."*

**Bullets:**
- Up to 16TB local storage
- Military-grade encryption (AES-256 + RSA-1024)
- BionicMind AI — learns the people in your life
- Connects every eufy camera + doorbell + lock
- One box per house

**Callout (LOCKED):**
> *Your footage. Your house. Your call.*

### S05 — The Comparison (moral pivot)
**Recipe 30 — Audit Ledger Card.** Highest visual weight on the site.

**Headline:** *"What you actually get."*

| | **eufy** | **The other system** |
|---|---|---|
| Where footage lives | Your HomeBase, your house | Their cloud |
| Who can view it | You | Them + you |
| Locked into a contract | No | Yes |
| You own it | Day one | When the contract ends |
| Walk away anytime | Yes | No |

Eufy column green (`--positive`). Other column red (`--alert`). Per-row stagger reveal.

**Bottom line (small text):**
> *Not naming names.*

**Rep responsibility (orientation only, NOT on site):** the rep handles 100% of cost/financial conversation verbally.

**Critical:** the competitor is never named on the site.

### S06 — The Reviews Stat

**Visual:** one big number, centered, on white.

**Big stat:** *50,000+* (TBD — real Amazon + Eufy.com aggregate, verified during build)

**Below:** *Verified 4.5 / 5+ star reviews on eufy security products.*

**Optional trust source strip** (Recipe 32 — only ship if real third-party coverage verified during build):
> *Amazon · Eufy.com · Wirecutter · The Verge · Best Buy*

If verification stalls during build, ship the big number alone. Strip is enhancement, not required.

### S07 — Close (minimal)

**Visual:** clean white, with a single product still or subtle gradient.

**Headline (only on-site content):**
> *Want this at your place?*

No sub-line. No contact info. No QR. Rep handles the close verbally.

---

## 9. The 3D Approach (LOCKED) — Higgsfield Image-to-Video, Scroll-Scrubbed

### Workflow

1. **Capture product reference** — high-res screenshot from eufy.com product page
2. **Generate rotation via Higgsfield** — `generate_video` MCP tool. **Model decision (post-`models_explore`): Seedance 2.0 — reference-driven, consistent identity, image-to-video, 4-15s, $0 audio overhead.** Fallback: Kling 3.0 with start/end bookend frames.
3. **Output:** 5-second mp4, 1080p, H.264 CRF 28, target <1.5MB per product
4. **Embed** — `<video muted playsInline preload="auto">`, scroll-scrub via GSAP ScrollTrigger setting `video.currentTime` based on section progress
5. **Mobile-specific:** touch-scrub via finger swipe over the video element. Test on real iOS Safari + Android Chrome

### Per-product motion choice

| Product | Motion preset | Why |
|---|---|---|
| SoloCam E30 | 360° full rotation | Round form, pan/tilt joint visually interesting |
| SoloCam S220 | 360° full rotation | Small rectangular box, rotates clean |
| Video Doorbell E340 | 180° arc | Back is a flat mounting plate |
| HomeBase S380 | 360° full rotation | Small white cube, all sides clean |

### Doctrine note on `playbackRate`

Doctrine §1.7 / PP-11 forbids `playbackRate < 1.0`. **This does NOT apply to scroll-scrubbing.** We seek `currentTime` to a target value — frames display at native rate. The scrubber implementation comments this so a future reader doesn't "fix" it.

### Failure modes & mitigations

| Failure | Mitigation |
|---|---|
| Higgsfield hallucinates back of camera | Switch to 180° arc for that product |
| iOS Safari refuses to scrub | 8-frame flip-through fallback via Higgsfield Angles |
| File size exceeds 1.5MB | Cut to 4s, raise CRF to 30 |
| Quality unacceptable | Static hero image is the documented fallback |
| Plus monthly throttle hits | Drop next-gen to Kling 3.0 with start/end frames; generations spaced not batched |

### Higgsfield prompt drafts

**SoloCam E30:**
> Studio product photography, white seamless cyc background, soft key light from upper-left, subtle floor shadow. The product is a small white-and-black security camera with a 360° pan-tilt mechanism, lens at the front. Slow smooth full 360-degree rotation on vertical axis over 5 seconds. No people, no hands, no other objects. NOT outdoors, NOT mounted, NOT installed. Premium consumer-electronics campaign aesthetic.

**SoloCam S220:**
> Studio product photography, white seamless background, soft top-down key light. The product is a small white rectangular security camera with an integrated solar panel on top, a single front lens, IP67-rated outdoor housing. Slow smooth full 360-degree rotation on vertical axis over 5 seconds. No people, no hands. Apple-keynote aesthetic.

**Video Doorbell E340:**
> Studio product photography, white seamless background, soft key light from upper-left. The product is a vertical black-and-white video doorbell with two visible camera lenses — one front-facing in the upper section, one downward-facing below. 180-degree slow arc rotation showing front, right side, and back-right quarter only — do not show flat back. 5-second duration. Premium product reveal.

**HomeBase S380:**
> Studio product photography, white seamless background, soft top-down key light. The product is a small white cube-shaped smart-home hub with rounded edges, subtle status LED, minimal branding. Slow smooth full 360-degree rotation on vertical axis over 5 seconds. Premium consumer-electronics aesthetic.

---

## 10. Reviews — Brand-Level Aggregate Only

Per v0.3 reframe: no per-product review cards, no scraping, no paraphrase pipeline.

**What ships:** one big aggregate number in §S06.
> *50,000+ verified 4.5+ star reviews on eufy security products.*

**Numbers to verify during build:**
- Total Amazon reviews across the 4 products at 4.5+ stars
- Aggregate star rating
- Source strip (optional — only if third-party coverage verified)

No links to individual reviews. No clickable cards. No paraphrased customer voices.

---

## 11. Source-of-Truth Constants (TP-19)

Saved to `lib/data.ts`. Lean.

| Constant | What | Status |
|---|---|---|
| `BRAND_TAGLINE` | One-liner on S00 | LOCKED: "Real cameras. Local storage. Yours." |
| `REVIEW_AGGREGATE_COUNT` | Total verified 4.5+ star reviews | TBD — verify during build |
| `REVIEW_AGGREGATE_RATING` | Aggregate star rating (e.g., 4.7) | TBD |
| `REVIEW_SOURCE_STRIP` | List of third-party coverage sources | TBD — optional |
| `COMPARISON_ROWS` | The 5-row moral-pivot table from §S05 | LOCKED |
| `PRODUCTS` | The 4-product lineup from §7 with taglines, bullets, callouts | LOCKED |

---

## 12. Assets to Generate (Higgsfield — Plus plan, 164 credits on hand)

| Asset | Model | Count | Notes |
|---|---|---|---|
| Per-product rotation video | Seedance 2.0 | 4 | One at a time to respect Plus monthly throttle |

**Total expected credit burn:** ~40–60 credits worst case (Seedance 2.0 at 5s/720p, 4 generations + 2× iteration buffer). 164 on hand. Comfortable.

**No S00 brand-open visual** — clean white + headline only per §S00 decision.

**Sequencing rule:** generate one product, embed it, visually verify it scrubs correctly, then generate the next. Don't batch-generate then batch-embed.

---

## 13. Recipes to Apply (v8)

| Recipe | Used In |
|---|---|
| Recipe 6 / Recipe 37 — TypeIn (above-the-fold variant) | Section headlines |
| Recipe 30 — Audit Ledger | S05 — comparison (THE moral-pivot section) |
| Recipe 32 — Scrolling Brand Bar | S06 optional source strip |
| Recipe 33 — Perimeter Draw | Product section cards (S01–S04) |
| Recipe 35 — Sticky Pin | Product sections (S01–S04), combined with scroll-snap |
| Custom — Scroll-Snap Section | All sections (NEW pattern — Recipe 38 candidate) |
| Custom — Video Scroll Scrubber | Product sections S01–S04 (NEW pattern — Recipe 39 candidate) |

---

## 14. Verification Plan

Standard doctrine VC-00 → VC-11, with D2D-specific additions:

| Check | Specific to this build |
|---|---|
| Scroll-snap behavior | Each section snaps cleanly on iOS Safari, Android Chrome, mobile Firefox |
| Video scrub smoothness | Finger-swipe over video feels native at 30+ fps |
| Outdoor glare contrast | Body text ≥ 7:1 (AAA), validated live on a phone in direct sun |
| Light-theme contrast matrix | Every text token × every surface token AAA where possible, AA minimum |
| **No pricing language anywhere** | Build-time grep fails on: `$\d`, `\d+%`, "price", "pricing", "cost", "costs", "fee", "fees", "monthly", "subscription", "subscribe", "financing", "financed", "APR", "payment", "payments", "installment", "down payment", "early termination", "buy now", "purchase", "free forever", "no monthly", "subscription-free", "/mo", "per month" |
| Cellular load time | First paint <1.5s on simulated 4G. Total <5MB. Each rotation video <1.5MB. |
| No surprise modals | No cookie banner, no subscribe overlay |
| Tap-target sizes | Interactive elements ≥48px, primary ≥56px |
| One-handed reach | All interactive elements in bottom 60% of viewport |

**No whitelist exceptions on the pricing-language grep.** Changes require brief revision, not grep patches.

---

## Appendix A — Handoff Checklist

1. **Read this brief** (`docs/EUFY_SALES_DECK_SITE_BRIEF.md`) end-to-end
2. **Read `KING_MAKER_MASTER_v8.md`** — doctrine
3. **Run FORGE pre-flight** (doctrine §0.0): skills discovery, MCP discovery, Higgsfield `models_explore` + `balance`, Playwright verification, dev environment check
4. **Draft light-theme palette + contrast matrix** from §4 — validate AAA where possible before first commit
5. **Generate 4 product rotation videos via Higgsfield Seedance 2.0** one-at-a-time per §9 prompts and motion choices
6. **Build section-by-section** following §8 (S00 → S07), applying recipes per §13
7. **Vercel deploy after each major milestone** (OP-08 — deploy-and-verify-first)
8. **Run verification** per §14 — all checks must pass before declaring done
9. **Test on a real porch in real sunlight** before declaring done (the AAA contrast spec is theoretical until it's not)
10. **After-action report** to `docs/AFTER_ACTION_EUFY_SALES_DECK_SITE.md` (OP-09) capturing what worked, what didn't, and what should change in doctrine v9

---

## Appendix B — Risks & Mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| Eufy IP issue (logo, branded imagery) | High | Zero use of eufy logo as our brand mark. Product names spelled per eufy's casing. Rep verbally clarifies "I'm an independent installer working with eufy hardware" — no on-site disclosure needed because the rep is physically present. |
| Build copy drift reintroduces pricing language | High | Expanded grep check (§14) fails build on any pricing-adjacent term |
| Outdoor glare makes site unreadable | High | AAA contrast validated, big type, real-sun validation |
| Cellular load time too slow for D2D | High | Strict asset budget enforced in CI |
| Higgsfield rotation quality on a specific product | Medium | Per-product motion preset (180° vs 360°); static fallback documented |
| iOS Safari scrub failure | Medium | 8-frame flip-through via Higgsfield Angles |
| Naming a competitor in S05 invites legal trouble | Medium | Never name them — "the other system" only |
| Higgsfield Plus monthly throttle | Medium | Generate one product at a time, verify before next; fallback to Kling 3.0 |

---

**End of brief v1.1. LOCKED.**
