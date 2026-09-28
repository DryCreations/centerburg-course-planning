# Lists

**Middle School CS | Week 7**

A variable holds **one** thing.

```
   score  =  12
```

A **list** holds **many** things, in order.

```
   colors  =  [ "red", "blue", "green" ]
                  0       1        2
```

Those little numbers underneath are the whole trick. Keep reading.

---

## Day 1 (Tuesday): make one and use it

In MakeCode, lists live under **Arrays** in the block drawer.

### Make a list

1. Grab `set [list] to array of [ ] [ ]`
2. Rename it something real: `colors`, `names`, `scores`
3. Click the **+** to add more slots, the **-** to remove them
4. Fill it in

### Get something out of it

```
  set myColor to   colors  get value at  0
```

**`get value at 0` gives you the FIRST item.** Not the second. This trips up everybody, every year, and
here is why it works that way:

> **The number is not "which one." It is "how far from the start."** The first item is zero steps from
> the start. The second is one step. That is what the number means, in every programming language there
> is.

| Position number | Which item |
|---|---|
| 0 | the 1st |
| 1 | the 2nd |
| 2 | the 3rd |

### Add and remove

| Block | What it does |
|---|---|
| `add value to end` | Puts a new item on the end |
| `remove value at` | Takes one out by position |
| `insert at` | Puts one in the middle, everything after shifts |
| `length of` | **How many items are in it right now** |

### Try it

Make a list of 4 colors. Make a sprite. When A is pressed, set the sprite's color to a random item from
the list. You need `pick random` and `length of`, and step 3 below tells you exactly how.

---

## Day 2 (Wednesday): length, and looping through it

### The problem

You could get item 0, then item 1, then item 2, one block at a time. **That is four blocks for a four
item list, and it breaks the moment the list changes size.**

### The fix

```
  for index from 0 to (length of colors) - 1
      set mySprite to sprite of kind Enemy
      set mySprite color to   colors  get value at  index
```

**Read that out loud.** The index counts up, and each time around, it pulls a different item.

### Why `length - 1`

Because the positions are 0, 1, 2, 3 for a list of **4** things.

| Length | Valid positions | Last position |
|---|---|---|
| 4 | 0, 1, 2, 3 | 3 |
| 6 | 0 through 5 | 5 |
| 10 | 0 through 9 | 9 |

**`length of list` is always one bigger than the last valid position.** Ask for the item at `length` and
the program errors out, because that item does not exist.

### The other way

MakeCode also has `for element value of list`, which hands you each item directly without any numbers.
**Use it when you do not care about position**, which is most of the time. Use `for index` when you need
to know *where* you are.

---

## Day 3 (Thursday): actually do something with it

**Pick one.** Do not try all four.

### A. Random, without repeats

```
  set word to  words  get value at  (pick random 0 to (length of words) - 1)
  remove value at  that same index
```

Now it cannot pick the same one twice, because you took it out. **This is how shuffle works.**

### B. A sprite army from a list

Make a list of positions or colors. Loop through it and make one sprite per item. **Add an item to the
list, and a new sprite appears without touching any other code.** That is the payoff.

### C. Many scores instead of one

A list of scores, one per player or one per round. Then:
- `length of` tells you how many rounds
- Loop and add them up for a total
- Loop and compare to find the highest

### D. A queue of waves

A list holding how many enemies each wave should have: `[3, 5, 8, 12]`. Loop through it. Each time
around is a harder wave, and changing the difficulty means editing numbers in a list instead of
rewriting your code.

---

## The four things that go wrong

| What you see | What it is |
|---|---|
| Getting the wrong item, always one off | You used 1 for the first item. **First is 0** |
| The program crashes partway through the loop | You went to `length` instead of `length - 1` |
| Only one item ever comes out | You used a fixed number where `index` should go |
| Nothing happens at all | The list is empty. Check you actually added items |

---

## Vocabulary

| Word | Means |
|---|---|
| **List (array)** | A variable that holds many values, in order |
| **Item / element** | One value inside the list |
| **Index** | The position number of an item. **Starts at 0** |
| **Length** | How many items the list currently holds |
| **Iterate** | Go through a list one item at a time |
| **Off-by-one** | The bug where you are one position off. The most common bug in programming, in every language |

---

## Why this matters

**Every app you use is full of lists.** Your contacts, a playlist, search results, the inventory in a
game, the high score table. None of those are one variable per item, because nobody knows in advance how
many there will be.

A list is what lets a program work for 3 things or 3,000 without changing the code.

---

## If you finish early

1. **Sort a list** without a sort block. Find the smallest, move it, repeat. This is a real algorithm and
   it is harder than it sounds
2. **Search a list** for a value and report which position it is in, or that it is not there
3. **Two lists at once:** names in one, scores in another, same positions. Print "Name: score" for each
4. **A list of lists.** Ask me first. It is genuinely the next level
