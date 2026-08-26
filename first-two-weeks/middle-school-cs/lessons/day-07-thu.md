# Day 07 - Thu, Aug 27 (Week 2)

**Course:** Middle School CS, **Unit:** MakeCode Arcade, Build a Game
**Strands:** Algorithmic Thinking and Programming

> **Overlap, destroy, and random.** Yesterday everyone got a player moving and something spawning in with
> velocity (Part A). Today is a **short demo** of the three blocks that turn that into a game: on-overlap,
> destroy, and pick-random. Show the basics, then they build. Do not build it for them.

## Objective

Students can use an on-sprite-overlap event to change the score and destroy the caught sprite, and can use a
random number to spawn the next one in a different spot.

## Materials

Arcade open, projector, the Day 06 slides plus the random-spawn slide (`slides/week-2-slides.md`), a
half-built demo game from Part A to add to live.

## Bell Ringer (5 min)

**Bell Ringer 3** (how many times does an event run) from `handouts/bell-ringers-week-2.md`. It sets up today:
the code inside an event runs *every time* the event happens, which is exactly how scoring works.

## Short Demo (10 min): The Three Blocks

Live, on your Part A demo. Keep it to the blocks, not a finished game.

1. **on sprite overlap** (player and the item): "when these two touch, do this." Put a `change score by 1`
   inside it and watch it fire when they collide.
2. **destroy** the item sprite inside the overlap, so one catch is one point, not twenty. Show the bug first
   (score leaps by 20 without destroy), then fix it.
3. **pick random**: spawn the next item at `pick random` x, so it does not always fall in the same place.
   Show `pick random 10 to 150` for a position, and mention you can pick random for anything, a speed, a
   color, which item appears.

Say plainly: this is the toolkit, not your game. Your job is to put these into *your* catch-or-dodge game.

## Work Time (25 min): Part B

Students add to their own game:

- A **score** variable set to 0 at the start
- An **on-overlap** event that changes the score
- **Destroy** the caught sprite and spawn a new one
- Use **pick random** so the new one appears somewhere different

Fast finishers: random speed too, or a second kind of item worth more points, or start on losing a life when
you miss (that is where Part C goes next).

## Closure / Exit Ticket (5 min)

**Exit ticket:** *Where in your game does the score change, and what did you use pick-random for?*

## Handouts / Slides

- `handouts/bell-ringers-week-2.md` (Bell Ringer 3)
- `slides/week-2-slides.md` (Day 06 score/collisions + random spawn)
- `assignments/week-2-assignment.md` (Part B)

## Assignment Given / Due

- In progress: Build a Real Arcade Game, due Day 08 (Friday)

## Teacher Notes

- Keep the demo to the three blocks and under ten minutes. The moment it becomes "here is my finished game,"
  they copy instead of build.
- The destroy bug (score leaping without destroy) is worth showing on purpose. It is the clearest "the computer
  did exactly what you said" moment of the week.
- pick-random is the depth this project has over last week's card: it makes the game different every run. Sell
  that.
- Fast finishers move into lives and game over (Part C) on their own; that is the next demo if the room is
  ready, but do not force it today.
