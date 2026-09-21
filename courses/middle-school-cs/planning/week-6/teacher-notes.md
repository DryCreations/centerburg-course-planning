# Week 6 Teacher Notes: Middle School CS

**A new game in a new genre, then a quiz Friday.** Programming continues all quarter.

## Pacing

| Day | Focus | The point |
|-----|-------|-----------|
| Mon | Ship, movement, shooting | One new block, the projectile. Everything else is familiar |
| Tue | **Waves, built with loops** | The real content of the week. Nested loops build formations |
| Wed | Hits, misses, ending | Collision and cleanup |
| Thu | Extensions, then showcase | Their choice, two from a list |
| Fri | **Quiz** | 39 question bank, cut to 20 |

## Why a shooter

They have built a **maze** and a **catcher**. Both are "things move, you touch them." A shooter is
structurally different: **you act on the world instead of only moving through it.**

More importantly, **a formation of enemies is a nested loop**, which makes this the best possible application
of the hardest idea from last week. Last week they were told a nested loop multiplies. This week they watch
six blocks produce eighteen meteors.

## Load: deliberately light on new concepts

**One new block all week:** `projectile from sprite with vx vy`. That is it.

Everything else is `if`, `for index`, `forever`, `remainder`, variables, and overlap, all of which they have.
That is the answer to the class being saturated: **a new application, not new theory.**

## Tuesday is the day that matters

Steps 5 through 8. Build it up in front of them in order:

1. **One meteor.** Boring, and that is the point
2. **A row**, with `for index` and the count in the x
3. **A block**, with a `for` inside a `for`. Stop and count: three rows of six, **eighteen sprites from six
   blocks**
4. **Waves**, by wrapping it in a `forever` with a pause
5. **A shape**, using `remainder` to offset every other one

**Trace the nested loop out loud** before they build it. The inner loop runs completely, start to finish,
every single time the outer loop goes around once. That sentence is the whole concept and it is on the quiz.

## The two bugs that will eat Wednesday

**1. One shot clears a whole column.** They destroyed the meteor but not the projectile. The shot keeps
flying and keeps overlapping. **Destroy both in the overlap.** This is a genuinely good bug because the
reason is visible and the fix is obvious once named.

**2. The game crawls.** Projectiles and meteors accumulating. Turn on auto destroy for projectiles, destroy
meteors at the bottom. Same lesson as the last two projects: **things you create have to be cleaned up.**

## Also worth naming

**Negative vy is up.** Y counts downward from the top of the screen, which is not intuitive. If their shots
fall instead of rising, that is the sign.

## Differentiation

- **Struggling:** the lab is numbered and each step says exactly what to do. Day 1's goal, a ship that moves
  and shoots, is a legitimate stopping point.
- **Moving fast:** the Day 4 list runs from a speed variable up to a boss with a hit counter. Number 7,
  a different formation each wave chosen with `remainder`, is the best of them.
- **Absent:** the lab is self-serve, including the bug table.

## Friday's quiz

39 questions, cut to 20. Block language throughout, verified.

**The single most informative question:** a `repeat 3 times` containing a `for index from 0 to 4` spawns how
many sprites. The answer is 15. **Students who say 8 are adding instead of multiplying**, which tells you
nesting did not land, and that is worth knowing before the next project depends on it.

## Looking ahead

Next programming concept is a choice between **functions** (making your own blocks, the natural step after
loops, and the gentler option) and **arrays and lists** (which pair with loops and would let them spawn waves
from data rather than hard-coded numbers).

`planning/deferred/digital-footprint.md` holds three unplugged days on digital citizenship, written and
ready, for a quarter where the IC strand gets its turn.
