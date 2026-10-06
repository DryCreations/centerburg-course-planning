# Week 8: Daily Log

**Mon Oct 5 to Fri Oct 9, 2026.**

---

## The week

| Day | DT | V&S | Aviation | MS CS | Yearbook |
|-----|----|-----|----------|-------|----------|
| **Mon** | **The editor.** White balance, **export**, isolate a color | Storyboard check, **detach audio and layer** | **Meteorology opens.** The brief opens | Lists change. **Two problems**, project opens | Next assignment |
| **Tue** | **Catch-up**, then a guided one-pager: histogram, two rounds, one file out | 10 min on rough assembly, then **work** | **Section 1 reviewed**, fronts, then **work time** | The bug, then **planning** | Keep working |
| **Wed** | **Mood**, then clarity, vibrance, saturation | **Split edits**, logged | **Wind, turbulence, severe weather** | **Project planning** | Keep working |
| **Thu** | **Color.** HSL | **Cutaways and layering** | **FLIGHT.** Same drills as last week | Finish the plan, start building | Keep working |
| **Fri** | Catch up and submit | Export, then version 2 | **QUIZ**, then the brief | **QUIZ**, then plan or build | Keep working |

---

## Slide convention changed

**Standards and agenda now go on one slide, not two back to back.** Standards at the top in their exact
text, the agenda underneath with each activity paired to the standard it serves.

Updated in `CLAUDE.md` and applied to this week's deck. The three career-tech classes each open with one
combined slide that stays on the board.

---

## Changes made after review

- **DT Monday was too thin.** Temperature and tint alone will not fill a period. Monday now also teaches
  **JPEG export** (Camera Raw's Save Image button, bottom left, or Lightroom's File then Export, both in
  the handout) with three required files out of one photo: cold, warm, and the version they call correct.
  Then an open-ended piece: scroll past Basic to **HSL / Color / Color Mixer**, pull every Saturation
  slider to minus 100 except one so a single color survives, export it, and push further with Hue,
  Luminance, partial grayscale, or split toning. **Competency 7.4.7 added** for the export.
- **Aviation is one project, not a worksheet a day.** The week is now the **pre-flight weather brief** a
  real crew writes, in `handouts/weather-brief-project.md`, built one section a day: the site and the air
  Monday, the system moving through Tuesday, the hazard list ending in their own go or no-go numbers
  Wednesday, then Thursday they fly it and write down **what the brief missed**, which is graded as
  highly as the rest. Real data from `aviationweather.gov`. One worksheet all week, every section ending
  in a verdict. `meteorology-worksheet.md` is gone.
- **MS CS Monday cut to two problems.** Both are about the shift. The larger set, including the
  loop-and-remove bug and the collection game, moved to `handouts/list-practice-day-2.md` for Tuesday.
  That frees real time Monday to open the final project and get them brainstorming.
- **MS CS gets a quiz Friday**, which is new. 31 questions in `week-8/quiz-bank.csv`, cut to 20, coverage
  in `quiz.md`. Lists, changing a list in a loop, loops, conditionals and variables, and **the planning
  language from the project sheet**. Correct answer is the single longest option in 5 of 31 and the
  shortest in 4 of 31, so length is not a tell either direction.
- **The MS CS project sheet is built on project-management stages**, not "go plan it": Scope,
  Requirements, Breakdown, Risk. The requirement checklist turns on a **removal test**: remove it, and if
  the game still plays the same it was not meaningful. `forever` is explicitly excluded, since it is the
  game loop every project already has. Students must answer "what breaks if I remove it?" for all six
  requirements, and "nothing really" means the design changes, not the answer.

---

## Tuesday

**Aviation Monday went poorly and got rebuilt.** Two failures, same root: a long stretch of teacher talk,
and the concepts not landing. A student who has not had to produce an answer does not know they do not
have one, and neither do you. Tuesday is **ten thin slides instead of four**, one idea each, with a
turn-and-talk ending every beat and nothing longer than six minutes of talking. The four fronts are
**predict then reveal**: they already know dense air sinks, so every front follows from something they
have. The protocol is written on the board, including the rule that **you may be asked for your
partner's answer**, which is why both partners say it out loud. The teacher also **supplies the data**
today, with the METAR, TAF and surface map already on screen, because Monday's hunting for it ate the
thinking time. Full run of show in `courses/aviation-uas/planning/week-8/teacher-notes.md`.

**The two concepts that did not land, and the diagnosis:**

- **Why air moves.** "Warm air rises" is something they heard in elementary school, so it sounds
  finished. The new part is that something has to **replace** it, and the replacing is the wind. Push on
  the hole, not the rising
- **Density altitude.** The name points the wrong way and they tried to make it mean how high they are.
  Lead with "how thin the air is behaving, no matter where you are standing," and do not say "pressure
  altitude" at all this week. Hang it on last week's payload lesson, which they understood

**Aviation Tuesday reshaped again: Section 1 gets reviewed out loud first, and half the period is work
time.** Monday they left with nothing finished. Now the first twelve minutes are Monday's questions 1
through 8 taken from the room as a conversation, and **the re-teach lives inside that review** rather
than beside it: questions 3, 6 and 7 *are* why air moves and density altitude. Those three get the
turn-and-talks; 1, 4 and 5 are quick confirmations. Then air masses, the four fronts predict-then-reveal,
and lows and highs, compressed to about twelve minutes. **The back half of the period they finish Section
2 with the TAF and map still on screen.** A per-question answer guide for the review is in
`teacher-notes.md`.

**The DT editor is confirmed as Adobe Camera Raw.** Tuesday's handout and slides no longer hedge.
Monday's white balance sheet still names both paths and **is already out to students, so it was left
alone.**

**Monday's DT period did not finish, and that is pacing, not students.** One worksheet and four exported
files in one period was too much, and the place they stalled is almost certainly **the export**, which
was brand new and is four separate trips through Save Image rather than one. **Tuesday gives the first
ten minutes to it** with the export demoed once more on the projector, including the part nobody guesses:
**the slider positions stay put between exports**, so you move Temperature and save again rather than
re-editing each time. **No re-teaching white balance.** They are behind on clicks, not concept.

**Tuesday is a one-page follow-along, not a section of the big lab.** Monday ran out of time, so today
gets a single goal and a hard finish: `handouts/tone-lab.md`, **eight questions, one page, one file out
before they leave.** The big lab was cut back to Wednesday through Friday and renumbered 1 to 21.

**Everyone works the same photo**, downloaded in step 1, because a follow-along only works if the photo on
the teacher's screen is the photo on theirs. **The recommendation is one of his own photos**, since that
guarantees it opens in this version of Camera Raw and raises no licensing question, where a free-gallery
file might come from a camera an older Camera Raw cannot read. The spec: a bright area and a dark area in
the same frame, something slightly wrong rather than broken, and real detail in the bright part so pulling
Highlights down visibly recovers something. **A shot out a window from inside the room, metered for the
interior, is exactly that file** and takes five minutes to make.

**DT Tuesday is the histogram, not "the rest of the sliders."** The goal is that they can look at the
Camera Raw screen and know what a slider will do **before** they drag it, which makes the histogram the
lesson and the sliders the practice. Three facts and nothing more: left is dark, right is bright, height
is how much. **Clipping warnings on in the first two minutes** (the two triangles in the histogram's top
corners) and left on all week, because that is what turns "looks about right" into something checkable.
Then the five regions left to right, one slider each: Blacks, Shadows, Exposure, Highlights, Whites.
**Check before class whether hovering a histogram region names its slider** on these machines; if it
does, dragging the mouse across the graph teaches the five faster than explaining them.

**The back half is two constrained rounds**, which is the "within limitation" structure. **Round 1 is
Exposure and Contrast only**, make it as good as possible, then **name specifically what is still
wrong**. **Round 2 unlocks Blacks, Shadows, Highlights and Whites with Exposure and Contrast frozen**,
and they fix the thing they named. The last question asks what Round 1 proved about why the other four
sliders exist. **Handed all six at once, a student drags everything until it looks okay and learns
nothing about which slider did what.** Round 1 producing a complaint is the entire point, and the common
outcome, blowing highlights while opening shadows, lands them exactly where Round 2 is useful.

**Mood moved from Tuesday to Wednesday**, next to Saturation, since they are the same kind of decision
and Tuesday is already full. The lab was rewritten and **renumbered 1 to 36**.

**From Wednesday on they go back to their own RAW files.** The shared photo is only so Tuesday's
follow-along stays in step. A supplied pool is still needed for the Week 9 assignment, so that folder
remains one job.

**Exemplar: offered as optional, with the rubric as the part that matters.** A before/after pair from a
file everyone has, **with the histogram screenshotted in both**, because without the histogram you are
showing them your taste instead of a measurable claim. The rubric: the histogram reaches both ends without
piling against either wall; no red or blue except on specular highlights, which are allowed to clip; the
subject's midtones sit near the middle; and the toggle test shows an obvious difference that a stranger
could not attribute to specific sliders. **If there is only time for one, say the rubric and skip the
exemplar.** Guidance is in the new `courses/design-techniques/planning/week-8/teacher-notes.md`.

**DT Week 9 switched from the Repair Clinic to Three Moods.** The clinic needed four RAW files each broken
exactly one way, and a free gallery posts its good photos, not its failures. Building that set meant
shooting all four. **Three Moods needs only decent RAW files**, which is a download instead of a shoot,
and it puts the grade on the decision rather than the repair. One photo, three versions: neutral and
correct, then two moods from a list of four starting points, then they argue for one and name the
audience. **The diagnostic muscle is not lost**, it is Tuesday through Thursday in the editing lab where
they cause clipping on purpose. Sourcing is in `week-9/handouts/mood-project-TEACHER.md`:
[lapseoftheshutter.com](https://www.lapseoftheshutter.com/free-raw-landscape-images-for-retouching/) is
the best fit, no signup and landscapes, which have sky, shadow and a horizon so all three mood decisions
have something to act on. [signatureedits.com](https://www.signatureedits.com/free-raw-photos/) for more
variety and mostly Canon CR2. **None of those pages could be opened from here**, so budget ten minutes to
check them.

**V&S Tuesday is ten minutes then work time.** The ten minutes is **rough assembly**: the whole edit,
badly, end to end, before anything gets good. Day one of an edit is where people sink a period into three
perfect seconds. Plus the two housekeeping items that actually lose work: name the project, and do not
move the footage folder after importing.

**MS CS cut the collection game.** Their own project is the build now, and a second collection game
competes for the same time. Tuesday is the problems in the first half and the plan in the second, said
out loud at the start so nobody paces for a full period of problems. Two questions added to the day-2
sheet (19 and 20) that feed the plan rather than the practice.

**Yearbook keeps working.** The Week 9 check-in is already posted, expectations unchanged.

---

## Decisions made this week

- **DT runs one slider group per day, slowly.** Monday is white balance **only**. The temptation is to
  hand them the whole Basic panel on day one and let them flail. The rule in both handouts is **push one
  slider to both ends before deciding what it does**, because nudging teaches nothing.
- **The RAW versus JPEG comparison is the spine of Monday.** RAW gives a real Kelvin number and a lot of
  latitude. A JPEG gives a relative scale and breaks quickly. **Students who grabbed JPEGs last week will
  see the cost rather than be told about it**, which is a better lesson than the one that was planned.
- **Everyone shoots at least one new photo Monday**, under the worst light in the room, deliberately.
  That covers the students whose camera was not on RAW, and it makes the in-camera versus in-editor
  comparison concrete.
- **Aviation meteorology is framed as "what the numbers mean."** They already decode METARs and TAFs from
  Week 5, so this week is the layer underneath rather than new territory.
- **Density altitude is taught as last week's margin idea in a different costume.** A hot, humid day
  thins the air and eats your lift exactly the way a heavy payload does, except you did not choose it.
  That connection is said in those words, since they just learned the payload version.
- **A running question carries the Aviation week:** *what would make me cancel a flight?* Answered at the
  end of every day, and it should get longer each time. By Thursday it should be specific and include
  numbers.
- **Friday's Aviation quiz covers everything through last Friday and no meteorology.** Said on Monday,
  so nobody studies the wrong thing.
- **Aviation is three days of weather, then flight Thursday, then the quiz.** Monday through Wednesday is
  the worksheet, Thursday is outside on the orbit and figure-eight drills from last week, and Friday is
  the quiz with the leftover time used to finish whatever is unfinished in the worksheet.
- **Wednesday carries the heavy load on purpose.** Wind effects, turbulence and severe weather together,
  because they are all answers to the same question: what can stop you flying. That makes it the natural
  place for the running question's final version.
- **Thursday is where the week pays off.** Students bring their own go or no-go list outside and use it
  on whatever the actual weather is, then write down the real numbers and whether it was a go. Three
  questions get answered after flying rather than during.
- **V&S: detaching audio and layering video are taught as one idea.** A timeline has layers, and picture
  and sound do not have to travel together. Once that lands, **a cutaway is just a clip on the track
  above**, and the J-cuts and L-cuts they already planned become mechanical.
- **MS CS Problem 3 is the week's real lesson.** Removing items from a list while looping over it breaks,
  and it is a bug professionals write. They build it, run it, and watch it fail before being told why.
- **The MS CS final project is free choice against a six-item checklist**, planned this week and built
  next. **The grade is the six items working**, not ambition. The stated rule: small and finished beats
  big and broken.
- **No code on the MS CS project until the plan is approved**, same shape as the V&S storyboard gate.

---

## What each course is doing

- **DT: editing the RAW files.** White balance Monday, tone Tuesday, clarity and saturation Wednesday,
  HSL and color theory Thursday, catch up Friday. **This completes 7.9.5**, which was marked partial last
  week because white balance was deliberately held back.
- **V&S: building the edit.** The storyboard gate opens the editor. Detaching audio, split edits, then
  cutaways and layering.
- **Aviation: Unit 2.1 Meteorology**, three days of content, flight Thursday, quiz Friday on the
  previous material. Friday's leftover time is for finishing the worksheet, not new work.
- **MS CS: list mutation, then project planning.** The collection game Tuesday, planning Wednesday and
  Thursday, building from Thursday into next week.
- **Yearbook: resolved.** The Week 9 check-in is already posted, same expectations as last time: photos
  and spreads. They keep working, nothing new introduced.

---

## Flagged

- **Resolved: the DT editor is Adobe Camera Raw**, the raw dialog that opens from inside Photoshop.
  Everything from Tuesday forward says Camera Raw only. Monday's white balance sheet still gives both
  click paths and is already posted, so it was not changed.
- **DT Week 9 needs a folder of six to eight RAW photos before Monday.** Three Moods depends on it and
  nothing could be downloaded from here. See `week-9/handouts/mood-project-TEACHER.md`.
- **BPA event selection is due this week or next**, across all courses. Hard deadline is the end of Week
  9. See `program/bpa-selection-plan.md`, which still has three open decisions.
- **Unit 1.3 Audio is still owed in V&S**, roughly 16% of the WebXam with nothing covered. The layering
  work touches audio levels, which is a soft on-ramp, but it is not the unit.
- **Next week is the last week of the quarter.** MS CS is building their project and DT has the Repair
  Clinic. **V&S, Aviation and Yearbook are still undecided for Week 9**, and so is whatever has to close
  out for grades.
- **DT course map is still behind the room.** Unit 1.4 was scheduled for weeks 8 to 9 and finished in
  week 7, and 2.1 Photography has started early.
