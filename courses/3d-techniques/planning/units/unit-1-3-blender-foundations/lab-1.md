# Lab: Blender Interface Navigation & First Render

**Course:** 3D Techniques (145120)
**Unit:** 1.3 — Blender Foundations
**Duration:** Week 5, Days 1–3; extended to Week 6 for render polish

---

## Objective

Navigate Blender's interface confidently using keyboard shortcuts, manipulate viewport navigation and objects, and produce a first rendered image using Eevee. Build the reflexes needed for production-level work in Unit 2.1.

---

## Background

Blender's workflow is entirely keyboard-shortcut driven. Professionals rarely click menus once they know the shortcuts. This lab will burn in the core shortcuts — G/S/R/Tab/Numpad — so they become automatic. Every future unit assumes you know these.

---

## Part A — Viewport Navigation (Week 5, Day 1)

### Step 1: Open Blender and Orient Yourself
1. Open Blender. You should see the default startup: a cube, camera, and point light.
2. Identify and label on your handout: the **3D Viewport**, **Outliner**, **Properties Panel**, **Timeline**, and **Info bar**.

### Step 2: Viewport Navigation Drills
Practice each of the following. Check each box once you can do it without looking:
- [ ] **Middle Mouse** — orbit around the scene
- [ ] **Middle Mouse + Shift** — pan around the scene
- [ ] **Scroll Wheel** — zoom in/out
- [ ] **Numpad 1** — front view
- [ ] **Numpad 7** — top view
- [ ] **Numpad 3** — right view
- [ ] **Numpad 5** — toggle Orthographic / Perspective
- [ ] **Numpad 0** — camera view

3. Tell to your partner: what keyboard shortcut gets you to front view? To camera view?

---

## Part B — Object Mode Transforms (Week 5, Day 2)

### Step 3: Transform the Default Cube
4. Click the cube to select it (orange outline = selected).
5. Practice each transform:
   - **G** → click to confirm, **Esc** to cancel
   - **G + X** → move only on X axis
   - **G + Z + 2** → move exactly 2 units on Z (type the number)
   - **S + 0.5** → scale to half size
   - **R + Y + 45** → rotate 45 degrees on Y axis

6. Place the cube exactly at X=3, Y=0, Z=1. Use the N panel (press N) or manual transforms. Verify the Location values in the N panel match.

### Step 4: Still-Life Composition
7. Using **Shift+A** to add new objects, build a still-life scene with **5 different primitive shapes**.
8. Use transforms: each object must be at a unique position, scale, and rotation — no two in the same location.
9. Apply one flat material color to each object (see Part D for material workflow if needed).
10. Arrange the scene so it looks intentional from the front (Numpad 1) view.

---

## Part C — Edit Mode Intro (Week 6, Days 1–2)

### Step 5: Enter Edit Mode
11. Select the cube. Press **Tab** to enter Edit Mode.
12. Press **A** to select all, then **A** again to deselect all.
13. Switch between Vertex, Edge, and Face select modes (1, 2, 3 on the keyboard — not Numpad).

### Step 6: Basic Mesh Operations
14. Select the top face of the cube (face select mode → click top face).
15. Press **E** to extrude it upward. Move your mouse, then click to confirm.
16. Press **Ctrl+R** on the side of the cube to add a loop cut. Scroll the mouse wheel to add additional loops. Click to confirm, right-click to cancel the slide.
17. Press **Ctrl+B** on a top edge to bevel it. Adjust the width, click to confirm.

### Step 7: Exit and Save
18. Press **Tab** to return to Object Mode. Save the file as `[YourName]_Unit1.3_Lab.blend` to your portfolio folder.

---

## Part D — Materials and Lighting (Week 7, Days 1–2)

### Step 8: Create a Material
19. Select your main object. In the **Properties panel**, click the **Material Properties** sphere icon.
20. Click **New**. The default material uses the **Principled BSDF** shader.
21. Set: Base Color → choose a color. Set Metallic → 0.8 and Roughness → 0.2. Observe the result in Material Preview mode (Z → Material Preview or press the sphere icon in the viewport header).

### Step 9: Multiple Materials
22. Create a second material with different settings (e.g., Base Color: dark gray, Metallic: 0.0, Roughness: 0.9).
23. In Edit Mode, select specific faces and click **Assign** to assign the second material to those faces.

### Step 10: 3-Point Lighting Setup
24. Delete the default point light (select → X → Delete).
25. Set up a 3-point light rig:
    - **Key Light:** Add an Area light → Position it 45° to the upper right of the subject → Strength: 500–1000W
    - **Fill Light:** Add a second Area light → Position 45° to the upper left, further back → Strength ~200–400W
    - **Rim Light:** Add a third Area light → Position behind and slightly above the subject → Strength ~150–300W

### Step 11: Camera and Render
26. Position the camera (Numpad 0 for camera view, then Numpad 1 to see front/adjust). Use **G + MMB** in camera view to pan, **G + Z + Z** to move forward/back.
27. Switch to **Eevee** render engine (Properties → Render Properties → Render Engine).
28. Click **Render → Render Image** (F12). Wait for the render to complete.
29. Save the render: **Image → Save As** → save as PNG to your portfolio folder, named `[YourName]_Unit1.3_Render.png`.

---

## Standards Demonstrated

| ✓/☐ | Standard | What to Show |
|-----|---------|--------------|
| ☐ | 7.6.5 — Create and import 3D assets and environments | Scene contains at least 5 objects; objects are named and organized in the Outliner |
| ☐ | 7.6.8 — Create and render materials in a 3D environment | At least 2 materials with distinct PBR values; faces correctly assigned |
| ☐ | 7.6.9 — Create 3D shapes through box modeling | Edit Mode operations applied: Extrude, Loop Cut, Bevel minimum |
| ☐ | 7.4.2 — Select color, shape, size, texture | 3-point lighting setup present; light positions described in submission note |
| ☐ | 7.6.6 — Render and export | PNG render saved to portfolio folder; Eevee engine used |

---

## Submission Checklist

- [ ] `.blend` file saved: `[YourName]_Unit1.3_Lab.blend`
- [ ] Final render saved: `[YourName]_Unit1.3_Render.png`
- [ ] At least 5 objects in the scene with distinct positions/scales/rotations
- [ ] At least 2 materials with different PBR values assigned to different objects or faces
- [ ] 3-point lighting setup in place (teacher can see in Outliner: 3 lights named Key/Fill/Rim)
- [ ] Edit Mode operations visible in the mesh (Extrude visible, loop cut visible, bevel visible)

---

## Extension Task

Apply a Node-based texture: add a **Noise Texture** node connected to the Base Color of one material in the Shader Editor. Observe how the node-based shader changes the look. Render again and compare the two renders — append a brief note in your submission explaining what the Noise Texture does and how nodes differ from single-value material inputs.
