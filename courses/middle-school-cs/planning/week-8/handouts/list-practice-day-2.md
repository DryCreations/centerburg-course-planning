# Lists That Change, Part 2

**Middle School CS | Week 8, Tuesday**

Yesterday you removed one item and watched the rest shift. Today the list changes **while a loop is
running over it**, which is where it gets interesting.

Questions continue from yesterday's worksheet. **Start at 9.**

**First half of the period is these problems. Second half is planning your project.** Get as far as you
can on the problems; they are not homework-sized.

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

## When it breaks

| What you see | What it probably is |
|---|---|
| The length jumps by more than one | You are adding more than once. Check what triggers the add |
| Removing an item removes the wrong one | Everything after it shifted. Re-check your index |
| The program stops partway through a loop | You changed the list's length while looping over it |
| The length never goes up | You created a new list instead of adding to the existing one |
| It says the list is empty when it is not | You are checking a different list than the one you filled |

---

## Then: back to your plan

**The rest of the period is your project plan.** You have everything you need for Part 1 and Part 2 of
`project-plan.md` now: you know what a list can do, and you know which loop blocks exist.

**19.** Look at your six requirements. **Which one of them is a list?** Say what it holds, and say what
the game reads it for.

**20.** Which one are you least sure you can build? That is the one to ask about today.

---

## Grading

Questions 9, 10 and 11 are worth the most. **The bug in Problem 3 is the actual lesson** of the week.

Questions 19 and 20 are graded as part of your plan, not as practice.
