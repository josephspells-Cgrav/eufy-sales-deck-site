# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> eufy sales deck >> axe-core: zero critical or serious violations
- Location: tests\site.spec.ts:63:7

# Error details

```
Error: axe-core critical/serious violations

expect(received).toHaveLength(expected)

Expected length: 0
Received length: 2
Received array:  [{"description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds", "help": "Elements must meet minimum color contrast ratio thresholds", "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright", "id": "color-contrast", "impact": "serious", "nodes": [{"all": [], "any": [{"data": {"bgColor": "#ffffff", "contrastRatio": 4.47, "expectedContrastRatio": "4.5:1", "fgColor": "#6e7886", "fontSize": "7.5pt (10px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<section id=\"solocam-e30\" aria-label=\"eufy SoloCam E30\" class=\"snap-section items-center justify-center bg-page\">", "target": ["#solocam-e30"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs\">Product <!-- -->01<!-- --> of <!-- -->04</p>", "impact": "serious", "none": [], "target": ["#solocam-e30 > .max-w-3xl.mx-auto.w-full > .text-\\[10px\\].tracking-\\[0\\.22em\\].sm\\:text-xs"]}, {"all": [], "any": [{"data": {"bgColor": "#ffffff", "contrastRatio": 4.47, "expectedContrastRatio": "4.5:1", "fgColor": "#6e7886", "fontSize": "7.5pt (10px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<section id=\"solocam-s220\" aria-label=\"eufy SoloCam S220\" class=\"snap-section items-center justify-center bg-page\">", "target": ["#solocam-s220"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs\">Product <!-- -->02<!-- --> of <!-- -->04</p>", "impact": "serious", "none": [], "target": ["#solocam-s220 > .max-w-3xl.mx-auto.w-full > .text-\\[10px\\].tracking-\\[0\\.22em\\].sm\\:text-xs"]}, {"all": [], "any": [{"data": {"bgColor": "#ffffff", "contrastRatio": 4.47, "expectedContrastRatio": "4.5:1", "fgColor": "#6e7886", "fontSize": "7.5pt (10px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<section id=\"video-doorbell-e340\" aria-label=\"Video Doorbell E340\" class=\"snap-section items-center justify-center bg-page\">", "target": ["#video-doorbell-e340"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs\">Product <!-- -->03<!-- --> of <!-- -->04</p>", "impact": "serious", "none": [], "target": ["#video-doorbell-e340 > .max-w-3xl.mx-auto.w-full > .text-\\[10px\\].tracking-\\[0\\.22em\\].sm\\:text-xs"]}, {"all": [], "any": [{"data": {"bgColor": "#ffffff", "contrastRatio": 4.47, "expectedContrastRatio": "4.5:1", "fgColor": "#6e7886", "fontSize": "7.5pt (10px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<section id=\"homebase-s380\" aria-label=\"eufy HomeBase S380\" class=\"snap-section items-center justify-center bg-page\">", "target": ["#homebase-s380"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 4.47 (foreground color: #6e7886, background color: #ffffff, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim sm:text-xs\">Product <!-- -->04<!-- --> of <!-- -->04</p>", "impact": "serious", "none": [], "target": ["#homebase-s380 > .max-w-3xl.mx-auto.w-full > .text-\\[10px\\].tracking-\\[0\\.22em\\].sm\\:text-xs"]}, {"all": [], "any": [{"data": {"bgColor": "#f7f8fa", "contrastRatio": 4.21, "expectedContrastRatio": "4.5:1", "fgColor": "#6e7886", "fontSize": "9.0pt (12px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 4.21 (foreground color: #6e7886, background color: #f7f8fa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<section id=\"comparison\" aria-label=\"Comparison\" class=\"snap-section items-center justify-center bg-surface\">", "target": ["#comparison"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 4.21 (foreground color: #6e7886, background color: #f7f8fa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"mt-6 text-center text-xs text-ink-dim\">Not naming names.</p>", "impact": "serious", "none": [], "target": [".mt-6"]}], "tags": ["cat.color", "wcag2aa", "wcag143", "TTv5", "TT13.c", "EN-301-549", "EN-9.1.4.3", "ACT", "RGAAv4", "RGAA-3.2.1"]}, {"description": "Ensure elements that have scrollable content are accessible by keyboard in Safari", "help": "Scrollable region must have keyboard access", "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright", "id": "scrollable-region-focusable", "impact": "serious", "nodes": [{"all": [], "any": [{"data": null, "id": "focusable-content", "impact": "serious", "message": "Element should have focusable content", "relatedNodes": []}, {"data": null, "id": "focusable-element", "impact": "serious", "message": "Element should be focusable", "relatedNodes": []}], "failureSummary": "Fix any of the following:
  Element should have focusable content
  Element should be focusable", "html": "<main class=\"snap-deck\">", "impact": "serious", "none": [], "target": ["main"]}], "tags": ["cat.keyboard", "wcag2a", "wcag211", "wcag213", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1", "EN-9.2.1.3", "RGAAv4", …]}]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation "Section index" [ref=e2]:
    - list [ref=e3]:
      - listitem [ref=e4]:
        - button "Jump to Open" [ref=e5]:
          - generic: Open
      - listitem [ref=e7]:
        - button "Jump to SoloCam E30" [ref=e8]:
          - generic: SoloCam E30
      - listitem [ref=e10]:
        - button "Jump to SoloCam S220" [ref=e11]:
          - generic: SoloCam S220
      - listitem [ref=e13]:
        - button "Jump to Doorbell E340" [ref=e14]:
          - generic: Doorbell E340
      - listitem [ref=e16]:
        - button "Jump to HomeBase S380" [ref=e17]:
          - generic: HomeBase S380
      - listitem [ref=e19]:
        - button "Jump to Comparison" [ref=e20]:
          - generic: Comparison
      - listitem [ref=e22]:
        - button "Jump to Reviews" [ref=e23]:
          - generic: Reviews
      - listitem [ref=e25]:
        - button "Jump to Close" [ref=e26]:
          - generic: Close
  - main [ref=e28]:
    - region "Open" [ref=e29]:
      - heading "Real cameras. Local storage. Yours." [level=1] [ref=e31]:
        - generic [ref=e32]: Real cameras. Local storage. Yours.
        - generic [ref=e33]:
          - generic [ref=e34]: Real
          - generic [ref=e35]: cameras.
          - generic [ref=e36]: Local
          - generic [ref=e37]: storage.
          - generic [ref=e38]: Yours.
    - region "eufy SoloCam E30" [ref=e40]:
      - generic [ref=e41]:
        - paragraph [ref=e42]: Product 01 of 04
        - heading "eufy SoloCam E30" [level=2] [ref=e43]
        - paragraph [ref=e44]:
          - generic [ref=e45]: "\"One camera. Whole side yard.\""
          - generic [ref=e46]:
            - generic [ref=e47]: "\"One"
            - generic [ref=e48]: camera.
            - generic [ref=e49]: Whole
            - generic [ref=e50]: side
            - generic [ref=e51]: yard."
        - list [ref=e52]:
          - listitem [ref=e53]:
            - generic [ref=e55]: Solar + battery — set it once
          - listitem [ref=e56]:
            - generic [ref=e58]: Enhanced 2K with f/1.6 night vision
          - listitem [ref=e59]:
            - generic [ref=e61]: 360° pan & tilt — covers everything
          - listitem [ref=e62]:
            - generic [ref=e64]: "AI: human, vehicle, pet"
          - listitem [ref=e65]:
            - generic [ref=e67]: IP65 — Carolina weather-proof
          - listitem [ref=e68]:
            - generic [ref=e70]: 3-month battery (forever with sun)
        - paragraph [ref=e72]: Replaces 3 fixed cameras with 1.
    - region "eufy SoloCam S220" [ref=e73]:
      - generic [ref=e74]:
        - paragraph [ref=e75]: Product 02 of 04
        - heading "eufy SoloCam S220" [level=2] [ref=e76]
        - paragraph [ref=e77]:
          - generic [ref=e78]: "\"Small. Solar. Set-and-forget.\""
          - generic [ref=e79]:
            - generic [ref=e80]: "\"Small."
            - generic [ref=e81]: Solar.
            - generic [ref=e82]: Set-and-forget."
        - list [ref=e83]:
          - listitem [ref=e84]:
            - generic [ref=e86]: Built-in solar (3 hours of sun = forever)
          - listitem [ref=e87]:
            - generic [ref=e89]: 2K resolution
          - listitem [ref=e90]:
            - generic [ref=e92]: IP67 — any weather
          - listitem [ref=e93]:
            - generic [ref=e95]: 8GB storage built in
          - listitem [ref=e96]:
            - generic [ref=e98]: 135° wide field of view
          - listitem [ref=e99]:
            - generic [ref=e101]: On-device AI motion detection
        - paragraph [ref=e103]: 4-month battery standalone. Lifetime with the sun.
    - region "Video Doorbell E340" [ref=e104]:
      - generic [ref=e105]:
        - paragraph [ref=e106]: Product 03 of 04
        - heading "Video Doorbell E340" [level=2] [ref=e107]
        - paragraph [ref=e108]:
          - generic [ref=e109]: "\"Two cameras. Zero blind spots.\""
          - generic [ref=e110]:
            - generic [ref=e111]: "\"Two"
            - generic [ref=e112]: cameras.
            - generic [ref=e113]: Zero
            - generic [ref=e114]: blind
            - generic [ref=e115]: spots."
        - list [ref=e116]:
          - listitem [ref=e117]:
            - generic [ref=e119]: DUAL camera — one out, one down
          - listitem [ref=e120]:
            - generic [ref=e122]: 2K with color night vision
          - listitem [ref=e123]:
            - generic [ref=e125]: Package detection (Delivery Guard)
          - listitem [ref=e126]:
            - generic [ref=e128]: Battery OR existing doorbell wiring
          - listitem [ref=e129]:
            - generic [ref=e131]: Detachable battery — swap in 30 seconds
          - listitem [ref=e132]:
            - generic [ref=e134]: Works with existing chimes, Alexa, Google
        - paragraph [ref=e136]: The downward camera sees what's on your porch. Most doorbells don't.
    - region "eufy HomeBase S380" [ref=e137]:
      - generic [ref=e138]:
        - paragraph [ref=e139]: Product 04 of 04
        - heading "eufy HomeBase S380" [level=2] [ref=e140]
        - paragraph [ref=e141]:
          - generic [ref=e142]: "\"Where your footage actually lives.\""
          - generic [ref=e143]:
            - generic [ref=e144]: "\"Where"
            - generic [ref=e145]: your
            - generic [ref=e146]: footage
            - generic [ref=e147]: actually
            - generic [ref=e148]: lives."
        - list [ref=e149]:
          - listitem [ref=e150]:
            - generic [ref=e152]: Up to 16TB local storage
          - listitem [ref=e153]:
            - generic [ref=e155]: Military-grade encryption (AES-256 + RSA-1024)
          - listitem [ref=e156]:
            - generic [ref=e158]: BionicMind AI — learns the people in your life
          - listitem [ref=e159]:
            - generic [ref=e161]: Connects every eufy camera + doorbell + lock
          - listitem [ref=e162]:
            - generic [ref=e164]: One box per house
        - paragraph [ref=e166]: Your footage. Your house. Your call.
    - region "Comparison" [ref=e167]:
      - generic [ref=e168]:
        - heading "What you actually get." [level=2] [ref=e170]:
          - generic [ref=e171]: What you actually get.
          - generic [ref=e172]:
            - generic [ref=e173]: What
            - generic [ref=e174]: you
            - generic [ref=e175]: actually
            - generic [ref=e176]: get.
        - generic [ref=e177]:
          - generic [ref=e178]:
            - generic [ref=e179]: Where footage lives
            - generic [ref=e180]:
              - generic [ref=e181]:
                - generic [ref=e182]: eufy
                - generic [ref=e183]: Your HomeBase, your house
              - generic [ref=e184]:
                - generic [ref=e185]: Other
                - generic [ref=e186]: Their cloud
          - generic [ref=e187]:
            - generic [ref=e188]: Who can view it
            - generic [ref=e189]:
              - generic [ref=e190]:
                - generic [ref=e191]: eufy
                - generic [ref=e192]: You
              - generic [ref=e193]:
                - generic [ref=e194]: Other
                - generic [ref=e195]: Them + you
          - generic [ref=e196]:
            - generic [ref=e197]: Locked into a contract
            - generic [ref=e198]:
              - generic [ref=e199]:
                - generic [ref=e200]: eufy
                - generic [ref=e201]: "No"
              - generic [ref=e202]:
                - generic [ref=e203]: Other
                - generic [ref=e204]: "Yes"
          - generic [ref=e205]:
            - generic [ref=e206]: You own it
            - generic [ref=e207]:
              - generic [ref=e208]:
                - generic [ref=e209]: eufy
                - generic [ref=e210]: Day one
              - generic [ref=e211]:
                - generic [ref=e212]: Other
                - generic [ref=e213]: When the contract ends
          - generic [ref=e214]:
            - generic [ref=e215]: Walk away anytime
            - generic [ref=e216]:
              - generic [ref=e217]:
                - generic [ref=e218]: eufy
                - generic [ref=e219]: "Yes"
              - generic [ref=e220]:
                - generic [ref=e221]: Other
                - generic [ref=e222]: "No"
        - paragraph [ref=e223]: Not naming names.
    - region "Reviews" [ref=e224]:
      - generic [ref=e225]:
        - generic [ref=e226]:
          - generic [ref=e227]: "0"
          - generic [ref=e228]: +
        - paragraph [ref=e229]:
          - generic [ref=e230]: Verified 4.7 / 5+ star reviews on eufy security products.
          - generic [ref=e231]:
            - generic [ref=e232]: Verified
            - generic [ref=e233]: "4.7"
            - generic [ref=e234]: /
            - generic [ref=e235]: 5+
            - generic [ref=e236]: star
            - generic [ref=e237]: reviews
            - generic [ref=e238]: "on"
            - generic [ref=e239]: eufy
            - generic [ref=e240]: security
            - generic [ref=e241]: products.
    - region "Close" [ref=e242]:
      - heading "Want this at your place?" [level=2] [ref=e244]:
        - generic [ref=e245]: Want this at your place?
        - generic [ref=e246]:
          - generic [ref=e247]: Want
          - generic [ref=e248]: this
          - generic [ref=e249]: at
          - generic [ref=e250]: your
          - generic [ref=e251]: place?
  - alert [ref=e252]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import AxeBuilder from "@axe-core/playwright";
  3   | 
  4   | const SECTION_IDS = [
  5   |   "open",
  6   |   "solocam-e30",
  7   |   "solocam-s220",
  8   |   "video-doorbell-e340",
  9   |   "homebase-s380",
  10  |   "comparison",
  11  |   "reviews",
  12  |   "close",
  13  | ] as const;
  14  | 
  15  | test.describe("eufy sales deck", () => {
  16  |   test("all 8 sections present in DOM", async ({ page }) => {
  17  |     await page.goto("/");
  18  |     for (const id of SECTION_IDS) {
  19  |       await expect(page.locator(`#${id}`), `section #${id}`).toHaveCount(1);
  20  |     }
  21  |   });
  22  | 
  23  |   test("snap-deck container scrolls and snaps", async ({ page }) => {
  24  |     await page.goto("/");
  25  |     const deck = page.locator("main.snap-deck");
  26  |     await expect(deck).toBeVisible();
  27  | 
  28  |     const sh = await deck.evaluate((el) => el.scrollHeight);
  29  |     const ch = await deck.evaluate((el) => el.clientHeight);
  30  | 
  31  |     // 8 sections at 100dvh each → scrollHeight >= ~8x viewport height
  32  |     expect(sh).toBeGreaterThanOrEqual(ch * 7);
  33  |   });
  34  | 
  35  |   test("no horizontal overflow", async ({ page }) => {
  36  |     await page.goto("/");
  37  |     const overflow = await page.evaluate(() => {
  38  |       return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  39  |     });
  40  |     expect(overflow).toBe(false);
  41  |   });
  42  | 
  43  |   test("no pricing language in rendered HTML", async ({ page }) => {
  44  |     await page.goto("/");
  45  |     // Wait briefly for client hydration so any client-only text is in the DOM
  46  |     await page.waitForTimeout(500);
  47  |     const text = (await page.locator("body").innerText()).toLowerCase();
  48  | 
  49  |     const banned = [
  50  |       "price", "pricing", "cost", "fee", "fees",
  51  |       "monthly", "subscription", "subscribe",
  52  |       "financing", "APR", "payment", "installment",
  53  |       "purchase", "down payment", "/mo", "per month",
  54  |     ];
  55  |     for (const term of banned) {
  56  |       expect(
  57  |         text.includes(term),
  58  |         `Banned term "${term}" appeared in user-visible text`,
  59  |       ).toBe(false);
  60  |     }
  61  |   });
  62  | 
  63  |   test("axe-core: zero critical or serious violations", async ({ page }) => {
  64  |     await page.goto("/");
  65  |     await page.waitForTimeout(800);
  66  |     const results = await new AxeBuilder({ page })
  67  |       .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  68  |       .analyze();
  69  |     const blocking = results.violations.filter(
  70  |       (v) => v.impact === "critical" || v.impact === "serious",
  71  |     );
  72  |     if (blocking.length > 0) {
  73  |       console.error(JSON.stringify(blocking, null, 2));
  74  |     }
> 75  |     expect(blocking, "axe-core critical/serious violations").toHaveLength(0);
      |                                                              ^ Error: axe-core critical/serious violations
  76  |   });
  77  | 
  78  |   test("comparison ledger has 5 rows and renders both columns", async ({ page }) => {
  79  |     await page.goto("/");
  80  |     const ledger = page.locator("#comparison");
  81  |     await ledger.evaluate((el) => el.scrollIntoView({ block: "start" }));
  82  | 
  83  |     // Each row contains a positive-tint cell AND an alert-tint cell.
  84  |     await expect(ledger.locator(".bg-positive-tint")).toHaveCount(5);
  85  |     await expect(ledger.locator(".bg-alert-tint")).toHaveCount(5);
  86  |   });
  87  | 
  88  |   test("competitor not named on site", async ({ page }) => {
  89  |     await page.goto("/");
  90  |     const text = (await page.locator("body").innerText()).toLowerCase();
  91  |     // The brief is explicit — never name the competitor. Keep this list
  92  |     // additive; the goal is to fail noisily if naming creeps in.
  93  |     const competitorNames = ["ring", "nest", "blink", "arlo", "simplisafe", "vivint", "adt"];
  94  |     for (const name of competitorNames) {
  95  |       // Match as whole word to avoid false positives ("nesting", "ringing").
  96  |       const re = new RegExp(`\\b${name}\\b`, "i");
  97  |       expect(re.test(text), `Competitor "${name}" appeared in body text`).toBe(false);
  98  |     }
  99  |   });
  100 | });
  101 | 
```