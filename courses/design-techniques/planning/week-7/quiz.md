# Week 7 Quiz: Design Techniques (Friday Oct 2)

**Teacher-only.** **Bank:** `quiz-bank.csv`, **36 questions.** Cut to 20. No images, nothing coupled.

**Rebuilt to the scope you set.** UI/UX led, with the graphics and color material you named added back in.

## The mix

| Section | Q | Covers |
|---------|---|--------|
| **Wireframe, prototype, UX/UI** | 7 | Wireframe vs prototype, UX vs UI, why paper first, user testing, scope |
| **UI elements and their purpose** | 9 | Empty state, modal, tab bar, toast, loading state, destructive action, toggle, placeholder text, selected state |
| **Hierarchy and the primary action** | 7 | One primary action, the ways to make something win, squint test, proximity, whitespace, why one signal is not enough |
| **Vector vs raster, file types** | 5 | Pixels vs paths, scaling, logo use, PDF export |
| **Color theory** | 4 | Complementary, analogous, monochromatic, why complements contrast |
| **State and variables** | 4 | **Cuttable.** State vs layout, variable, duplicate frames, component |

**Suggested cut to 20:** 4 wireframe/UX, 5 UI elements, 4 hierarchy, 3 vector/raster, 2 color, 2 state.

## The state and variables block is deliberately small

You listed wireframe and prototype, components of interactive media, visual design elements, hierarchy,
file types and color theory, then said anything else is tertiary.

**So state and variables got 4 questions rather than 16.** They were taught Monday and Tuesday and you
had said the Figma unit was fair game, so they are in the bank, but they are the first thing to drop if
you want the 20 tighter. **Cutting all four still leaves 32 questions in scope.**

## Deliberately out of scope

**Nothing from this week's photography.** No shutter speed, aperture, depth of field, ISO, RAW, panning,
Tv or Av modes, film versus digital.

**Nothing on BPA events.**

Also absent: typography specifics (serif vs sans serif, pairing, weight), print production, CMYK and RGB
profiles, and Figma mechanics beyond component and variable (no smart animate, overlays, scroll behavior
or embed codes).

## Questions worth keeping in any cut

- **"During a user test, every time the designer wants to explain something, it means..."** Still the best
  question in the course.
- **"A designer makes the main button bigger but leaves it the same gray as everything else."** Tests
  whether they understood that one signal is usually not enough, which is the real content of the
  hierarchy lesson.
- **"Which is the better choice for a logo that must print on a business card and on a banner?"** Vector
  versus raster as a decision rather than a definition.
- **"Gray placeholder text inside an empty input field exists to..."** Small, and it checks whether they
  understand UI elements have purposes rather than just names.

## Answer-quality audit

**Passed a length-skew and distractor pass.** Three things were checked:

| Check | Result |
|---|---|
| **Every question has one objectively correct answer** | Verified by hand, question by question |
| **The correct answer is not the longest** | Was 33%, now **25%**, against ~25% by chance. **Zero questions** where the correct answer is longest by 8 or more characters |
| **Distractors are plausible, not free eliminations** | Rewrote the ones that were obviously absurd |

### What changed

Seven questions had the correct answer visibly longest. Each was tightened and its distractors given
real substance, rather than padding.

Three distractors were replaced for being absurd enough to eliminate without knowing anything:

- **Wireframes:** "design software will not open a brand new file" became "paper sketches import directly
  into the software," which sounds possible and is false
- **Scaling a raster image:** "the colors invert" became "the file size drops significantly"
- **Destructive actions:** "be hidden with no warning" became "look the same as every other button"

### One question worth knowing about

**"Which is NOT one of the reliable ways to make an element win attention?"** is a negative question, and
its correct answer (a decorative typeface) is right **because typeface is not on the list of five** that
was taught: size, color, contrast, whitespace, position. It is objective against the instruction, and it
is the one question on the bank where a student could argue from outside the material. **Drop it if you
would rather not have that conversation.**

## Format

Paste into the quiz spreadsheet tab and run the Apps Script. `option_a` is always correct and `answer`
is always `A`, so let the script shuffle.
