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

## Thursday Sep 24: last quiz prep

**The quiz is tomorrow.** Put up two or three of these, not all six. Take whatever Wednesday's set showed
was weakest, then go over each one out loud.

### A. while, and the loop that never ends

```
  set lives to 3
  while lives > 0
    change lives by -1

How many times does the loop run?
What happens if it says "change lives by 1" instead?
```

**3.** With `change lives by 1` it never ends: lives grows, the condition stays true, the game freezes.
That is an **infinite loop**. A `while` needs something inside it that pushes the condition toward false.

### B. Variables: the order of the lines matters

```
  set score to 0
  set score to score + 5
  set score to score x 2

What is score at the end?
```

**10.** Not 5, not 20. Lines run top to bottom, one at a time. Read it a line at a time out loud and they
will get it.

### C. Conditional inside a loop

```
  for index from 0 to 5
    if remainder of index / 2 = 0 then
      set mySprite to sprite of kind Enemy

How many enemies?
```

**3.** Index runs 0, 1, 2, 3, 4, 5, which is **six** times, and the even ones are 0, 2, 4. Two ideas in
one question, which is what the quiz does.

### D. Counting the zero, one more time

```
  for index from 0 to 9
    change score by 1

What is the score?
```

**10.** This is the most-missed idea on the quiz and it is worth putting up even if they got it
yesterday.

### E. Nested, with different numbers

```
  repeat 2 times
    repeat 7 times
      change score by 1

What is the score?
```

**14.** Multiply, do not add. Anyone answering 9 is adding.

### F. Debugging from a symptom

```
The ship shoots, but the shots fall toward the bottom
of the screen instead of going up.

What is wrong?
```

**The vy is positive.** On screen, y increases downward, so **negative vy is up.**

---

## Before the quiz, say these four out loud

Worth ninety seconds at the end of the bell ringer:

1. **`for index from 0 to N` runs N+1 times.** Count the zero
2. **A loop inside a loop multiplies.** Inside means it runs all the way through, every time
3. **`remainder = 0` means it divides evenly.** That is how you do "every Nth time"
4. **`while` asks a question every time around. `forever` never asks.** A `while` needs something that
   makes the answer become no

---

## Friday Sep 25 (quiz day)

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
