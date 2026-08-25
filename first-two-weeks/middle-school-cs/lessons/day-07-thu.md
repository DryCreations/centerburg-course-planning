# Day 07 - Thu, Aug 27 (Week 2)

**Course:** Middle School CS, **Unit:** MakeCode Arcade, Build a Game
**Strands:** Algorithmic Thinking and Programming

> **Winning, losing, and debugging.** The game already moves and scores. Today it gets a way to end: a
> conditional, lives, and game over. And everyone keeps a debug log, because this is where bugs show up.

## Objective

Students can use a conditional to win or end the game, add lives so the player can lose, and document one bug
they fixed by changing a single thing.

## Materials

Arcade open, projector, Day 07 slides (`slides/week-2-slides.md`), the demo game from Day 06 to break on
purpose.

## Bell Ringer (5 min)

**Bell Ringer 4** (lives and a conditional, walk through what happens). From `handouts/bell-ringers-week-2.md`.
Go over out loud, and name the shape: *if this is true, do that.*

## Direct Instruction (12 min)

Slides Day 07, live.

1. **A conditional decides.** `if score >= 10: you win`. `if lives <= 0: game over`. A loop repeats; a
   conditional decides. Different jobs, and students mix them up for weeks.
2. **A way to lose:** start lives at 3, lose one on a miss or a bad hit, game over at 0.
3. **The most common bug:** score change inside a forever loop counts forever. It belongs in the overlap
   event. Break it live, ask what is happening, then fix it.
4. **Change one thing at a time.** Write what it does, change one thing, run, write what changed. Model it out
   loud on the broken demo.

## Work Time (25 min): Part C

Students add to their game:

- Lives (start at 3) or a timer, so the player can lose
- A conditional that wins or ends the game
- A short debug log: one bug, what they thought was wrong, the one thing they changed, what happened
- The game plays start to finish, winnable and losable

## Closure / Exit Ticket (5 min)

**Exit ticket:** *What is one bug you hit today, and the one thing you changed to fix it?*

## Handouts / Slides

- `handouts/bell-ringers-week-2.md` (Bell Ringer 4)
- `slides/week-2-slides.md` (Day 07)
- `assignments/week-2-assignment.md` (Part C)

## Assignment Given / Due

- Due tomorrow: Build a Real Arcade Game
- Reminder: Checkpoint 1 tomorrow, from the word list

## Teacher Notes

- Minimal setup: Bell Ringer 4 on the board, Day 07 slides, the demo game ready to break.
- The debug log is the real assessment here, not a working game. A student with a messy game and an honest log
  understands more than one with a clean game they cannot explain.
- Fast finishers: a second level, a high-score display, or a start screen. Keep it inside the same skills.
- Watch for the student who says "it just works now" with no idea why. That is a redo conversation, framed as a
  redo, not an accusation.
