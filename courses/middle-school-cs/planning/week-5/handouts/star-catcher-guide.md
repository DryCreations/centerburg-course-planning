# Star Catcher: The Loops Project

**Middle School CS, Week 5.** A brand new project, built to teach one thing: **loops.**

**What you are making:** stars fall from the top of the screen. You move left and right at the bottom and
catch them. Miss too many and the game ends.

**Were you absent? This page has every step.**

---

## What a loop is

A loop is a block that **runs the code inside it more than once** so you do not have to copy and paste.

You already know what this feels like. If you wanted 10 stars in your maze last week, you dragged out 10
blocks. That is 10 chances to make a mistake, and if you want 20 stars you do it all again.

**A loop is the fix.** Write it once, tell it how many times.

### The four loops you will use

| Block | Where it is | What it does |
|-------|-------------|--------------|
| **repeat 4 times** | Loops | Runs the inside exactly that many times, then stops |
| **for index from 0 to 4** | Loops | Same, but it counts, and you can use the count inside |
| **while** | Loops | Keeps going as long as a condition is true |
| **forever** | Basic / Loops | Never stops, for the whole game |

---

## Day 1 (Mon): repeat

### Step 1: Make a player

- **Sprites** category: `set mySprite to sprite of kind Player`, draw a small paddle or basket
- **Controller**: `move mySprite with buttons`
- **Sprites**: `set mySprite y to 110` so it sits near the bottom

Run it. You should slide left and right along the bottom.

### Step 2: Make one star

- `set star to projectile from side` will not work here. Use **Sprites**: `set star to sprite of kind Food`
- Draw a small star
- `set star position to x 20, y 0`
- **Sprites**: `set star vy to 40` so it falls

Run it. **One star falls.** Once.

### Step 3: Now make ten, the wrong way

Do not actually do this. Just look at what it would take: ten copies of those three blocks. Thirty blocks.

### Step 4: Make ten, the right way

Drag a `repeat 10 times` block around your star-making code:

```
repeat 10 times:
    set star to sprite of kind Food
    set star position to x (pick random 10 to 150), y 0
    set star vy to 40
```

**Ten stars, three blocks.** That is the entire point of a loop.

> **The bug you will hit:** all ten stars appear at once, in the same instant. That is correct. `repeat` runs
> as fast as the computer can go. We fix the timing tomorrow.

---

## Day 2 (Tue): for index, and using the count

`repeat` runs code a number of times. **`for index` does the same thing but tells you which pass you are on**,
and that number is enormously useful.

```
for index from 0 to 4:
    set star to sprite of kind Food
    set star position to x (20 + index * 30), y 0
```

Trace it out loud:

| Pass | index | x works out to |
|------|-------|----------------|
| 1 | 0 | 20 |
| 2 | 1 | 50 |
| 3 | 2 | 80 |
| 4 | 3 | 110 |
| 5 | 4 | 140 |

**Five stars, evenly spaced across the screen, from one block.** You could not do that with `repeat`, because
`repeat` does not know which pass it is on.

> **`for index from 0 to 4` runs FIVE times, not four.** It counts 0, 1, 2, 3, 4. Starting at zero catches
> everybody once.

### Your task today

Make a **row** of stars evenly spaced across the top using `for index`. Then try:

- Change the spacing by changing the `* 30`
- Make a row that goes down the side instead of across the top
- Use `index` to make each star fall at a different speed: `set star vy to (30 + index * 10)`

---

## Day 3 (Wed): forever, and waves

`forever` runs for the whole game. Put it around anything that should keep happening.

```
forever:
    for index from 0 to 4:
        set star to sprite of kind Food
        set star position to x (20 + index * 30), y 0
        set star vy to 40
    pause 2000
```

**Read that from the inside out:**

- The `for` makes a row of 5 stars
- The `pause 2000` waits 2 seconds
- The `forever` does all of it again, and again, and again

**That is a wave.** A loop inside a loop is called a **nested loop**, and it is how almost every game you
have played spawns enemies.

### Catching them

```
on overlap mySprite with Food:
    destroy otherSprite
    change score by 1
```

### Missing them

```
forever:
    if star y > 120 then
        destroy star
        change life by -1
```

Better: use the **Sprites** setting `set star auto destroy ON` and the `on destroyed` event, but the `if`
version above is fine and clearer.

---

## Day 4 (Thu): while, and the countdown

`while` keeps looping **as long as a condition is true.** It checks before every pass.

```
set timer to 30
while timer > 0:
    pause 1000
    change timer by -1
    set score to timer
game over WIN
```

**The danger with `while`:** if the condition never becomes false, it loops forever and the game freezes.

```
set timer to 30
while timer > 0:
    pause 1000
```

That one never ends, because nothing inside ever changes `timer`. **Something inside a while loop has to move
it toward stopping.**

### Your task today

Add **one** of these:

1. A **countdown timer** that ends the game when it hits zero
2. A **difficulty ramp**: each wave falls faster than the last, using a variable that grows
3. **Levels**: `repeat 3 times` around your wave, then a splash saying LEVEL UP

---

## Day 5 (Fri): finish and show

Get it working end to end, then play each other's.

---

## The four loops, side by side

| Loop | Use it when |
|------|-------------|
| `repeat 10 times` | You know exactly how many times, and you do not care which pass you are on |
| `for index from 0 to 9` | You know how many times **and** you need the count, for spacing, speed, or numbering |
| `while <condition>` | You do not know how many times, you only know when to stop |
| `forever` | It should never stop while the game runs |

---

## Bugs you will actually hit

| What happens | Why | Fix |
|--------------|-----|-----|
| All the stars appear in the same spot | You set the position to the same value every pass | Use `pick random` or use `index` |
| All the stars appear at once | `repeat` runs instantly | Put a `pause` inside the loop |
| The game freezes | A `while` whose condition never becomes false | Make sure something inside changes it |
| Only 4 stars when you asked `for index from 0 to 4` | You got 5 and counted wrong | It counts 0,1,2,3,4. That is five |
| The game gets slower and slower | Stars are never destroyed, so hundreds pile up | Destroy them on overlap and when they go off screen |
| Score goes up by more than 1 per star | No destroy block, so it overlaps many times | Destroy the star inside the overlap |

---

## If You Finish Early

1. **Nested loops:** a `for` inside a `for` to make a grid of stars instead of a row
2. A **bad** sprite that costs a life if you catch it, spawned in the same wave loop
3. Use `index` to make every star in a wave a different color
4. A wave that spawns in a **diagonal** line instead of a row
5. Rewrite your Maze Collector from last week to place its items with a loop instead of by hand
