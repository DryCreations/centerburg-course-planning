# Week 5 Teacher Notes: Middle School CS

Student docs: `outline.md`, `project.md`, `vocab.md`, `handouts/star-catcher-lab.md`.

**New project: Star Catcher.** Teaches `while`, `for`, `repeat`, `forever`, nested loops, and **modulo**.
**No quiz this week**, they just took one.

## The shape of Monday and Tuesday

Both days are **content first, then lab.** Roughly half and half.

| Day | First half (together) | Second half |
|-----|----------------------|-------------|
| Mon | **`while` loops:** what they are, tracing, the infinite loop rule, four example problems, read them out loud in pairs | Lab steps 1 to 5. They will not need `while` yet |
| Tue | **`for index`** and using the count. **Modulo:** the remainder block and "every Nth" | Lab steps 6 to 9 |

Wednesday through Friday are mostly work time against the numbered steps.

## Monday: `while` first, even though they will not use it today

That is deliberate. **The concept gets taught cold, with no game pressure**, and then sits for three days
before they need it Thursday. By then it is familiar rather than new.

Run it in this order:

1. **Show the loop and trace it on the board.** The trace table is in the lab. Do it pass by pass, out loud.
2. **State the one rule:** something inside has to move it toward stopping.
3. **Show an infinite loop and let it hang.** Do this live. Let them watch the game freeze, then ask what is
   missing. Nothing else teaches it as fast.
4. **The four example problems**, in pairs. They are in the lab with answers hidden.
5. **Read them out loud.** Partners take turns reading a `while` loop as an English sentence: *"While the
   timer is greater than zero, pause one second and take one off the timer."* If they can say it, they have
   it. **This is also your window for questions**, before anyone is debugging inside a game.

Then release them to steps 1 to 5.

### The two trick problems

Problem 3 counts **down** when the condition needs it to go **up**, so it never ends.
Problem 4 starts at 10 with `while x > 10`, so it runs **zero times.** A `while` checks **before** the first
pass, and students assume it always runs at least once.

## Tuesday: `for index` and modulo

**`for index` earns its place because the count is usable.** `repeat` is easier and they will want it for
everything. The row of evenly spaced stars is the demo that proves the difference: `repeat` cannot do it,
because it does not know which pass it is on.

**Modulo is easier than it sounds if you teach it as leftovers.** "Seven divided by three is two, with one
left over. The remainder block gives you the one."

Then the pattern that makes it useful: **`remainder of N ÷ 5 = 0` is true exactly at the multiples of 5.**
That is how you do "every fifth one," and it is the only form they need this week.

The common wrong answer is writing `remainder of N ÷ 5 = 5`. Point out that a remainder can never equal the
thing you divided by.

## `for index from 0 to 4` runs FIVE times

Every student hits this. Trace the table out loud Tuesday **before** they build.

## Bugs to expect, by day

- **Mon:** all ten stars in the same instant. Correct, and the lab says so. Do not let anyone "fix" it.
- **Tue:** one extra star, from the zero start.
- **Wed:** the game slows to a crawl, because stars are never destroyed and hundreds accumulate. Good
  teachable moment: **things you create have to be cleaned up.**
- **Thu:** a frozen game from an infinite `while`. They were warned Monday. Ask them the rule rather than
  fixing it.

## Differentiation

- **Struggling:** the lab is numbered and each step says exactly what to do. Pair them. Day 1's goal, a
  moving player and ten spawned stars, is a legitimate stopping point for the week.
- **Moving fast:** the finish-early list has a nested grid, a bad sprite, alternating colors with
  `remainder of index ÷ 2`, diagonal spawns, and refactoring last week's maze with a loop. That last one is
  the best of them.
- **Absent:** the lab is fully self-serve, including the example problems with answers and the bug table.

## Looking ahead

This closes the core trio: sequence, conditionals, loops. The **year map is stale** (digital citizenship at
weeks 5 to 6, Arcade at 7 to 9, but the class went Arcade-first from day one). **Digital citizenship has been
skipped entirely** and is an IC strand otherwise untouched this quarter.
