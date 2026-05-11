import { defineConfig, devices } from "@playwright/test";

// Tests against the deployed Vercel URL. No webServer — the production
// build is what we actually ship, and the dev server has different
// behavior (strict mode double-render, no static optimization). If you
// need to test a branch deploy, override PLAYWRIGHT_BASE_URL.

const baseURL =
  process.env.PLAYWRIGHT_BASE_URL ?? "https://eufy-sales-deck-site.vercel.app";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "iphone-14",
      use: { ...devices["iPhone 14"] },
    },
  ],
});
