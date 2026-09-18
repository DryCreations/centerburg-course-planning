# Week 5 Teacher Notes: Aviation UAS

Student docs: `outline.md`, `project.md`, `vocab.md`, `handouts/metar-decoder.md`,
`handouts/personal-minimums.md`. Quiz bank: `quiz-bank.csv` (40 questions, cut to 20).

Unit 2.1 Meteorology. **This is the week that makes coded METARs quizzable**, which last week's quiz
deliberately avoided.

## Pacing

| Day | Activity | Notes |
|-----|----------|-------|
| Mon | METAR anatomy, then **group decoding on the board** with turn and talk. Drill 1. **Assign ODOT Module 1** | `handouts/decode-together.md` has five rounds of board codes, easiest to hardest, with answers |
| Tue | **Airspace, kept short:** review the classes, the rules attached to each, LAANC and grid ceilings, and enough sectional to recognize one. Four problems, then **ODOT work time** | They have seen the classes. This is the rules and the chart basics, not a full sectional lesson. Protect the work time |
| Wed | **Reading sectionals, hands on in a viewer.** Three locations, a scavenger hunt, two written questions | Brief framing, then they work the map most of the period. Circulate. `handouts/sectional-reading.md` |
| Thu | TAFs, then the Personal Minimums Card | Card is due end of period, signed, with a reason next to every number |
| Fri | **Obstructions and airport symbols**, short, then their choice of sectional work or ODOT Module 1 | A small, achievable win after a hard topic. `handouts/chart-symbols.md` |

## Monday: decode together before they decode alone

`handouts/decode-together.md` is built for this. Five rounds:

1. **One field at a time**, key allowed. `27012KT`, `OVC007`, `24/13`
2. **Short strings**, key allowed. Ask "which single number would decide this for you?"
3. **No key.** Take the handout away and let them work it cold
4. **Trap questions.** Gusting versus steady, `18/17`, BKN versus SCT at the same height, a stale timestamp
5. **Build one backwards.** Hand them a scenario and have them write the METAR for it

Put one on the board, give ninety seconds with a partner, take answers, reveal. **Start with the key
available and take it away as they warm up.** Fluency comes from repetition with the reference before it
comes from memory.

Round 5 is the best diagnostic in the set. Writing a METAR backwards proves they can read one forwards.

## ODOT Module 1

**Assign it Monday, due Thursday Sep 24**, the day before next Friday's quiz, and tell them plainly that
Module 1 material is on that quiz.

They have a week and a half on purpose. **Chase account problems early:** tell them to report LDAP trouble
the first day it happens, not the day it is due. Access issues took 48 hours or more to resolve back in week
2.

> **Check the date against your intent.** If you meant Module 1 due this Friday Sep 18 instead, it is a
> one-line change in `project.md`, `outline.md`, and Monday's slide.

## Friday: the retake, and the reason flying is paused

**Open with the retake.** The first quiz is available at the start of class for anyone who wants to improve a
score.

**Then say the thing about flying, once, plainly.** The original plan was a quiz and then a flight. It is
worth telling them exactly why that changed, because the reason is the strongest argument in the course:

> **The Part 107 exam does not test whether you can fly a drone.** There is no multiple choice question that
> measures stick skill. Part 107 is airspace, weather, limits, and the decisions a pilot makes before
> anything leaves the ground. That is what the WebXam assesses, and right now it is not landing.

Then the trade, stated without heat: **flying is the part of this class that depends on the other part.** If
they want to fly every week, the work during class time is how that happens. This is a standing arrangement,
not a one-day punishment.

**Do not spend the period on it.** Two minutes, then move to content.

## Friday: something simple to identify

Airspace was hard and several students are still working it out. **Obstructions and airport symbols are the
easy end of the same chart**, and one of them matters more to a drone pilot than any circle on the map.

**The thing to land:** an obstruction has two numbers, and **the one in parentheses is AGL, which is theirs.**
Anything over 400 AGL is taller than they may legally fly, so it is gone around, never over.

**Guy-wires are worth thirty seconds.** Cables running far out from the tower, nearly invisible from the air,
not drawn on the chart. That is a real hazard that a chart symbol does not warn you about, and it makes the
point that the chart is a starting place rather than the whole picture.

Then **they choose** how to spend the rest of the period: finish the three sectional points, or ODOT Module 1,
which is due Thursday the 24th. Both are legitimate, and letting them pick lowers the temperature after a
frustrating topic.

## Wednesday: hands on the map

The exit ticket said they are still working it out, so Wednesday is a second pass, done by **using** a chart
rather than being shown one.

**Frame it as a lookup skill, not a memory test.** Say plainly that real pilots check the legend constantly
and nobody memorizes a sectional. That removes the reason a struggling student shuts down.

The activity in `handouts/sectional-reading.md` moves in stages: get oriented, find one of each airspace
class, read stacked numbers, read obstruction heights, then **three locations of their choosing** answered
against the same six questions, then a scavenger hunt.

**The three most valuable things to reinforce while circulating:**

1. **Color and line style is the whole airspace answer.** Blue or magenta, solid or dashed.
2. **SFC on the bottom of a stacked pair** means the airspace reaches the ground, which is the case that
   actually affects them.
3. **The number in parentheses** on an obstruction is height above the ground, and that is the one that
   matters when their ceiling is 400 feet.

Any viewer that pans and zooms works. The handout is written without naming one.

## Tuesday is mostly work time

The airspace content is a review plus the rules, and it should take well under half the period. **Do not
teach sectional navigation.** They need to recognize that blue and magenta, solid and dashed, mean something,
and to read the stacked floor and ceiling numbers. That is it.

The two things worth landing:

1. **The grid ceiling can be lower than 400, and the lower number wins.** A ceiling of 0 means no flight.
2. **Class G does not mean no rules.** Every Part 107 limit still applies.

Then release them to **ODOT Module 1**. It is due Thursday the 24th and it is on the next quiz, so this is
the class time they get for it.

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
