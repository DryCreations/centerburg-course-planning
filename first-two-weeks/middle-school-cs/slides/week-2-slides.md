# Middle School CS: Week 2 Slides

Copy-paste ready. Each `---` is a new slide. Titles are the slide heading, bullets are the slide body. Keep
them sparse on screen and say the rest out loud. Order matches Days 05 to 08.

Show the actual block editor on the projector whenever a slide says **demo** — the slide sets it up, the live
build teaches it.

---

# DAY 05 — Things That Move On Their Own

---

## This week: build a real game

- Last week: a card where things moved
- This week: a game you can **play, win, and lose**
- Same tool. More depth.
- You already know: sprites, events, position, velocity

---

## Position vs. velocity

- **Position** = where a sprite is right now (x, y)
- **Velocity** = how fast it is moving, and which way (vx, vy)
- Set a velocity once and it keeps moving. No loop needed.

---

## Which way is which

- **vx** positive → moves right. Negative → left.
- **vy** positive → moves down. Negative → up.
- x = 0 is the left edge, y = 0 is the top

---

## Demo: make something fall

- Make a sprite at the top
- Set its velocity: vx = 0, vy = 40
- Watch it fall with no loop
- (bell ringer 1 is exactly this idea)

---

## Your turn — Part A

- A **player** sprite you move with the buttons
- One **other** sprite that moves on its own with velocity
- It runs with no errors
- Do not add score yet. That is tomorrow.

---

# DAY 06 — Score and Collisions

---

## A variable is a labeled box

- It holds a number
- **score** lives in a box. **lives** lives in a box.
- `set score to 0` at the start
- `change score by 1` when something happens

---

## The overlap event

- "When the player touches this sprite, do that"
- This is where the score changes
- **Not** in a forever loop (bell ringer 5 tomorrow shows why)

---

## Don't let it score twice

- When the player catches it: **destroy** that sprite
- Then make a new one, so the game keeps going
- One catch = one point

---

## Demo: catch = point

- On overlap of player and item:
  - change score by 1
  - destroy the item
  - spawn a new item at the top

---

## Make it different every time: pick random

- `pick random 10 to 150` for the new item's **x** → it falls somewhere new
- You can pick random for almost anything:
  - the **speed** it falls
  - **which** item appears
  - a **color**
- Random is what makes the game not boring on the second play

---

## Your turn — Part B

- A **score** variable, starts at 0
- An **on overlap** event that changes the score
- The caught sprite is destroyed, a new one appears

---

# DAY 07 — Winning, Losing, and Debugging

---

## A conditional decides

- Shape it out loud: **if this is true, do that**
- `if score >= 10: you win`
- `if lives <= 0: game over`
- A loop repeats. A conditional decides. Different jobs.

---

## Give the player a way to lose

- Start with **lives = 3**
- Lose a life when you miss, or touch a bad sprite
- When lives hit 0 → game over

---

## The most common bug in Arcade

- Score change inside a **forever** loop → counts forever
- It should be inside an **on overlap** event
- Fix: move the "change score" into the collision, not the loop

---

## Debugging: change ONE thing

- Write down what it does now
- Change **one** thing
- Run it. Write down what changed.
- A log full of failures is a good log. Failures are the content.

---

## Your turn — Part C

- Lives or a timer, so you can lose
- A conditional that wins or ends the game
- A short debug log: one real bug you fixed
- The game plays all the way through

---

# DAY 08 — Checkpoint and Showcase

---

## Checkpoint 1

- 10 quick questions, from the words on the wall
- Two "explain it" questions
- Not a trap. You can redo it if it goes badly.

---

## Before you submit

- You can win it AND lose it
- Score variable works
- You can **explain** your variable and your conditional
- Project link submitted on Classroom

---

## Showcase

- Play three games that are not yours
- For each: one thing that worked, one idea you would steal
- The best ideas in the room become next week's starting points
