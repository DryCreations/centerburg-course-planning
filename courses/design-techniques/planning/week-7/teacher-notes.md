# Week 7 Teacher Notes: Design Techniques

**Plan A: extend the project with state. Plan B: close Unit 1.4 and open photography.**
**Quiz Friday either way.**

---

## The decision, Monday, in the first ten minutes

**Student logins on the upgraded plan cannot be verified until a student is actually in there.** So
Monday opens with a test, not a lesson.

**Have two or three students log in and open the Variables panel before you teach anything.**

| What you see | Do |
|---|---|
| Variables panel is there and they can create one | **Plan A.** Run the week as written |
| Panel missing, greyed out, or logins fail | **Plan B.** Say one sentence and move on. Do not spend the period troubleshooting |

**The sentence, if it is Plan B:**

> "We are done with this unit. It is finished work and it is on your portfolio. Today we start
> photography."

**Do not narrate the licensing problem to students.** It is not their problem and it makes the pivot feel
like a failure rather than a plan.

---

## Plan A: State and variables

### Pacing

| Day | Focus | The point |
|-----|-------|-----------|
| Mon | Find the state, make the variable | The finding is the lesson. The panel takes five minutes |
| Tue | Wire it: a button that changes the value | Where it breaks, and where the teaching happens |
| Wed | Read it: bound text, conditional visibility | The payoff. Delete frames today |
| Thu | Polish, partner test, write-up | |
| Fri | **Quiz**, then submit | 36 question bank, cut to 20 |

### Why extend rather than start new

They already have a working prototype they understand. **The variable becomes the only new idea.**

More importantly, the lesson is only available *because* they built it the hard way first. A student who
never duplicated four frames has no reason to care that a variable prevents it. **The tedium last week is
what makes this week land.**

### Monday is diagnostic, not instructional

**Do not open with the Variables panel.** Open by having them find two nearly identical frames in their
own file and name the one thing that differs.

| What they do | What it means |
|---|---|
| Finds it in 30 seconds | Ready. Push toward conditionals by Wednesday |
| Finds two frames but cannot name the difference abstractly | The common case. **This is the lesson.** Work it with them |
| Has no duplicate frames | Simple project, or they faked it another way. Give them a target: add a favorite toggle or a counter |

### The sentence that does the work

> **"Duplicating a screen is how you fake a change you cannot build yet."**

### Where it will break

| Symptom | Cause |
|---|---|
| Button does nothing | Interaction on the frame or the text, not the button. **80% of support requests** |
| Text shows the variable name | Not bound. They typed the name |
| Counter works once | Set to a fixed value instead of `variable + 1` |

**Walk the room Tuesday.** The failure is silent: a student who cannot get the button to fire will quietly
go back to duplicating frames and you will not find out until Thursday.

### Deleting frames is the deliverable

Grade it. Students will build the variable and leave the old frames, which means they added work rather
than replacing it. **"How many frames did this delete?"** at every desk Wednesday.

### The bridge worth naming

Several of these students are in or have taken a programming class. **A variable here is the same
variable there.** Rare, genuine cross-course connection.

---

## Plan B: Close 1.4, open Unit 2.1 Photography

### Why this is the right fallback

It is **the next unit on the map** (Q2 2.1, Photography: Capture and Editing, standards 7.9 and 7.3.5),
so the pivot costs nothing in sequence. The UX/UI work is already finished, submitted, and on their
portfolios, so there is no loose end.

**It is also the fallback with the least dependency on anything working.** Cameras and eyes. No licenses.

### Pacing

| Day | Focus |
|-----|-------|
| Mon | Composition: the rules, and reading photographs |
| Tue | Shoot: a composition set, five required frames |
| Wed | Shoot: light. Same subject, different light |
| Thu | Cull and critique. Pick three, defend them |
| Fri | **Quiz** (alternate cut), then post the set |

**Documents:** `handouts/photo-composition.md`.

### Equipment reality

Yearbook holds the cameras and **this is spirit week**, which is the busiest checkout week of the
quarter. Plan for that:

- **Phones are fine** for this assignment and say so up front. Composition is composition
- If you want camera work, coordinate with the Yearbook sign-out sheet first
- **This is a genuine advantage of Plan B**: spirit week means there is something to photograph in every
  hallway

### Thursday's critique reuses what they just learned

They spent last week learning to give feedback that names something specific. **Run the photo critique
with the same rules**: name what is in the frame, not whether you liked it. The transfer is the point,
and saying it out loud is worth thirty seconds.

---

## Friday's quiz, either way

**Bank:** `quiz-bank.csv`, 36 questions.

| If | Cut |
|----|-----|
| **Plan A** | 9 state, 8 UX/UI, 3 typography and export |
| **Plan B** | **Skip the 16 state questions entirely.** The remaining 20 (14 UX/UI + 6 typography and export) are exactly a full quiz. Use all of them |

**Plan B needs no new bank.** That is deliberate. Check `quiz.md` for the detail.

---

## Either way, flag this

The **course map still schedules Unit 1.4 for weeks 8 to 9** and it is finishing now. The map is behind
the room. Worth fixing before Q2 planning.
