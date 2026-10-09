# Week 8 Quiz: Lists, Loops and Planning (Friday Oct 9)

**Teacher-only.** Two banks, plus whatever you pull from earlier quizzes:

| Bank | Questions | What it is |
|---|---|---|
| **`quiz-screenshot-questions.csv`** | **14** | **Code-trace questions.** Each matches a snippet in `handouts/quiz-screenshot-blocks.md`: paste into the JavaScript tab, switch to Blocks, screenshot |
| `quiz-bank.csv` | 31 | Text questions on lists, loops, conditionals, variables and planning. No images |
| Earlier quizzes | | **The most-missed questions from Weeks 3 to 6**, your pick |

**Every screenshot answer was verified by running the code**, not by reading it, and no distractor
matches the real result.

## The screenshot questions, in the formats you use

| Format | Which ones |
|---|---|
| **What does the sprite say?** | 2, 4, 6, 9, 10, 11, 12, 14 |
| **What is the value of the variable after this runs?** | 1, 5, 7, 8, 13 |
| **The player presses A, then B: what is the score?** | 3, and 14 combines buttons with a list |

**Ordered easiest to hardest.** The ones that tell you the most:

- **4. The shift after a remove.** Remove index 1 from Ana, Ben, Cal, Dee and ask what is at index 1 now.
  **Cal.** This is the week in one question; Ben is the answer of someone who has not watched a list shift
- **10. Tuesday's bug.** Removing while looping over a three-item list leaves **one** item, not zero. They
  built this on purpose, so anyone who says 0 did not run it
- **11. Searching.** Find index of something not in the list gives **−1**, which is Thursday's bell ringer
- **13. Matching two lists.** This is the version you actually taught Wednesday: walk two lists together
  and keep the values that match

## Suggested assembly, to about 20

- **8 screenshot questions**, including 4, 10 and 13
- **6 to 8 most-missed questions from earlier quizzes**
- **4 to 6 from `quiz-bank.csv`**, favoring the planning ones, since nothing else covers them

## Coverage

| Section | Q | Covers |
|---------|---|--------|
| Lists | 11 | What a list is, length, index from zero, the last index, adding, the shift on remove, insert, `remove last value`, an index that does not exist |
| Changing a list in a loop | 3 | Why removing while looping breaks, how to empty one safely, which loop block |
| Loops | 6 | `for` over a list, `for element`, `forever` is not countable, `while` and an unknown count, counting passes, `sprites of kind` as a live list |
| Conditionals and variables | 4 | What a conditional decides, `if true`, a variable that never changes, a list versus four variables |
| Planning the project | 6 | The removal test, a list nothing reads, scope, breaking work into runnable pieces, risk, an unreachable win |

## Suggested cut to 20

- 7 lists, including at least one on the shift
- 2 on changing a list in a loop (keep the "why it breaks" one)
- 4 loops
- 3 conditionals and variables
- 4 planning

## The questions that tell you the most

- **"Remove the item at index 2. What happens to the item that was at index 3?"** It moves to index 2.
  This is the week in one question. A student who says it stays at 3 has not watched a list shift.
- **"Removing items inside a loop over that same list breaks because..."** The length changes while the
  loop counts. They built this bug on purpose Tuesday.
- **"Safest way to empty a list in a loop"** `remove last value` until the length is 0. Removing from the
  front while counting forward is the trap, and it reads as reasonable.
- **"A game feature is meaningful when..."** Removing it changes how the game plays. This is the project
  rubric restated. If they miss it, re-read the removal test with them before they start building.
- **"Track four kinds of collectible"** One list, not four variables. Tests whether they would pick the
  data structure on their own, which is the planning standard.

## Answer-length check

Correct answer is the single longest option in 5 of 31, the single shortest in 4 of 31. No question has a
correct answer more than 7 characters longer than every distractor.

## Standards

Ohio K-12 Computer Science:

- **ATP: Variables and Data Representation.** Modify a collection of data during execution
- **ATP: Control Structures.** Iterate over a collection, and recognize when iteration conflicts with
  modification
- **ATP: Program Development.** Plan a program before implementation, then test and debug it
- **ATP: Algorithms.** Select a data structure that fits the problem
