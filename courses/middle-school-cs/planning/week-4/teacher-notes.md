# Week 4 Teacher Notes: Middle School CS

Teacher-facing pacing for Week 4. **Three day week** (Labor Day Monday, PD Tuesday): Wed, Thu, Fri.
Student doc is `outline.md`; the lab is `project.md`; the tile map guide is
`handouts/tilemap-maze-guide.md`; the quiz is `quiz.md` with `quiz-bank.csv`.

**Loops are dropped this week.** Tile maps replace them. Loops move to a later week.

## Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Wed | **Tile maps.** Show where the tile map editor lives (Scene category, `set tilemap to`, click the map box). Students draw a maze, mark walls, add a player, and get `controller.moveSprite` plus `scene.cameraFollowSprite` working. **Goal for today: the map is made and the player moves with real wall collision.** Hand out `project.md` so they can see the whole lab and experiment with items and variables if they finish early. | The single most common failure: tiles that look like walls but were never marked with the wall tool. Check this first when a student says collision is broken. |
| Thu | **Variables.** Explicitly walk through counting collected items: a variable starting at zero, `on overlap` destroying the item and adding one, and an `if` that ends the game when the count matches. Students who experimented Wednesday now get the real explanation. | This is the day the variable and if content actually gets taught, so do not skip the walkthrough even if some students already got it working. |
| Fri | **Quiz** (if statements, Weeks 1 to 3). Same silent, quiz-tab-only rules as the other classes. After the quiz, work time on the maze. | The quiz does **not** cover tile maps or collision, which were only introduced Wed and Thu. Say that out loud so students study the right material. |

## Assessment Notes

- Quiz is summative under Checkpoints (25% per `grading-and-categories.md`). Bank is unchanged: cut
  `quiz-bank.csv` from 30 questions to your best 20.
- The Maze Collector lab runs into next week; it is graded on the class project rubric.

## Extensions

Listed in `project.md` in difficulty order: harder maze, swap tile art, add an enemy, add a second level, add
a timer. Point fast finishers at these rather than letting them idle.
