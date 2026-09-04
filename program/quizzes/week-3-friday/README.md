# Week 3 Friday Quizzes (Sep 4)

Three quizzes, **30 questions each**, so you can cut each down to the best 20 before posting. Written to be
**harder than the pretest**: mostly application and analysis, with boundary cases and the distinctions students
actually get wrong. Every item has one objective, non-debatable answer.

| File | Course | Questions | DOK (low / high) |
|------|--------|----------:|------------------|
| `design-techniques-quiz.csv` | Design Techniques | 30 | 9 / 21 |
| `video-and-sound-quiz.csv` | Video and Sound | 30 | 6 / 24 |
| `middle-school-cs-quiz.csv` | Middle School CS | 30 | 3 / 27 |

Aviation UAS has no quiz this week; that class flies on Friday and its quiz moves to next week.

## Format

Identical schema to the pretests in `first-two-weeks/_shared/pretests/`, so the **same Apps Script imports
these directly**. Columns:

`standard, outcome, dok, scenario_id, scenario, question, option_a, option_b, option_c, option_d, answer`

- **`option_a` is always the correct answer** and `answer` is always `A`, so the key is easy to review.
  Shuffle answer order in the Form after import.
- `dok` is `low` (recall) or `high` (reasoning). The script's **By DOK** report uses this.
- `standard` and `outcome` drive the per-standard breakdown. Hidden from students, kept in the sheet.
- Each quiz has **one scenario set** (`DT-S1`, `VS-S1`, `CS-S1`): several questions sharing one prompt, the way
  the WebXam does it.

## To use

1. Open the quiz CSV, delete the 10 rows you like least, leaving 20.
2. Paste into a tab of the quiz spreadsheet, one tab per course.
3. Run the Apps Script (`first-two-weeks/_shared/pretests/apps-script/Code.gs`) to build the Google Form.
4. Turn on shuffle so the correct answer is not always first.

## What each quiz covers

- **Design Techniques:** hierarchy (focal point, size jump, contrast, alignment, proximity, whitespace),
  typography and type pairing, color theory and conventional color associations, RGB vs CMYK, raster vs vector,
  and export choices (PDF to submit, PNG or JPG for the portfolio).
- **Video and Sound:** RAW vs JPEG, white balance and color temperature, the histogram and clipping, the
  Camera Raw edit order, the exposure triangle, Av/Tv/Manual, panning and depth of field, plus file naming and
  correct submission.
- **Middle School CS:** if and if/else, comparison operators including the `>=` boundary trap, AND/OR,
  modulo for "every Nth", if/else-if chain order, variable traces, and win/lose conditions.
