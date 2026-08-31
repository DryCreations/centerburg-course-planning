# First Two Weeks → Course Folders: Consolidation

**Status: in progress (started Week 3, Mon Aug 31).**

The `first-two-weeks/` folder was the day-by-day working reference for the start of the year. It stays in place
as the **archive of record** for what actually ran Days 01–08 (see `first-two-weeks/DECISIONS.md`, especially
the dated "Mid-Week", "Day 07", and "Final Week-2 Prep" update tables). Going forward, planning lives in the
**course folders** (`courses/<course>/planning/`) in the unit/week format the courses already use. Week 3 is
the first week planned directly in the course folders.

> The pre-drafted `units/unit-1-*` folders in each course were written **before** the year started and describe
> an idealized sequence. What actually ran in Weeks 1–2 diverged (details below). Those speculative units have
> **not** been rewritten yet; each course's `week-3/` folder opens with a "Weeks 1–2 recap (what actually ran)"
> so the real record is in the course folder. Reconciling the older `unit-1-*` drafts to reality is a
> later task (see `program/open-questions.md`).

---

## What actually ran, Weeks 1–2 (by course)

| Course | Reality vs. the old unit-1-0 draft |
|--------|-------------------------------------|
| **Design Techniques** | Ran close to plan but richer: Adobe Express deep-dive (raster/vector, RGB/CMYK, layers, background removal, transparent PNG export), **brand kit + color theory** (complementary/analogous), **hierarchy** (size/contrast/position), **typography** (typeface families, pairing — std 7.5.4/7.5.2), **monogram → Google Site favicon/logo + small-size legibility**, Google Sites portfolio, and **photography basics** (exposure triangle) from the week-1 photo work. WebXam pretest built as a 40-item diagnostic (`first-two-weeks/_shared/pretests/`). |
| **Video and Sound** | Pivoted to **camera-in-a-photo-context all week**: exposure triangle, Av/Tv/M, motion (freeze/pan), ISO/Manual matched exposure, a little composition, plus portfolio + SMART goals. **Audio, the video five-shot sequence, and Premiere editing were deferred** to a later unit. Class ran a bit behind (finished shutter mid-week 2, started Manual). |
| **Aviation UAS** | Went **off-book**: TRUST certification, four forces + airspace lookup, then **the DJI RC controller + controls hands-on**, and a **first flight** (short set sequence + two photos). Started students on **Ohio DOT's free Part 107 online course** (LDAP accounts; access delayed 48h+). **WebXam pretest, full METAR lesson, and Quiz 1 deferred to Unit 1.1.** |
| **Middle School CS** | **MakeCode Arcade first** (the old plan front-loaded hardware/citizenship; those moved later). Covered variables, sprites, events, position/velocity, on-overlap + destroy + pick-random, a conditional win/lose, and built a real catch/dodge game. Daily code-reading bell ringers. Checkpoint 1 given. |
| **Yearbook** | eDesign basics + old-book review, **page ladder** (96 pages), beats/roles preferences, **theme decided: "Seasons of Our Lives"** (organize chronologically by season), camera modes, weekend camera sign-outs, and the first "reviewer on every page" habit. No WebXam. |

## The CTE pretests

Built and living at `first-two-weeks/_shared/pretests/` (three 40-item CSVs, an Apps Script that loads them into
a Google Forms quiz and reports results per standard/outcome/DOK, and a README). Diagnostic only. These stay
where they are; they are referenced from each CTE course's Week-3 plan for the review framing.

---

## Where Week 3 lives

Each course now has `courses/<course>/planning/week-3/` with an `outline.md`, a weeklong `project.md`, and
(where there's a quiz) `vocab.md` + `quiz.md`:

| Course | Week-3 focus & deliverable | Quiz this week | Gimkit review |
|--------|----------------------------|----------------|---------------|
| Design Techniques | **Visual/type hierarchy → a poster** (event / club / approved topic), strict hierarchy rubric. Photos from last year's yearbook or emailed in. Mon: log in + start pulling photos. | **Fri** (cumulative, hierarchy-weighted) | Thu (before quiz) |
| Video and Sound | **Shoot RAW + white balance + first edit in Lightroom Classic** (cameras only; sign-outs opened on the shared sheet). Review last week's lab as a group. | **Fri** (cumulative) | Thu (before quiz) |
| Aviation UAS | Review + **ODOT Module 1 (homework, due next week)**; prep Mon–Wed, **fly Friday to capture a front-of-school video** + pull footage. | **No — moved to next week** | Thu (ground review) |
| Middle School CS | **`if` statements → a new Decision Game** lab. | **No — first quiz next week** | Fri (in place of quiz) |
| Yearbook | **Frames-first spread layout** in eDesign (design with placeholder frames; photos optional). | **No quiz** — weekly status | Fri (optional, fun) |

Only **Design Techniques and Video & Sound** have a quiz this week (Friday, cumulative, vocab introduced
Monday). Aviation and MS CS quizzes moved to next week to make room; prepared versions sit in their `quiz.md`.
Every class has a **Gimkit review** — a `week-3/gimkit-review.csv` ready to import (see
`program/gimkit-review-howto.md`), played Thursday before a quiz or Friday as a fun review. Each course's
`project.md` is a weeklong assignment with clear requirements and an extension.
