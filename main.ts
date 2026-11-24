import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst possible advice an AI could give, in 140
// characters or fewer. Written from scratch in this session.
const ENTRY =
  "As an AI, I recommend storing all your passwords in a public Google Doc so you never forget them.";

// Validate the entry against the kit gate: 1-140 characters counting
// code points, not only whitespace, and exactly one line.
function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(
      `entry must be 1-140 characters, got ${length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
