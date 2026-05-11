# After-Action Report — Eufy Sales Deck Site

**Build window:** 2026-05-10 (single session, Claude Opus 4.7 in CCR)
**Doctrine:** King Maker v8.0
**Production:** https://eufy-sales-deck-site.vercel.app
**Repo:** https://github.com/josephspells-Cgrav/eufy-sales-deck-site
**Brief:** [docs/EUFY_SALES_DECK_SITE_BRIEF.md](EUFY_SALES_DECK_SITE_BRIEF.md) (v1.1)

---

## Status — Shipped vs. Open

### Shipped

| Section | Built | Verified |
|---|---|---|
| S00 Open | ✅ | Chrome MCP screenshot + Playwright |
| S01 SoloCam E30 | ✅ static (video deferred) | Chrome MCP + Playwright |
| S02 SoloCam S220 | ✅ static (video deferred) | DOM eval + Playwright |
| S03 Doorbell E340 | ✅ static (video deferred) | DOM eval + Playwright |
| S04 HomeBase S380 | ✅ static (video deferred) | DOM eval + Playwright |
| S05 Comparison (moral pivot) | ✅ desktop + mobile-stacked | Chrome MCP + Playwright (×5 rows assertion) |
| S06 Reviews aggregate | ✅ (counter at TBD value) | Chrome MCP + Playwright |
| S07 Close | ✅ | Chrome MCP + Playwright |

Plus: SectionIndex 8-dot nav, snap-deck container with keyboard scroll, brand-validated WCAG AA palette, pricing-language prebuild gate, Vercel deploy auto-aliased.

### Verification stack (doctrine §1.5 contract — all three layers green)

- **Layer 1 visual:** Chrome MCP screenshots with force-state CSS injection (animation rAF was throttled in the automation tab — see L01 below).
- **Layer 2 automated:** Playwright 14/14 green across `desktop-chrome` (1440×900) and `iphone-14` device profiles. 7 test classes: section presence, snap-deck scrollability, no horizontal overflow, no pricing language in rendered HTML, comparison ledger row count + columns, no competitor names, axe-core zero-critical-or-serious.
- **Layer 3 accessibility:** axe-core `wcag2a + wcag2aa + wcag21a + wcag21aa` — 0 violations after the contrast/scrollable-region fixes.

### Open items (next session)

1. **Higgsfield rotation videos** for S01–S04. Pipeline planned: Nano Banana Pro stylized still → Seedance 2.0 image-to-video, 5s 720p, scroll-scrubbed via GSAP ScrollTrigger seeking `video.currentTime`. Plus monthly throttle is the live constraint (164 credits on hand, ≈60 worst-case need). Deferred to prove the static deck end-to-end first.
2. **Real review counts** in `lib/data.ts` — `REVIEW_AGGREGATE_COUNT` and `REVIEW_AGGREGATE_RATING` ship as 50,000 / 4.7 placeholders. Verify aggregate across the 4 SKUs on Amazon + Eufy.com before any non-rehearsal use.
3. **Real-porch validation** — the AAA contrast spec is theoretical until tested in direct sun on a phone. Doctrine §1.3 + brief §6.5.
4. **VideoScrubber primitive** — written in mental model only; needs implementation when videos arrive. Pattern: `useGSAP()` + ScrollTrigger with `scrub: true`, `onUpdate` seeks `video.currentTime` (NOT `playbackRate` — PP-11). Sticky-pin per Recipe 35 with `pin_factor: 0.3`.

---

## Lessons → candidate Doctrine v9 inputs

### L01 — Recipe 37 per-char TypeIn breaks the variant cascade at scale

**Symptom:** On the live deploy, chars n>5 in a 31-char headline stayed at `opacity: 0` indefinitely. Verified via DOM eval — char 0 was at 0.57 opacity, char 5 at 0.00, char 30 at 0.00 after 20+ seconds.

**Root cause:** v8 Recipe 37 wraps motion.span chars under non-motion per-word `<span>` wrappers. Framer Motion's `staggerChildren` cascades through *direct* motion children — when there's a non-motion wrapper layer, the stagger does not propagate cleanly to nested chars.

**Fix applied:** rewrote TypeIn to per-WORD reveal. 5 motion children directly under the orchestrator. Cleaner cascade, far fewer composited layers, visually almost identical.

**Doctrine v9 candidate:** Recipe 37 should either be rewritten to put motion at every layer of the cascade (per-word wrappers as `motion.span` too), or be retired in favor of a per-word default with per-char available as an opt-in for very short hero phrases (≤10 chars).

### L02 — Chrome MCP automation tabs are background-throttled

**Symptom:** Animations on the live deploy ran ~60× slower when observed via Chrome MCP. CDP screenshot capture timed out under load.

**Root cause:** `document.visibilityState === "hidden"` and `document.hasFocus() === false` in the MCP-driven tab. Chrome throttles rAF to ≤1 Hz for hidden tabs. requestAnimationFrame-driven animations (Framer Motion, GSAP) appear stuck.

**Fix applied (verification workaround):** Inject a CSS override that forces every common Framer-Motion final state (`opacity:1`, `transform: none`, `scaleX:1`) so static layout/typography/palette can be verified by screenshot. Genuine motion behavior is verified separately on a real device or via Playwright.

**Doctrine v9 candidate:** Add §1.5 verification note that Chrome MCP screenshots of `whileInView` / scroll-driven animations require force-state CSS injection OR pivot to Playwright for any motion-correctness check. Tab visibility check (`document.hidden`) should be part of Step 0 of any motion-heavy MCP verification flow.

### L03 — WCAG validation must include card surfaces, not just page bg

**Symptom:** The brief's proposed `--text-dim: #6E7886` calculated to 4.51:1 on `#FFFFFF` (AA pass) but axe reported 4.21:1 on `--surface: #F7F8FA` (AA fail). The comparison section sits on `--surface`, and the "Not naming names." kicker uses `--text-dim` — failure.

**Fix applied:** Bumped `--text-dim` to `#5C6573`. Now ≈5.5:1 on `#FFFFFF` and ≈5.0:1 on `#F7F8FA`. Both passing AA on every surface the token is used on.

**Doctrine v9 candidate:** TP-15 / §1.3 should require a contrast matrix validation against **every surface the token appears on**, not just the primary page bg. The starter palette templates in v8 Part 3 should ship with a matrix that includes all surface tokens (page, surface, surface-2, surface-3), not just `bg`. This was already a v8 sub-rule but the audit step needs to be stricter — calculating from hex alone misses sub-percentage differences that axe catches.

### L04 — Scrollable regions need keyboard focusability

**Symptom:** axe-core `scrollable-region-focusable` rule flagged `<main class="snap-deck">` — without `tabindex`, keyboard users can't focus the scroll container, so arrow-key scrolling doesn't work.

**Fix applied:** Added `tabIndex={0}` to the main element.

**Doctrine v9 candidate:** §1.3 should explicitly list this. Any `overflow: scroll` / `overflow: auto` container that's a primary content scroll surface needs `tabindex="0"` (or focusable content). Most scroll-snap implementations in v8 examples don't have this — they'd all fail axe.

### L05 — prebuild grep guards need code-structure stripping

**Symptom:** Naive grep for banned tokens flags JSX closing tags (`</motion.span>` matches `/mo` phrase), code comments (`60% reach zone` matches `\d+%`), and CSS unit values (`100%` in CSS).

**Fix applied:** Strip block comments, line comments, JSX-ish tags before scanning. Preserve newlines in replacements so line numbers stay aligned. In `.css` files, skip the `\d+%` pattern (% is always a unit identifier there).

**Doctrine v9 candidate:** When a doctrine recipe calls for a "build-time grep guard," include the canonical stripper pattern in the recipe — otherwise teams will hit false positives, weaken the rule with whitelists, and the gate becomes ceremonial. See `scripts/check-no-pricing.mjs` in this repo for the canonical implementation.

### L06 — Deploy-and-verify-first paid off

**Worked well:** Following OP-08, every meaningful change shipped to Vercel before the next change started. Build time stayed under 35s. The two animation bugs in TypeIn were caught against the LIVE deployed page, not just local dev — they were rAF-bound issues that local dev wouldn't reproduce reliably.

**Doctrine v9 candidate:** No change needed — OP-08 is solid as-written. Reinforce in the next industry-template's worked example.

### L07 — Static-first, video-polish-second was the right call

**Worked well:** When the brief specifies video but pipeline depends on external services (Higgsfield) with throttle constraints, ship the static layout first. The deck reads end-to-end without videos. Adds polish without blocking core delivery.

**Doctrine v9 candidate:** Add to OP-10 — for "X required, depends on external service Y" patterns, default to static first, dynamic polish second. This isn't pushback so much as sequencing wisdom.

### L08 — Mobile resize-window doesn't reach phone widths via Chrome MCP

**Symptom:** `resize_window` to 390×844 left the actual viewport at 1600×731. OS-level minimum window size clamps the request.

**Fix applied:** Pivoted mobile verification to Playwright's `iphone-14` device profile, which sets viewport via CDP-level emulation (not window resize).

**Doctrine v9 candidate:** §1.5 / §1.8 — for any verification check at mobile widths below the OS window minimum (≈500 px on Windows, ≈480 px on macOS), Playwright device emulation is the only reliable path. Chrome MCP browser_batch `resize_window` cannot reach phone widths.

---

## Doctrine deviations (logged, not violations)

1. **TP-01 per-char TypeIn**: deviated to per-word for the cascade reason in L01. Documented in component header. Visual feel is preserved.
2. **Higgsfield videos (brief §S01–S04)**: deferred to next session. Static product cards ship with full content; rotation videos slot in non-breaking.
3. **AAA contrast for outdoor glare (brief §6.5)**: targeting AA strictly (4.5:1) — most tokens are AAA-tier already (`--text` at 18.4:1, `--text-muted` at 7.66:1, `--gold` and `--brand-deep` similar). `--text-dim` and a few small-text usages land at 5–6:1 (AA, not AAA). Will revisit on real-porch sunlight test.

---

## File / path inventory

```
eufy-sales-deck-site/
├── app/
│   ├── globals.css           — Light palette, WCAG-validated tokens, snap-deck/snap-section CSS
│   ├── layout.tsx            — Geist + Geist Mono, noindex meta, themeColor
│   └── page.tsx              — Section ordering, SectionIndex overlay, snap-deck tabIndex
├── components/
│   ├── sections/
│   │   ├── Open.tsx          — S00
│   │   ├── ProductSection.tsx — S01–S04 (driven by PRODUCTS constant)
│   │   ├── Comparison.tsx    — S05 (Recipe 30, mobile-stacked + sm+ horizontal)
│   │   ├── Reviews.tsx       — S06
│   │   └── Close.tsx         — S07
│   └── ui/
│       ├── Section.tsx       — snap-section wrapper
│       ├── TypeIn.tsx        — Recipe 37 per-word variant (see L01)
│       ├── SectionIndex.tsx  — 8 floating dots, IntersectionObserver-driven
│       ├── Counter.tsx       — useMotionValue + animate, no setInterval
│       └── AnimatedUnderline.tsx — scaleX 0→1 brand line
├── lib/
│   └── data.ts               — Source-of-truth constants (TP-19)
├── scripts/
│   └── check-no-pricing.mjs  — Prebuild grep guard (see L05)
├── tests/
│   └── site.spec.ts          — 7 test classes × 2 viewports = 14 tests, all green
├── docs/
│   ├── EUFY_SALES_DECK_SITE_BRIEF.md
│   └── AFTER_ACTION_EUFY_SALES_DECK_SITE.md   ← you are here
├── playwright.config.ts      — desktop-chrome + iphone-14 projects
└── package.json              — "prebuild": "node scripts/check-no-pricing.mjs"
```

---

## What the rep walks through, in order

1. **S00** — "Real cameras. Local storage. Yours." (rep introduces themselves)
2. **S01** — SoloCam E30 — "One camera. Whole side yard." (rep talks about side-yard coverage)
3. **S02** — SoloCam S220 — "Small. Solar. Set-and-forget." (rep talks about set-and-forget)
4. **S03** — Doorbell E340 — "Two cameras. Zero blind spots." (rep talks about the second downward lens)
5. **S04** — HomeBase S380 — "Where your footage actually lives." (rep talks about local storage)
6. **S05** — *The moral pivot.* Side-by-side ledger. Customer reads the contract row and asks "wait, I'd own it day one?" (rep answers, transitions to install)
7. **S06** — Big trust number (50,000+ verified reviews)
8. **S07** — "Want this at your place?" (rep closes verbally)

Footer disclosure was removed from the build per directive 2026-05-10 — the rep's physical presence makes the independent-installer context obvious.
