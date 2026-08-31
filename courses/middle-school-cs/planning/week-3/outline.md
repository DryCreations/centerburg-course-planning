# Week 3 — Levels, Lists & Polish: Outline

**Course:** Middle School CS (grades 7–8)
**Quarter:** Q1 | **Week:** 3 | **Dates:** Mon Aug 31 – Fri Sep 4 | **Duration:** 5 days

> **Grow the game.** We keep the daily code-reading bell ringers, add a new idea (**lists** and **levels**),
> polish everyone's Arcade game, and take **Checkpoint 2 on Friday** over everything so far.

---

## Weeks 1–2 recap (what actually ran)

MakeCode Arcade first: variables, sprites, events, **position and velocity**, the **on-overlap** event with
**destroy** and **pick random**, a **conditional** win/lose, and a finished catch-or-dodge game. Daily
code-reading bell ringers (predict the output / trace variables). Checkpoint 1 given.

## Student Overview

### What Is This Week About?

Your game works — now make it bigger and smarter. You will learn about **lists** (a way to hold many things at
once) and add **levels or difficulty** so the game gets harder as you play. Friday there is a checkpoint that
covers everything since Day 1.

### What You'll Be Able to Do

- Use a list to keep track of several sprites or values
- Make the game get harder over time (speed up, spawn more, add a level)
- Read a short piece of code and predict what it does
- Explain how your variables, conditionals, and lists work

### Weekly Snapshot

| Day | Bell ringer + focus | Turn in |
|-----|---------------------|---------|
| Mon Aug 31 | Bell ringer + short **lists** demo; plan your upgrade | — |
| Tue Sep 1 | Bell ringer + use a list for multiple items/enemies | List working |
| Wed Sep 2 | Bell ringer + add **levels / difficulty** (speed up or spawn more) | Level working |
| Thu Sep 3 | Bell ringer + polish, playtest, debug log | Game playable start-to-finish |
| Fri Sep 4 | **Checkpoint 2** + game showcase | Checkpoint |

### Documents in This Week

| File | What It Is |
|------|-----------|
| `quiz.md` | Checkpoint 2 — cumulative Arcade concepts (variables, events, velocity, overlap, conditionals, lists) |

---

## Teacher Reference

### Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Mon | Bell ringer (variable trace). **Short demo of a list**: make a list, add items, use `for each`. Show how one list can hold several sprites. Keep it under 10 min, then work time. | Same "show the block, don't build their game" rule as Week 2. |
| Tue | Bell ringer. Students use a list to manage multiple falling items or enemies. | Fast finishers: random item types from a list. |
| Wed | Bell ringer. Add **difficulty**: increase speed over time, or a score threshold that starts a harder level. | Ties back to variables + conditionals. |
| Thu | Bell ringer. Polish, playtest with a partner, keep the debug log. | Debug log is the real assessment of the build. |
| Fri | **Checkpoint 2** (`quiz.md`), then showcase. | Redo policy applies. |

### Bell-ringer bank (reuse `first-two-weeks/middle-school-cs/handouts/bell-ringers-week-2.md`)

Keep using the swap/`set`-vs-`change` traces and add a list one, e.g.:
`set nums to [2, 4, 6]` then `for each n in nums: change total by n` → "What is `total`?" (12). Walk it line by
line, as before.

### Assessment Notes

- Checkpoint 2 is cumulative and low-stakes (Checkpoints category), covering variables, events, velocity,
  overlap/destroy, conditionals, pick-random, and lists. Redo allowed.
- Build evidence: a game that runs start-to-finish with a working list and a difficulty/level change, plus a
  debug log with at least one real bug.

### Vocabulary (light — post in Classroom, not a formal quiz list)

**List (array)** — a container that holds many values or sprites. **For each** — repeat an action for every
item in a list. **Level / difficulty** — making the game harder as it goes.
