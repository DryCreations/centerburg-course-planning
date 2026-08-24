# Vocabulary: Polygonal Modeling, Hard Surface & Animation

**Course:** 3D Techniques (145120)
**Unit:** 2.1 — Polygonal Modeling, Hard Surface Techniques & Animation
**Weeks:** 10–13
**WebXam Weight: Strand 7.6 = 19.54% EOC — highest weighted strand**

---

## Terms

| Term | Definition | Related Standard | DOK |
|------|-----------|-----------------|-----|
| **Topology** | The arrangement and flow of vertices, edges, and faces in a mesh — good topology follows natural form and deforms cleanly | 7.6.9 | 2 |
| **Edge loop** | A continuous ring of edges that circles around a mesh — edge loops define form, control subdivision, and allow clean deformation | 7.6.9 | 2 |
| **Control loop** | An edge loop placed near a sharp edge to "hold" that sharpness when a Subdivision Surface modifier is applied | 7.6.9 | 3 |
| **Box modeling** | A modeling workflow that starts with a primitive (box, sphere, cylinder) and progressively adds detail via extrude, loop cut, and bevel operations | 7.6.9 | 1 |
| **Boolean (Blender modifier)** | A modifier that subtracts, unions, or intersects two mesh objects — used for cutting holes and combining shapes without direct mesh editing | 7.6.9 | 2 |
| **Bevel modifier** | A non-destructive modifier that adds bevel/chamfer to specified edges based on a weight or angle threshold — maintains clean topology | 7.6.9 | 2 |
| **Reference image** | A photo or blueprint loaded into Blender as background image to model from — professional models always use reference | 7.6.5 | 1 |
| **PBR (Physically Based Rendering)** | An accurate lighting and material simulation approach using real-world measurable properties (Metallic, Roughness, Base Color, Normal) | 7.6.8 | 2 |
| **Normal map** | A texture that encodes surface detail (bumps, grooves, scratches) without adding geometry — the surface looks detailed but the mesh is low-poly | 7.6.8 | 3 |
| **UV seam** | A marked edge in UV unwrapping that tells Blender where to "cut" the mesh to flatten it into a 2D layout | 7.6.8 | 2 |
| **UV island** | A connected region of the UV layout — each unwrapped section of the mesh appears as one island in the UV Editor | 7.6.8 | 2 |
| **HDRI environment** | A High Dynamic Range Image used as a 360° light source and background in Blender's World settings — provides natural, complex lighting | 7.6.8 | 2 |
| **Keyframe** | A stored value (position, rotation, scale, etc.) at a specific frame in the Timeline — Blender interpolates between keyframes to create motion | 7.6.3 | 1 |
| **Tweening / Interpolation** | The automatic calculation of in-between frames between two keyframes — controlled by curves in the Graph Editor | 7.6.3 | 2 |
| **Dope Sheet** | A Blender editor that displays all keyframes across all objects and bones as columns on a timeline strip — used for timing and retiming | 7.6.3 | 2 |
| **Graph Editor** | A Blender editor that shows animation curves — allows precise control over acceleration, deceleration, and easing of motion | 7.6.3 | 3 |
| **Path animation** | Animation technique where an object is constrained to follow a curve path through 3D space | 7.6.3 | 2 |
| **Follow Path constraint** | A Blender constraint that locks an object's movement to a curve — the object travels along the curve as the frame advances | 7.6.3 | 2 |
| **Particle system** | A Blender simulation system that spawns many small objects from an emitter — used for sparks, smoke, rain, grass, dust | 7.6.4 | 2 |
| **Image sequence** | An animation export format that renders each frame as a numbered PNG file — then assembled in the Video Sequencer or external editor | 7.6.6 | 2 |
| **Render output** | The final image or video file produced from Blender's render engine; defined by resolution, frame rate, and file format | 7.6.6 | 1 |

---

## Key Distinctions

| Term 1 | Term 2 | Key Difference |
|--------|--------|---------------|
| Subdivision Surface modifier | Bevel modifier | SubDiv smooths the entire mesh; Bevel modifier adds material to specific edges only |
| Normal map | Displacement map | Normal map is an illusion (looks bumpy but stays flat); Displacement map actually moves geometry |
| Dope Sheet | Graph Editor | Dope Sheet shows when keyframes exist (timing); Graph Editor shows the shape of the curves between them (easing) |
| Image sequence | Video file | Image sequence = individual PNG files per frame (more control, lossless); Video file = single encoded container |
| PBR Metallic | PBR Roughness | Metallic controls whether the material is metal or non-metal; Roughness controls how diffuse vs. specular its surface is |

---

## Bell Ringer Prompts

1. What is a control loop? Draw a diagram showing one near a sharp edge on a cube.
2. What is the difference between a boolean in OnShape (Unit 1.2) and a boolean modifier in Blender?
3. Explain what a UV map is and why it is required before applying an image texture.
4. What does the Graph Editor control in a Blender animation? Why does the curve shape matter?
5. A 5-second animation at 24 fps outputs as an image sequence. How many PNG files will you have?
