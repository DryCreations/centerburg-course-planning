# Week 4 Quiz: If Statements and the Arcade Basics (Friday Sep 11)

**Teacher-only.** The first real quiz of the year, after lunch.

**Bank:** `quiz-bank.csv`, **30 text questions. Cut to 20.** No images, nothing coupled, every question
stands alone.

**Screenshot questions live in their own file:** `quiz-screenshot-questions.csv`, 12 questions keyed to
`handouts/quiz-screenshot-blocks.md`. **Add these to the Form separately, after the text questions are in.**
The Form shuffles everything anyway, so they land mixed in regardless of when you add them.

---

## Why the split

The Apps Script does not place images, so screenshot questions always need a manual pass. Keeping them out
of the main CSV means:

- The main bank runs straight through the script and you have a complete quiz immediately
- If prep time disappears, **you ship 20 text questions and add nothing by hand**
- If you have time, you add as many block-reading questions as you want on top

---

## What the text bank covers

**Weeks 1 to 3 only. Nothing from this week: no tile maps, no collision.**

| Topic | Q |
|-------|---|
| If, if/else, how many branches run | 3 |
| Comparisons, including the `>` versus `≥` boundary | 2 |
| AND and OR | 2 |
| If / else if / else chain order and behavior at a boundary | 2 |
| Remainder for "every Nth" | 2 |
| The `=` symbol in blocks | 1 |
| Variables: what one is, set versus change, counters, showing a score | 5 |
| Sprites, events, on start, sequence | 4 |
| Position and velocity | 3 |
| On overlap, the missing-destroy bug, game over WIN, ending on lives | 4 |
| Debugging and logic errors | 2 |

---

## The screenshot questions

Make each image from `handouts/quiz-screenshot-blocks.md`: paste the snippet into MakeCode's **JavaScript**
tab, switch to **Blocks**, screenshot the blocks, then add the question to the Form with that image.

**Clear the editor between each one** or leftover code lands in the shot.

The 12 are **ordered easiest to hardest**, so add as many as you have time for and stop. **Number 10 is worth
prioritizing:** it is the exact bug from Thursday's live build, an if checking for 7 when only 5 items exist.

---

## Language rule

**Every question is worded in block language.** No JavaScript appears anywhere a student sees: not in the
question text, not in the options, not in the images. They code in blocks, so they are assessed in blocks.

The snippets are JavaScript only because pasting is the fastest way to build the blocks. You convert to
Blocks before screenshotting.

The handout ends with a **translation table** (`==` becomes `=`, `&&` becomes `and`, `%` becomes "remainder
of"). If you write or reword any question, check it against that table first.

---

## One thing to watch

**Screenshot 7 uses colour numbers** (9 blue, 5 yellow, 2 red). Say the colour names aloud when you read the
question, or label them on the image. Otherwise you are testing whether they memorised the Arcade palette,
which is not the standard.

---

## What was cut

Trimmed from 60. Everything cut is still in git history: more chain and modulo variations, `on overlap`
internals (`sprite` versus `otherSprite`), game over LOSE, more debugging and program-development questions,
and extra comparison coverage. Good material for the next quiz.
