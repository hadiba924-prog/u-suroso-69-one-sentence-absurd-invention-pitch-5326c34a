// One-Sentence Absurd Invention Pitch — entry for Aldi Sopa (@aldi-sopa).
// Writes a single sentence (1-220 chars, no trailing newline) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A shower curtain that puffs itself into a bubble wall mid-shower so it stops clinging to your legs like a needy ghost.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

const length = [...PITCH].length;
if (length < 1 || length > 220 || PITCH.trim().length === 0) {
  console.error(`entry must be 1-220 characters, got ${length}`);
  process.exit(1);
}
if (PITCH.endsWith("\n") || PITCH.split(".").length - 1 !== 1) {
  console.error("entry must be exactly one sentence with no trailing newline");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, PITCH, "utf8");
console.log(`wrote ${length} characters to ${outputPath}`);
