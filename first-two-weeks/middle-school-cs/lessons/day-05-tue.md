# Day 05 - Tue, Aug 25 (Week 2)

**Course:** Middle School CS, **Unit:** Programming, Variables and Conditionals
**Strands:** Algorithmic Thinking and Programming

## Objective

Students can use a variable to keep score and a conditional to end the game, and can explain the difference
between a loop and a conditional.

Week 1 covered events, sequence, and loops. This is the next layer, and it is what turns a moving sprite into
an actual game.

## Materials

Arcade open and tested, projector, a broken example program ready to debug live.

## Bell Ringer

Your game gives a point every time the player touches a coin. Where does the number of points live? Best guess,
one sentence.

## Direct Instruction

1. **Variables.** A named box that holds a number. Make a score variable, set it to 0 on start, change it by 1
   on overlap. Show the value updating live in the simulator.
2. **Conditionals.** If the score reaches 10, game over. If lives hit 0, game over. Say the shape out loud:
   if this is true, do that.
3. **Loop versus conditional.** A loop repeats. A conditional decides. Put both on the board side by side,
   because students mix them up for weeks.
4. **Live debug.** Break your example, out loud: set the score inside the forever loop so it never stops
   counting. Ask them what is happening before you fix it.

## Work Time

Week 2 Part B. Take your week 1 program and add:

- A score variable that changes when something happens
- A conditional that ends the game or changes something when the score hits a number
- An explanation of both, in your own words

Anyone whose week 1 program is thin rebuilds it here rather than patching it.

## Closure

Exit ticket: in one sentence each, what is a variable and what is a conditional?

## Handouts

- `assignments/week-2-assignment.md`, Part B

## Assignments

- Working: Week 2 package, due Day 08

## Teacher Notes

- Score inside a forever loop is the most common bug in Arcade. Plant it, do not just describe it.
- Fast finishers add a second condition, like a timer or lives, instead of getting a new lesson.
- Check in with the students who stalled on the day 1 tutorial. Variables is where a shaky start compounds.
