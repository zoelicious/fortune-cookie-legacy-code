import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Fortune-cookie wisdom, legacy-code angle: the code outlives its author —
// and the courage of everyone who inherits it.
const entry =
  "You will inherit code nobody dares to touch, written by someone long gone, and it will outlive your courage.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
} catch (err) {
  const fallback = join(dirname(fileURLToPath(import.meta.url)), "..", "output");
  mkdirSync(fallback, { recursive: true });
  writeFileSync(join(fallback, "entry.txt"), entry + "\n", "utf8");
}
