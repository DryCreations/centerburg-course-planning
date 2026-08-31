# Week 3 — If Statements & the Decision Game: Outline

**Course:** Middle School CS (grades 7–8)
**Quarter:** Q1 | **Week:** 3 | **Dates:** Mon Aug 31 – Fri Sep 4 | **Duration:** 5 days

> **This week is all about decisions: `if` statements.** We keep the daily code-reading bell ringers and build a
> **new week-long game** where the code has to *decide* what happens. **No quiz this week** — Friday is a
> **Gimkit review game** instead, and the first quiz comes next week.

---

## What this week covers (present this today)

**Conditionals — `if` and `if / else`.** How a program **decides**: if something is true, do this; otherwise,
do that. We use it to build a **decision game** where catching a *good* thing helps you and touching a *bad*
thing hurts you, and the game decides who won.

## Weeks 1–2 recap

MakeCode Arcade: variables, sprites, events, position/velocity, on-overlap + destroy + pick-random, a first
conditional, and a finished catch/dodge game. Daily bell ringers. Checkpoint 1 given.

## Student Overview

### What You'll Be Able to Do

- Read and write an **`if`** and an **`if / else`** statement
- Use a **comparison** (=, >, <, ≥, ≤) to make a decision
- Build a game where the code decides good vs. bad, win vs. lose
- Explain, in your own words, what your conditions check and what they do

### Weekly Snapshot

| Day | Bell ringer + focus | Turn in |
|-----|---------------------|---------|
| Mon Aug 31 | Bell ringer + **`if` / `if-else` demo**; start the Decision Game | — |
| Tue Sep 1 | Bell ringer + good vs. bad items decided with `if` | Decision working |
| Wed Sep 2 | Bell ringer + win/lose conditions (score/lives) with `if` | Win + lose work |
| Thu Sep 3 | Bell ringer + polish, playtest, debug log | Game plays start-to-finish |
| Fri Sep 4 | **Gimkit review game** + game showcase (no quiz) | — |

### Documents in This Week

| File | What It Is |
|------|-----------|
| `project.md` | The Decision Game lab — requirements + extension |
| `gimkit-review.csv` | Friday Gimkit review game |
| `quiz.md` | Prepared short quiz — **first quiz is next week**, not this week |

---

## Teacher Reference

### Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Mon | Bell ringer (a decision trace). **Short demo:** `if score > 10 then …`, then add an `else`. Say the shape out loud: *if this is true, do that; otherwise, do the other thing.* Assign the Decision Game. | Keep the demo under 10 min; the week is mostly build + review. |
| Tue | Bell ringer. Students spawn items that are randomly **good or bad**, and use an `if` on overlap to decide: good → score up; bad → lose a life. | This is the core `if` skill; the pick-random from last week feeds it. |
| Wed | Bell ringer. Add **win and lose** conditions with `if`: reach a score → you win; lives hit 0 → game over. | Reinforces comparisons (≥, ≤). |
| Thu | Bell ringer. Polish, playtest with a partner, keep the debug log. | Debug log is the real evidence of the build. |
| Fri | **Gimkit review game** (`gimkit-review.csv`, see `program/gimkit-review-howto.md`), then game showcase. No quiz — the first quiz is next week. | Fun, low-stakes review of `if` statements and the Arcade basics. |

### Bell-ringer bank

Keep using `first-two-weeks/middle-school-cs/handouts/bell-ringers-week-2.md`, and add decision traces, e.g.:
`set x to 7` then `if x > 5: change score by 1 else: change score by -1` → "What happens to `score`?" (+1). Walk
it line by line.

### Assessment Notes

- **No quiz this week** (first quiz next week; a prepared short version is in `quiz.md`). Friday's Gimkit game
  is the review, focused on `if` statements plus cumulative basics (variables, events, overlap, pick-random).
- Build evidence: a game that decides good vs. bad with an `if`, has a win **and** a lose condition, and a
  debug log with at least one real bug.

### Vocabulary (light — post in Classroom, not a formal quiz list)

**Conditional / `if` statement** — code that decides. **`if / else`** — do one thing if true, another if not.
**Comparison** — checking =, >, <, ≥, ≤. **Condition** — the true/false test an `if` checks.
