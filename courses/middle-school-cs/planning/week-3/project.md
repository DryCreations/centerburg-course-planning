# Week 3 Lab — The Decision Game

**Course:** Middle School CS | **Assigned:** Mon Aug 31 | **Due:** Fri Sep 4
**Tool:** MakeCode Arcade | **Redo:** allowed anytime

Build a new game where the **code has to decide**. Things fall or fly at your player, and an **`if` statement**
decides what each one does: some are **good** (points) and some are **bad** (lose a life). The game also
decides **who won**.

---

## Requirements (all required)

| # | Requirement |
|---|-------------|
| 1 | A **player** sprite you move with the buttons |
| 2 | Items that **spawn** and move on their own (use velocity + pick-random, like last week) |
| 3 | Each item is randomly **good or bad** |
| 4 | An **`if` (or if/else)** on overlap that decides: **good → score up**, **bad → lose a life** |
| 5 | A **win** condition (an `if`: reach a score → you win) |
| 6 | A **lose** condition (an `if`: lives reach 0 → game over) |
| 7 | A short **debug log**: one bug, what you changed, what happened |
| 8 | You can **explain** what your `if` checks and what it does |

---

## Turn in

- [ ] Project link shared on Classroom
- [ ] Debug log (at least one real bug)
- [ ] One sentence: what does your main `if` statement check, and what happens each way?

## Grading (class project rubric)

*It works · you can explain it · you kept going (debug log) · finished and turned in right.*

## Extension (finished early)

- **More decisions:** add a third kind of item (e.g., a bonus that adds an extra life) with its own `if`.
- **Difficulty:** an `if` that speeds items up once the score passes a number.
- **Title screen** or a "you win / you lose" message using an `if`.
