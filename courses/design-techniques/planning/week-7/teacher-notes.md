# Week 7 Teacher Notes: Design Techniques

**Extend the existing project with state. Quiz Friday closes Unit 1.4.**

## Pacing

| Day | Focus | The point |
|-----|-------|-----------|
| Mon | Find the state, make the variable | The finding is the lesson. The making takes five minutes |
| Tue | Wire it: a button that changes the value | Where it breaks, and where the teaching happens |
| Wed | Read it: bound text, conditional visibility | The payoff. Delete frames today |
| Thu | Polish, partner test, write-up | |
| Fri | **Quiz**, then submit | 36 question bank, cut to 20 |

## Why extend rather than start something new

They already have a working prototype they understand. **The variable is the only new idea**, so all the
cognitive load goes to the concept instead of to setting up a new file.

More importantly, the lesson is only available *because* they built it the hard way first. A student who
never duplicated four frames has no reason to care that a variable prevents it. **The tedium last week
is what makes this week land.**

## Monday is diagnostic, not instructional

**Do not start by teaching the Variables panel.** Start by having them find two nearly identical frames
in their own file and name the one thing that differs.

That exercise sorts the class for you:

| What they do | What it means |
|---|---|
| Finds it in 30 seconds | Ready. Push them toward conditionals by Wednesday |
| Finds two frames but cannot name the difference abstractly | The common case. This is the whole lesson. Work it with them |
| Has no duplicate frames | Either the project is very simple, or they faked the state a different way. Give them a target: add a favorite toggle or a counter |

## The sentence that does the work

> **"Duplicating a screen is how you fake a change you cannot build yet."**

Say it Monday and again Wednesday. Everything else this week is mechanics.

## Where it will break

| Symptom | Cause |
|---|---|
| Button does nothing | Interaction on the frame or the text, not the button. **This is 80% of the support requests** |
| Text shows the variable name | Not bound. They typed the name |
| Counter works once | Set to a fixed value instead of `variable + 1` |
| Works in the editor, not in Present | Have them reopen Present. Usually stale |

**Walk the room during Tuesday.** The failure mode is silent: a student who cannot get the button to fire
will quietly go back to duplicating frames and you will not find out until Thursday.

## Figma plan note

Education approval came through, so Professional features should be available. **I could not verify from
here which specific features are plan-gated** (outbound fetch is blocked in this environment, and
third-party sources contradict Figma's own documentation).

**The lab is built so the core works regardless.** Variables, set-variable interactions, and text binding
are the required path. Conditionals are written as the "if you get ahead" tier and **modes are deliberately
left as an ask-me-individually item**, so if any of it is unavailable the required work is unaffected.

**Check the Variables panel yourself before Monday.**

## Deleting frames is the deliverable

Make this explicit and grade it. Students will build the variable and leave the old frames in the file,
which means they have added work rather than replaced it.

**"How many frames did this delete?"** is the question to ask at every desk on Wednesday.

## The bridge worth naming out loud

Several of these students are in or have taken a programming class. **Say that a variable here is the
same variable there.** It is a rare, genuine cross-course connection and it makes both sides feel less
arbitrary.

## Friday

Quiz first, then finish and submit. Project, portfolio update, and share link all due the same day.
