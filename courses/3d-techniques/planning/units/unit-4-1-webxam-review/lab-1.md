# Lab: Targeted Strand Review & Score Analysis

**Course:** 3D Techniques (145120)
**Unit:** 4.1 — WebXam Preparation & Initial Test
**Duration:** Weeks 28–29

---

## Objective

Use your WebXam pretest (Unit 1.0) baseline scores as data to drive targeted review. Practice the highest-weight strands. Identify specific weak areas for personalized study before the Initial Test on April 23.

---

## Background

Your WebXam score is made up of strand scores across 8+ strands. The course has addressed the highest-weight strands: Strand 7 (3D modeling/animation), Strand 5 (programming), Strand 2 (career/info literacy), Strands 1, 9, and others. This lab is data-driven: your goal isn't to "review everything" — it's to find your lowest strands and fix them specifically.

---

## Part A — Pretest vs. Current Projection

### Step 1: Pull Your Pretest Scores
Retrieve the strand score report from Unit 1.0 lab (Week 1). If you kept your learning goals document, find it now.

**Record your Week 1 baseline:**

| Strand | Strand Name | Pretest % | Current Projection |
|--------|-------------|-----------|-------------------|
| 1 | Career/Professional | | |
| 2 | Information Literacy | | |
| 3 | Computing Systems | | |
| 4 | Networking | | |
| 5 | Programming | | |
| 6 | Web Technologies | | |
| 7 | 3D Modeling | | |
| 8 | Media Design | | |
| 9 | Business Ethics | | |

"Current Projection" = your best estimate based on what you've learned this year. A strand you spent 3 weeks on should be higher than your pretest baseline.

---

### Step 2: Prioritize

Circle the 2 strands with the biggest gap or lowest projection. These are your priority for this lab.

**My Priority Strands:**
1. _______________
2. _______________

---

## Part B — Strand 7 Targeted Practice

### Step 3: UV Mapping Quick Lab

Follow these steps in Blender (10 minutes):
1. Select the default cube. Tab → Edit Mode. Select All.
2. U → Smart UV Project → OK.
3. Open UV Editor (split the viewport). Observe the UV layout.
4. In Edit Mode, Mark Seams along the cube edges you think make sense.
5. U → Unwrap. Compare the new layout to Smart UV Project.

**Answer:** Which unwrap produced cleaner, less-distorted UV islands? Why?

### Step 4: Animation Timing Practice

Open Blender with a default cube:
1. At Frame 1: keyframe the cube at X=0 (press I → Location).
2. At Frame 50: keyframe the cube at X=10.
3. At Frame 100: keyframe the cube at X=10, Z=5.
4. Play the animation. Describe the motion.
5. Open the Graph Editor. Select all keyframes. Right-click → Interpolation Mode → Bezier.
6. Replay. How did the motion change?

**Answer:** Describe in one sentence what Bezier interpolation does to the feel of the movement.

---

## Part C — Strand 5 Targeted Practice

### Step 5: Code Trace Drill

Trace the following Python code manually (no computer). What is printed?

```python
objects = ["Cube", "Sphere", "Cylinder", "Plane"]
count = 0
for obj in objects:
    if len(obj) > 5:
        count += 1
print(count)
```

Your answer: _______________

Check: which objects have names longer than 5 characters?

### Step 6: Flowchart Check

Draw a flowchart for the code in Step 5. Your flowchart must accurately represent the loop and the conditional.

---

## Part D — Practice Quiz Debrief

### Step 7: Full Practice Test

Complete the 20-question practice test from quiz.md (your teacher distributes it). Time yourself — target 25 minutes maximum.

| Category | # Missed | Topics |
|----------|----------|--------|
| Strand 7 | | |
| Strand 5 | | |
| Strand 2 + 1 + 9 | | |
| Binary/Hex | | |

### Step 8: Gap Analysis

For each question missed:
- Identify the standard
- Mark whether you "guessed wrong" or "didn't know this"
- Write the correct concept in one sentence

**Personalized review list (write 3–5 concepts you need to practice most):**
1.
2.
3.
4.
5.

---

## Standards Demonstrated

| ✓/☐ | Standard | What to Show |
|-----|---------|--------------|
| ☐ | 7.6.9 | UV mapping: seam marking + clean unwrap completed |
| ☐ | 7.7.2 | Animation: Bezier interpolation applied, effect described correctly |
| ☐ | 5.3.6 — Code trace | Step 5 trace gives correct answer (2) |
| ☐ | 5.6.7 — Flowchart | Flowchart for Step 5 code is structurally correct |

---

## Submission Checklist

- [ ] Pretest baseline table completed (from pretest scores)
- [ ] Priority strands identified
- [ ] UV mapping mini-lab completed — comparison answer written
- [ ] Animation timing mini-lab completed — Bezier effect described
- [ ] Code trace answer (Step 5)
- [ ] Flowchart (Step 6)
- [ ] Practice quiz score and gap analysis table

---

## Extension Task

Create a personalized 1-page study guide for your lowest-priority strand. Include: 5 key terms with your own definitions, 1 concept diagram, and 2 practice questions with answers. Use it to study for the Initial Test.

---

## ⚑ WebXam Initial Test

**Target administration date: April 23**

The Initial Test itself is the primary deliverable of this unit. Makeup tests must be administered within the same week to preserve the 30-day retake window. Students who score below 60% on a strand should be scheduled for retake review during Unit 4.2 (embedded remediation track).
