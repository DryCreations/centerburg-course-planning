# Week 8 Quiz: Lists, Loops and Planning (Friday Oct 9)

**Teacher-only.** **Bank:** `quiz-bank.csv`, 31 questions. **Cut to 20.** Text only, no images, nothing
coupled. Blocks only, no written JavaScript.

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
