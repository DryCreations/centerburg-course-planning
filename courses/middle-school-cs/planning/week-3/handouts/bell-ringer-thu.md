# Bell Ringers + Unique `if` Example + Group Practice: Thursday Sep 3

Middle School CS · Week 3 · Day 4. Interesting new ways to use `if`, one cool example to show live, and group
practice problems. All code is **MakeCode Arcade JavaScript**: paste into the JS editor, then flip to Blocks.
(No debug log today.)

---

## Bell ringers (new operators, trace them)

**1. AND (`&&`) needs both sides true.**
```javascript
let a = 7
if (a > 5 && a < 10) {
    game.splash("YES")
}
```
Ask: true or false? (Both true: 7 > 5 AND 7 < 10, so it splashes YES.)

**2. OR (`||`) needs just one side true.**
```javascript
let key = 3
if (key == 1 || key == 3) {
    game.splash("DOOR OPENS")
}
```
Ask: does the door open? (Yes: key == 3 is true, so the OR is true.)

**3. Modulo (`%`) checks "every Nth."**
`score % 10 == 0` is true when score is 0, 10, 20, 30... Ask: what scores make it true? (Multiples of 10.)

---

## The cool example: background reacts to your score (show live)

Paste this in and convert to Blocks. The background changes color as the score climbs, and confetti pops every
10 points. This is a fun, visible use of `if` / `else if`.

```javascript
let score = 0
info.setScore(0)
game.onUpdateInterval(500, function () {
    score += 1
    info.setScore(score)
    if (score % 10 == 0) {
        effects.confetti.startScreenEffect(200)
    }
    if (score < 20) {
        scene.setBackgroundColor(9)
    } else if (score < 40) {
        scene.setBackgroundColor(5)
    } else {
        scene.setBackgroundColor(2)
    }
})
```

**Walk it through:** every half second the score goes up. The first `if` uses `%` to throw confetti every 10.
The `if / else if / else` picks the background: blue while under 20, yellow from 20 to 39, red at 40 and up.
Only ONE color branch runs each time, top to bottom.

---

## Group practice (do these together)

1. **Predict:** score is **25**. Which background color? *(Yellow: 25 is not < 20, but it is < 40.)*
2. **Edge case:** score is exactly **20**. Which color? *(Yellow, not blue: 20 is not < 20, so it falls to the
   else if.)* This is the classic boundary trap.
3. **Change it:** we want confetti every **5** points instead of 10. What do we change? *(`score % 10` becomes
   `score % 5`.)*
4. **Extend it:** add a **purple** zone (color 8) for scores 40 to 59, so red only starts at 60. *(Add
   `else if (score < 60) { scene.setBackgroundColor(8) }` before the final `else`.)*

---

## Then work time

Keep building your game. Try adding one `if` idea from today (an `&&` condition, an "every Nth" bonus with `%`,
or a color change) to make it yours.
