# Week 4 Quiz: If Statements (Friday Sep 11)

**Teacher-only.** The first real quiz of the year, after lunch.

**Bank:** `quiz-bank.csv`, 60 questions. **Cut to 20.** Deliberately oversized so you can delete freely.
**Text only fallback:** `quiz-bank-text-only.csv`, the same 48 text questions with every screenshot row
stripped out. If prep time disappears, run that file straight through the Apps Script and you have a
complete, valid 20-question quiz with **no images to insert at all.**
**Screenshots:** `handouts/quiz-screenshot-blocks.md`, 12 snippets matching `[SCREENSHOT 1]` to
`[SCREENSHOT 12]`.

---

## Structure

**Text questions first, block-reading questions grouped at the end.** That way you insert every image in one
pass at the bottom of the Form instead of hunting through it, and if you run short on prep you delete from
the end.

Suggested cut to 20:

| Part | Count | From |
|------|-------|------|
| Text, concepts and traces | 10 | Any of the 48 text rows |
| Block reading, with screenshots | 10 | `[SCREENSHOT]` rows, in order |

The screenshot snippets are **ordered easiest to hardest**, so cutting from the bottom keeps the quiz
balanced instead of accidentally removing all the easy ones.

---

## Build order

1. Cut the bank to your 20, keeping the screenshot rows last
2. Paste into the quiz spreadsheet tab, run the Apps Script as usual
3. **Then** go into the generated Form and insert the block screenshots into the last 10 questions

> **The Apps Script does not place images.** Step 3 is manual: make each screenshot from the handout, then
> add it to the matching question in the Form. Budget real time for it, and do it in one pass from the
> bottom.

---

## Covers

**Weeks 1 to 3 only.** Added coverage beyond the original if-statement focus:

| Topic | Questions | From |
|-------|-----------|------|
| Sprites, events, sequence | 6 | Week 1 and 2, the Arcade tutorial and the game build |
| Position and velocity | 5 | Week 2, the player you control and the sprite that moves on its own |
| Overlap, score, lives, game over | 7 | Week 2, score and collisions, winning and losing |
| Debugging and program development | 4 | Week 2 Thursday, plus the logic-error distinction |
| Extra comparison and condition coverage | 4 | Week 3 |

If and if/else, comparison operators including the `>` versus `≥` boundary case, AND and OR, the remainder
block for "every Nth," if / else if / else chain order, variable traces, counters, and win and lose
conditions.

**Does NOT cover tile maps or collision**, which were introduced Wednesday and Thursday. Tell them that
plainly before they start, it is on the slide, and it should be said out loud too.

---

## Language rules

**Every question is worded in block language.** No JavaScript appears anywhere a student sees: not in the
question text, not in the options, not in the screenshots. They code in blocks, so they are assessed in
blocks.

The snippets in the handout are JavaScript only because pasting is the fastest way to build the blocks. You
convert to Blocks before screenshotting, and that image is what the student sees.

The handout ends with a **translation table** (`==` becomes `=`, `&&` becomes `and`, `%` becomes "remainder
of," and so on). If you write or reword any question today, check it against that table first.

---

## Two things to watch

- **Screenshot 7 uses colour numbers** (9 blue, 5 yellow, 2 red). Say the colour names aloud when you read
  the question, or label them on the image. Otherwise you are testing whether they memorised the Arcade
  palette, which is not the standard.
- **Clear the MakeCode editor between snippets.** Leftover code from the previous one lands in your
  screenshot and either gives away the answer or makes the question unanswerable.

---

## If a student was absent for the live build

Screenshot 10 is the exact bug from Thursday (the if checks for 7 when only 5 items exist). A student who
missed Thursday can still reason it out from the blocks, so it stays fair. It is worth keeping even if you
cut others.
