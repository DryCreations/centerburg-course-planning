# Day 06 - Wed, Aug 26 (Week 2)

**Course:** Middle School CS, **Unit:** MakeCode Arcade, Build a Game
**Strands:** Algorithmic Thinking and Programming

> **Score and collisions day.** Yesterday things moved. Today the game starts keeping score when the player
> catches (or dodges) something. This is variables plus the overlap event.

## Objective

Students can use a variable to keep score and an on-overlap event to change it, and can explain what their
score variable holds.

## Materials

Arcade open, projector, Day 06 slides (`slides/week-2-slides.md`), a working demo game half-built from Day 05.

## Bell Ringer (5 min)

**Bell Ringer 2** (what is the score at the end). If it lands fast, run **Bell Ringer 3** too (how many times
does an event run). Both from `handouts/bell-ringers-week-2.md`. Go over out loud.

## Direct Instruction (12 min)

Slides Day 06, taught as a live demo.

1. **A variable is a labeled box** that holds a number. `set score to 0` at the start, `change score by 1`
   when something happens.
2. **The overlap event:** "when the player touches this sprite, do that." The score change goes **here**, not
   in a forever loop.
3. **Do not score twice:** when the player catches it, destroy that sprite, then spawn a new one so the game
   keeps going.
4. **Demo:** on overlap of player and item, change score by 1, destroy the item, make a new one at the top.

## Work Time (25 min): Part B

Students add to their game:

- A score variable, set to 0 at the start
- An on-overlap event that changes the score
- The touched sprite destroyed and a new one spawned

Fast finishers: add a second kind of item worth more points, or a sound on the catch.

## Closure / Exit Ticket (5 min)

**Exit ticket:** *Where in your game does the score change, and what makes it happen?*

## Handouts / Slides

- `handouts/bell-ringers-week-2.md` (Bell Ringers 2 and 3)
- `slides/week-2-slides.md` (Day 06)
- `assignments/week-2-assignment.md` (Part B)

## Assignment Given / Due

- In progress: Build a Real Arcade Game, due Day 08

## Teacher Notes

- Minimal setup: Bell Ringer 2 on the board, Day 06 slides loaded, your half-built demo open.
- The "score change in a forever loop" bug will show up on its own today. If it does, use it live, that is
  tomorrow's bell ringer come early.
- Requirement to watch: the caught sprite must be destroyed, or students get one overlap firing dozens of
  times and a score that jumps by 20. That is a teachable moment, not a mistake to prevent.
- Last day for no-penalty week 1 work.
