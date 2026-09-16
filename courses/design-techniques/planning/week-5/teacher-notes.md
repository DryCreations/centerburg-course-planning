# Weeks 5 and 6 Teacher Notes: Design Techniques

Student docs: `outline.md`, `project.md`, `vocab.md`, `handouts/interaction-labs.md`,
`handouts/teardown-sheet.md` (for students choosing Option A).

**Two week project, Mon Sep 14 to Fri Sep 25.** Same app throughout, a little more each day.

## The shape of every day

**Short pattern lesson, ten minute lab, then work time.** Both the lesson and the lab are chosen for what
students are putting on a screen that day, so nothing is taught in the abstract.

| Day | Pattern lesson | Lab |
|-----|----------------|-----|
| Mon | | Back |
| Tue | Navigation and focus | |
| Wed | Components, variants, interactive components | (the lesson is the lab) |
| Thu | Feedback and state | Scroll |
| Fri | Consistency | |
| wk 6 | Input | Selection, Input, Transitions, Putting it together |

`handouts/ui-patterns.md` is organized in those sections, so students read only the part that is live.

## Wednesday: components, and the question that actually matters

Three features that build on each other, taught in order: **component**, then **variant**, then
**interactive component.** Demo each, then they apply it to something already on their screen.

Timed well, this is the highest-leverage day of the project. They have a nav bar duplicated across four
screens right now, and it is about to start drifting out of sync. Components fix that before it becomes a
problem they cannot see.

**The part worth the most class time is the decision rule:**

> If it changes only that element, it goes **in the component.** If it changes the screen, it goes **on the
> screen.**

A heart filling, a toggle flipping, a button looking pressed: component. A row opening a detail page, a
confirmation appearing, a success screen: screen.

**Getting this wrong is how a prototype becomes unmanageable.** A student who builds a heart-fill as two
screen frames then needs two copies of every other screen state, and it multiplies fast. Walk around and ask
them, per interaction, which one it is.

## The "looks like a real app" point

Worth making explicitly on Tuesday: **not everything has to function, but the screens should look like the
whole app exists.** A tab bar with four destinations when only one goes anywhere. A search icon that does
nothing. A settings gear.

Students default to building only what they wired up, and the result looks like a wireframe rather than a
product. The test to give them: **would someone believe a screenshot of this was a real app?**

Have them keep a running list of what they are showing but not implementing. It goes in the write-up, and it
is the difference between "I forgot" and "I decided."

## Monday is ideation, not building

Nobody opens Figma Monday except for the ten minute Back lab. The whole period is:

1. Pick a project
2. **Write the one task down.** This is the gate. "Order one coffee." "See tomorrow's lunch."
3. List the screens that task needs
4. Start sketching

**Scope control is the entire job Monday.** Students will try to design all of Instagram. The one-task
sentence is your lever: if a screen does not serve that sentence, it does not exist.

Ten project options are in `project.md`, all deliberately small. Anyone who cannot choose in ninety seconds
gets assigned one. Students who already have something that frustrates them use Option A and the teardown
sheet.

## Pacing pressure points

- **Wed week 5:** screen 1 should be built. Anyone still sketching is behind.
- **Fri week 5:** something must be clickable for the first partner test, even if it is two screens.
- **Wed week 6:** everything connected. Thursday is for fixing, not building.

## The partner test is the assessment

Twice: Friday of week 5 and Thursday of week 6.

Give the tester **only the task**, nothing else. Then the designer says nothing. Every time a designer wants
to explain something, that is a finding.

Watch for designers narrating. Stop them. It is the single most common thing that ruins the exercise.

## What to grade hard, and what to let go

**Grade hard:** does the prototype work, is the scope one task, is there a primary action per screen, is the
back button consistent, did they change something after each test, does the write-up name reasons.

**Let go:** visual polish, color choices, icon quality, pixel alignment. They are five weeks into the course.
A plain prototype that works beats a pretty one that dead-ends.

## Differentiation

- **Cannot pick:** ninety seconds, then assign from the list.
- **Over-scoping:** ask them to say the one task out loud. If it takes more than one sentence, it is too big.
- **Fast:** more interaction types, more screens, or a desktop version of one screen.
- **Struggling in Figma:** pair them. The labs are short enough to catch up on in one period.
- **Absent:** `interaction-labs.md` is self-serve, numbered steps for all eight.

## Looking ahead

This closes the UX arc. **Unit 1.4 in the course map schedules UX for weeks 8 to 9**, so that slot is now
free for photography (Unit 2.1) or the BPA event selection Unit 1.4 also carries. Decide before week 8.
