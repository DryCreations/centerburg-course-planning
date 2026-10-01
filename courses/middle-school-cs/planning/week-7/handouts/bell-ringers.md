# Week 7 Bell Ringers

**Middle School CS | Week 7** | Teacher reference

One question on the board as they come in. **Three to five minutes**, then go over it. **Not graded.**

Block language only.

---

## Thursday: a loop that runs once per sprite

```
BELL RINGER

  on start
      repeat 5 times
          set mySprite to sprite of kind Enemy

      set count to 0
      for element value of  sprites of kind Enemy
          change count by 1

What is count at the end?

Finished? Change ONE number so count ends at 8.
```

**Answer: 5.**

### Why this one

They have spent the week on lists where **they** decided how many items were in it. This is a list the
**game** built for them.

`sprites of kind Enemy` hands back **a list of every enemy currently on the screen.** The loop then runs
once per item in that list.

> **The number of sprites on the screen decides how many times the loop runs.** Nobody typed a 5 into
> the loop.

### What to draw out

Ask: **"Where did the 5 come from?"**

The answer is not "because it says repeat 5 times" at the top. It is that **the first loop made five
sprites, so the list has five things in it, so the second loop runs five times.** The two fives are
connected, and the second one was never typed.

### The follow-up worth asking

**"What if a sprite gets destroyed before the second loop runs?"**

Then the list is shorter and the loop runs fewer times. **The list is live.** It reflects what is
actually on the screen right now.

### Extension answer

Change `repeat 5 times` to `repeat 8 times`. **Changing the loop count does not work**, because the loop
count is not written down anywhere, and that is the entire point.

### If they ask about the two loop types

| Block | Use it when |
|---|---|
| `for element value of <list>` | You just want each item. **Most of the time** |
| `for index from 0 to (length of list) - 1` | You need to know **where** in the list you are |

---

## Recurring corrections

| What they say | What to say back |
|---|---|
| "The loop runs 5 times because it says 5" | "Where is the 5 in the second loop? It is not there" |
| Counts the sprites by hand | "What if there were 300? The loop does not care" |
| Confuses the two loops | "The first one makes them. The second one visits them" |
| `for index from 0 to 5` runs 5 times | "Count them out loud: zero, one, two, three, four, five" |
