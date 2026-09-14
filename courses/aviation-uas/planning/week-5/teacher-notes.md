# Week 5 Teacher Notes: Aviation UAS

Student docs: `outline.md`, `project.md`, `vocab.md`, `handouts/metar-decoder.md`,
`handouts/personal-minimums.md`. Quiz bank: `quiz-bank.csv` (40 questions, cut to 20).

Unit 2.1 Meteorology. **This is the week that makes coded METARs quizzable**, which last week's quiz
deliberately avoided.

## Pacing

| Day | Activity | Notes |
|-----|----------|-------|
| Mon | METAR anatomy: station, Zulu time, wind, visibility. Decode drill 1 | Pull **live** METARs on the projector every day. Real data beats invented examples |
| Tue | Sky condition, temp and dew point, altimeter, weather codes. Drill 2 | The "add two zeros" trick for cloud heights is the highest-value thirty seconds of the week |
| Wed | Weather hazards for small UAS. Drill 3 | Connect every hazard back to the aircraft. Why does a gust matter more than steady wind |
| Thu | TAFs, then the Personal Minimums Card | Card is due end of period, signed, with a reason next to every number |
| Fri | **Quiz**, then live weather briefs | Briefs are ~90 seconds each on a real current METAR |

## Run the drills on live data

Every day, pull real METARs from **aviationweather.gov** on the projector. `KCMH` and `KOSU` are reliable.

When the local weather is boring, go hunting: coastal fields, mountain airports, and anywhere with a storm
give you genuinely interesting decodes, and students remember `1/2SM FG OVC002` far better than a made-up
example.

## The four things they will get wrong

1. **Cloud height.** `OVC007` is 700 feet, not 7,000. Add two zeros. Drill it daily.
2. **Wind direction is FROM.** Not toward. Say it every time.
3. **Zulu conversion.** Ohio is UTC minus 4 right now. Have them do it out loud, not in their heads.
4. **`for` the gust, not the average.** They fixate on the steady number. The peak is what hits the aircraft.

## The Personal Minimums Card is the real point of the week

The decoding is a skill. **The card is the judgment.** Push for two things:

- **Every number needs a reason written next to it.** "20 knots" is not an answer. "20 knots, because the
  aircraft is rated near 24 and I want margin" is.
- **Their numbers must be stricter than Part 107.** If someone writes the legal limit as their personal
  limit, they have missed the concept entirely.

Then hold them to it. The first time a group's own card says no-go and they want to fly anyway is the actual
lesson, and it is worth scrubbing a flight to teach.

## Friday's briefs

Ninety seconds each, on a real current METAR you hand them. Decode every field, name the number closest to a
limit, make the call, say what the TAF expects.

**A no-go is a perfect brief** if the number behind it is right. Say that before the first student goes, or
they will all try to find a reason to say go.

## Differentiation

- **Struggling:** give them the decoder handout open during the drills all week. The goal is fluency, and
  fluency comes from repetition with the reference, not from memorizing cold.
- **Moving fast:** the finish-early list has them hunting for genuinely bad weather and tracking one field
  across the week.
- **Absent:** `metar-decoder.md` is complete, with three practice METARs and full answers.

## Looking ahead

Unit 2.2 is preflight. The natural next step is a second flight where **the weather brief and the personal
minimums card are the gate**, the way the controller quiz gated the first flight. That makes this week's work
load-bearing rather than academic.
