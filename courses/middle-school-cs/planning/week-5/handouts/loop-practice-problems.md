# Loop Practice Problems

**Middle School CS, Week 5.** Bell ringer problems in block language. Put them on the board one at a time,
give a minute, take answers, reveal.

Everything here is `repeat`, `for index`, `remainder`, and nesting. **No new concepts.**

---

## Problem 1: How many times?

```
for index from 0 to 5:
    change score by 1
```

**How many times does score change? What is score at the end, starting from 0?**

<details>
<summary>Answer</summary>

**Six times. Score is 6.** It counts 0, 1, 2, 3, 4, 5. **Always one more than the last number.**
</details>

---

## Problem 2: Using the count

```
for index from 0 to 3:
    set star position to x (10 + index * 20), y 0
```

**Where does each star land? List all the x values.**

<details>
<summary>Answer</summary>

**10, 30, 50, 70.** Four stars.

| index | 10 + index * 20 |
|-------|-----------------|
| 0 | 10 |
| 1 | 30 |
| 2 | 50 |
| 3 | 70 |
</details>

---

## Problem 3: Change the spacing

Using the same block, **what would you change to make the stars twice as far apart?**

<details>
<summary>Answer</summary>

**Change the 20 to 40.** The multiplier is the gap between them. The 10 is where the first one starts.

Follow up: what does changing the 10 do? (Moves the whole row right or left, without changing the spacing.)
</details>

---

## Problem 4: Remainder

**What is each of these?**

- remainder of 9 ÷ 4
- remainder of 20 ÷ 5
- remainder of 7 ÷ 10

<details>
<summary>Answer</summary>

**1** (4 goes into 9 twice, 1 left over)
**0** (divides evenly)
**7** (10 does not go into 7 at all, so all 7 is left over)

That last one surprises people. **If the first number is smaller, the remainder is the whole thing.**
</details>

---

## Problem 5: Every Nth

**Write the condition for a bonus every 6th point.**

<details>
<summary>Answer</summary>

`remainder of score ÷ 6 = 0`

**Not `= 6`.** A remainder can never equal the number you divided by.
</details>

---

## Problem 6: What does this do?

```
for index from 0 to 9:
    if remainder of index ÷ 2 = 0 then
        set star color to blue
    else
        set star color to red
```

**Describe the pattern of colors.**

<details>
<summary>Answer</summary>

**Alternating: blue, red, blue, red...** starting with blue.

`remainder of index ÷ 2 = 0` is true for even numbers, and index starts at 0, which is even.

Follow up: how would you make every **third** one blue instead? (`÷ 3 = 0`)
</details>

---

## Problem 7: Nested

```
repeat 3 times:
    for index from 0 to 4:
        spawn a star
```

**How many stars total?**

<details>
<summary>Answer</summary>

**15.** The inner loop makes 5, and the outer loop runs it 3 times. **5 times 3.**

The trap: some will say 8, adding instead of multiplying. Walk it: the whole inner loop happens, start to
finish, every single time the outer loop goes around.
</details>

---

## Problem 8: Read it backwards

You want **four rows of six stars each.** Write the loops.

<details>
<summary>Answer</summary>

```
repeat 4 times:
    for index from 0 to 5:
        spawn a star
```

Accept `for index from 0 to 3` on the outside too. **The thing to check is the inner loop runs 6 times**, so
`0 to 5`, and the outer runs 4.
</details>

---

## Problem 9: Find the bug

```
set stars to 0
for index from 0 to 4:
    spawn a star
if stars = 5 then
    game over WIN
```

**Why does the win never fire?**

<details>
<summary>Answer</summary>

**Nothing ever changes `stars`.** It is set to 0 and never touched again, so `stars = 5` is never true.

It needs `change stars by 1` **inside** the loop.
</details>

---

## Problem 10: Find the bug

```
for index from 0 to 4:
    set star position to x 80, y 0
```

**What is wrong with the result?**

<details>
<summary>Answer</summary>

**All five stars land in exactly the same spot**, stacked on top of each other, so it looks like one star.

The loop counts, but the code inside ignores the count. Use `index` in the position, or `pick random`.
</details>

---

## If you want them as blocks

Paste any of these into the **JavaScript** tab in MakeCode, then switch to **Blocks** to show it on screen.

```javascript
// Problem 1
let score = 0
for (let index = 0; index <= 5; index++) {
    score += 1
}
```

```javascript
// Problem 6
for (let index = 0; index <= 9; index++) {
    if (index % 2 == 0) {
        game.splash("BLUE")
    } else {
        game.splash("RED")
    }
}
```

```javascript
// Problem 7
for (let i = 0; i < 3; i++) {
    for (let index = 0; index <= 4; index++) {
        game.splash("star")
    }
}
```

```javascript
// Problem 9
let stars = 0
for (let index = 0; index <= 4; index++) {
    game.splash("star")
}
if (stars == 5) {
    game.over(true)
}
```

**Students never see the JavaScript.** Convert to Blocks before showing it.

---

## The four things these are drilling

1. **`for index from 0 to N` runs N+1 times.** It counts from zero.
2. **The count is usable.** `index` in the position, the speed, or the color is the whole reason to use `for`.
3. **`remainder ÷ N = 0` means every Nth.** Never `= N`.
4. **Nested loops multiply.** Inner times outer.
