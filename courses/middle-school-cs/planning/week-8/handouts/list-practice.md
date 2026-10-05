# Lists That Change

**Middle School CS | Week 8, Monday**

Last week your lists mostly sat there. **This week they change while the game runs.**

Short today on purpose. Two problems, then we start planning your own game.

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

## Two problems

**Work them on paper first.** Then build them and check.

### Problem 1

```
  set names to array of  "Ana"  "Ben"  "Cal"  "Dee"
  remove value at 1
```

**1.** What is in the list now, in order?

**2.** What is at index 1 now?

**3.** What is `length of names` now?

**4.** Nothing was removed from the end. Why did the end of the list change anyway?

### Problem 2

```
  set scores to array of  10  20  30
  add 40 to end of scores
  remove value at 0
```

**5.** What is in the list?

**6.** What is at index 0?

**7.** What is the highest index you can ask for without an error?

---

## Then: your own game

The last week of the quarter is **your own project.** Start the planning worksheet today.
Nothing gets built until the plan is approved.

**8.** In one sentence, what is your game? Say what the player does, not what it looks like.

---

## Words

| Term | Meaning |
|---|---|
| **Add / append** | Put a new item on the end |
| **Remove** | Take an item out. Everything after it shifts |
| **Insert** | Put an item into the middle |
| **Length** | How many items it holds **right now** |
| **Index** | The position of an item. The first one is 0 |
| **Mutate** | To change a list after it was made |

---

## Grading

Questions 4 and 7 are worth the most. Both are about the shifting, which is the whole point of today.
