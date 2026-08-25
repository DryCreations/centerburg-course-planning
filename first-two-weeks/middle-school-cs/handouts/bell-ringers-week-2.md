# Middle School CS: Week 2 Bell Ringers

**The daily routine.** Every class starts with one of these on the board. Students read the code and predict
what it does, or what a variable equals at the end. Give them two minutes, then go over it together out loud.
It is a warm-up and a daily dose of **reading** code, which is half of writing it.

The code is written the way the blocks read, top to bottom. Answers are for you, do not post them.

There are five here for four days, so you have a spare or a bonus.

---

## Bell Ringer 1 (Day 05): Which way does it go?

```
set player to a sprite at x = 80, y = 60
set player velocity: vx = 30, vy = 0
pause 2 seconds
```

**Ask:** Which direction does the player move, and roughly how far in x after 2 seconds?

**Answer:** Right, because vx is positive. About 60 pixels right (30 pixels per second times 2 seconds). vy is
0, so it does not move up or down. Point out: velocity keeps moving it with no loop needed.

---

## Bell Ringer 2 (Day 06): What is the score?

```
set score to 0
change score by 3
change score by 5
change score by -2
```

**Ask:** What is `score` at the end?

**Answer:** 6. (0, then 3, then 8, then 6.) Point out that `change by -2` subtracts.

---

## Bell Ringer 3 (Day 06 or 07): Count the button presses

```
set score to 0
on A button pressed:
    change score by 2
```

**Ask:** The player presses A four times. What is `score`?

**Answer:** 8. The event runs its code once per press: 2, 4, 6, 8. Point out: the code inside an event runs
every time the event happens, not just once.

---

## Bell Ringer 4 (Day 07): What happens at the end?

```
set lives to 3
on overlap of player and enemy:
    change lives by -1
    if lives <= 0:
        game over
```

**Ask:** The player runs into an enemy three times. Walk through what `lives` is each time, and what happens.

**Answer:** 2, then 1, then 0. On the third hit, `lives <= 0` is true, so the game ends. Point out the shape of
a conditional: *if this is true, do that.*

---

## Bell Ringer 5 (Day 08): Find the bug

```
forever:
    change score by 1
```

**Ask:** This was supposed to give a point when the player catches a coin. What does it actually do, and what
should it be instead?

**Answer:** The score goes up forever, as fast as the game runs, without anyone catching anything. A `forever`
loop repeats with no stopping. The point should be inside an **on overlap** event instead, so it only happens
when the player actually touches a coin. This is the single most common Arcade bug, and it is worth naming.

---

## Making Your Own

When you need more, keep the same shapes: a few variable changes and "what is it at the end," a sprite with a
velocity and "which way and how far," an event and "how many times does this run," or a small program with one
planted bug and "what does it really do." Reading code is the skill; keep them short.
