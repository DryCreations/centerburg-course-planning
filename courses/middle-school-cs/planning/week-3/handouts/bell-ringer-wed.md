# Bell Ringer + Practical Example: Wednesday Sep 2 (`if` + variables)

Middle School CS · Week 3 · Day 3. All code here is **MakeCode Arcade JavaScript**: paste it into the
**JavaScript** editor, then flip to **Blocks** to show the same thing as blocks. Run it to check the trace.

---

## Bell ringer 1: trace it, then run to check

Put this on the board (or paste into JS and switch to Blocks). Students write down **x**, **y**, and **what
shows on the screen**.

```javascript
let x = 10
let y = 0
y = x - 4
x = x + y
if (x >= 15) {
    y = 100
} else {
    y = 50
}
info.setScore(y)
```

**Ask:** What is `y` after line 3? What is `x` after line 4? Which branch runs? What score shows?

**Answer:** `y = 10 - 4 = 6`. `x = 10 + 6 = 16`. `16 >= 15` is **true** → `y = 100`. The score shows **100**.
Point out that `x` **changed** before the `if` checked it: order matters.

## Bell ringer 2: the "equal" gotcha

```javascript
let a = 2
let b = 5
a = a + 3
if (a > b) {
    b = b + 10
} else {
    b = b - 1
}
info.setScore(b)
```

**Answer:** `a = 2 + 3 = 5`. Is `5 > 5`? **No** (it's equal, not greater) → the `else` runs → `b = 5 - 1 = 4`.
Score shows **4**. Ask: what would make the `if` side run instead? (`a > b` needs `a` to be **6+**, or use `>=`.)

> Teaching point: `>` is not `>=`. When the two are equal, `>` is false. This trips people up constantly.

---

## Practical example: `if` that "levels up" (the cool one)

Paste this in and convert to Blocks. It counts up, and an `if` **decides when you level up** and shows a splash.
This is a genuinely useful pattern: conditions that fire once when you cross a threshold.

```javascript
let level = 1
let score = 0
info.setScore(0)
game.onUpdateInterval(1000, function () {
    score += 1
    info.setScore(score)
    if (score >= 10 && level == 1) {
        level = 2
        game.splash("LEVEL 2!")
    } else if (score >= 20 && level == 2) {
        level = 3
        game.splash("LEVEL 3!")
    }
})
```

**Walk it through:**
- Every 1 second, `score` goes up by 1 and shows on screen.
- The **`if`** checks two things at once with `&&` (**and**): score is high enough **and** you're still on the
  level below. Both must be true.
- Why `&& level == 1`? So it levels up **once**, not every second after 10. Take that part out and run it to
  **show the bug** (it splashes "LEVEL 2!" forever): a great "why do we need that condition?" moment.

**Make it theirs (quick challenges):**
- Change the numbers so it levels up at 5 and 15.
- Add a **LEVEL 4** with another `else if`.
- On level 3, change the background: `scene.setBackgroundColor(5)` inside that branch.

---

## Then break out

Back to the **Decision Game** lab: today add the **win and lose** conditions with `if` (reach a score → win;
lives hit 0 → game over), then playtest and keep the debug log.
