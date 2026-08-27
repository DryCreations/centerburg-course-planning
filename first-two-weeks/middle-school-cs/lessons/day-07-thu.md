# Day 07 - Thu, Aug 27 (Week 2)

**Course:** Middle School CS, **Unit:** MakeCode Arcade, Build a Game
**Strands:** Algorithmic Thinking and Programming

> **A variable warm-up, then finish the lab.** Part B (score and collisions) went in yesterday. Today opens
> with a variable-manipulation practice problem to lock in how `set` and `change` really work, then the rest of
> the period is theirs to finish the game.

## Objective

Students can trace a short program that reassigns and changes variables and predict the result, and use the
remaining time to finish their Arcade game (through Part C: a way to win and lose).

## Materials

Arcade open, projector, the Day 07 bell ringer on the board, students' in-progress games.

## Bell Ringer (8 min): Walk It Line by Line

**Bell Ringer 6** from `handouts/bell-ringers-week-2.md`, the "why didn't they swap?" one:

```
set a to 5
set b to 10
set a to b
set b to a
```

Both end at 10. Do not ask for the answer cold, that is what made yesterday's feel like a trick. Put `a` and
`b` in a little table on the board and **update them line by line, out loud, together.** Then, if there is
time, **Bell Ringer 7** (`set` vs `change`) to nail the difference: `set` overwrites, `change by` adds.

The point today: the computer does the lines in order, and each line uses whatever is in the box *right now*.

## Mini-Demo (5 min, only if the room needs it)

If groups are ready for the losing condition, a two-minute demo: start `lives` at 3, lose one on a miss, and
`if lives <= 0: game over`. Keep it short; most of today is work time.

## Work Time (30 min): Finish the Lab

The rest of the period is theirs. Finish the game:

- Part C: **lives or a timer**, and a **conditional** that wins or ends the game.
- The **debug log**: one real bug, what changed, what happened.
- The **explanations**: what your score variable does, what your conditional does.
- Then the checklist in `assignments/week-2-assignment.md`.

Fast finishers: a second level, a title screen, random speed, or a high-score display. Same skills, more depth.

## Closure / Exit Ticket (5 min)

**Exit ticket:** *One thing your game does now that it did not do on Monday.*

## Handouts / Slides

- `handouts/bell-ringers-week-2.md` (Bell Ringers 6 and 7)
- `assignments/week-2-assignment.md` (Part C, finish)
- `slides/week-2-slides.md` (Day 07, if you demo the losing condition)

## Assignment Given / Due

- In progress: Build a Real Arcade Game, due tomorrow (Day 08)
- Tomorrow: Checkpoint 1 and the game showcase

## Teacher Notes

- The swap bell ringer is the fix for yesterday's "trick question" feeling. The trick is only a trick if you
  read it all at once; line by line it is obvious. Model that reading habit, it is the whole skill.
- Most of today is finishing the lab. Protect the work time; keep the demo to two minutes and only if needed.
- Anyone who cannot explain their own variable or conditional gets a redo tomorrow, framed as a redo. Catch it
  today while there is still time to fix it.
- Checkpoint 1 is tomorrow; remind them it comes from the word list and can be redone.
