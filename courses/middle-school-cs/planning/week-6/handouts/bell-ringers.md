# Week 6 Bell Ringers

**Middle School CS | Week 6** | Teacher reference

One question on the board as students come in. **Three to five minutes.** Answer on paper or out loud,
then it gets gone over and class moves on. **These are not graded.** They exist so the vocabulary from the
quiz on Friday keeps getting used.

All questions use **block language only.** No JavaScript on the board.

---

## Tuesday Sep 22

```
BELL RINGER

  repeat 3 times
    repeat 6 times
      set mySprite to sprite of kind Enemy

How many enemy sprites does this make?

Finished? Change ONE number so it makes 24 instead.
```

**Answer:** **18.** Three times through the outer loop, six sprites each time. 3 x 6.

**The wrong answer to expect:** **9.** That is 3 + 6. Students who add instead of multiplying are reading
the second loop as something that happens next to the first one instead of inside it.

**Fix it on the board like this:** walk the outer loop out loud. "Outer loop, round one: six sprites.
Round two: six more, that's twelve. Round three: six more, that's eighteen." Nested means *inside*, and
inside means it runs all the way through every single time.

**Extension answer:** either `repeat 4 times` outside (4 x 6) or `repeat 8 times` inside (3 x 8). Both are
correct. Ask which one changes the *shape* of the wave: the outer loop is rows, the inner loop is how many
are in a row.

---

## Wednesday Sep 23: quiz prep set

Friday's quiz covers loops, nested loops, `while`, `for index`, modulo, conditionals, variables, and
debugging. **Put up two or three of these**, not all five. Take the ones the class is weakest on.

### A. Reading a nested loop

```
  repeat 4 times
    repeat 5 times
      set mySprite to sprite of kind Enemy

How many sprites?
```

**20.** The wrong answer is 9. Multiply, do not add.

### B. The for loop that counts zero

```
  for index from 0 to 3
    change score by 1

What is the score at the end?
```

**4.** Index is 0, 1, 2, 3. `from 0 to 3` runs **four** times. This is the single most missed idea on the
quiz. Say it out loud: count the zero.

### C. Modulo

```
  if remainder of score / 5 = 0 then
    set life to life + 1

At which scores does the player gain a life?
```

**5, 10, 15, 20, and so on.** Also 0, which is worth pointing out.

The sentence to make them say: **"remainder equals zero means it divides evenly,"** which is how you do
"every Nth time" in any language.

### D. while versus forever

```
  set lives to 3
  while lives > 0
    change lives by -1

How many times does the loop run?
What if the last line said "change lives by 1"?
```

**3.** With `change lives by 1` it never ends: lives grows, the condition stays true, the game freezes.

**The vocabulary:** an **infinite loop**. A `while` needs something inside it that moves the condition
toward false.

### E. Debugging, read the symptom

```
One shot hits one alien and the whole column disappears.

  on overlap Projectile with Enemy
    change score by 1
    destroy Enemy

What is missing?
```

**`destroy Projectile`.** The shot keeps flying up through everything above it, overlapping each one.

---

## Thursday Sep 24

```
BELL RINGER

  set count to 0
  while count < 5
    set mySprite to sprite of kind Enemy
    change count by 1

How many times does the loop run?
What happens if the LAST line is deleted?
```

**Answer:** **5** (count is 0, 1, 2, 3, 4). Delete `change count by 1` and `count` stays 0 forever, the
condition is always true, and it never stops. The game freezes.

**The vocabulary to say out loud:** an **infinite loop.** A `while` loop needs something inside it that
moves it toward being false.

---

## Friday Sep 26 (quiz day)

```
BELL RINGER

  for index from 0 to 4
    set mySprite to sprite of kind Enemy
    set mySprite position to x (20 + index x 30) y 20

How many sprites, and where is the LAST one?
```

**Answer:** **5 sprites** (index is 0, 1, 2, 3, 4). The last one is at index 4, so x = 20 + 120 = **140**,
y = 20.

**The thing worth repeating before a quiz:** `for index from 0 to 4` runs **five** times, not four. It
counts the zero.

---

## Recurring corrections

| What they say | What to say back |
|---|---|
| Adds the loop counts instead of multiplying | "Inside means it runs all the way through, every time." |
| `for index from 0 to 4` runs 4 times | "Count them out loud: zero, one, two, three, four." |
| Uses `forever` where `while` belongs | "`forever` never asks a question. `while` asks one every time." |
| Cannot say why the game froze | "What was supposed to make the condition false?" |
