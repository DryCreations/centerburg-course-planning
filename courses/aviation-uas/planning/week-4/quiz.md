# Week 4 Quiz: Aviation UAS (Friday Sep 11)

**Teacher-only.** The first quiz of the year for this class.

**Bank:** `quiz-bank.csv`, **30 questions. Cut to 20.** No images, no scenario sets, nothing coupled. Every
question stands alone, so delete any ten and what is left is still a valid quiz.

**Questions are shuffled by the Form**, so order in the CSV does not matter.

---

## What it assesses

**Awareness, not mastery.** A first quiz over four weeks of introductory material. 20 of the 30 are straight
recall: does the student know what a thing is, what unit it is in, and what the legal limit is.

| Section | Q | Covers |
|---------|---|--------|
| METAR and weather | 7 | What a METAR is, METAR vs TAF, and the units: knots for wind, statute miles for visibility, feet AGL for cloud height. Plus what G means and reading 2SM |
| Axes and controls | 8 | Yaw, pitch, roll each on their own; the Mode 2 stick layout; what happens when you push the right stick right versus the left stick right; and arcing around a subject |
| Flight basics | 3 | Throttle, what happens when you let go of both sticks, RTH |
| Four forces | 1 | Naming all four |
| Legal limits | 5 | 400 ft AGL, 3 SM, 100 mph, VLOS, the 0.55 lb registration threshold |
| Part 107 and TRUST | 5 | What each is, how they differ, and two applied cases: filming a school promo video, and a 15 year old flying for fun |
| Roles | 1 | RPIC |

---

## Units are their own emphasis

Students mix these up constantly, so the bank asks directly:

| Field | Unit |
|-------|------|
| Wind speed | **Knots**, not miles per hour |
| Visibility | **Statute miles** |
| Cloud height | **Feet above ground level** |
| Max altitude | **400 feet AGL** |
| Max groundspeed | **100 miles per hour** |

---

## Controller questions

Each one names the stick and the direction and asks what the aircraft does. The distinction under test is
**roll (slides sideways, nose unchanged) versus yaw (nose turns, position unchanged)**, which is the thing
they most often confuse.

One question asks them to combine inputs to arc around a subject: **roll on the right stick with yaw on the
left stick, in opposite directions.** That is the shot they were trying to get on the flight.

---

## Part 107 and TRUST

Covers what each one is, who needs which, and **why the Part 107 certificate exists**, through two applied
cases rather than definitions alone:

- Filming video the school will use to promote an event falls under **Part 107**, because it is not purely
  recreational
- A 15 year old flying for fun at a park needs **TRUST**, plus registration if the drone is over 0.55 lb

The TRUST facts asked are all stated in the TRUST material itself: it is free, it does not expire, you carry
proof when flying recreationally.

---

## Format

Paste into the quiz spreadsheet tab and run the Apps Script. `option_a` is always correct and `answer` is
always `A`, so **let the script shuffle the options**, or shuffle by hand if building the Form manually.

**No images needed.** Build it and go.

---

## What was cut

This bank was trimmed from 92 questions. Everything cut is still in git history if you want it back,
including a four-question `AV-S1` scenario set off one real METAR, more detailed METAR decoding, the Week 2
controller day in depth (hover, home point, lost link behavior, small inputs), the four forces individually,
NOTAMs and the FAA UAS Facility Map, preflight and battery safety, and more Part 107 module detail (night
operations, flying over people, 24 month recurrency).

Worth pulling back in for the **next** quiz rather than this one.
