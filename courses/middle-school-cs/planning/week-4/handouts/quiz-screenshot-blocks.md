# Quiz Screenshot Blocks (Week 4 Friday)

**Teacher-only.** These are the 12 block images for the screenshot half of the quiz. They match
`[SCREENSHOT 1]` through `[SCREENSHOT 12]` in `quiz-bank.csv`.

## How to make each image

1. Open MakeCode Arcade, **new project**
2. Switch to the **JavaScript** tab (top middle)
3. **Delete whatever is in there**, then paste one snippet below
4. Switch back to the **Blocks** tab. The code appears as blocks.
5. Screenshot just the blocks, then paste that image into the matching quiz question in the Google Form

> **Do one at a time and clear the editor between each.** Leftover code from the previous snippet ends up in
> your screenshot and gives the answer away or confuses the question.

> **Students never see JavaScript.** The paste step is only how you get the blocks built quickly. Every
> question is worded in block language, and the image they see is blocks.

**They are ordered easiest to hardest.** If you run out of prep time, cut from the bottom and delete those
questions from the Form. The quiz works fine with 8 or 10 of these.

---

## 1. Basic if / else trace

```javascript
let score = 0
let lives = 3
if (score > 5) {
    lives += -1
} else {
    score += 3
}
```

**Question:** After this runs, what is the value of score?
**Answer:** 3 (score is 0, and `0 > 5` is false, so the else runs)

---

## 2. The boundary trap

```javascript
let a = 5
if (a > 5) {
    game.splash("BIG")
} else {
    game.splash("NOT BIG")
}
```

**Question:** What does the screen say?
**Answer:** NOT BIG (5 is not *greater than* 5. This is the `>` versus `≥` trap.)

---

## 3. AND needs both sides

```javascript
let x = 6
if (x > 5 && x < 6) {
    game.splash("YES")
} else {
    game.splash("NO")
}
```

**Question:** What does the screen say?
**Answer:** NO (`6 > 5` is true but `6 < 6` is false, and AND needs both)

---

## 4. OR needs only one side

```javascript
let key = 3
if (key == 1 || key == 3) {
    game.splash("OPEN")
} else {
    game.splash("LOCKED")
}
```

**Question:** What does the screen say?
**Answer:** OPEN (`key = 3` is true, and OR only needs one side)

---

## 5. Two variables, one branch

```javascript
let score = 0
let lives = 3
score += 7
if (score > 7) {
    lives += -1
} else {
    score += 3
}
```

**Question:** After this runs, what are the values of score and lives?
**Answer:** score 10, lives 3 (score reaches 7, and `7 > 7` is false, so the else runs and lives never changes)

---

## 6. Counting up

```javascript
let count = 0
count += 1
count += 1
count += 1
count += 1
```

**Question:** After this runs, what is the value of count?
**Answer:** 4 (each "change count by 1" adds one to what is already there)

---

## 7. The chain, at the boundary

```javascript
let score = 20
if (score < 20) {
    scene.setBackgroundColor(9)
} else if (score < 40) {
    scene.setBackgroundColor(5)
} else {
    scene.setBackgroundColor(2)
}
```

**Question:** What background color is set?
**Answer:** Yellow, colour 5 (`20 < 20` is false so it falls through, and `20 < 40` is true)

> Colour numbers in Arcade: 9 is blue, 5 is yellow, 2 is red. **Say the colour names aloud when you read the
> question**, or label them on the screenshot, so nobody is guessing the palette.

---

## 8. Every Nth with remainder

```javascript
let score = 0
game.onUpdateInterval(500, function () {
    score += 1
    if (score % 5 == 0) {
        game.splash("BONUS")
    }
})
```

**Question:** How many times does the splash appear as score goes from 1 to 10?
**Answer:** 2 (at 5 and at 10)

---

## 9. Counting on overlap

```javascript
let items = 0
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    items += 1
    info.setScore(items)
})
```

**Question:** A player touches 3 items. What is the score afterward?
**Answer:** 3 (each overlap adds one, and destroy stops the same item counting twice)

---

## 10. The number that does not match

```javascript
let keys = 0
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    keys += 1
    info.setScore(keys)
    if (keys == 7) {
        game.over(true)
    }
})
```

**Question:** There are 5 items in the maze. What happens when the player collects all of them?
**Answer:** Nothing, the if block is checking for 7 and the counter only ever reaches 5

> This is the exact bug from Thursday's live build. Worth including even if you cut others.

---

## 11. Lives and a loss condition

```javascript
let lives = 3
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    lives += -1
    if (lives == 0) {
        game.over(false)
    }
})
```

**Question:** The player starts with 3 lives and touches an enemy twice. What happens?
**Answer:** Lives drops to 1 and the game keeps going (the if only fires at 0)

---

## 12. The impossible condition

```javascript
let score = 50
if (score > 100 && score < 10) {
    game.splash("LEVEL UP")
}
```

**Question:** Why does the splash never appear, no matter how high the score gets?
**Answer:** No number can be both greater than 100 and less than 10 at the same time, so an AND of those two
conditions can never be true

> Hardest one on the quiz. It asks them to reason about the condition itself rather than trace a value.

---

## Quick reference: JavaScript here, blocks they see

| What you paste | What the block says |
|----------------|---------------------|
| `let score = 0` | set score to 0 |
| `score += 1` | change score by 1 |
| `if (...) { } else { }` | if ... then ... else |
| `==` | = |
| `>=` | ≥ |
| `&&` | and |
| `\|\|` | or |
| `score % 5 == 0` | remainder of score ÷ 5 = 0 |
| `game.over(true)` | game over WIN |
| `game.over(false)` | game over LOSE |
| `otherSprite.destroy()` | destroy otherSprite |

**Check every question you write against this table.** If a question says `==` or "score plus equals," it is
written in the wrong language for this class.
