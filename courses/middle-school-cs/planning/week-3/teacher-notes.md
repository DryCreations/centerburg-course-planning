# Week 3 Teacher Notes — Middle School CS

Teacher-facing pacing and assessment for Week 3. The student-facing "week materials" doc is `outline.md`;
the lab is `project.md`. **No quiz this week** — a prepared short version for next week is in `quiz.md`.

## Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Mon | Bell ringer (a decision trace). **Short demo:** `if score > 10 then …`, then add an `else`. Say the shape out loud: *if this is true, do that; otherwise, do the other thing.* Assign the Decision Game. | Keep the demo under 10 min; the week is mostly build + review. |
| Tue | Bell ringer. Students spawn items that are randomly **good or bad**, and use an `if` on overlap to decide: good → score up; bad → lose a life. | This is the core `if` skill; the pick-random from last week feeds it. |
| Wed | Bell ringer. Add **win and lose** conditions with `if`: reach a score → you win; lives hit 0 → game over. | Reinforces comparisons (≥, ≤). |
| Thu | Bell ringer. Polish, playtest with a partner, keep the debug log. | Debug log is the real evidence of the build. |
| Fri | **Gimkit review game** (`gimkit-review.csv`, see `program/gimkit-review-howto.md`), then game showcase. No quiz — the first quiz is next week. | Fun, low-stakes review of `if` statements and the Arcade basics. |

## Bell-ringer bank

Keep using `first-two-weeks/middle-school-cs/handouts/bell-ringers-week-2.md`, and add decision traces, e.g.:
`set x to 7` then `if x > 5: change score by 1 else: change score by -1` → "What happens to `score`?" (+1). Walk
it line by line.

## Assessment Notes

- **No quiz this week** (first quiz next week; a prepared short version is in `quiz.md`). Friday's Gimkit game
  is the review, focused on `if` statements plus cumulative basics (variables, events, overlap, pick-random).
- Build evidence: a game that decides good vs. bad with an `if`, has a win **and** a lose condition, and a
  debug log with at least one real bug.
