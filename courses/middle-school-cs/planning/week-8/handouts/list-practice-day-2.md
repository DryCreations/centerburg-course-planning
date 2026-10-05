# Lists That Change, Part 2

**Middle School CS | Week 8, Tuesday**

Yesterday you removed one item and watched the rest shift. Today the list changes **while a loop is
running over it**, which is where it gets interesting.

Questions continue from yesterday's worksheet. **Start at 9.**

---

## Problem 3: the bug

```
  set stuff to array of  "a"  "b"  "c"
  for index from 0 to (length of stuff) - 1
      remove value at index
```

**9.** Build this and run it. **It does not empty the list. Why?**

**10.** What is the list left holding?

**11.** How would you empty a list safely? There is more than one right answer.

> **This is a real bug that professionals write.** Removing items from a list while looping through it
> changes the length underneath you. Say why in your own words.

---

## Problem 4: the bag

```
  set bag to array of  "red"  "blue"  "green"
  set pick to  bag get value at (pick random 0 to (length of bag) - 1)
```

**12.** Add **one block** so the same color can never be picked twice.

**13.** After two picks, what is `length of bag`?

**14.** What happens on the fourth pick? **What should the program do about it?**

---

## Problem 5: insert

```
  set queue to array of  "Ana"  "Ben"  "Cal"
  insert at 1 value "Zoe"
```

**15.** What is in the list, in order?

**16.** Where is "Cal" now?

---

## Problem 6: sprites are a list

`sprites of kind Enemy` hands you a **live list** of every enemy on screen right now.

**17.** Write a loop that makes every enemy on screen move faster. Which loop block did you use, and why
not `forever`?

**18.** An enemy gets destroyed halfway through that loop. What could go wrong?

---

## Build it: the collection game

**One sprite that collects things. The list is what it has collected.**

Required:

1. A list that starts **empty**
2. Something the player can pick up, with **at least four kinds**
3. When the player overlaps one, **add it to the list** and destroy the sprite
4. A display showing **how many** things are in the list
5. **A win condition** based on the list: all four kinds collected, or the list reaching a certain length

### Then one of these

| | |
|---|---|
| **A** | Something that **removes** an item from the list when you touch it. A thief, a trap, a timer |
| **B** | Check whether a specific thing is **already in the list**, and do something different if it is |
| **C** | Show the list contents on screen, not just the count |
| **D** | A limit: the list can hold only five things, and picking up a sixth refuses or drops the oldest |

---

## When it breaks

| What you see | What it probably is |
|---|---|
| The count skips numbers | You are adding more than once per overlap. Destroy the sprite immediately |
| Removing an item removes the wrong one | Everything after it shifted. Re-check your index |
| The program stops partway through a loop | You changed the list's length while looping over it |
| The count never goes up | You created a new list instead of adding to the existing one |
| It says the list is empty when it is not | You are checking a different list than the one you filled |

---

## Grading

Questions 9, 10 and 11 are worth the most. **The bug in Problem 3 is the actual lesson** of the week.
The collection game is graded on the five required items plus the one you chose.
