# Starter Code: Adding a List Together

**Middle School CS | Monday** | Follow along. We build this as a class.

You are not writing this from scratch. **You get working code, and we add a list to it together.**

---

## Step 1: Build this. It already works.

Make a new MakeCode Arcade project and build this. It is all blocks you have used.

```
  on start
      set mySprite to sprite of kind Player
      set mySprite position to x 80 y 100
      set score to 0

  on A button pressed
      set target to sprite of kind Enemy
      set target position to x 20 y 40
      set target say "red"
```

Run it. **Press A a few times.**

### What is wrong with it

Every enemy is in the same place and says the same thing. To get four different ones, right now you would
have to write **four separate copies** of that code with different numbers in each.

> **Any time you are about to copy and paste code and change one number, something is wrong.**
> That is what today fixes.

---

## Step 2: The problem, said clearly

You want four enemies that each say a different color.

**With what you have now:** four `on A button pressed` blocks? No. Four variables, `color1`, `color2`,
`color3`, `color4`, and a pile of `if` statements? That works, and it is horrible, and it breaks the
moment you want a fifth.

**What you actually want:** one place that holds all four colors, in order, that you can reach into.

That is a **list**.

---

## Step 3: Make the list (together)

From the **Arrays** drawer:

```
  on start
      set colors to array of  "red"  "blue"  "green"  "yellow"
```

Click the **+** to add slots, the **-** to remove them.

**Right now, write the positions under each one:**

```
      "red"   "blue"   "green"   "yellow"
        0       1        2         3
```

### The one thing to understand

**`get value at 0` gives you the FIRST item.**

Not the second. Everybody trips on this, and here is why it is that way:

> **The number is not "which one." It is "how far from the start."**
> The first item is **zero steps** from the start. The second is one step.

| Ask for | You get |
|---|---|
| 0 | the 1st |
| 1 | the 2nd |
| 2 | the 3rd |
| 3 | the 4th |

---

## Step 4: Pull one out (together)

Change the A button code:

```
  on A button pressed
      set target to sprite of kind Enemy
      set target position to x 20 y 40
      set target say   colors  get value at  0
```

Run it. It says "red".

**Now change the 0 to a 2.** Run it again. It says "green."

**Change it to 4.** It breaks, because there is no item 4. There are only 0, 1, 2, 3.

---

## Step 5: Make it different every time (together)

Instead of a fixed number, use a random one:

```
  on A button pressed
      set target to sprite of kind Enemy
      set target position to x (pick random 10 to 150) y 40
      set target say   colors  get value at  (pick random 0 to 3)
```

**Now every enemy is different**, and you wrote it once.

### The better version

`pick random 0 to 3` has the 3 hard-coded. Add a color to the list and the new one never gets picked.

```
      (pick random 0 to (length of colors) - 1)
```

**`length of colors` is how many items are in it right now.** So this keeps working no matter how many
colors you add.

**Try it:** add two more colors to the list. Change nothing else. Run it. **They show up.**

> **That is the payoff.** Add to the list, the program handles it. That is why lists exist.

---

## Step 6: Why `length - 1`?

Because a list of **4** has positions **0, 1, 2, 3**.

| Length | Valid positions | Last one |
|---|---|---|
| 4 | 0, 1, 2, 3 | 3 |
| 6 | 0 through 5 | 5 |
| 10 | 0 through 9 | 9 |

**`length` is always one bigger than the last valid position.** Ask for the item at `length` and it
breaks, because that item does not exist.

---

## Your turn, before the bell

Pick one. **You have the code in front of you.**

| | Do |
|---|---|
| **A** | Add a second list of **names**. Make each enemy say a name instead of a color |
| **B** | Make a list of **numbers** and use it for the y position, so enemies appear at set heights |
| **C** | Use `add value to end` so that pressing B adds a new color to the list while the game runs |
| **D** | Two lists, colors and names, same positions. Pick one random index and use it for **both**, so "red" always pairs with the same name |

**D is the hard one** and it is genuinely how real programs store related information.

---

## If it breaks

| What you see | What it is |
|---|---|
| Always the wrong item, off by one | You used 1 for the first item. **First is 0** |
| Crashes when it runs | You asked for a position that does not exist. Check `length - 1` |
| Every enemy is identical | You left a fixed number where the random should be |
| Nothing says anything | The list is empty, or the wrong list is plugged in |

---

## Words for today

| Word | Means |
|---|---|
| **List (array)** | A variable that holds many values, in order |
| **Item / element** | One value inside it |
| **Index** | The position number. **Starts at 0** |
| **Length** | How many items it holds right now |
| **Off-by-one** | The bug where you are one position off. The most common bug in programming, in every language there is |
