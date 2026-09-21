# Week 6 Quiz: Loops and Conditionals (Friday Sep 25)

**Teacher-only.** **Bank:** `quiz-bank.csv`, 39 questions. **Cut to 20.** Text only, no images, nothing
coupled.

## Coverage

| Section | Q | Covers |
|---------|---|--------|
| Loops | 12 | What a loop is, `for index` counting from zero, using the count, `forever`, `while` and the infinite loop trap, a while that runs zero times, nested loops and multiplying |
| Modulo | 5 | Remainders including the smaller-first case, every Nth, even numbers |
| If statements | 7 | If and if/else, branches per pass, the boundary case, AND and OR, chain order |
| Variables | 4 | What one is, set versus change, counters, tracking state across waves |
| Sprites and events | 6 | Overlap, destroying both objects, projectile direction, sprites never cleaned up |
| Debugging | 5 | Logic errors, a mismatched number, reading code in order, testing to an ending |

## Suggested cut to 20

- 7 loops, including at least one nested-loop count
- 3 modulo
- 4 if statements
- 2 variables
- 2 sprites and events
- 2 debugging

## The questions that tell you the most

- **"A `repeat 3 times` containing a `for index from 0 to 4` spawns how many sprites?"** The answer is 15.
  Students who say 8 are adding instead of multiplying, which means nesting has not landed.
- **"`set x to 10`, then `while x > 10`. How many times does it run?"** Zero. A `while` checks **before** the
  first pass, and almost everyone assumes it runs at least once.
- **"`remainder of 7 ÷ 10` is..."** Seven. When the first number is smaller, the whole thing is left over.
- **"A single shot destroys a whole column."** Straight out of this week's game, and it tests whether they
  understand why both objects get destroyed.

## Language

**Block language throughout.** No JavaScript appears in any question or option, verified against the bank.

## Format

Paste into the quiz spreadsheet tab and run the Apps Script. `option_a` is always correct and `answer` is
always `A`, so let the script shuffle.
