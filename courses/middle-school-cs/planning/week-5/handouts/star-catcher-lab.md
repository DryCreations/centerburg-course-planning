# Star Catcher: The Loops Lab

**Middle School CS, Week 5.** A brand new game. Every part of it is built with a different kind of loop.

**What you are making:** stars fall from the top. You move left and right at the bottom and catch them. There
is a countdown, the waves speed up, and every fifth star is worth bonus points.

**Read the steps. Do them in order. Each step says exactly what to do.** If a step does not work, the bug
table at the bottom probably has it.

---

# DAY 1 (Monday): while loops, and getting the game running

## Part A: what a `while` loop is

A **`while` loop** keeps running as long as a condition is true. It checks **before every single pass.**

```
set timer to 5
while timer > 0:
    change timer by -1
```

Read it out loud: *"While the timer is greater than zero, take one off the timer."*

### Trace it yourself

| Check | Is `timer > 0` true? | What happens | timer is now |
|-------|---------------------|--------------|--------------|
| 1 | 5 > 0, yes | change by -1 | 4 |
| 2 | 4 > 0, yes | change by -1 | 3 |
| 3 | 3 > 0, yes | change by -1 | 2 |
| 4 | 2 > 0, yes | change by -1 | 1 |
| 5 | 1 > 0, yes | change by -1 | 0 |
| 6 | 0 > 0, **no** | loop stops | 0 |

**Five passes.** The sixth check fails and the loop ends.

## Part B: the one rule

> **Something inside a `while` loop has to move it toward stopping.**

This loop never ends:

```
set timer to 5
while timer > 0:
    pause 100
```

Nothing inside it changes `timer`, so `timer > 0` is true forever. **Your game freezes.** That is called an
**infinite loop**, and it is the single most common `while` bug.

## Part C: example problems

Work these with a partner. Say your reasoning out loud.

**1.** How many times does this run?
```
set lives to 3
while lives > 0:
    change lives by -1
```

**2.** How many times does this run?
```
set score to 0
while score < 10:
    change score by 2
```

**3.** What is wrong with this one?
```
set count to 0
while count < 5:
    change count by -1
```

**4.** How many times does this run?
```
set x to 10
while x > 10:
    change x by -1
```

<details>
<summary>Answers, after you have tried them</summary>

**1. Three times.** lives goes 3, 2, 1, 0. The check at 0 fails.

**2. Five times.** score goes 0, 2, 4, 6, 8, then 10. At 10 the check `score < 10` is false.

**3. It never ends.** `count` starts at 0 and goes **down**, so `count < 5` is true forever. It has to go
**up** to ever reach 5.

**4. Zero times.** `x` starts at 10 and `10 > 10` is false, so the loop body never runs even once. A `while`
checks **before** the first pass, not after.

</details>

## Part D: read it out loud

Before you build, with your partner: **take turns reading a `while` loop out loud as a sentence.**

"While the timer is greater than zero, pause one second and take one off the timer."

If you can say it as a sentence, you understand it. If you cannot, **ask now**, before you are debugging it
inside a game.

---

## Part E: build the game. Steps 1 to 5

You will not need `while` until Day 4. Today you get the game running.

### Step 1: make the player

1. New project, name it **Star Catcher**
2. **Sprites**: `set mySprite to sprite of kind Player`. Draw a small paddle or basket
3. **Controller**: `move mySprite with buttons`
4. **Sprites**: `set mySprite y to 110`

**Test:** you should slide left and right along the bottom.

### Step 2: make one star

5. **Sprites**: `set star to sprite of kind Food`. Draw a small star
6. `set star position to x 80, y 0`
7. `set star vy to 40`

**Test:** one star falls, once.

### Step 3: catch it

8. **Sprites**: `on sprite of kind Player overlaps otherSprite of kind Food`
9. Inside it: `destroy otherSprite`
10. Then: `change score by 1`

**Test:** catch the star, score goes to 1.

### Step 4: ten stars, the tedious way

11. Do **not** actually do this. Just look at what it would take: ten copies of steps 5 to 7. Thirty blocks,
    thirty chances to make a mistake, and if you want twenty stars you start over.

### Step 5: ten stars, the right way

12. **Loops**: drag a `repeat 10 times` block
13. Put your three star blocks **inside** it
14. Change the x to `pick random 10 to 150` so they are not stacked

```
repeat 10 times:
    set star to sprite of kind Food
    set star position to x (pick random 10 to 150), y 0
    set star vy to 40
```

**Test:** ten stars, from three blocks.

> **They all appear in the same instant.** That is correct. `repeat` runs as fast as the computer can. We fix
> the timing on Day 3.

### Goal for today

- [ ] A player that moves along the bottom
- [ ] Ten stars spawned with a `repeat` loop
- [ ] Catching a star destroys it and adds to your score
- [ ] You can explain a `while` loop out loud as a sentence

---

# DAY 2 (Tuesday): for loops and modulo

## Part A: `for index`, the counting loop

`repeat` runs code a number of times, but **it has no idea which pass it is on.** Every pass is identical.

**`for index` does know.** It counts, and you can use the count.

```
for index from 0 to 4:
    set star to sprite of kind Food
    set star position to x (20 + index * 30), y 0
```

### Trace it

| Pass | index | `20 + index * 30` |
|------|-------|-------------------|
| 1 | 0 | 20 |
| 2 | 1 | 50 |
| 3 | 2 | 80 |
| 4 | 3 | 110 |
| 5 | 4 | 140 |

**Five stars, evenly spaced, from one block.** `repeat` cannot do that.

> **`for index from 0 to 4` runs FIVE times.** It counts 0, 1, 2, 3, 4. Starting at zero catches everybody
> once. If you get one more than you expected, this is why.

## Part B: modulo, the remainder block

The **Math** category has a block: `remainder of ( ) ÷ ( )`.

It gives you **what is left over** after dividing.

| Expression | Answer | Why |
|------------|--------|-----|
| remainder of 7 ÷ 3 | **1** | 3 goes into 7 twice with 1 left over |
| remainder of 12 ÷ 5 | **2** | 5 goes into 12 twice with 2 left over |
| remainder of 10 ÷ 5 | **0** | 5 goes into 10 exactly, nothing left |
| remainder of 9 ÷ 3 | **0** | Divides evenly |

### The pattern that makes it useful

> **`remainder of N ÷ 5 = 0` is true exactly when N is a multiple of 5.**

So it is true at 0, 5, 10, 15, 20. **That is how you do "every fifth one."**

| You want | Condition |
|----------|-----------|
| Every 2nd (even numbers) | remainder of N ÷ 2 = 0 |
| Every 3rd | remainder of N ÷ 3 = 0 |
| Every 5th | remainder of N ÷ 5 = 0 |
| Every 10th | remainder of N ÷ 10 = 0 |

### Example problems

**1.** What is `remainder of 14 ÷ 4`?
**2.** For which of 1 to 10 is `remainder of N ÷ 3 = 0` true?
**3.** You want a bonus every 4th star. What is the condition?
**4.** What does `remainder of index ÷ 2 = 0` tell you about `index`?

<details>
<summary>Answers</summary>

**1. 2.** 4 goes into 14 three times (12) with 2 left over.
**2. 3, 6, and 9.** The multiples of 3.
**3.** `remainder of score ÷ 4 = 0`
**4.** It is **even**. Every second one.

</details>

## Part C: build. Steps 6 to 9

### Step 6: a row instead of a scatter

15. Replace your `repeat 10 times` with `for index from 0 to 4` (**Loops**)
16. Set the star's x to `20 + index * 30` (**Math**, the multiply and add blocks)

**Test:** a row of five evenly spaced stars.

### Step 7: use the count for speed

17. Set the star's vy to `30 + index * 10`

**Test:** each star in the row falls a little faster than the one before it.

### Step 8: a bonus star, using modulo

18. Make a variable `starCount`, `set starCount to 0` at the start
19. Inside your `for` loop, add `change starCount by 1`
20. Add an `if` inside the loop: `if remainder of starCount ÷ 5 = 0 then`
21. Inside that `if`, set the star to a different color and `set star vy to 70`

**Test:** every fifth star spawned is the fast one.

### Step 9: bonus points for catching it

22. In your overlap block, add an `if`: `if remainder of score ÷ 5 = 0 then` `change score by 2`

**Test:** every fifth point is worth extra.

### Goal for today

- [ ] A row of stars placed with `for index`
- [ ] Something in that row that uses `index` (speed or spacing)
- [ ] A `remainder` block doing "every Nth"
- [ ] You can explain what `remainder of 12 ÷ 5` gives and why

---

# DAY 3 (Wednesday): forever, and nested loops

### Step 10: waves

23. **Loops**: drag out a `forever` block
24. Put your whole `for index` row **inside** it
25. Add `pause 2000` inside the `forever`, **after** the `for` loop

```
forever:
    for index from 0 to 4:
        set star to sprite of kind Food
        set star position to x (20 + index * 30), y 0
        set star vy to (30 + index * 10)
    pause 2000
```

**Read it from the inside out:** the `for` makes a row, the `pause` waits two seconds, the `forever` does it
all again.

> A loop inside a loop is a **nested loop**. This is how nearly every game you have played spawns enemies.

### Step 11: missing a star

26. `set life to 3` at the start (**Info**)
27. In a `forever` block: `if star y > 120 then` `destroy star` and `change life by -1`

**Test:** let a star fall past you. You lose a life.

### Step 12: clean up

28. Make sure **every** star gets destroyed: caught ones in the overlap, missed ones when they pass the
    bottom

**Test:** play for a full minute. **Does it slow down?** If it does, stars are piling up. Find the one that
never gets destroyed.

### Goal for today

- [ ] Waves that keep coming
- [ ] A nested loop
- [ ] Missing a star costs a life
- [ ] Still fast after a minute of play

---

# DAY 4 (Thursday): while, for real

Now you use Monday's lesson.

### Step 13: the countdown

29. Make a variable `timer`, `set timer to 30`
30. In a separate `forever`, or in `on start` after your setup, add:

```
while timer > 0:
    pause 1000
    change timer by -1
game over WIN
```

31. Add `set score to timer` inside the loop if you want it visible

**Test:** the game ends after 30 seconds.

> **Check yourself:** does something inside that loop change `timer`? If not, you just froze your game.

### Step 14: pick one more

Add **one** of these:

**A. Difficulty ramp.** A `speed` variable that grows each wave.
```
set speed to 30
forever:
    for index from 0 to 4:
        ... set star vy to (speed + index * 10)
    change speed by 5
    pause 2000
```

**B. Levels.**
```
repeat 3 times:
    for index from 0 to 4:
        ... spawn a row
    pause 2000
splash "LEVEL UP"
```

**C. A `while` that waits for a condition.**
```
while score < 10:
    pause 500
splash "HALFWAY"
```

### Goal for today

- [ ] A working `while` loop that ends or changes something
- [ ] The game **ends**, win or lose
- [ ] One of A, B, or C added

---

# DAY 5 (Friday): finish and show

Get it working end to end, then play each other's.

### Final checklist

- [ ] A player you move along the bottom
- [ ] Stars spawned with a **loop**, not placed by hand
- [ ] A row positioned with **`for index`**, using the count for something
- [ ] A **`remainder`** block doing "every Nth"
- [ ] A **`forever`** loop with a **nested** loop inside it
- [ ] A **`while`** loop that does something real
- [ ] Catching adds score and destroys the star
- [ ] Missing costs a life and destroys the star
- [ ] The game **ends**
- [ ] Still fast after a minute
- [ ] Share link posted on Google Classroom

---

## The four loops, side by side

| Loop | Use it when |
|------|-------------|
| `repeat 10 times` | You know exactly how many times, and you do not care which pass you are on |
| `for index from 0 to 9` | You know how many times **and** you need the count: spacing, speed, color, numbering |
| `while <condition>` | You do not know how many times, only when to stop |
| `forever` | It should never stop while the game runs |

---

## Bugs you will actually hit

| What happens | Why | Fix |
|--------------|-----|-----|
| The game freezes | An infinite `while`: nothing inside changes its condition | Make something inside move it toward stopping |
| A `while` never runs at all | The condition was already false on the first check | `while` checks **before** the first pass |
| One extra star | `for index from 0 to 4` runs five times | Count 0, 1, 2, 3, 4. That is five |
| All stars in the same spot | The position is the same every pass | Use `index` or `pick random` |
| All stars at once | `repeat` runs instantly | Put a `pause` inside, or use waves |
| The game gets slower | Stars never destroyed, hundreds piling up | Destroy on catch **and** when they pass the bottom |
| Score jumps by a lot | No destroy, so it overlaps many times | Destroy the star inside the overlap |
| The bonus never fires | Your remainder condition is wrong | `remainder of N ÷ 5 = 0`, not `= 5` |

---

## If You Finish Early

1. **Nested `for` inside a `for`** to make a grid of stars instead of a row
2. A **bad** sprite in the same wave that costs a life if you catch it
3. Use `remainder of index ÷ 2 = 0` to make every other star a different color
4. A wave that spawns **diagonally** (use `index` for both x and y)
5. Go back to your **Maze Collector** and place its items with a loop instead of by hand
