# Lab 2: Parametric Part + Code Literacy Analysis

**Course:** 3D Techniques (145120)
**Unit:** 3.2 — Scripting & Code Literacy
**Duration:** 3 weeks | **Weeks:** 23–25
**Tools Needed:** OnShape (parametric modeling), Blender (geometry nodes or scripting editor), annotated scripts from lab

---

## Objective

By the end of this lab, students will be able to:

- Build an OnShape parametric part using at least one equation or variable-driven dimension
- Capture a Blender Geometry Nodes or Scripting Editor screenshot showing a node network or script
- Write a 1-page analysis comparing parametric vs. direct modeling approaches

---

## Background

Strand 5 (Programming) accounts for ~26% of the WebXam. Most questions test whether you can read and reason about code — not write it from memory. This lab-2 adds a hands-on production artifact to that analytical work.

---

## Instructions

### Step 1 — OnShape Parametric Part (Days 1–3)

In OnShape, build a part with at least 1 equation-driven dimension (e.g., a gear where tooth count drives all other dimensions, or a structural bracket where one master variable controls multiple features). Take a screenshot showing: the part, the equation table or variable panel, and the feature tree.

### Step 2 — Change a Parameter and Document the Result

Change your master variable. Screenshot the before/after to show the model updating automatically. Write 1–2 sentences: what changed, and how does this demonstrate parametric modeling's advantage over direct modeling?

### Step 3 — Blender Geometry Nodes or Script Screenshot (Days 3–4)

In Blender, either: (A) Set up a simple Geometry Nodes network (scatter objects, add subdivision, or modify a mesh procedurally) and screenshot the node editor, OR (B) Run one of the annotated scripts from the lab in the Scripting Editor and screenshot the script with annotations visible.

### Step 4 — Comparative Analysis (Day 5)

Write a 1-page (or 400-word) analysis: 
- What is parametric modeling good for? What is direct modeling good for?
- Where does scripting/node-based modeling fit into a professional pipeline?
- Which approach would you use for your BPA project, and why?

### Step 5 — Compile and Submit

Assemble in a Google Doc or PDF: OnShape screenshots (before/after + equation table), Blender screenshot, and analysis. Save to portfolio folder as `[YourName]_Unit3.2_CodeLiteracy`. Add to portfolio as Artifact #9.

---

## Standards Demonstrated

| ✓ | Standard | What to Show |
|---|----------|--------------|
| ☐ | **5.3.4** — Control structures in given code | Annotated script or node network showing conditional logic |
| ☐ | **5.6.1–5.6.5** — SDLC phases | Analysis describes planning → build → test process for parametric part |
| ☐ | **7.4.6** — Select appropriate software | Analysis compares OnShape vs. Blender for different use cases |
| ☐ | **2.3.1–2.3.2** — Binary/hex concepts | Lab annotation work (cross-reference lab.md checklist) |

> **How you are assessed:** Each standard is demonstrated (full credit) or not demonstrated (no credit).

---

## Submission Checklist

- [ ] OnShape parametric part screenshots (before + after parameter change) uploaded
- [ ] Equation table or variable panel screenshot visible
- [ ] Blender geometry nodes or scripting screenshot uploaded
- [ ] 1-page comparative analysis submitted
- [ ] All 4 standards above have labeled evidence
- [ ] Added to portfolio as Artifact #9

---

## Extension Task

> **Finished early?** Write a README.md file for your OnShape parametric part: describe what it is, what the master variable controls, what Blender version was tested with (if applicable), and how another student could modify it. This mirrors professional open-source documentation. Label it "Extension — Unit 3.2 Lab 2."

> **DIFFERENTIATED PROJECT — TWO TRACKS**
>
> - **Core Track (all students):** Code Literacy Portfolio — demonstrates reading, tracing, annotating, and understanding code through non-writing activities.
> - **Extension Track (students opting in):** Parametric Modifier Script — demonstrates writing, testing, and documenting a working Blender Python automation script.

---

## Overview

Strand 5 (Programming) accounts for ~26% of the WebXam. Most Strand 5 questions test whether you can *read and reason about code* — not write it from memory. The Core project builds those skills deliberately. The Extension project adds writing ability for students who want it.

Both tracks result in a portfolio artifact that demonstrates programming knowledge at the appropriate level.

---

## CORE: Code Literacy Portfolio

### What You're Producing

A 3–4 page document (or digital equivalent) that demonstrates your ability to read, trace, annotate, and reason about Python code. This is *not* a coding project — it is a documentation and analysis project.

### Deliverables

| Component | Description | Standards |
|-----------|-------------|-----------|
| **Annotated Script Set** | All 5 scripts from Week 23 lab with complete annotations (variables, control structures, functions, comments labeled) | 5.3.4, 5.5.5 |
| **Script Trace Report** | Line-by-line trace of one 30-line script with a diagram of the resulting scene state | 5.3.9 |
| **Flowchart Portfolio** | Clean, final flowchart of Script B (Week 24 lab) + pseudocode comparison writeup | 5.6.6, 5.6.7 |
| **Bug Hunt Report** | 3 errors identified, classified, and explained from Script C | 5.4.6, 5.4.7 |
| **Concept Summary** | 1-page summary of: Boolean logic, SDLC phases, Agile vs. Waterfall, Git concepts | 5.3.1, 5.6.1, 5.6.12, 5.7.1 |
| **Binary/Hex Reference** | Completed conversion exercises + a personal reference card (base-2/base-16 system summary) | 2.3.1, 2.3.2 |

### Milestones

| Milestone | Due | Deliverable |
|-----------|-----|-------------|
| Annotated scripts + truth tables | End of Week 23 | From lab |
| Flowchart + bug hunt + conversion exercises | End of Week 24 | From lab |
| Concept summary + all components compiled into portfolio | End of Week 25 | Complete portfolio document |

---

## EXTENSION: Parametric Modifier Script

### What You're Producing

A working Blender Python script that automates modifier application based on object properties (name, collection, or custom attribute). Developed iteratively using Git version control. Peer-reviewed and documented.

### Deliverables

| Component | Description | Standards |
|-----------|-------------|-----------|
| **E1 Modified Script** | Modified version of Script #4 (Week 23 lab) — object type, step, and color conditional changed | 5.3.3–5.3.7 |
| **E2 Original Script + Flowchart** | From-scratch script with function + loop + conditional; paired with a matching flowchart | 5.3.8–5.3.12, 5.6.7 |
| **E3 Parametric Modifier Script** | Main deliverable (see below) | 5.4.1–5.4.5, 5.6.11–5.6.17 |
| **Git Repository** | Local repo with ≥2 commits showing script development progression | 5.7.1–5.7.3 |
| **Peer Walkthrough Log** | Brief written account of 1 design decision explained to a partner | 5.6.9 |

### E3: Parametric Modifier Script — Specification

The script must:
1. Accept one or more parameter values defined as variables near the top of the file (e.g., `SUBDIVISION_LEVEL = 2`)
2. Iterate over all mesh objects in the active Blender scene
3. Apply a modifier (or modifier stack) to each object based on a condition:
   - If the object's name starts with "HD_", apply Subdivision Surface at `SUBDIVISION_LEVEL`
   - If the object's name starts with "BEVEL_", apply a Bevel modifier with a configurable width
   - Otherwise, skip the object and print a message to the Info log
4. Print a summary to the console: how many objects were modified, how many were skipped

### Milestones

| Milestone | Due | Deliverable |
|-----------|-----|-------------|
| E1 modified script tested and running | End of Week 23 | .py file + description |
| E2 original script + flowchart | End of Week 24 | .py file + flowchart PDF |
| E3 Parametric Script (functional + commented) | End of Week 25 | .py file |
| Git repository with 2+ commits | End of Week 25 | Git log screenshot |
| Peer walkthrough | Week 25, Day 3–4 | Log entry (who, what was explained) |

---

## Standards Addressed

**Core Track:**

| Standard | Description | Deliverable |
|----------|-------------|------------|
| 2.3.1–2.3.2 | Binary/hex | Binary/hex reference card |
| 5.3.1–5.3.2 | Boolean logic / truth tables | Truth table exercises from lab |
| 5.3.4, 5.3.6, 5.3.7 | Control structures in given scripts | Annotated script set |
| 5.4.6–5.4.7 | Error identification | Bug hunt report |
| 5.5.5 | Comments and naming | Annotations label all comments |
| 5.6.1–5.6.10 | SDLC | Concept summary SDLC section |
| 5.6.6–5.6.7 | Pseudocode / flowcharts | Flowchart portfolio |
| 5.6.12 | Agile vs. Waterfall | Concept summary |
| 5.7.1–5.7.3 | Version control | Concept summary + demo response |

**Extension Track (in addition to Core):**

| Standard | Description | Deliverable |
|----------|-------------|------------|
| 5.3.8–5.3.12 | Write complex structures, functions, recursion | E2 + E3 scripts |
| 5.4.1–5.4.5 | Configure IDE, write/run/test scripts | Blender Scripting Editor — all scripts run in-editor |
| 5.6.9 | Peer review of code | Peer walkthrough log |
| 5.6.11–5.6.17 | Full SDLC for script project | E3 development + git commits |
| 5.7.1–5.7.3 Applied | Git repository with actual commits | Git repo + log screenshot |

---

## Submission Checklist

**Core students:**
- [ ] All lab deliverables completed (submitted through lab.md checklist)
- [ ] Concept summary page written
- [ ] All components compiled into one portfolio document
- [ ] Portfolio saved as `[YourName]_Unit3.2_CodeLiteracyPortfolio.pdf/docx`

**Extension students:**
- [ ] Core portfolio also submitted
- [ ] E1, E2, E3 script files (.py) in portfolio folder
- [ ] Git repo screenshot showing 2+ commits
- [ ] Peer walkthrough log entry
- [ ] E3 script runs in Blender without errors

---

## Portfolio Note

Code Literacy Portfolio = Artifact #9 (Core) or Artifacts #9–10 (Extension scripts). Strand 5 is 26% of the WebXam. What you produce here is direct preparation for the April EOC.

---

## Extension Task

Document your E3 Parametric Modifier Script with a README file (plain text or Markdown): describe what the script does, how to use it, what parameters to adjust, and what Blender version it was tested with. This mirrors professional open-source script documentation. Save it as `README.md` in your Git repository.
