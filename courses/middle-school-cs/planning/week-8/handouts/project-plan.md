# Final Project: The Plan

**Middle School CS | Week 8** | Build it next week

**You design it. You build it.** This week is planning. **No code on the project until the plan is
approved.**

---

## How real projects get planned

Professionals do not start by writing code. They do four things first, and you are doing the same four.

| Stage | What it means | Where you do it |
|-------|---------------|-----------------|
| **1. Scope** | Decide what it is, and what it is **not** | Part 1 |
| **2. Requirements** | List exactly what has to work | Part 2 |
| **3. Breakdown** | Split it into pieces small enough to build in one sitting | Part 3 |
| **4. Risk** | Name what is most likely to go wrong, before it does | Part 4 |

**The point of planning is not to predict the future.** It is to find out now which parts you do not
understand yet, while changing your mind is still free.

---

# Part 1: Scope

**1.** What is your game? **One sentence.** If it takes a paragraph, it is too big.

**2.** What does the player control, and with which buttons?

**3.** What is the player trying to do?

**4.** How do they **win**? Be specific. A number, or a checkable condition.

**5.** How do they **lose**? Same.

### Out of scope

**6.** Name **three things your game will not have.** Levels, a shop, a story, enemies that shoot,
music, a high score table. Pick three and rule them out now.

> **This is the most useful question on the page.** A project with nothing ruled out expands until it
> runs out of time.

---

# Part 2: Requirements, and the removal test

**Six things have to be in your game.** All six have to be **meaningful.**

## What "meaningful" means

> **Remove it. If the game still plays the same, it was not meaningful.**

That is the test, and it is the test I will actually apply. Having a loop in your code is not the
requirement. The loop **doing something the game needs** is the requirement.

### The six, and what does and does not count

| # | Requirement | Counts | Does not count |
|---|-------------|--------|----------------|
| **1** | **A list** | Holds something that changes during play, and the game reads it to make a decision | A list you fill once and never read. A list of one thing |
| **2** | **A `for` loop or `while` loop** | Repeats a known or countable number of times, and the count matters | `forever`. That is the game loop, every project has one, it is not yours |
| **3** | **A conditional** | Changes what happens based on a value that can differ between playthroughs | `if true`. An `if` that always runs |
| **4** | **A variable** | Changes during play, and something reads it | A variable set once at the start and never changed |
| **5** | **A way to win** | Reachable, and the game says you won | A win nobody can trigger |
| **6** | **A way to lose** | Reachable, and the game says you lost | Running out of time with nothing happening |

### About the loop, specifically

**`forever` does not count.** Every game has a `forever` block. It is the engine running, not a loop you
designed.

**You need a `for` loop or a `while` loop** doing real work. Spawning a wave of enemies, stepping through
your list, counting something out, repeating a check a set number of times.

**7.** Which loop type are you using, and **what does it repeat?**

**8.** If I deleted that loop, what would break?

### Prove each one

For all six, answer: **what breaks if I remove it?**

**9. List:**

**10. Loop:**

**11. Conditional:**

**12. Variable:**

**13. Win:**

**14. Lose:**

> **If an answer is "nothing really," that requirement is not met yet.** Go change the design, not the
> answer.

---

# Part 3: Breakdown

**15.** Break your game into **five to eight pieces**, each small enough to finish in one class period.

Write them in the order you will build them. **Each one should leave you with something that runs.**

Example of the right size:

```
  1. player sprite that moves with the arrow keys
  2. one collectible that appears in a random spot
  3. picking it up adds to the list and destroys it
  4. a counter on screen showing the list length
  5. win when the list reaches 5
  6. a hazard that removes an item from the list
  7. lose when the list is empty after you have collected something
```

**16.** Which piece are you building **first**? It should be the smallest one that does anything at all.

**17.** Which piece are you **least sure** how to build?

---

# Part 4: Risk

**18.** What is most likely to go wrong? Pick the real one, not the polite one.

**19.** If you run out of time, **which pieces do you cut?** Name them now, in order, so you are not
deciding it at 2pm on Thursday.

**20.** Which part needs something you have not done before? **What is your plan for figuring it out?**

---

# Part 5: The screen

**21.** Draw your screen on paper. Where things start, roughly. **Stick figures and boxes are fine.**
Label the player, the things they interact with, and where the score or counter sits.

Photograph it and attach it.

---

## Ideas, if you need one

| Idea | What the list holds |
|------|---------------------|
| **Recipe game** | Ingredients collected. Win with the right set |
| **Memory / pattern** | The sequence shown. Lose when the player's order does not match |
| **Inventory adventure** | Items carried. Doors check what you have |
| **Wave defender** | How many enemies each wave has, so difficulty is a list of numbers |
| **Deliveries** | Orders waiting. Each delivery removes one |
| **Maze with keys** | Keys collected. The exit checks for all of them |
| **Fishing** | What you caught. Win on variety, not quantity |

---

## Scope, honestly

**Four class periods.** That is what you have.

| Realistic | Not realistic |
|-----------|---------------|
| One screen, one mechanic, done well | Multiple levels |
| Four or five sprite kinds | Twenty enemy types |
| Win and lose that both work | A save system, a shop, a story |

**Small and finished beats big and broken.** Every single time.

---

## Turn in this week

- [ ] Parts 1 to 4, answered
- [ ] Your screen drawing, photographed
- [ ] **Approved by me.** No project code before that

---

## Grading

**The plan is graded on Part 2 and Part 3.**

Part 2 because the removal test is the whole point: six features that each do something. Part 3 because a
breakdown into real pieces is the difference between finishing and not.

**Questions 9 to 14 are where most plans come back for revision.** If "nothing really" is the honest
answer to any of them, the design needs changing before you build.
