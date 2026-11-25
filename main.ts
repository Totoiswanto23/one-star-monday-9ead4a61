// one-star-monday-9ead4a61: a one-star review of Monday, written as if
// Monday were a restaurant. This program writes that single line to
// /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The review: Monday as a restaurant — you walk in, wait an hour for a
// table, get served last week's leftovers, and the bill eats your whole
// weekend. Every judge criterion is in the line: a table, a dish, a bill,
// and a grievance that only Monday can cause (it charges you for the
// weekend you just lost).
const MAX_WORDS = 25;
const MAX_CHARS = 180;

const LINE =
  'One star. Walked into Monday, waited an hour for a table, got served last week\u2019s leftovers and charged for my whole weekend.';

const words = LINE.split(/\s+/).filter(Boolean).length;
if (
  LINE.length < 1 ||
  LINE.length > MAX_CHARS ||
  words > MAX_WORDS ||
  LINE.includes('\n')
) {
  console.error(`entry line must be a single line of 1-${MAX_CHARS} chars and at most ${MAX_WORDS} words`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars, ${words} words to ${join(OUTPUT_DIR, 'entry.txt')}`);
