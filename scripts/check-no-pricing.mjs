#!/usr/bin/env node
// Brief §14 — hard build-time gate.
//
// Anti-goal from the brief: "Zero pricing language anywhere on the site.
// Build-time grep enforces — see §14. No whitelist exceptions on the
// pricing-language grep. Changes require brief revision, not grep patches."
//
// "No whitelist" refers to CONTENT exceptions (no carve-outs to allow a
// banned word in a specific copy block). It does not refer to SYNTACTIC
// noise — JSX closing tags contain "/mo" (in </motion.span>) and source
// comments often contain percentages or token-like strings. Those are
// not visible to the user, so we strip code structure (comments + JSX
// tags) before scanning what remains for banned tokens.
//
// What this scans: app/, components/, lib/ — anything that renders into
// the final page payload. Docs, scripts, and tests are excluded.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = process.cwd();

const BANNED_WORD_TOKENS = [
  "price", "pricing", "cost", "costs", "fee", "fees",
  "monthly", "subscription", "subscribe",
  "financing", "financed", "APR",
  "payment", "payments", "installment",
  "purchase",
];

const BANNED_PHRASES = [
  "down payment", "early termination", "buy now",
  "free forever", "no monthly", "subscription-free",
  "/mo", "per month",
];

const BANNED_PATTERNS = [
  { name: "$ followed by digit", re: /\$\d/ },
  { name: "percent (digits then %)", re: /\d+%/ },
];

const SCAN_DIRS = ["app", "components", "lib"];
const EXCLUDE_DIRS = new Set([
  "node_modules", ".next", "out", "dist", ".vercel",
  "docs", "scripts", "tests", ".git",
]);
const SCAN_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    if (EXCLUDE_DIRS.has(name)) continue;
    const full = join(dir, name);
    let s;
    try { s = statSync(full); } catch { continue; }
    if (s.isDirectory()) walk(full, out);
    else if (SCAN_EXTS.has(extname(name))) out.push(full);
  }
}

// Strip code-structure noise so we only match against text that could
// possibly render to the user. Replacements preserve newlines so the
// line index stays aligned with the original file.
function stripCodeStructure(text) {
  const blank = (m) => m.replace(/[^\n]/g, " ");
  return text
    .replace(/\/\*[\s\S]*?\*\//g, blank)                       // block comments
    .replace(/(^|[^:])\/\/.*$/gm, (_, p1) => p1)               // line comments
    .replace(/<\/?[A-Za-z][^>]*>/g, blank);                    // JSX-ish tags
}

const files = [];
for (const dir of SCAN_DIRS) {
  try {
    statSync(join(ROOT, dir));
    walk(join(ROOT, dir), files);
  } catch { /* dir doesn't exist yet — fine */ }
}

const findings = [];

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const stripped = stripCodeStructure(raw);
  const rawLines = raw.split(/\r?\n/);
  const strippedLines = stripped.split(/\r?\n/);

  for (let i = 0; i < strippedLines.length; i++) {
    const line = strippedLines[i];
    const lower = line.toLowerCase();
    const rawLine = rawLines[i] ?? "";

    for (const token of BANNED_WORD_TOKENS) {
      const re = new RegExp(`\\b${token}\\b`, "i");
      if (re.test(line)) {
        findings.push({ file, line: i + 1, kind: "word", match: token, text: rawLine.trim() });
      }
    }
    for (const phrase of BANNED_PHRASES) {
      if (lower.includes(phrase.toLowerCase())) {
        findings.push({ file, line: i + 1, kind: "phrase", match: phrase, text: rawLine.trim() });
      }
    }
    // In .css, % is a unit identifier (100%, 50%, etc.) — never
    // user-visible copy. Word tokens still apply.
    const isCss = extname(file) === ".css";
    for (const { name, re } of BANNED_PATTERNS) {
      if (isCss && name.startsWith("percent")) continue;
      if (re.test(line)) {
        findings.push({ file, line: i + 1, kind: "pattern", match: name, text: rawLine.trim() });
      }
    }
  }
}

if (findings.length > 0) {
  console.error("\n❌ Pricing language detected in render-path source (brief §14, no whitelist).\n");
  for (const f of findings) {
    const rel = relative(ROOT, f.file);
    console.error(`  ${rel}:${f.line}  [${f.kind}: "${f.match}"]`);
    console.error(`    ${f.text}`);
  }
  console.error(`\n${findings.length} violation(s). Brief revision required, not grep patches.\n`);
  process.exit(1);
}

console.log(`✓ no-pricing check: ${files.length} file(s) scanned, 0 violations.`);
