# Quiz: Polygonal Modeling, Hard Surface Techniques & Animation

**Course:** 3D Techniques (145120)
**Unit:** 2.1 — Polygonal Modeling, Hard Surface Techniques & Animation
**Weeks:** 10–13 (four weekly quizzes; pull as needed from pool below)
**WebXam Note:** Strand 7.6 = 19.54% of EOC. Weight this unit's quiz bank heavily.
**Format:** Multiple Choice, 10–15 questions per week

---

## Questions

| # | Question | A | B | C | D | Answer | DOK | Standard |
|---|----------|---|---|---|---|--------|-----|---------|
| 1 | Box modeling is a workflow that starts by: | Drawing a 2D profile and extruding it | Beginning with a primitive shape (cube, cylinder) and progressively adding detail | Sculpting high-polygon forms, then retopologizing | Tracing a reference image directly | B | 1 | 7.6.9 |
| 2 | What does the Subdivision Surface modifier do to a mesh? | Reduces polygon count for optimization | Smooths the mesh by mathematically subdividing it into more polygons | Adds bevel to all selected edges | Splits the mesh into separate objects | B | 1 | 7.6.9 |
| 3 | Why are control loops placed near sharp edges before applying a Subdivision Surface modifier? | To reduce polygon count | To prevent the SubDiv modifier from rounding those edges into soft curves | To add material properties | To change the face selection mode | B | 2 | 7.6.9 |
| 4 | What is topology in the context of 3D modeling? | The color and texture of a mesh | The arrangement and flow of vertices, edges, and faces in a mesh | The number of polygons in a model | The size of the UV map | B | 2 | 7.6.9 |
| 5 | Which value in the Principled BSDF shader should be set to 1.0 to make a material look like a metal? | Roughness | Emission | Metallic | Subsurface | C | 1 | 7.6.8 |
| 6 | A normal map applied to a mesh: | Physically moves the geometry to create bumps | Creates the illusion of surface detail without adding geometry | Multiplies the polygon count | Controls the reflectivity of the material | B | 2 | 7.6.8 |
| 7 | What must be done to a mesh before an image texture can be applied accurately? | Apply a Subdivision Surface modifier | UV unwrap the mesh | Apply a Boolean modifier | Switch to Cycles render engine | B | 2 | 7.6.8 |
| 8 | In Blender animation, a keyframe is: | A frame with no object motion | A stored value (position, rotation, scale) at a specific frame that defines the start or end of a motion | An automatically generated in-between frame | A render of the entire timeline | B | 1 | 7.6.3 |
| 9 | What does the Graph Editor control in Blender? | The UV unwrap layout | The stack order of modifiers | The shape of animation curves between keyframes — controlling acceleration and easing | The material node connections | C | 2 | 7.6.3 |
| 10 | Which Blender tool creates an edge ring that circles around a mesh? | Bevel | Loop Cut (Ctrl+R) | Inset | Extrude | B | 1 | 7.6.9 |
| 11 | A particle system in Blender is used to: | Add subdivision to a mesh | Generate and simulate many small objects from an emitter (sparks, smoke, rain, grass) | Create UV seams | Apply a follow-path constraint | B | 2 | 7.6.4 |
| 12 | What is the standard professional export workflow for a Blender animation? | Export directly as MP4 from Timeline | Render as image sequences (PNG per frame), then compile in Video Sequencer or external editor | Render as a single large TIFF file | Export as STL and convert | B | 2 | 7.6.6 |
| 13 | **[HOT]** A student's modeled object looks blocky after applying a SubDiv modifier even though they expected smooth curves. What is the most likely cause? | SubDiv doesn't work on hard surface objects | The mesh has too few polygons total | Control loops are missing — without them, SubDiv rounds all corners | The render is using Eevee instead of Cycles | C | 3 | 7.6.9 |
| 14 | **[HOT]** A student unwraps their mesh using Smart UV Project and finds the texture looks stretched on the curved surfaces. What is the best fix? | Switch to Cycles renderer | Manually mark seams along natural breaks on the mesh and use Unwrap instead | Apply a higher SubDiv level | Add a normal map | B | 3 | 7.6.8 |
| 15 | **[HOT]** An animation curve in the Graph Editor shows a perfectly linear slope between two keyframes. What kind of motion will this produce? | Eased in — starts slow, speeds up | Constant jerk — abrupt start and stop | Completely uniform, uniform-speed motion with no acceleration or deceleration | Slow in the middle, fast at start and end | C | 3 | 7.6.3 |
| 16 | **[HOT]** A student wants to model a housing with a rectangular slot cut through it. They use a Boolean modifier set to "Difference." The cutter object passes through but the result has visible normals issues (dark patches). What is likely wrong? | The cutter object needs a UV unwrap | The mesh normals are pointing inward — select all faces in Edit Mode and recalculate normals (Shift+N) | The Boolean modifier needs to be applied before the SubDiv | The roughness value is affecting the normals | B | 3 | 7.6.9 |
| 17 | Which editor in Blender shows each keyframe as a dot on a strip — good for seeing the overall timing structure of an animation? | Graph Editor | Video Sequencer | Dope Sheet | UV Editor | C | 2 | 7.6.3 |
| 18 | **[HOT]** A product visualization requires that a camera flies smoothly around a hard surface object. Which Blender technique achieves this most cleanly? | Keyframe the camera position every 5 frames manually | Constrain the camera to a circular curve path using Follow Path, then keyframe the path's offset | Use the particle system to move the camera | Apply a Mirror modifier to the camera | B | 4 | 7.6.3 |
| 19 | HDRI environments in Blender provide: | An image texture for the mesh surface | A 360° spherical light source and background — produces natural, complex lighting from a single setup | A UV baking target | A particle emitter | B | 2 | 7.6.8 |
| 20 | **[HOT]** A student is modeling a consumer electronics housing. They see their reference photo shows sharp chamfered edges where panels meet and soft rounded edges where the user handles the device. What modeling approach should they use to match this? | Apply SubDiv to all edges and accept the result | Use the Bevel modifier with a weight attribute: high weight on structural edges (chamfer look) and low weight on handling edges (soft rounding) to target different areas differently | Use Boolean cuts for all edges | Model each edge as a separate object | B | 4 | 7.6.9 |

---

## Answer Key

| # | Answer | # | Answer |
|---|--------|---|--------|
| 1 | B | 11 | B |
| 2 | B | 12 | B |
| 3 | B | 13 | C |
| 4 | B | 14 | B |
| 5 | C | 15 | C |
| 6 | B | 16 | B |
| 7 | B | 17 | C |
| 8 | B | 18 | B |
| 9 | C | 19 | B |
| 10 | B | 20 | B |

---

## Standards Covered

| Standard | Description | Questions |
|----------|-------------|-----------|
| 7.6.3 | Create keyframes, apply tweens and paths | Q8, Q9, Q11, Q15, Q17, Q18 |
| 7.6.4 | Create special effects | Q11 |
| 7.6.5 | Create and import 3D assets | Q7 (context) |
| 7.6.6 | Render and export animations | Q12 |
| 7.6.8 | Create and render materials | Q5, Q6, Q7, Q14, Q19 |
| 7.6.9 | Create 3D shapes through box modeling | Q1, Q2, Q3, Q4, Q10, Q13, Q16, Q20 |

---

## Bell Ringer Pool

*Week 10: Q1, Q2, Q3, Q5 Mon–Thu. Quiz from Q1–Q7 Friday.*
*Week 11: Q4, Q10, Q13, Q16 Mon–Thu. Quiz from Q8–Q12 Friday.*
*Week 12: Q6, Q7, Q14, Q19 Mon–Thu. Quiz from Q13–Q16 Friday.*
*Week 13: Q8, Q9, Q15, Q17 Mon–Thu. Full unit quiz from Q1–Q20 Friday (summative bank).*
