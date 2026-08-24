# Lab: Schematic Reading & Constrained OnShape Sketch

**Course:** 3D Techniques (145120)
**Unit:** 1.2 — Technical Drawing & CAD Foundations
**Duration:** 2–3 days (Week 3, Days 1–3)

---

## Objective

Read a 2D technical drawing (blueprint) with multiple views and tolerances, then recreate the part's profile in OnShape as a fully constrained sketch. Apply extrude and fillet operations to produce a printable solid.

---

## Background

Before any real-world part gets manufactured, someone had to read a drawing and model it exactly as specified. This skill — reading and translating a technical drawing into a 3D model — is the foundation of manufacturing, product design, and engineering careers. In CAD, "fully constrained" means your sketch is exactly as described: no wiggle, no ambiguity.

---

## Setup

1. Log in to OnShape. Create a new document named: `[YourName]_Unit1.2_Lab`
2. Open the teacher-provided schematic drawing (paper handout or projected). Study all three views (front, top, side) before starting.
3. Identify and record on the handout: the overall width, height, and depth; any holes or cutouts; any fillets or chamfers called out; the tolerance spec.

---

## Step 1: Sketch the Profile

4. Open a new Part Studio. Select the Front Plane. Click **Sketch**.
5. Draw the outline of the part's front view profile using the Line tool. Use exact dimensions from the blueprint. Do **not** freehand — enter each value numerically.
6. Add all **geometric constraints** (horizontal, vertical, coincident, tangent as needed).
7. Add all **dimension constraints** (width, height, and any internal features).
8. Confirm the indicator shows **Fully Constrained** before proceeding. If it shows under-constrained, find and fix the missing constraint.

---

## Step 2: Extrude the Solid

9. Exit the sketch. Select the closed profile.
10. Click **Extrude**. Enter the depth dimension from the blueprint. Click the green checkmark.
11. If there are internal cutouts (holes, slots), create additional sketches on the appropriate face and use **Extrude → Remove** to cut them.

---

## Step 3: Apply Fillets and Chamfers

12. Locate any fillets or chamfers called out in the blueprint.
13. Apply each operation using the Fillet/Chamfer tool. Enter the radius or distance exactly as specified.
14. Inspect the result — do the edges look exactly as the blueprint describes?

---

## Step 4: Shell (if applicable)

15. If the blueprint shows a hollow part (like a box with walls), apply the **Shell** feature with the wall thickness listed in the blueprint notation.

---

## Step 5: Verify Dimensions

16. Use the **Measure** tool (Tools → Measure) to verify at least 3 critical dimensions match the blueprint.
17. Record any discrepancy in the table below:

| Dimension | Blueprint Value | Measured in OnShape | Match? (✓/✗) |
|-----------|----------------|--------------------|----|
| | | | |
| | | | |
| | | | |

---

## Step 6: Export as STL

18. Right-click on the part in the Feature List → Export.
19. Select **STL** format. Keep default settings (fine resolution). Save to your portfolio folder.
20. Open PrusaSlicer or Cura. Import the STL. Confirm the model loads without errors and appears correct.

*Note: The actual print happens in the Unit 1.2 project (Blueprint to Print). This lab stops at the verified STL.*

---

## Standards Demonstrated

| ✓/☐ | Standard | What to Show |
|-----|---------|--------------|
| ☐ | 7.4.2 — Select color, shape, size, texture of objects; read technical views | Schematic reading: all three views identified; dimensions labeled on handout |
| ☐ | 7.6.9 — Create 3D shapes through box modeling (CAD) | Sketch is fully constrained; extrude produces correct solid |
| ☐ | 7.6.9 — Apply modifiers (fillet/chamfer/shell) | Fillets/chamfers match blueprint specifications |
| ☐ | 7.6.10 — Create 3D shapes through NURBS | STL export from NURBS solid produced; no errors in slicer |
| ☐ | 2.4.4 — Describe additive manufacturing workflow | STL successfully imported into slicer; scale confirmed correct |

> **Note:** Unlabeled evidence may not receive credit. Make sure the teacher sees your "Fully Constrained" indicator and your dimension verification table.

---

## Submission Checklist

- [ ] OnShape document named correctly: `[YourName]_Unit1.2_Lab`
- [ ] Sketch is fully constrained (teacher check or screenshot)
- [ ] Extrude/cutout/fillet operations applied per blueprint
- [ ] Dimension verification table filled in (3+ dimensions measured)
- [ ] STL exported and loads in slicer without errors

---

## Extension Task

Add a second view: model a second variation of the same part but increase the wall thickness by 2 mm and apply a different chamfer size on the top edge. Export both as separate STLs and compare the two in the slicer side by side. Write 2 sentences describing how the design change affects the part visually and functionally.
