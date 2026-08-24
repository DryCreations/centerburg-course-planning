# Quiz: Technical Drawing & CAD Foundations

**Course:** 3D Techniques (145120)
**Unit:** 1.2 — Technical Drawing & CAD Foundations
**Weeks:** 3–4 (two quizzes: one per week)
**Time Limit:** 15–20 minutes per quiz
**Format:** Multiple Choice

> **Note:** This unit spans 2 weeks. The **Week 3 quiz** covers technical drawing and basic OnShape workflow (Q1–Q10). The **Week 4 quiz** covers assembly, 3D printing, and export (Q11–Q20). Both quiz pools are included here.

---

## Week 3 Quiz — Sketching, Constraints & CAD Basics

| # | Question | A | B | C | D | Answer | DOK | Standard |
|---|----------|---|---|---|---|--------|-----|---------|
| 1 | Which view in a standard engineering drawing shows an object from directly above? | Front view | Side view | Top view | Isometric view | C | 1 | 7.4.2 |
| 2 | In OnShape, what does it mean when a sketch shows "Fully Constrained"? | The sketch has too many constraints and needs cleanup | All geometry is fixed by dimensions and geometric constraints — ready to extrude | The part has been exported as STL | The sketch is locked and cannot be edited | B | 1 | 7.6.9 |
| 3 | A student needs to round the bottom corners of a block to remove sharp edges. Which CAD operation should they use? | Shell | Extrude | Boolean Subtract | Fillet | D | 1 | 7.6.9 |
| 4 | An extrude operation in CAD: | Splits a solid into two parts | Pushes a 2D sketch profile into a third dimension | Rounds a corner | Creates a hollow interior | B | 1 | 7.6.9 |
| 5 | What does NURBS stand for? | Non-Uniform Rational B-Splines | Networked Unified Render Backup System | Numerically Unique RGB Shader | None of the above | A | 1 | 7.6.10 |
| 6 | A blueprint shows a dimension of 40 mm ± 0.25 mm. What is the minimum acceptable part size? | 40.25 mm | 39.75 mm | 39.5 mm | 40 mm exactly | B | 2 | 7.6.9 |
| 7 | Which operation combines two separate 3D solids into one unified shape? | Boolean Subtract | Boolean Union | Shell | Chamfer | B | 2 | 7.6.9 |
| 8 | **[HOT]** A student is modeling a water bottle in OnShape. They create the outer cylinder and want to hollow it out, leaving 2 mm walls. Which feature should they use? | Shell | Extrude | Boolean Subtract | Fillet | A | 3 | 7.6.9 |
| 9 | **[HOT]** A technical drawing shows front, top, and side views that appear inconsistent — the top view shows a hole that doesn't appear in the front view. What should the student do? | Fix the top view by erasing the hole | Trust the front view and ignore the top view | Investigate why the views conflict — one is likely drawn incorrectly | Accept the inconsistency and model from the side view | C | 3 | 7.4.2 |
| 10 | **[HOT]** What is the key advantage of using a constraint-based CAD tool (like OnShape) over freehand polygon modeling (like Blender) when designing a part for 3D printing? | Constraint-based tools produce better textures | OnShape models are fully parametric — changing one dimension updates the whole part; exact tolerances are guaranteed | Blender cannot export STL | OnShape is faster for all tasks | B | 3 | 7.6.9 |

---

## Week 4 Quiz — Assembly, 3D Printing & Export

| # | Question | A | B | C | D | Answer | DOK | Standard |
|---|----------|---|---|---|---|--------|-----|---------|
| 11 | What does FDM stand for? | Fixed Dimension Modeling | Fused Deposition Modeling | File-Derived Mesh | Focused Digital Manufacturing | B | 1 | 2.4.4 |
| 12 | Which file format is universally used to send 3D models to a slicer for 3D printing? | OBJ | FBX | STL | BLEND | C | 1 | 2.4.4 |
| 13 | What does slicer software do? | Creates 3D models from scratch | Converts an STL file into layer-by-layer printing instructions (G-code) | Renders photorealistic images | Assembles parts into a final product | B | 1 | 2.4.4 |
| 14 | In an OnShape Assembly, a "mate" defines: | The color of two connected parts | The geometric relationship between two parts (flush, concentric, etc.) | The material properties of a part | The boolean operation between two solids | B | 2 | 7.6.5 |
| 15 | Which 3D printing setting most directly controls the visual resolution (smoothness) of a printed surface? | Print temperature | Infill percentage | Layer height | Fan speed | C | 2 | 2.4.4 |
| 16 | A 3D-printed part is 0.3 mm too wide on one side. What is the most likely cause? | Wrong file format | The slicer settings had the wrong scale (%) | Insufficient layer count | The part was modeled without constraints | B | 2 | 2.4.4 |
| 17 | What type of image format is used for vector graphics? | JPG | PNG | SVG | BMP | C | 1 | 7.4.5 |
| 18 | **[HOT]** A mechanical assembly has a shaft that must fit snugly inside a sleeve. The shaft is modeled at exactly 10 mm and the sleeve hole at exactly 10 mm. Will this assembly fit properly after printing? Explain which concept applies. | Yes — identical dimensions always produce a good fit | No — a 0 mm clearance will cause the parts to bind after printing; the designer needs to apply a tolerance | Yes — FDM printing is always perfectly accurate | No — the parts need to be made at different layer heights | B | 3 | 2.4.4 |
| 19 | **[HOT]** A student exports a model from OnShape to Blender for texturing, then exports it again from Blender as STL for printing. The teacher says the STL from Blender will likely be lower quality for printing than the original OnShape STL. Why? | Blender cannot export STL | OnShape models are NURBS-based (mathematically smooth); exporting to a polygon format and back introduces triangulation artifacts that affect print quality | Blender adds materials that corrupt the geometry | OnShape and Blender use different grid sizes | B | 4 | 7.6.10 |
| 20 | **[HOT]** Two students are printing the same object. Student A uses 0.1 mm layer height; Student B uses 0.3 mm layer height. Student A's print finishes in 4 hours; Student B's finishes in 1.5 hours. For a display-quality prop where surface smoothness matters more than speed, which setting is correct and why? | Student B — speed is always more important | Student A — lower layer height produces smoother surfaces that matter for display quality | Student B — the 0.3 mm setting produces better infill strength | Student A — higher temperature automatically improves surface quality | B | 3 | 2.4.4 |

---

## Answer Keys

**Week 3:** B C D B A B B A C B
**Week 4:** B C B B C B C B B B

---

## Standards Covered

| Standard | Description | Questions |
|----------|-------------|-----------|
| 7.4.2 | Select color, shape, size, texture; orthographic views | Q1, Q9 |
| 7.4.5 | Differentiate vector and raster | Q17 |
| 7.6.5 | Import 3D assets / assembly | Q14 |
| 7.6.9 | Create 3D shapes (box modeling/CAD workflow) | Q2, Q3, Q4, Q6, Q7, Q8, Q10 |
| 7.6.10 | Create 3D shapes through NURBS | Q5, Q19 |
| 2.4.4 | Describe emerging technologies (additive manufacturing) | Q11, Q12, Q13, Q15, Q16, Q18, Q20 |

---

## Bell Ringer Pool

*Week 3: Use Q1–Q5 Mon–Thu. Full Week 3 quiz Friday.*
*Week 4: Use Q11–Q16 Mon–Thu. Full Week 4 quiz Friday.*
*Q9, Q10, Q18, Q19 are great for Thursday bell ringers (discussion starters).*
