# MakeCode Blocks for Screenshot Questions

**Middle School CS · Week 3.** Copy each block below into the **JavaScript** tab in MakeCode Arcade, switch to
the **Blocks** view, and screenshot the blocks. Use that screenshot as the image on a Gimkit question. The
question and the answer to pair with it are listed under each snippet.

> Tip: keep only one snippet in the editor at a time so the screenshot is clean. Delete the previous one before
> pasting the next.

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
info.setScore(score)
```

**Question:** After this runs, what is score?
**Answer:** 3 (0 > 5 is false, so the else runs)
**Distractors:** 0 · 5 · 8

---

## 2. The >= boundary trap

```javascript
let a = 5
if (a > 5) {
    game.splash("BIG")
} else {
    game.splash("NOT BIG")
}
```

**Question:** What does the screen say?
**Answer:** NOT BIG (5 is not greater than 5)
**Distractors:** BIG · Both messages · Nothing

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
**Answer:** NO (6 < 6 is false, so the AND fails)
**Distractors:** YES · Both · An error

---

## 4. OR needs only one side

```javascript
let key = 3
if (key == 1 || key == 3) {
    game.splash("DOOR OPENS")
} else {
    game.splash("LOCKED")
}
```

**Question:** What does the screen say?
**Answer:** DOOR OPENS (the second side is true)
**Distractors:** LOCKED · Nothing · An error

---

## 5. Modulo, every Nth

```javascript
let score = 0
game.onUpdateInterval(500, function () {
    score += 1
    info.setScore(score)
    if (score % 5 == 0) {
        effects.confetti.startScreenEffect(200)
    }
})
```

**Question:** At which scores does the confetti fire?
**Answer:** 5, 10, 15, 20 (every multiple of 5)
**Distractors:** Only at 5 · Every score · Only odd scores

---

## 6. if / else if / else chain

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

**Question:** Which background color is set when score is exactly 20?
**Answer:** The else if branch, because 20 is not less than 20
**Distractors:** The first if branch · The final else · No branch runs

---

## 7. Variable math in order

```javascript
let x = 4
x = x * 2
x = x + 2
info.setScore(x)
```

**Question:** What is the final value of x?
**Answer:** 10
**Distractors:** 12 · 8 · 16

---

## 8. set versus change

```javascript
let score = 7
score = 5
info.setScore(score)
```

**Question:** What is score now?
**Answer:** 5 (setting replaces the old value)
**Distractors:** 12 · 7 · 2

---

## 9. Win and lose conditions

```javascript
let score = 10
let lives = 0
if (score >= 10) {
    game.over(true)
}
if (lives <= 0) {
    game.over(false)
}
```

**Question:** Which check is the LOSE condition?
**Answer:** if lives <= 0
**Distractors:** if score >= 10 · Both of them · Neither of them

---

## 10. Nested if

```javascript
let score = 12
let lives = 2
if (score > 10) {
    if (lives > 1) {
        game.splash("BONUS")
    }
}
```

**Question:** Does the screen show BONUS?
**Answer:** Yes, because both conditions are true
**Distractors:** No, the outer if fails · No, the inner if fails · Only if lives is 3
