# Bell Ringer: Where Is It?

**Middle School CS | Week 8, Thursday**

Yesterday you walked two lists together and pulled out the matches. **Today: one list, and a question.**

> **Is this thing in my list, and if so, where?**

---

## The problem

```
  set bag to array of  "rope"  "key"  "apple"  "map"
```

**Write a loop that finds where `"key"` is.** When it finds it, the loop should give you back **1**,
because `"key"` is at index 1.

**Then make it work when the thing is not there at all.** Looking for `"sword"` should give you back
**−1**.

---

## Why −1

**You cannot give back 0 for "not found."** Zero is a real index: it is the first item. **−1 is never a
real index**, so it is a safe way to say "it is not in here."

**Every programming language does it this way.** Now you know why.

---

## Then

**Look in the Arrays drawer for a block called `index of`.** If it is there, **you just wrote it
yourself**, and it gives back −1 for exactly the same reason.

---

## Why you will use this in your project

| You want to | You need this |
|---|---|
| Check whether the player already picked this up | Is it in the list? |
| Not let them collect the same thing twice | Is it in the list? |
| Find which enemy got hit | Where in the list is it? |
| Remove a specific item, not just the last one | **Where** is it, so you know which index to remove |

**That last one is the real payoff.** `remove value at index` needs an index, and until today you had no
way to find one.
