# Week 5 Teacher Notes: Middle School CS

Student docs: `outline.md`, `project.md`, `vocab.md`, `handouts/star-catcher-guide.md`.

**New project: Star Catcher.** Built specifically to teach loops, which were dropped from week 4 and are
still owed. **No quiz this week**, they just took the first one.

## Pacing

| Day | Activity | The loop |
|-----|----------|----------|
| Mon | Player moves, one star falls, then ten stars | `repeat` |
| Tue | A row of evenly spaced stars | `for index`, and using the count |
| Wed | Waves that keep coming, catching, missing | `forever`, and nesting |
| Thu | A countdown, a difficulty ramp, or levels | `while`, and the infinite loop trap |
| Fri | Finish, then play each other's games | Showcase |

## Teach Monday by doing it the dumb way first

Make one star. Then ask what it would take to make ten. Start dragging out the second set of blocks, slowly,
by hand. Let it get tedious. **Let them tell you to stop.**

Then put a `repeat 10` around the original three blocks.

That contrast is the entire lesson and it lands better than any definition. Do not skip it to save four
minutes.

## The two things that will bite

**1. `for index from 0 to 4` runs FIVE times.** It counts 0, 1, 2, 3, 4. Every student hits this once. Trace
the table from the guide out loud on Tuesday, with the x values worked out, before they build.

**2. Infinite loops freeze the game.** Show it deliberately on Thursday: a `while timer > 0` with nothing
inside that changes `timer`. Let them watch it hang. Then ask what is missing.

## Why `for index` matters more than `repeat`

`repeat` is easy and they will want to use it for everything. The reason `for index` earns its place is that
**the count is usable**: spacing (`20 + index * 30`), speed (`30 + index * 10`), color, numbering.

Tuesday's row of evenly spaced stars is the demo that proves it. `repeat` cannot do that, because `repeat`
does not know which pass it is on.

## Nested loops, Wednesday

A `for` inside a `forever` is their first nested loop, and it is worth naming as a big deal. Read it from the
inside out on the board: the `for` makes a row, the `pause` waits, the `forever` does it all again.

That structure is how essentially every game they have played spawns enemies. Say so.

## Performance bug to expect

By Wednesday afternoon somebody's game will crawl, because stars spawn forever and are never destroyed.
Hundreds of sprites accumulate.

This is a great teachable moment rather than an annoyance: **things you create have to be cleaned up.**
Destroy on overlap, and destroy when they fall off the bottom.

## Differentiation

- **Struggling:** the guide is step by step with exact blocks. Pair them, and get Monday working before
  anything else. A player and ten spawned stars is a legitimate stopping point for the week.
- **Moving fast:** nested loops for a grid, a bad sprite in the wave, per-star colors via `index`, diagonal
  spawns, or refactoring last week's maze to place items with a loop. That last one is the best of them.
- **Absent:** the guide is self-serve, including a bug table.

## Looking ahead

Loops close out the core programming trio: sequence, conditionals, loops. The **year map is stale** (it has
digital citizenship at weeks 5 to 6 and Arcade at 7 to 9, but the class went Arcade-first from day one).
Worth a resequence. Digital citizenship has been skipped entirely and is an IC strand you are otherwise not
touching this quarter.
