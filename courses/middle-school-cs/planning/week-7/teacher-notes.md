# Week 7 Teacher Notes: Middle School CS

**Monday is review. Then lists, which is the last big structure before things get abstract.**

## Pacing

| Day | Focus |
|-----|-------|
| Mon | **Quiz review.** The questions the class missed |
| Tue | What a list is. Make one, get an item out |
| Wed | **Length and index.** Loop through it, and the off-by-one |
| Thu | Apply it: pick one of four options |
| Fri | Finish and show |

## Why lists, and why now

They have **variables (one value), conditionals, and loops.** A list is the natural next thing and it is
the last structure that is still concrete: you can see it, count it, and point at item number two.

It also **handles the spread you are seeing.** Strong students can do a great deal with a list
(shuffling, sorting, parallel lists), while a struggling student can use it as a single block and still
succeed. Very few topics scale like that.

## Monday: run the review off real data

Same as Aviation. **Use the actual miss counts.** Put the question up, let them answer cold again, then
have a student who got it right explain it rather than you.

Expect the misses to cluster on `for index from 0 to N` running N+1 times. **That is convenient**,
because the off-by-one in lists is the same idea, and Wednesday is where it pays off.

## The one sentence for the whole week

> **The index is not "which one." It is "how far from the start."**

The first item is zero steps from the start. Say it Tuesday, say it again Wednesday. Students who
memorize "lists start at zero" will get it wrong under pressure. Students who understand *why* will not.

## Wednesday: `length - 1` is the teaching moment

Build the table on the board:

| Length | Valid positions | Last |
|---|---|---|
| 4 | 0, 1, 2, 3 | 3 |
| 10 | 0 through 9 | 9 |

Then ask what happens if you ask for item number 4 in a list of 4. **Let one of them try it and get the
error.** A deliberately triggered error is worth more than a warning about one.

Also show `for element value of list`, which sidesteps indices entirely. **Use it when you do not care
about position.** Teaching both is what lets students pick the right tool rather than the only tool.

## Thursday: one of four, not all four

The options (shuffle, sprite army, many scores, wave queue) are deliberately different difficulties.
**Steer:**

| Student | Send them to |
|---|---|
| Struggling | **B, sprite army.** Most visible payoff, least abstraction |
| Middle | **D, wave queue.** Concrete, and it improves a game they already have |
| Strong | **A, shuffle.** Removing an item to prevent repeats is a real algorithm |
| Very strong | **C plus parallel lists**, then the sort in the extensions |

## The payoff to point at

**Add an item to the list, and a new sprite appears without touching any other code.** Do that live. It
is the moment a list stops being a container and starts being useful.

## Assessment

No quiz this week. They had one Friday. **Thursday's build is the check**, and the four failure modes in
the handout are the rubric: off-by-one, crashing at `length`, a fixed number where `index` belongs, and
an empty list.
