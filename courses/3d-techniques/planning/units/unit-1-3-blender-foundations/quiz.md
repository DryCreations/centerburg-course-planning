# Quiz: Blender Foundations

**Course:** 3D Techniques (145120)
**Unit:** 1.3 — Blender Foundations
**Weeks:** 5–7 (three weekly quizzes; pool provided below)
**Time Limit:** 15–20 minutes
**Format:** Multiple Choice

> **Weekly split:** Week 5 quiz → Q1–Q7 (interface + Object Mode); Week 6 quiz → Q8–Q14 (Edit Mode + modeling tools); Week 7 quiz → Q15–Q20 (materials, lighting, rendering). Mix in 1–2 review items from prior weeks each quiz.

---

## Questions

| # | Question | A | B | C | D | Answer | DOK | Standard |
|---|----------|---|---|---|---|--------|-----|---------|
| 1 | What keyboard shortcut toggles between Object Mode and Edit Mode in Blender? | Ctrl+E | Shift+M | Tab | Alt+T | C | 1 | 7.6.9 |
| 2 | In Blender's default layout, the Outliner panel is located: | Bottom left | Bottom right | Top right | Left side N-panel | C | 1 | 7.6.5 |
| 3 | Which key combination adds a loop cut to the selected mesh? | Ctrl+B | Ctrl+R | Ctrl+I | Ctrl+L | B | 1 | 7.6.9 |
| 4 | In Object Mode, pressing **G** then **X** then typing **2** will: | Scale the object to 2 units | Move the object exactly 2 units along the X axis | Rotate the object 2 degrees | Extrude the object 2 units | B | 2 | 7.6.9 |
| 5 | Which Blender panel shows the current scene's list of all objects and collections? | Properties panel | Shader Editor | Outliner | Timeline | C | 1 | 7.6.5 |
| 6 | A student adds a Subdivision Surface modifier to their mesh but the model still looks faceted and low-poly. What most likely needs to be adjusted? | Change the render engine to Cycles | Increase the "Levels Viewport" value in the modifier | Apply a Mirror modifier first | Change the face selection mode | B | 2 | 7.6.9 |
| 7 | What is the main advantage of modeling only one half of a symmetrical object and using the Mirror modifier? | Mirror modifier makes the mesh smoother | It automatically applies subdivision | Modeling half saves time and guarantees the two halves are identical | Mirror modifier improves render quality | C | 2 | 7.6.9 |
| 8 | The **Inset** tool (I) in Edit Mode produces: | A new extrude of the selected face | A smaller face inside the selected face, parallel to the original | A loop cut around the whole mesh | A bevel on the selected edges | B | 1 | 7.6.9 |
| 9 | In a polygon mesh, which face type is considered best for clean subdivision and deformation? | Triangle | N-gon | Quad | Pentagon | C | 2 | 7.6.9 |
| 10 | **[HOT]** A student is modeling a USB drive housing. They've added loop cuts near the edges of the top face. When they apply a Subdivision Surface modifier, why do those loop cuts matter? | Loop cuts speed up rendering by reducing polygon count | Loop cuts near edges hold the sharpness when the SubDiv modifier smooths the mesh — without them, sharp corners will become rounded | Loop cuts change the topology to triangles | Loop cuts are required before using the Mirror modifier | B | 3 | 7.6.9 |
| 11 | Which keyboard shortcut bevels selected edges in Edit Mode? | Ctrl+E | Ctrl+B | Ctrl+I | Alt+E | B | 1 | 7.6.9 |
| 12 | A student wants to extrude a face outward and then move it away from the mesh. Which key sequence achieves both in one operation? | I then G | E then move cursor | Tab then E | Ctrl+B | B | 2 | 7.6.9 |
| 13 | Which Blender mode is used for assigning materials to specific parts of a mesh (not the full object)? | Object Mode — select the object, then add material | Edit Mode — select specific faces, then assign the material to those faces | Sculpt Mode | Texture Paint Mode | B | 2 | 7.6.8 |
| 14 | **[HOT]** A student's model has several n-gons on the top surface. When they apply a Subdivision Surface modifier, those faces distort irregularly. What is the correct fix? | Apply a shade smooth setting | Delete and remodel the top surface using quads | Switch to Cycles render engine | Add more loop cuts to the bottom of the model | B | 3 | 7.6.9 |
| 15 | In the Principled BSDF shader, a Metallic value of 1.0 and Roughness value of 0.05 will produce: | A rough matte plastic look | A mirror-sharp reflective metal look | A translucent glass material | A clay-like diffuse surface | B | 2 | 7.6.8 |
| 16 | Which render engine produces photorealistic results through path tracing? | Eevee | Workbench | Cycles | Bloom | C | 1 | 7.6.6 |
| 17 | In a 3-point lighting setup, the **Fill Light** serves which function? | Creates the primary shadow | Provides the brightest illumination | Softens the shadows created by the Key Light | Adds a rim highlight on the back of the subject | C | 2 | 7.4.2 |
| 18 | UV mapping is needed before applying: | A Subdivision Surface modifier | A Mirror modifier | An image texture to a mesh | A 3-point lighting setup | C | 2 | 7.6.8 |
| 19 | **[HOT]** A product visualization shows a brushed aluminum surface. To recreate this in Blender, which Principled BSDF settings are most important? | High Metallic, low Roughness, blue Base Color | Low Metallic, high Roughness, any Base Color | High Metallic, moderate Roughness (0.3–0.5), neutral Base Color | High Emission, zero Roughness | C | 3 | 7.6.8 |
| 20 | **[HOT]** A student renders a scene using Eevee and it looks flat and unrealistic compared to the Cycles render. The teacher says this is expected — why is Cycles more accurate? | Cycles renders at higher resolution | Cycles simulates how light physically bounces between surfaces (path tracing), producing accurate shadows, caustics, and global illumination — Eevee approximates these effects for speed | Cycles uses better texture compression | Cycles automatically optimizes material settings | B | 3 | 7.6.6 |

---

## Answer Key

| # | Answer | # | Answer |
|---|--------|---|--------|
| 1 | C | 11 | B |
| 2 | C | 12 | B |
| 3 | B | 13 | B |
| 4 | B | 14 | B |
| 5 | C | 15 | B |
| 6 | B | 16 | C |
| 7 | C | 17 | C |
| 8 | B | 18 | C |
| 9 | C | 19 | C |
| 10 | B | 20 | B |

---

## Standards Covered

| Standard | Description | Questions |
|----------|-------------|-----------|
| 7.6.5 | Create and import 3D assets and environments | Q2, Q5 |
| 7.6.6 | Render and export | Q16, Q20 |
| 7.6.8 | Create and render materials | Q13, Q15, Q18, Q19 |
| 7.6.9 | Create 3D shapes through box modeling | Q1, Q3, Q4, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q14 |
| 7.4.2 | Select color, shape, size | Q17 |

---

## Bell Ringer Pool

*Week 5: Use Q1, Q2, Q4, Q5 Mon–Thu. Quiz from Q1–Q7 on Friday.*
*Week 6: Use Q8, Q9, Q11, Q12 Mon–Thu. Quiz from Q8–Q14 on Friday.*
*Week 7: Use Q15, Q16, Q17, Q18 Mon–Thu. Quiz from Q15–Q20 on Friday.*
