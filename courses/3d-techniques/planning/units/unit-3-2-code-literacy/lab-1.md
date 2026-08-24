# Lab: Code Literacy — Annotation, Tracing & Flowcharts

**Course:** 3D Techniques (145120)
**Unit:** 3.2 — Scripting & Code Literacy
**Duration:** Weeks 23–25

> **DIFFERENTIATED LAB — Read your track carefully.**
>
> - **Core Track (all students):** Complete all Core sections. You will read, trace, and annotate given scripts — no writing code required unless you choose the Extension.
> - **Extension Track (students opting in):** Complete Core sections first, then the Extension sections. Extension requires writing and running Blender Python scripts. Opt-in at the start of Week 23.

---

## Objective

**Core:** Develop code literacy — the ability to read, trace, and annotate Python scripts; identify control structures; build flowcharts from code; interpret error types.

**Extension:** Write, run, and reflect on working Blender Python scripts; develop a Parametric Modifier Script project.

---

## Background

~26% of your WebXam score comes from Strand 5 (programming). The majority of those questions test *reading* code (logic tracing, control structure ID, error spotting, SDLC concept matching) — not writing it. Core track gives you full Strand 5 coverage. Extension track adds the "write code" question type *and* builds a marketable Blender automation skill.

---

## CORE LAB (ALL STUDENTS)

### Week 23 — Reading & Annotating Scripts

#### Step 1: Syntax Tour
1. Open the handout "Script Set A" (5 Python scripts of increasing complexity — each moves or colors objects in Blender scenes).
2. Identify and label on each script:
   - All variable definitions (circle with V)
   - All conditional statements (circle with C)
   - All loops (circle with L)
   - All function definitions (circle with F)
   - All comments (circle with #)

#### Step 2: Line-by-Line Trace
3. Take Script #3 (a for loop that places cubes in a row).
4. Trace execution line by line. For each step, write: "Line X: the program does [action]; the variable [name] now holds [value]."
5. Predict: what does the scene look like after the script runs? Draw a rough top-view diagram.

#### Step 3: Truth Table Drill
6. Given the following expressions, fill in the truth table (all combinations of A, B, C):
   - Expression 1: `A AND B`
   - Expression 2: `A OR (NOT B)`
   - Expression 3: `(A AND B) OR (NOT C)`

#### Step 4: Binary / Hexadecimal Conversions
7. Convert the following (show work):
   - Binary → Decimal: 1101, 10110, 111000
   - Decimal → Binary: 9, 25, 48
   - Convert hex color codes to R, G, B values: #FF8800, #003399, #AABBCC

---

### Week 24 — Flowcharts, SDLC & Pseudocode

#### Step 5: Flowchart from Code
8. Open "Script B" (a 30-line script that processes objects in a Blender scene — applies materials based on conditions).
9. Draw a flowchart that accurately represents the script's logic. Use:
   - Rounded rectangle = Start/End
   - Rectangle = Process step
   - Diamond = Decision (Yes/No branches)
   - Arrows showing flow, including loop back arrows

#### Step 6: Pseudocode Exercise
10. Your teacher will give you a plain-language problem description: *"For each object in the scene, if it is taller than 2 units, scale it down to exactly 2 units. Otherwise, do nothing."*
11. Write pseudocode for this problem. Then compare it to the actual script that solves it (on the back of the handout). How closely does your pseudocode match?

#### Step 7: Bug Hunt
12. "Script C" has 3 intentional errors. For each error:
    - Identify the line number
    - Classify: Syntax error or Logic error
    - Write one sentence: "This error would cause the program to [effect]."

#### Step 8: Version Control Demo Response
13. Teacher demonstrates: `git add`, `git commit`, `git log`, `git diff` between two script versions.
14. Answer on paper:
    - What information does `git log` display?
    - What does `git diff` show between two commits?
    - Why is version control useful even when working alone?

---

### Week 25 — IDE Navigation & WebXam Prep

#### Step 9: Blender Scripting Editor Tour
15. Open Blender. Switch to the **Scripting workspace** (top bar, click "Scripting").
16. Identify and label on your handout: Text Editor area, Python Console, Info Log, Syntax Highlighting.
17. Open Script D in the Text Editor. Run it (Alt+P). Observe the result in the 3D viewport.
18. Answer: What happened? Where in the Info Log can you see the Python call that was generated?

#### Step 10: Call-Stack Trace
19. Open "Script E" (3 functions: `main()` calls `setup_objects()` which calls `apply_material()`).
20. Trace the execution order: which function runs first? What is the input and output of each?

#### Step 11: WebXam Strand 5 Practice
21. Complete the teacher-provided Strand 5 practice question set (10–15 MCQ in WebXam format). Score yourself.
22. Identify which question types were hardest: concept ID, logic trace, error spotting, or SDLC.

---

## EXTENSION LAB (OPT-IN STUDENTS — Complete Core FIRST)

### Week 23 Extension — Modify a Script

**E1.** Take Script #4 from Step 2 (the for loop that places cubes in a row).
In Blender's Scripting Editor, modify the script to:
- Change the object type from cube to sphere
- Increase the step distance between objects (edit the position offset value)
- Add an `if` statement that changes the color every other object (alternate between red and blue)

Target: a working 15–20 line Blender Python script. Test it. Document what each change did.

---

### Week 24 Extension — Write a Full Script

**E2.** Write a complete Blender Python script from scratch:
- Places objects in a user-defined geometric pattern (spiral, grid, circle — your choice)
- Must include at least: one function, one for loop, one conditional, and comments throughout
- Submit: the script file (.py) + a flowchart of the script's logic as a pair

---

### Week 25 Extension — Parametric Modifier Script Project

**E3.** Write the Parametric Modifier Script:
- Script applies different combinations of Blender modifiers (Subdivision + Bevel, or Displace + Solidify) to selected objects based on their name or collection
- Must accept at least one parameter (e.g., the subdivision level passed as a variable at the top of the file)
- Use Git: create a local repository, make at least 2 commits as you develop the script
- Peer walkthrough: explain one design decision to a partner (required to receive Extension credit)

---

## Standards Demonstrated

| ✓/☐ | Track | Standard | What to Show |
|-----|-------|---------|--------------|
| ☐ | Core | 5.3.1–5.3.2 — Boolean logic / truth tables | Truth table drill completed — all expressions evaluated correctly |
| ☐ | Core | 5.3.4, 5.3.6, 5.3.7 — Control structures | Script annotation labels all conditionals, loops, functions |
| ☐ | Core | 5.4.6–5.4.7 — Error identification | Bug hunt: all 3 errors identified, classified, and explained |
| ☐ | Core | 5.5.5 — Naming conventions and comments | Script annotation correctly identifies all comments |
| ☐ | Core | 5.6.6–5.6.7 — Pseudocode and flowcharts | Flowchart-from-code matches script logic; pseudocode matches teacher example |
| ☐ | Core | 5.6.12 — Agile vs. Waterfall | Version control demo questions answered correctly |
| ☐ | Core | 5.7.1–5.7.3 — Version control | Git log/diff questions answered; concepts explained |
| ☐ | Core | 2.3.1–2.3.2 — Binary/hex | All conversions completed with work shown |
| ☐ | Ext. | 5.3.8–5.3.12 — Write code | E1 modified script runs correctly; E2 original script complete with function + loop + conditional |
| ☐ | Ext. | 5.4.1–5.4.5 — IDE and scripting | Script runs in Blender Scripting Editor; E3 Parametric Script functional |
| ☐ | Ext. | 5.7.1–5.7.3 Applied — Git | Repository created; at least 2 commits with messages; `git log` shows history |

---

## Submission Checklist

**Core students:**
- [ ] Script Set A annotation (all 5 scripts labeled)
- [ ] Line-by-line trace of Script #3 + scene prediction diagram
- [ ] Truth table drill (all 3 expressions, all combinations)
- [ ] Binary/hex conversion worksheet
- [ ] Flowchart of Script B (week 24)
- [ ] Pseudocode comparison writeup
- [ ] Bug hunt: 3 errors identified and explained
- [ ] Version control demo response (4 questions)
- [ ] Blender Scripting Editor tour handout
- [ ] Call-stack trace of Script E
- [ ] Strand 5 practice quiz score

**Extension students (in addition to Core):**
- [ ] E1: Modified script file + description of 3 changes
- [ ] E2: Original script (.py) + matching flowchart
- [ ] E3: Parametric Modifier Script (.py) + Git repository (2+ commits) + peer walkthrough log

---

## Extension Task (Beyond Extension Track)

Can't get enough? Implement a Blender Python script that examines every mesh in the scene and generates a text report (printed to the Info panel) listing: object name, polygon count, material count, and whether normals are correct (all facing outward). This is a production-utility script — the kind used on real pipelines.
