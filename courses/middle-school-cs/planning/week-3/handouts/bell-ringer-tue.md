# Bell Ringer + Example: Tuesday Sep 1 (`if` statements)

Middle School CS · Week 3 · Day 2. Run the bell ringer (~5 min), then walk the worked example (~5 min) before
students break out to the Decision Game lab.

---

## Bell ringer: trace the code

Put this on the board. Students write down what `score` and `lives` end up as.

```
set score to 0
set lives to 3

if score > 5:
    change score by 10
else:
    change lives by -1
```

**Ask:** Is `score > 5` true or false right now? So which branch runs?

**Answer:** `score` is 0, and 0 > 5 is **false** → the `else` runs → `lives` becomes **2**. `score` stays **0**.

**Follow-up (say it out loud):** "The `if` only runs the *true* side OR the *else* side, never both."

### Quick second trace (if they got it fast)

```
set coins to 8
if coins >= 8:
    change coins by 5
```

`coins >= 8` is **true** (8 is equal to 8) → `coins` becomes **13**. Point out that `>=` includes the equal case.

---

## Worked example: the move they need for the lab

Show this live in MakeCode Arcade. This is exactly the decision the Decision Game needs on **overlap**.

**Goal:** when the player touches an item, an `if` decides good vs. bad.

```
on sprite overlap (player) with (item):
    if item kind is "good":
        change score by 1
    else:
        change lives by -1
```

Say the shape out loud as you build it:

> **"IF this is true, do that; OTHERWISE, do the other thing."**

Then show the **win/lose** check they'll add later:

```
if score >= 10:
    game over WIN
if lives <= 0:
    game over LOSE
```

**Point to make:** the game "decides who won" with these two `if` statements, one checks the win number, one
checks that lives hit zero.

---

## Then break out

Students go to the **Decision Game** lab (`project.md`). Today's target: items spawn and an **`if` on overlap**
decides good → score up, bad → lose a life. Win/lose conditions come Wednesday.
