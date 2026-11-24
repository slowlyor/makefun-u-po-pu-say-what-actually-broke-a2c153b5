// Say What Actually Broke — entry for make.fun bounty
// u-po-pu-say-what-actually-broke-a2c153b5
//
// Writes one blunt, funny error line to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The server is down because our last deploy deleted the file it needed to start. " +
  "Your data is untouched. Try again in five minutes.";

// The gate requires 1–200 non-whitespace characters. Enforce it here so
// a future edit to the line can never silently fail the gate.
const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
