# Week 5 Quiz: Meteorology (Friday Sep 18)

**Teacher-only.** **Bank:** `quiz-bank.csv`, 40 questions. **Cut to 20.** No images, nothing coupled.

**This is the quiz that last week's deliberately avoided.** Coded METARs were too recent then. After a full
week of daily decoding drills, they are fair game.

## Coverage

| Section | Q | Covers |
|---------|---|--------|
| Decoding | 18 | Wind groups including gusts and VRB, visibility, sky condition codes and heights, temp over dew point, altimeter, weather codes with intensity and VC |
| Zulu time | 3 | What Z means, converting to local, and why an observation's age matters |
| TAF | 3 | How it differs, what FM marks, why to check both |
| Hazards | 7 | Gusts versus steady wind, wind shear, turbulence near buildings, thunderstorms at distance, precipitation, density altitude, icing |
| Personal minimums | 4 | What they are, why stricter than legal, applying them, why they are written in advance |
| Limits and sources | 5 | The 3 SM minimum, aviationweather.gov, the fixed field order |

## Emphasis

The four things drilled all week, all on the quiz:

1. **Cloud height:** `OVC007` is 700 feet. Add two zeros
2. **Wind direction is FROM**, not toward
3. **The gust is the number that matters**, not the average
4. **Zulu to local:** minus 4 right now

## Format

Paste into the quiz spreadsheet tab and run the Apps Script. `option_a` is always correct and `answer` is
always `A`, so let the script shuffle.

## After the quiz

Live weather briefs, about 90 seconds each, on a real current METAR you hand them. Rubric is in
`project.md` Part B. **Say before the first one that a no-go is a perfect brief** if the number behind it is
right, or every student will hunt for a reason to say go.
