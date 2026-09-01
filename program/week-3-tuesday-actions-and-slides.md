# TODAY — Tuesday Sep 1: Actions + Slides (all classes)

Quick-run sheet for today. For each class: the **document for today**, what to **post/update**, what to **go
over**, and **slides** — either exact text to paste (one idea per slide) or a prompt you can paste into Google
Slides (Gemini "Help me create / create slides about…") to generate the deck.

Legend: 🟢 light (activity-driven) · 🟡 some content · 🔴 heavy content (slides really help).

---

## 1. Design Techniques 🔴 — Hierarchy tools, then sketch

**Today's document:** `courses/design-techniques/planning/week-3/handouts/hierarchy-toolbox.md`
**Post:** the Hierarchy Toolbox handout (attach in Classroom or project it).
**Go over:** the six tools of hierarchy, the "three levels + a real jump" rule, and the squint test. Then they
sketch on paper — one starred focal point — before any Express.

### Slides — paste one block per slide

- **Slide 1 — Bell/entry:** "As you come in: open the **Hierarchy Toolbox** handout. Write down the ONE thing you want people to see FIRST on your poster."
- **Slide 2 — What is hierarchy?** "Hierarchy = the ORDER people read your poster. What they see 1st, 2nd, 3rd. You control it on purpose."
- **Slide 3 — The 6 tools:** "Size · Weight (bold) · Contrast · Color · Alignment · Spacing. Each one can pull the eye — or fight the others."
- **Slide 4 — The rule of the week:** "THREE levels, with a real size jump: ① Headline (biggest) ② Key details ③ Fine print (smallest). If they look the same size, there's no hierarchy yet."
- **Slide 5 — The squint test:** "Squint at your poster. The first thing you can still read is your focal point. If two things fight, make one bigger/bolder and shrink the other."
- **Slide 6 — Type pairing:** "ONE heading font + ONE body font that contrast. Two is plenty. Same font everywhere = flat. Three+ = messy."
- **Slide 7 — Your move today:** "1) Pick your topic. 2) Sketch 3 levels on paper. 3) Star your #1. 4) Note which tools make it win. No Express until your sketch has a clear #1."

### Or generate with this prompt (paste into Google Slides → Gemini)

> Create a 7-slide, student-friendly slideshow for a high school graphic design class on **visual hierarchy in
> poster design**. One idea per slide, short text, big headings. Slides: (1) Entry task — write down the one
> thing viewers should see first; (2) What hierarchy is — the order people read a design; (3) The six tools:
> size, weight, contrast, color, alignment, spacing; (4) The rule: three levels (headline, key details, fine
> print) with a real size jump; (5) The squint test; (6) Type pairing — one heading font + one body font;
> (7) Today's task: sketch three levels on paper and star the focal point before designing. Clean, minimal,
> high-contrast style.

---

## 2. Video & Sound 🟡 — Daylight vs. indoor white balance

**Today's document:** none new — use the posted `project.md` (Part A shot list).
**Update/post:** nothing new to post. Remind them cameras shoot **RAW** today.
**Go over:** why white balance changes with the light, then take the cameras out.

### Slides — paste one block per slide

- **Slide 1 — Entry:** "Grab your camera. Confirm it's set to shoot **RAW**. We're going to SEE white balance change today."
- **Slide 2 — Why:** "Different light has a different color. Daylight = cool/blue. Indoor light = warm/orange. White balance tells the camera what 'white' is."
- **Slide 3 — Today's shots (RAW):** "① A subject in DAYLIGHT (cafeteria / end of the hallway). ② The same subject INDOORS under classroom light. ③ One shot with the WRONG white balance on purpose."
- **Slide 4 — Watch for:** "Compare the daylight vs. indoor shots. Same subject — different color. That's the thing we'll fix tomorrow in editing."
- **Slide 5 — Before you leave:** "Offload your RAW files to Drive, named lastname-raw-01…04. Tomorrow we edit in Adobe Camera Raw (through Photoshop)."

---

## 3. Aviation UAS 🟡 — Get both groups to a workable plan

**Today's document:** `courses/aviation-uas/planning/week-3/handouts/mission-plan-worksheet.md`
**Post:** the Mission Plan Worksheet (one per group).
**Go over:** the two-group setup, the "one primary shot" scope rule, and airspace/roles. Then groups fill the
worksheet. Coach the over-scoped group to trim; help the no-subject group pick from the idea prompts.

### Slides — paste one block per slide

- **Slide 1 — Entry:** "In your group: open the **Mission Plan Worksheet**. First line — what is the ONE shot you want on Friday?"
- **Slide 2 — Two groups, your choice:** "Each group picks its own subject: front of school, the track, the fields, or an approved idea. Your call."
- **Slide 3 — The scope rule:** "ONE clean primary clip (~20–40 sec) your group can safely get. Extra 'stretch' shots ONLY after the primary is in the bag."
- **Slide 4 — Plan the flight:** "Fill in: subject · the one shot + move · airspace check · boundary & spectator line · go/no-go limits · roles (pilot / observer / logger)."
- **Slide 5 — Homework reminder:** "ODOT Part 107 **Module 1** — work it in spare time, due **next week** (not Friday)."

---

## 4. Middle School CS 🔴 — Bell ringer + `if` example, then lab

**Today's document:** `courses/middle-school-cs/planning/week-3/handouts/bell-ringer-tue.md`
**Post:** nothing required (run it on the board). Attach the handout if you want a copy in Classroom.
**Go over:** the bell ringer trace, then the worked `if`-on-overlap example, then break out to the lab.

### Slides — paste one block per slide (this is the "entry → bell ringer" pattern)

- **Slide 1 — Entry task:** "As you come in: copy the code on the next slide and figure out what **score** and **lives** end up as."
- **Slide 2 — THE BELL RINGER:**
  ```
  set score to 0
  set lives to 3

  if score > 5:
      change score by 10
  else:
      change lives by -1
  ```
  "What is score? What is lives?"
- **Slide 3 — Answer:** "score > 5 is FALSE (score is 0) → the ELSE runs → lives = 2, score = 0. The if runs the true side OR the else — never both."
- **Slide 4 — The move for today:** "When the player TOUCHES an item, an `if` decides good vs. bad:"
  ```
  on overlap (player) with (item):
      if item kind is "good":
          change score by 1
      else:
          change lives by -1
  ```
- **Slide 5 — Say it out loud:** "IF this is true, do that; OTHERWISE, do the other thing."
- **Slide 6 — Win/Lose (later this week):**
  ```
  if score >= 10:  game over WIN
  if lives <= 0:   game over LOSE
  ```
  "Two if statements decide who won."
- **Slide 7 — Break out:** "Open your Decision Game. Today's goal: items spawn, and an `if` on overlap decides good → score up, bad → lose a life."

---

## 5. Yearbook 🟡 — eDesign walk-through + the Page Checklist module

**Today's document:** `courses/yearbook/planning/week-3/handouts/page-checklist-module.md`
**Post/update:** hand out the Page Checklist module; students **paste it into a text box off to the side of
every spread.** (Friday = graded PDF check-in, already posted — no change.)
**Go over (live in eDesign):** show the **preset dropdown in the top-left** and the difference between a
**caption, byline, and photo credit** so they know which preset to reach for (tell them: **ask if unsure**).
Frame it as **choices, not a formula** — page vs. spread + cohesion; the focal point isn't always a big hero
(team photo edge-to-edge is fine); **stories are optional and new** (body + byline only where there's a story);
everyone signs a **"design by"** credit. Hammer the placeholder/template idea. Then students paste the module
and check off what applies.

### Slides — paste one block per slide

- **Slide 1 — Entry:** "Open your page in eDesign. Paste the **Page Checklist** into a text box off to the side (it won't print). We'll check off what applies as we build."
- **Slide 2 — Page or spread?** "A PAGE is one side; a SPREAD is two facing pages that read as one. Either way, aim for COHESION — it all looks like it belongs together. A split spread still reads as one design."
- **Slide 3 — Placeholders (the big idea):** "A placeholder is a box you build NOW and fill in LATER. Empty photo frame = placeholder for a photo. Dummy text = placeholder for real words. You are NOT typing real names yet."
- **Slide 4 — There's no one right layout:** "Your FOCAL POINT is what the eye hits first — often a big photo, sometimes a TEAM PHOTO edge-to-edge, sometimes your call. Make deliberate choices; keep it cohesive."
- **Slide 5 — Required vs. optional:** "REQUIRED: focal point, photos, a caption near each photo, headline, folio, a 'design by' credit, cohesion, aligned to columns. OPTIONAL (if it fits): photo credit, a story + byline, a quote, a subhead."
- **Slide 6 — Stories are optional (and new):** "We didn't do stories last year. NOT every page has one. Add body copy + a byline only if your page has a story. Not sure? Ask."
- **Slide 7 — Presets + ask:** "Give each text box a PRESET from the dropdown in the TOP-LEFT. Caption = describes a photo · Byline = who WROTE a story · Photo credit = who TOOK a photo. Unsure which preset? ASK."
- **Slide 8 — About shapes:** "Photos and frames = rectangles by default. Only use a circle/oval/star if it truly ADDS something — random shapes look jarring and crop faces in weird ways. If you can't say WHY, keep it rectangular."
- **Slide 9 — Sign your page + fill boxes:** "Add a small **'Page/Spread design by [your name]'** — take ownership. And put filler text in every box (Xxxx Xxxx…), big enough for a real name. Empty boxes = not done."

---

## One-line action list

| Class | Post today? | Go over | Slides help? |
|-------|-------------|---------|--------------|
| Design Techniques | Hierarchy Toolbox handout | 6 tools + 3 levels + squint test | 🔴 yes (7 slides above) |
| Video & Sound | nothing new | why WB changes; today's 3 shots | 🟡 5 short slides |
| Aviation UAS | Mission Plan Worksheet | 2 groups, one-shot scope rule, roles | 🟡 5 short slides |
| Middle School CS | (optional) bell-ringer handout | bell ringer + `if` example | 🔴 yes (7 slides above) |
| Yearbook | Page Checklist module | page vs spread + cohesion; presets (ask if unsure); required vs optional; shapes with a reason | 🟡 9 slides |
