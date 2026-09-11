# Week 4 Quiz: Aviation UAS (Friday Sep 11)

**Teacher-only.** The first quiz of the year for this class.

**Bank:** `quiz-bank.csv`, 59 questions. **Cut to 20.**

---

## What it assesses

**Awareness, not mastery.** This is a first quiz over four weeks of introductory material, so most of it is
recall: does the student know what a thing is, what unit it is measured in, and what the legal limit is.
32 of the 59 questions are low DOK by design.

The applied questions are limited to controller inputs, where "if you push this, the drone does that" is
genuinely a thing they practiced, and to reading a real METAR.

| Section | Questions | Covers |
|---------|-----------|--------|
| METAR and weather | 14 | What a METAR is, METAR vs TAF, aviationweather.gov, and the **units for every field** |
| Axes and controls | 15 | Yaw, pitch, roll, the four forces, Mode 2 stick layout, what each stick input does, arcing around a subject, heading vs camera pointing |
| Legal limits | 7 | 400 ft AGL, 3 SM visibility, cloud clearance, 100 mph, VLOS, the 0.55 lb registration threshold, marking the registration number |
| Part 107 and TRUST | 12 | What each one is, who needs which, cost, expiration, carrying proof, and telling them apart |
| Roles, safety, airspace | 7 | RPIC, visual observer, controlled airspace, LAANC, preflight, lost link, flight logs, and honoring your own go/no-go limits |
| METAR scenario (`AV-S1`) | 4 | One real METAR, decoded field by field, ending in a go/no-go call |

---

## Cutting to 20

Keep the shape roughly proportional. A workable cut:

- 5 on METAR and units
- 5 on axes and controller inputs
- 4 on legal limits
- 4 on Part 107 and TRUST
- 2 on roles and safety

**Or** use the `AV-S1` scenario set as the last four questions instead of four singles. **Keep all four
together if you use it**, since they share one METAR.

---

## Units are their own emphasis

Students routinely mix these up, so the bank asks about each one directly:

| Field | Unit |
|-------|------|
| Wind speed | **Knots**, not miles per hour |
| Visibility | **Statute miles**, not nautical miles |
| Temperature and dew point | **Celsius** |
| Cloud height | **Feet above ground level** |
| Altimeter | **Inches of mercury** |
| Max altitude | **400 feet AGL** |
| Max groundspeed | **100 miles per hour** |

---

## Controller questions

Written so that each one names the stick and the direction, and asks what the aircraft does. The distinction
being tested throughout is **roll (slides sideways, nose unchanged) versus yaw (nose turns, position
unchanged)**, which is the thing they most often confuse.

Two questions ask them to combine inputs to arc around a subject: **roll on the right stick with yaw on the
left stick, in opposite directions.** That is the shot they were trying to get on the flight.

---

## On the TRUST questions

Everything asked is a fact stated in the TRUST material itself: it is free, it does not expire, you must
carry proof when flying recreationally, and you cannot fail it because a missed question shows you the
correct answer and you continue until all are correct.

The Part 107 versus TRUST distinction gets its own applied question (filming video the school will use to
promote an event falls under Part 107, because it is not purely recreational). That one is worth keeping.

---

## Format

Same schema as the other quizzes: paste into the quiz spreadsheet tab and run the Apps Script. `option_a` is
always the correct answer and `answer` is always `A`, so **let the script shuffle**, or shuffle by hand if
you are building the Form manually.

No images are needed for this quiz, so there is no manual insertion pass. Build it and go.
