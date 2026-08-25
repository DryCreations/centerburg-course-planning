# Week 2: Build a Real Arcade Game

**Course:** Middle School CS, **Assigned:** Tue Aug 26 (Day 05), **Due:** Fri Aug 28 (Day 08)
**Category:** Projects + Labs, **Points:** 50, **Late:** accepted. Ask me to reopen it if submissions have closed.

---

## What This Is

Last week you made a card in MakeCode Arcade where things moved around. This week you build a game someone can
actually **play, win, and lose.** Same tool, more depth. You already know sprites, events, position, and
velocity. This week you add a **score, a way to win, and a way to lose,** and you keep a log of the bugs you
fixed on the way.

You build it a piece at a time, one new piece each day. If you use class time, you finish in class.

---

## Pick Your Game

Both use the exact same skills. Pick the one that sounds more fun to you.

- **Catch it.** A player at the bottom moves left and right. Good things fall from the top. Catch them for
  points. Miss too many and the game is over.
- **Dodge it.** A player moves around the screen. Bad things fly across using velocity. Touch one and you lose
  a life. Survive long enough, or reach a score, and you win.

You may also invent your own, as long as it has everything on the checklist below. Check the idea with me first.

---

## Build It a Piece at a Time

### Part A: Movement and things that move on their own (Day 05, 15 pts)

| # | Requirement |
|---|-------------|
| 1 | A **player sprite** you control with the buttons (set its position or its velocity from button events) |
| 2 | At least one **other sprite** that moves on its own using **velocity** (vx, vy), not a forever loop |
| 3 | The moving sprite starts from somewhere sensible (top of the screen, or an edge) |
| 4 | It runs without errors |

### Part B: Score and collisions (Day 06, 15 pts)

| # | Requirement |
|---|-------------|
| 1 | A **score** variable, set to 0 at the start |
| 2 | An **on sprite overlap** event: when the player touches the right sprite, the score changes |
| 3 | The touched sprite is **destroyed or reset** so it does not score twice |
| 4 | A new one appears, so the game keeps going |

### Part C: Winning, losing, and one bug you fixed (Day 07, 15 pts)

| # | Requirement |
|---|-------------|
| 1 | **Lives** (start with 3) or a timer, so the player can lose |
| 2 | A **conditional** that ends or changes the game: if score reaches a number, you win; if lives hit 0, game over |
| 3 | A short **debug log**: one bug you hit, what you thought was wrong, the one thing you changed, and what happened |
| 4 | The game plays start to finish: you can win it and you can lose it |

### Part D: Explain it (Day 08, 5 pts)

| # | Requirement |
|---|-------------|
| 1 | In your own words: what does your **score variable** do? |
| 2 | In your own words: what does your **conditional** do, and when does it run? |
| 3 | Project link shared and submitted on Classroom |

Part D is the one that matters most. If you cannot explain your own game, it does not count yet. That is true
whether a block came from a friend, the internet, or an AI. Ask me instead. That always works.

---

## Turning It In

In Arcade, share your project and copy the link. Submit the link on Classroom. Nothing gets downloaded. As long
as you are logged into your Chrome profile at your seat, your work stays where you left it.

## The Debug Log

Keep it as you go, not at the end. A log with no failures in it is not a good log. **The failures are the
content.** One line per attempt:

> Tried X. Expected Y. Got Z. Changed one thing: ___. Now it does ___.

---

## Submission Checklist

- [ ] Player sprite I control
- [ ] A sprite that moves on its own with velocity
- [ ] A score variable that changes on overlap
- [ ] Lives or a timer, so I can lose
- [ ] A conditional that wins or ends the game
- [ ] A debug log with at least one real bug in it
- [ ] Explanations of my variable and my conditional
- [ ] Project link submitted on Classroom

## Grading

Uses the class project rubric: *it works*, *you can explain it*, *you kept going*, *finished and turned in
right*. Full rubric: `./rubrics/course-rubric.md`.

**Remember: you can redo any project.** If it did not go well, come talk to me, fix it, and turn it in again.
