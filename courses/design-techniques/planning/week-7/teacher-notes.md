# Week 7 Teacher Notes: Design Techniques

**Plan A: extend the project with state. Plan B: close Unit 1.4 and open photography.**
**Quiz Friday either way.**

---

## Monday is review either way. The test decides Tuesday.

**Monday does not depend on the answer**, which is the point of structuring it this way. Both plans get
the same first half.

| Part of Monday | What |
|---|---|
| **First 10 minutes** | **The login test.** Two or three students log in and open the Variables panel while the rest settle |
| **Then, everyone** | **Review.** Vocabulary retrieval, then the Gimkit kit. `gimkit-review.csv`, 52 questions |
| **Last stretch** | **Plan A only:** demo variables, and they identify something in their own project to convert |

| Test result | Rest of Monday | Tuesday onward |
|---|---|---|
| Panel is there | Variables demo, then they find the state in their own file | **Plan A.** Build it out |
| Missing, greyed out, logins fail | **Review fills the period.** More Gimkit, or the UX/UI material | **Plan B.** Photography starts Tuesday |

**So the risk is contained to one class period.** If it fails, Monday was still a useful review day
before Friday's quiz, and nothing was wasted.

**Do not spend the period troubleshooting logins.** Ten minutes, then move.

**The sentence, if it is Plan B:**

> "We are done with this unit. It is finished work and it is on your portfolio. Tomorrow we start
> photography."

**Do not narrate the licensing problem to students.** It is not their problem and it makes the pivot feel
like a failure rather than a plan.

## Monday's review, run it in this order

**Retrieval first, game second.** If Gimkit comes first it is entertainment. If they have already found
out what they do not know, the game is a second pass and it sticks.

**Watch which questions the room misses in the game.** That is free diagnostic data, and it tells you
what Friday's cut of 20 should lean on.

---

## Plan A: State and variables

### Pacing

| Day | Focus | The point |
|-----|-------|-----------|
| Mon | **Review**, then demo variables and find the state | The finding is the lesson. The panel takes five minutes |
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
| Mon | **Review only.** Gimkit, vocabulary, UX/UI. Photography starts tomorrow |
| Tue | Composition: the rules, and reading photographs |
| Wed | Shoot: a composition set, five required frames |
| Thu | Light, then cull and critique. Pick three, defend them |
| Fri | **Quiz** (alternate cut), then post the set |

**Plan B loses a day to Monday's review and that is fine.** The five-frame set and the critique are the
core; the lighting exercise compresses into Thursday or moves to next week.

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
