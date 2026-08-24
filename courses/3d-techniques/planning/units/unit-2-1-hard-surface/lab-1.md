# Lab: Hard Surface Modeling Techniques

**Course:** 3D Techniques (145120)
**Unit:** 2.1 — Polygonal Modeling, Hard Surface Techniques & Animation
**Duration:** Weeks 10–11 (Days 1–4 each week; hard surface focus)

---

## Objective

Use professional hard surface modeling techniques in Blender — polygon workflow with reference images, control loops, Subdivision Surface modifier, Bevel modifier, and Boolean operations — to build a mechanical or consumer electronics object with production-ready topology.

---

## Background

Hard surface modeling is the skill most demanded by game studios, film VFX, product design, and industrial visualization. Every keyboard, vehicle, building, weapon, and consumer device in a game or film is hard surface work. Clean topology that deforms well and renders correctly is the professional standard.

---

## Setup

1. Create a new Blender document named: `[YourName]_Unit2.1_HardSurfaceLab.blend`
2. On your reference handout, choose one of the following objects (or use a teacher-approved alternative):
   - Consumer electronics housing (wireless mouse, game controller side panel, portable speaker)
   - Automotive or mechanical part (exhaust tip, caliper housing, vent grille)
   - Tool or device (padlock, staple remover, clip, HDMI adapter housing)
3. Find 3 reference photos: front, side, and 3/4 view. Save them to your portfolio folder.

---

## Step 1: Reference Image Setup

4. In Blender, press Numpad 1 for front view.
5. In the viewport header, go to **Viewport Overlays → Background Images** (or use the N panel → View → Background Images).
6. Click **Add Image** and load your front reference.
7. Repeat for side view (Numpad 3).
8. Adjust scale and offset so the reference aligns to the grid.

---

## Step 2: Block-In (Box Modeling Start)

9. With **Shift+A**, add a Cube.
10. Enter Edit Mode (Tab). Select all faces.
11. Scale the cube to approximately match the overall proportions of your object.
12. Begin blocking in main forms: extrude sections, loop cut to add topology, bevel large corners.
13. Keep polygon count LOW at this stage — no more than 200 faces for the block-in.
14. Cross-check front and side views against reference images every few minutes.

---

## Step 3: Add Detail with Loop Cuts and Bevels

15. Identify specific features to model in detail: panel gaps, button cutouts, raised logos, recessed surfaces.
16. Add loop cuts to define each feature area.
17. Use **Inset (I)** to create inset panels or button shapes.
18. Use **Extrude (E)** to push or pull surfaces in or out.
19. For sharp hard surface edges: add a **control loop** within 2–3 face widths of each edge you want to remain sharp.

---

## Step 4: Apply Subdivision Surface

20. Exit Edit Mode. In the Properties panel, go to **Modifier Properties** (wrench icon).
21. Add a **Subdivision Surface modifier**. Set Levels Viewport to 2.
22. Inspect the result. Identify any areas where edges went too soft (missing control loops) or any n-gons that are distorting.
23. Return to Edit Mode to fix any topology issues until the subdivision looks correct.

---

## Step 5: Boolean Cutout (at least one required)

24. Add a second object (cube or cylinder) positioned where you want a cutout (button hole, slot, vent opening).
25. Select the main object. Add a **Boolean modifier** → set to **Difference** → select the cutter object.
26. Click Apply.
27. In Edit Mode, inspect the boolean result. Use **Merge by Distance** and manually clean any stray vertices.
28. Add control loops around the boolean edges to restore clean topology.

---

## Step 6: Topology Check

29. In Edit Mode, look for:
   - [ ] No n-gons on curved surfaces (use F3 → Select All by Trait → Faces by Sides if needed)
   - [ ] All faces visible from outside have correct normals (Face Orientation overlay — blue = correct)
   - [ ] Edge loops follow natural form around all holes and features

---

## Standards Demonstrated

| ✓/☐ | Standard | What to Show |
|-----|---------|--------------|
| ☐ | 7.6.9 — Create 3D shapes through box modeling | Reference images loaded; box model built from a primitive; Loop Cut, Extrude, Bevel all used |
| ☐ | 7.6.9 — Control loops and subdivision | Subdivision Surface applied; control loops visible near hard edges; result looks correct |
| ☐ | 7.6.9 — Boolean operation | At least one boolean cutout correctly applied and topology cleaned |
| ☐ | 7.6.9 — Topology quality | No n-gons on subdivided surfaces; edge loops follow form; normals correct |
| ☐ | 7.6.5 — Import 3D assets and environments | Reference images loaded in background |

> **Note:** Unlabeled evidence may not receive credit. Teacher checks for: reference images visible in file, SubDiv modifier visible in stack, control loops visible near edges, boolean result with cleaned topology.

---

## Submission Checklist

- [ ] `.blend` file: `[YourName]_Unit2.1_HardSurfaceLab.blend` saved to portfolio folder
- [ ] Reference images saved in same portfolio folder
- [ ] Subdivision Surface modifier visible in modifier stack (Levels Viewport ≥ 2)
- [ ] At least 1 boolean cutout present with cleaned topology
- [ ] Topology check completed (n-gon check, normals check)

---

## Extension Task

Add a second material to the model using the Shader Editor: create a material with a **Noise Texture** → **Color Ramp** → **Principled BSDF** setup to simulate a brushed metal or textured plastic surface. Render a close-up still of the textured area using Cycles with 64+ samples. Save as `[YourName]_Unit2.1_MaterialTest.png`.
