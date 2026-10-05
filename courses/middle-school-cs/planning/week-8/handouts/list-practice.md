# Lists That Change

**Middle School CS | Week 8, Monday to Tuesday**

Last week your lists mostly sat there. **This week they change while the game runs.**

---

## The four blocks that change a list

From the **Arrays** drawer:

| Block | What it does |
|---|---|
| `add value to end of list` | Puts a new item on the end. The list gets longer |
| `remove value at index` | Takes one out. **Everything after it shifts down** |
| `remove last value from list` | Takes the last one off and hands it to you |
| `insert at index value` | Puts one in the middle. Everything after it shifts up |

**The shifting is the thing people forget.** Remove item 2 from a list of 5 and what used to be item 3
is now item 2.

---

## Practice problems

**Work them on paper first.** Then build them and check.

### Problem 1

```
  set names to array of  "Ana"  "Ben"  "Cal"  "Dee"
  remove value at 1
```

**1.** What is in the list now?

**2.** What is at index 1 now?

**3.** What is `length of names` now?

### Problem 2

```
  set scores to array of  10  20  30
  add 40 to end of scores
  remove value at 0
```

**4.** What is in the list?

**5.** What is at index 0?

### Problem 3

```
  set stuff to array of  "a"  "b"  "c"
  for index from 0 to (length of stuff) - 1
      remove value at index
```

**6.** Build this and run it. **It breaks. Why?**

**7.** What is the list left holding?

> **This is a real bug that professionals write.** Removing items from a list while looping through it
> changes the length underneath you. Say why in your own words.

**8.** How would you empty a list safely? There is more than one right answer.

### Problem 4

```
  set bag to array of  "red"  "blue"  "green"
  set pick to  bag get value at (pick random 0 to (length of bag) - 1)
```

**9.** Add **one block** so the same color can never be picked twice.

**10.** After three picks, what is `length of bag`?

**11.** What happens on the fourth pick? **What should the program do about it?**

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

## Words

| Term | Meaning |
|---|---|
| **Add / append** | Put a new item on the end |
| **Remove** | Take an item out. Everything after it shifts |
| **Insert** | Put an item into the middle |
| **Length** | How many items it holds **right now** |
| **Empty list** | A list with zero items. Still a real list |
| **Mutate** | To change a list after it was made |

---

## Grading

Problems 6, 7 and 8 are worth the most. **The bug in Problem 3 is the actual lesson** of the week.
