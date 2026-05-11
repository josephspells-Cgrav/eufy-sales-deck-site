import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const SECTION_IDS = [
  "open",
  "solocam-e30",
  "solocam-s220",
  "video-doorbell-e340",
  "homebase-s380",
  "comparison",
  "reviews",
  "close",
] as const;

test.describe("eufy sales deck", () => {
  test("all 8 sections present in DOM", async ({ page }) => {
    await page.goto("/");
    for (const id of SECTION_IDS) {
      await expect(page.locator(`#${id}`), `section #${id}`).toHaveCount(1);
    }
  });

  test("snap-deck container scrolls and snaps", async ({ page }) => {
    await page.goto("/");
    const deck = page.locator("main.snap-deck");
    await expect(deck).toBeVisible();

    const sh = await deck.evaluate((el) => el.scrollHeight);
    const ch = await deck.evaluate((el) => el.clientHeight);

    // 8 sections at 100dvh each → scrollHeight >= ~8x viewport height
    expect(sh).toBeGreaterThanOrEqual(ch * 7);
  });

  test("no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(overflow).toBe(false);
  });

  test("no pricing language in rendered HTML", async ({ page }) => {
    await page.goto("/");
    // Wait briefly for client hydration so any client-only text is in the DOM
    await page.waitForTimeout(500);
    const text = (await page.locator("body").innerText()).toLowerCase();

    const banned = [
      "price", "pricing", "cost", "fee", "fees",
      "monthly", "subscription", "subscribe",
      "financing", "APR", "payment", "installment",
      "purchase", "down payment", "/mo", "per month",
    ];
    for (const term of banned) {
      expect(
        text.includes(term),
        `Banned term "${term}" appeared in user-visible text`,
      ).toBe(false);
    }
  });

  test("axe-core: zero critical or serious violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const blocking = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );
    if (blocking.length > 0) {
      console.error(JSON.stringify(blocking, null, 2));
    }
    expect(blocking, "axe-core critical/serious violations").toHaveLength(0);
  });

  test("comparison ledger has 5 rows and renders both columns", async ({ page }) => {
    await page.goto("/");
    const ledger = page.locator("#comparison");
    await ledger.evaluate((el) => el.scrollIntoView({ block: "start" }));

    // Each row contains a positive-tint cell AND an alert-tint cell.
    await expect(ledger.locator(".bg-positive-tint")).toHaveCount(5);
    await expect(ledger.locator(".bg-alert-tint")).toHaveCount(5);
  });

  test("competitor not named on site", async ({ page }) => {
    await page.goto("/");
    const text = (await page.locator("body").innerText()).toLowerCase();
    // The brief is explicit — never name the competitor. Keep this list
    // additive; the goal is to fail noisily if naming creeps in.
    const competitorNames = ["ring", "nest", "blink", "arlo", "simplisafe", "vivint", "adt"];
    for (const name of competitorNames) {
      // Match as whole word to avoid false positives ("nesting", "ringing").
      const re = new RegExp(`\\b${name}\\b`, "i");
      expect(re.test(text), `Competitor "${name}" appeared in body text`).toBe(false);
    }
  });
});
