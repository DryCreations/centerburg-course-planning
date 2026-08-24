# Unit 3.2 — Code Literacy & Parametric Design: Outline

**Course:** 3D Techniques (145120)
**Quarter:** Q3 | **Weeks:** 23–25 | **Duration:** 3 weeks

---

## Student Overview

### What Is This Unit About?

Not all 3D design is done by hand — some of it is written. This unit introduces programmatic/parametric 3D design: Blender's geometry nodes, basic scripting concepts, and parametric CAD in OnShape (design intent, equations, configurations). You'll produce a parametric object that can be resized by changing a single value, and document how code-driven design differs from manual mesh editing.

### What You'll Be Able to Do

By the end of this unit you will be able to:

- Explain what parametric design means and why it's used in professional engineering workflows
- Use OnShape design intent (named sketches, equations, configurations) to build a resizable part
- Create a basic geometry node setup in Blender (array, point scatter, or transform by attribute)
- Write a code literacy report comparing parametric and direct modeling approaches

### Weekly Snapshot

| Week | Focus | Key Activity |
|------|-------|-------------|
| 23 | Parametric design concepts + OnShape equations | Design intent exercise; resizable parametric part |
| 24 | Blender geometry nodes introduction | Basic node graph; array or point scatter |
| 25 | Code literacy analysis + report | Parametric vs. direct comparison document |

### Documents in This Unit

| File | What It Is | When You Use It |
|------|-----------|----------------|
| `vocab.md` | 14 terms: parametric, design intent, equation, configuration, geometry nodes, procedural, variable | Review Week 23 |
| `quiz.md` | 14 MCQs covering 4.5 and 3.8 standards | Friday quizzes Weeks 23–25 |
| `lab.md` | OnShape equations lab + geometry nodes exercise | Weeks 23–24 — guided parametric exercises |
| `lab-2.md` | Parametric Part + Code Literacy Analysis (Artifact #8) | Weeks 23–25 — parametric model + analysis document |

### Standards Covered

- **4.5.1** — Parametric design and design intent
- **4.5.2** — Equations and configurations in CAD
- **3.8.1** — Geometry nodes fundamentals in Blender
- **3.8.2** — Procedural workflows
- **1.2.5** — Programming and computational thinking in design

---

## Teacher Reference

### Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Mon, Wk 23 | Vocab intro + parametric design demo | Show how changing one equation resizes a whole assembly — contrast with manual resize |
| Tue–Wed, Wk 23 | Lab: OnShape design intent | Name all sketch dimensions; set up 2 equations; verify resize works |
| Thu, Wk 23 | Lab-2: parametric part | Student's own design; must change size by editing a single equation |
| Fri, Wk 23 | Quiz | Parametric vocabulary |
| Mon, Wk 24 | Geometry nodes intro in Blender | Show the node editor; start with an Array modifier equivalent via nodes |
| Tue–Wed, Wk 24 | Lab: geometry nodes exercise | Choose from: array, point scatter, transform by attribute |
| Thu, Wk 24 | Lab-2: document the geometry nodes setup | Node graph screenshot + 1-paragraph explanation of what each node does |
| Fri, Wk 24 | Quiz | Geometry nodes concepts |
| Mon–Tue, Wk 25 | Lab-2: code literacy analysis report | Parametric vs. direct modeling — 3 advantages and 2 limitations for each approach |
| Wed–Thu, Wk 25 | Lab-2: finalize + compile submission | Parametric part + node screenshot + analysis document |
| Fri, Wk 25 | Quiz + submission + portfolio | Artifact #8 |

### Common Issues & Responses

- **Equations break when changed:** Require students to test the parametric part by changing the equation value before submission.
- **Geometry nodes explanation is just description:** "This node multiplies" is not enough. Require: what problem does this solve? what changes if you delete this node?

### Differentiation Notes

- **Students who need more support:** Provide a 3-step OnShape equations tutorial focused on one common use case (a hole that stays centered as the part changes width).
- **Students who finish early:** Extension in lab-2.md — extend the geometry nodes setup to include a custom material driving the node output.

### BPA Connections

Parametric and code-literacy concepts support advanced BPA entries and engineering pathway credentials (PLTW, etc.).
