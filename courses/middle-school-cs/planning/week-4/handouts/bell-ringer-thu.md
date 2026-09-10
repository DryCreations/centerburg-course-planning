# Thursday Bell Ringer: Quiz Warm-Up

**Middle School CS, Week 4, Thursday.** Five questions in the same shape as tomorrow's quiz. Do these on
paper or out loud as a class, five to seven minutes, then go into the live build.

> **Tell them plainly:** these are exactly the kinds of questions on tomorrow's quiz. The quiz covers if
> statements, variables, comparisons, AND, OR, and modulo. **It does not cover tile maps.**

---

## Question 1: Trace it

```
set score to 0
set lives to 3
change score by 7
if score > 7:
    change lives by -1
else:
    change score by 3
```

**What are score and lives at the end?**

<details>
<summary>Answer</summary>

**score = 10, lives = 3.** The trap: `score` is 7, and `7 > 7` is **false**, so the `else` runs. Lives never
changes. Ask them what would happen if the condition were `score >= 7` instead (then lives drops to 2 and
score stays 7).
</details>

---

## Question 2: AND

If `x = 6`, is `x > 5 and x < 6` true or false?

<details>
<summary>Answer</summary>

**False.** `6 > 5` is true, but `6 < 6` is false. **AND needs both sides true.** Follow up: what about
`x > 5 or x < 6`? That one is **true**, because OR only needs one side.
</details>

---

## Question 3: The chain

```
if score < 20:      background blue
else if score < 40: background yellow
else:               background red
```

**What color when score is exactly 20? What about exactly 40?**

<details>
<summary>Answer</summary>

**20 is yellow, 40 is red.** At 20, `20 < 20` is false so it falls through to the next check, and `20 < 40`
is true. At 40, both checks fail so the final `else` runs. The point to say out loud: **the chain runs top to
bottom and stops at the first true condition.**
</details>

---

## Question 4: Modulo

`score % 4 == 0` is true for which numbers?

<details>
<summary>Answer</summary>

**0, 4, 8, 12.** The ones that divide by 4 with nothing left over. Follow up: how would you make a bonus fire
every **3** points? `score % 3 == 0`.
</details>

---

## Question 5: How many branches?

In an if/else statement, how many branches run on a single pass?

<details>
<summary>Answer</summary>

**Exactly one.** Never both, never neither. This one shows up on the quiz almost word for word.
</details>

---

## The four traps to name out loud before they leave

1. **`>` is not `>=`.** When the number is exactly equal, `>` is false.
2. **AND needs both. OR needs one.**
3. **A chain stops at the first true condition.** It does not keep checking.
4. **`%` is about the remainder**, so `% 5 == 0` means "every 5."
