# First Two Weeks (Temporary Prep Workspace)

Wed **Aug 19** to Fri **Aug 21**, then Mon **Aug 24** to Fri **Aug 28**. Eight teaching days. All five courses
meet daily, full period, in Room 173. Under 18 students per section, 24 machines.

**Status: week 1 taught, week 2 revised and ready to run.**

- **[DECISIONS.md](DECISIONS.md)**: everything settled, in one place. If a document contradicts it, the
  document is wrong.
- **[OPEN-ITEMS.md](OPEN-ITEMS.md)**: what is still unknown and what it blocks.
- **[_shared/weekly-structure.md](_shared/weekly-structure.md)**: the weekly rhythm all five courses run on,
  plus the paste ready board text for Monday.

## Where to Start on a Monday

Per course, in this order:

1. `<course>/handouts/week-at-a-glance.md`, paste into Classroom. Short, one week, two bullets a day.
2. `<course>/handouts/vocab-and-standards.md`, print it and put it on the wall.
3. `<course>/labs/week-2-labs.md`, post the labs you are running.
4. `<course>/week-plan.md`, the full teacher version of the week with points and categories.
5. `<course>/lessons/week-2-talk-tracks.md`, read before first period. Teacher facing.

## Layout

```
first-two-weeks/
├── DECISIONS.md                  # every settled decision
├── OPEN-ITEMS.md                 # what is still unknown
├── _shared/
│   ├── weekly-structure.md       # the weekly rhythm + Monday board text
│   ├── webxam-pretest.md         # Friday pretest: script, prep, fallbacks
│   ├── camera-signup-sheet.md    # room wide camera reservation sheet
│   ├── assignments/week-1-about-me-square.md
│   ├── slides/cte-day-1-slides.md
│   ├── policies.md
│   ├── standard-rubric.md
│   ├── syllabus-template.md
│   ├── day-plan-template.md
│   └── calendar.md
├── design-techniques/            # CTE, Interactive Media
├── video-and-sound/              # CTE, Interactive Media
├── aviation-uas/                 # CTE, Transportation
├── yearbook/                     # non CTE
├── middle-school-cs/             # non CTE
└── applications-of-robotics/     # parked, second semester
```

Each course folder holds: `README.md`, `week-plan.md`, `syllabus/`, `lessons/` with day-01 through day-08 plus
`week-2-talk-tracks.md`, `handouts/`, `labs/`, `assignments/`, `assessments/`, and `rubrics/`.

## What Is Drafted, Per Course

| Course | Syllabus with units | 8 day plans | Vocab and standards | Lab set | Week summary | Thursday | Friday |
|--------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Design Techniques | yes | yes | yes | 4 labs | yes | Quiz 1 | WebXam pretest |
| Video and Sound | yes | yes | yes | 5 labs | yes | Quiz 1 | WebXam pretest |
| Aviation UAS | yes | yes | yes | 5 labs | yes | Quiz 1 | WebXam pretest |
| Yearbook | yes | yes | yes | 4 labs | yes | Caption Lab | weekly status |
| Middle School CS | yes | yes | yes | 4 labs | yes | Debug Log | Checkpoint 1 |

## Week 1 Was the Same Everywhere

All four high school courses ran the same two things: the About Me Square in Adobe Express and a photo
submission. Middle School CS ran lateral thinking puzzles and the MakeCode Arcade tutorial instead.

Week 2 is where the courses separate. Each one gets its own content, its own labs, and its own talk tracks.

| Course | What week 2 is actually about |
|--------|------------------------------|
| Design Techniques | Portfolio, brand kits, type pairing, raster and vector, monograms |
| Video and Sound | Audio levels and room tone, then camera modes: Av, Tv, and M, then a first cut in Premiere |
| Aviation UAS | Four forces, airspace and sectionals, METAR and go / no go, preflight, mission planning |
| Yearbook | Beats and coverage, camera modes for a gym, eDesign, captions |
| Middle School CS | What is inside a computer, variables and conditionals, digital citizenship, debugging |

## Changed After Day 04

The squares were not printed in time and a lot of students still owed week 1 work. So:

- The gallery walk moved from Day 04 to **Day 07** in all four high school courses.
- Week 1 assignments are reopened, no penalty **through Wednesday, Day 06.**
- Day 04 in every course was rebuilt as vocabulary and standards, then an open ended explore block with one
  checkable deliverable, then an exit ticket asking what questions they have.
- The **WebXam pretest is Friday** in the three CTE courses. Quiz 1 moved to Thursday.
- **Late policy changed.** No penalties. Submissions close when grading is done and reopen on request.
  Assignments that cannot be repeated say so on the assignment.

## Built-in Fallbacks

| Risk | Where it is handled |
|------|--------------------|
| WebXam login not issued by Friday | Per course fallback lab in `_shared/webxam-pretest.md`, then the pretest gets a date in Unit 1.1 rather than drifting |
| Only two Spheros | MS CS Days 03, 07, 08 run as a station with a queue, and Part D accepts an Arcade log |
| Camera contention across four courses | `_shared/camera-signup-sheet.md`, with a stated priority order |

Premiere and eDesign are confirmed available, so those fallbacks were removed.

## What Already Exists Elsewhere

- Full-year unit plans under `courses/<course>/planning/units/` for the three CTE courses.
- `courses/<course>/standards.md`, the full Ohio CTE standards. The week's excerpts in the vocab handouts are
  pulled from there.
- `courses/middle-school-cs/standards.md`, Ohio 6 to 8 CS strands.
- `courses/_templates/`, lab, project, quiz, vocab, and outline templates.
- 3D Techniques is not running this year. Folder left in place.

## After These Two Weeks

Planning goes back to the unit level format under `courses/<course>/planning/units/`. No more day by day plans
past Day 08.
