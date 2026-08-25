# Middle School CS: Week 2 Talk Tracks

Teacher facing. Seventh and eighth graders together, no assumed experience. Keep every one of these under
eight minutes and **make something happen in the block editor** in each. The slides
(`slides/week-2-slides.md`) set each one up; the live build is what teaches.

> **Revised Tue Aug 25.** The class stayed in Arcade, so week 2 is one game built a piece a day. The hardware,
> digital-citizenship, and Sphero tracks moved to later units. Every class opens with a code-reading bell
> ringer from `handouts/bell-ringers-week-2.md`.

---

## Every day: the bell ringer

- One short snippet on the board. They read it and predict what it does or what a variable equals at the end.
- Two minutes, then go over it out loud. This is reading code, which is half of writing it.
- Five are written; use one a day and keep the spare.

---

## Tuesday: Set It Moving and Walk Away

- Frame the week: same tool as last week, more depth. A game you can play, win, and lose.
- Position is where a sprite is. Velocity is how fast and which way. The move that lands: **set a velocity once
  and it keeps moving, no loop needed.** Most of them were using a forever loop to move things last week.
- Demo it. Sprite at the top, vy = 40, let it fall. Then vx to send something sideways.
- Their job today is only the moving pieces: a player they control, one sprite moving on its own. Resist the
  ones who want to bolt on score before the movement is clean.

---

## Wednesday: A Box With a Name On It

- A variable is a named box that holds a number. Score lives in a box. Make it live on the projector: set to 0
  on start, change by 1 on overlap, watch the number tick in the simulator. Do it, then name it.
- The overlap event is where the score changes. Say plainly: **not** in a forever loop.
- The trap to show on purpose: an item that is not destroyed fires the overlap dozens of times and the score
  leaps by 20. Destroy the caught sprite, spawn a new one. That is the fix and the lesson.

---

## Thursday: Change One Thing

- A conditional decides. Say the shape out loud and leave it on the board: **if this is true, do that.** Loop
  repeats, conditional decides. They mix these up for weeks and that is normal.
- Give the game a way to lose: lives start at 3, game over at 0.
- Then break something on purpose: put the score change in a forever loop so it counts forever. Ask what is
  happening before you fix it. This is the single most common Arcade bug and they should meet it while you are
  the one who caused it.
- Model debugging out loud: "it does X, I expected Y, I will change **one** thing, not three." The debug log is
  the real assessment today, not a clean game.

---

## Friday: Checkpoint and Showcase

- Checkpoint first, ten questions, same format most Fridays so it never feels like an ambush. You can redo it.
- Then finish and submit. Every submission needs the explanation. Anyone who cannot explain their own variable
  or conditional gets a redo, framed as a redo, not an accusation.
- Showcase: everyone plays three games that are not theirs, names one thing that worked and one idea to steal.
  Keep it positive and specific so it does not turn into ranking.
- Collect "one thing you want to build on." This year map is deliberately flexible and those answers are the
  best sequencing information you will get.

---

## Things to Watch For This Week

- Arcade submissions with no explanation attached. Redo, framed as a redo.
- Students who stalled on the Day 01 tutorial. Velocity and variables are where a shaky start compounds. Catch
  them Tuesday and Wednesday.
- Fast finishers. Give them a second item type, lives, a level, or a title screen, rather than a new lesson.
- The uncontrolled-overlap score jump. It looks like a mistake; use it as the Wednesday lesson.
- Remind them Arcade projects live in their Chrome profile at their assigned seat. Nothing gets downloaded, and
  submitting means sharing the project link on Classroom.
