# CTE Pretests (Diagnostic, WebXam-style)

Three ~40-question multiple-choice pretests, one per CTE course, written to the Ohio WebXam
end-of-course blueprints and tied to standards. **Diagnostic only, not for a grade.** They mirror the WebXam
structure so the strand-by-strand baseline is meaningful.

Only the three CTE courses need these (WebXam courses):

| File | Course | Code | Questions |
|------|--------|------|----------:|
| `design-techniques-pretest.csv` | Design Techniques | 145095 | 40 |
| `video-and-sound-pretest.csv` | Video and Sound | 145110 | 40 |
| `aviation-uas-pretest.csv` | Aviation UAS | 177024 | 40 |

Yearbook and Middle School CS have no WebXam, so they get other content, not these.

---

## The CSV format (edit freely)

One question per row. Columns:

| Column | Meaning |
|--------|---------|
| `standard` | The competency code the item targets, e.g. `7.4.5`. |
| `outcome` | The outcome/strand name, e.g. `7.4 Graphics`. Used for the strand baseline. |
| `dok` | Depth of knowledge: `low` = recall/DOK1-2, `high` = reasoning/application. Used to hold the ~60/40 mix. |
| `scenario_id` | Blank for a standalone item. A tag (e.g. `DT-S1`) links questions that share one scenario. |
| `scenario` | The shared scenario text. Same text on every row of a group; the builder shows it once. |
| `question` | The stem (for a scenario item, the last sentence that asks the actual question). |
| `option_a` | **The correct answer.** By convention the correct choice is always A in the file, so it is easy to review. |
| `option_b`, `option_c`, `option_d` | Distractors. |
| `answer` | The letter of the correct option (`A` in every row as shipped). |

### DOK mix (recall vs. reasoning)

Following the WebXam pattern, each test is about **60% lower-DOK recall** and **40% higher-DOK** reasoning /
"connect-multiple-ideas" items. Current split: DT 24/16, Video & Sound 23/17, Aviation 24/16 (low/high). Edit
the `dok` column if you re-balance; `analyzeResults` reports a **By DOK** breakdown so you can see how students
did on recall vs. reasoning.

### Scenario sets (reused prompts)

Some items share a scenario, like the WebXam: a few sentences of context, then several questions that each ask
a different thing in the final sentence. Rows in a set share a `scenario_id` and the same `scenario` text, and
sit next to each other. The Apps Script prints the scenario once as a section header, then the group's
questions. Each course has two sets (e.g. `DT-S1` a coffee-shop brand project, `DT-S2` a dim-gym photo shoot).
Because the group relies on order, the script automatically turns off question shuffling when scenarios are
present (option shuffling within each item still happens).

**To edit:** change any text you like. To reorder options while editing, move the text and then set `answer`
to the letter that now holds the correct choice. To add a question, add a row and keep the columns. To drop
one, delete the row. A three-option item is fine, leave `option_d` blank.

**The correct answer is not always A on the actual quiz** — the Apps Script shuffles the options when it builds
the Form. Keeping A correct in the file is only so you can proofread quickly.

---

## Blueprint alignment

Each course's questions are allocated across outcomes in proportion to the WebXam blueprint weight (in the
course `standards.md`), and **every outcome on the blueprint gets at least one question.** Because a 40-item
test cannot perfectly match every fractional percent while still covering each of the low-weight business
outcomes, the small Strand 1 outcomes are rounded up to one item each; the heavily weighted Strand 7 outcomes
carry the emphasis, matching the exam.

**Design Techniques (40):** Strand 1 = 5, Strand 2 = 11, Strand 7 = 24. Leaders: 7.4 Graphics 5, 7.9
Photographs 5, 7.1 Interactive Media 4, 7.3 Production 4, 7.5 Typography 4, 2.9 Proposal 3.

**Video and Sound (40):** Strand 1 = 7, Strand 2 = 6, Strand 7 = 27. Leaders: 7.3 Production 6, 7.7 Video 7,
7.8 Audio 7, 7.2 Multimedia Tools 4, 7.1 Interactive Media 3.

**Aviation UAS (40):** Strand 1 = 8, Strand 2 = 3, Strand 7 = 29. Leaders: 7.11 Preflight 5, 7.13 Flight
Environment 4, 7.4 Aerodynamics 3, 7.9 Small UAS 3.

> Audio (7.8) is on the Video and Sound pretest even though audio has not been taught yet — that is the point
> of a pretest: it measures the whole exam, and the low audio strand tells you where to aim later.

---

## Building the Form quiz (Apps Script)

1. **New Google Sheet.** `File > Import`, upload the course CSV, choose **Replace current sheet**, and keep the
   header row.
2. **`Extensions > Apps Script`.** Delete the starter code, paste in `apps-script/Code.gs`. Then open the
   manifest (`Project Settings > gear > "Show appsscript.json"`, or the editor's `appsscript.json`) and replace
   it with `apps-script/appsscript.json`. That file turns on the Classroom advanced service and the right
   scopes.
3. **Edit the `CONFIG` block** at the top of `Code.gs`: set `FORM_TITLE`, and the toggles
   (`SHUFFLE_OPTIONS`, `POINTS_PER_QUESTION`, `SHOW_STANDARD_IN_HELP`, etc.).
4. **Run `buildPretest`.** Approve the permission prompt the first time (it is your own account). When it
   finishes, open `View > Logs` for the **form edit link**.
5. Repeat for each course (new Sheet each time, or a tab per course and set `SHEET_NAME`).

Each item is a multiple-choice quiz question with the correct choice marked. **The standard is NOT shown to
students** (`SHOW_STANDARD_IN_HELP` defaults to `false`). Instead, the standard/outcome for every question is
saved to a hidden **`Key`** tab in the same Sheet, which is what powers the per-standard analysis below.

## Reviewing results per standard / outcome

The whole reason the standard lives in the CSV is to get strand-by-strand data, the way the WebXam reports it.

1. Build the form (above). It saves the answer key to the hidden `Key` tab and remembers the form.
2. Assign/collect responses (Classroom or the share link). `COLLECT_EMAIL` stays on so results can be
   attributed per student.
3. Back in the Apps Script editor, run **`analyzeResults`**. It scores every response against the `Key` and
   writes three tabs into the Sheet:
   - **`By Standard`** — asked / correct / % correct for each competency standard (e.g. `7.4.5`).
   - **`By Outcome`** — the same, grouped by outcome/strand (e.g. `7.4 Graphics`). This is your baseline map:
     the low outcomes are where to aim instruction.
   - **`By DOK`** — % correct on recall (`low`) vs. reasoning (`high`) items.
   - **`By Student`** — each responder's % correct per outcome, plus an overall %.
4. Re-run `analyzeResults` any time to refresh as more responses come in. To analyze an older form, paste its
   id into `CONFIG.FORM_ID_OVERRIDE`.

Because each question is tagged to a single standard/outcome in the CSV, adding or editing questions
automatically flows through to this analysis, no extra bookkeeping.

## Attaching it to Google Classroom

1. In `CONFIG`, set `ATTACH_TO_CLASSROOM: true`.
2. Run **`listMyCourses`** once and read the log to get your class's `id`. Paste it into
   `CLASSROOM_COURSE_ID`.
3. Run `buildPretest` again. It creates the assignment as a **DRAFT** in that class (linking the Form) so you
   can review and then post it yourself. It is created **ungraded** (no points), matching "not for a grade."

If you would rather not use the API, just open the Form from the log link and attach it in Classroom by hand
(`Create > Quiz assignment > add the Form`). The script is a convenience, not a requirement.

---

## Notes

- **Points:** `POINTS_PER_QUESTION` defaults to 0 so nothing reads as a grade, while the Form still records
  which answers were correct for the strand baseline. Set it to 1 if you want a raw score to look at privately.
- **Regenerating:** the CSVs are the source of truth — edit them directly. (They were generated once from a
  script; there is intentionally no auto-generator here so your edits are never overwritten.)
- **Coverage check:** every blueprint outcome appears at least once; counts are in the alignment section above.
