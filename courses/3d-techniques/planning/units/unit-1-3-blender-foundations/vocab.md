# Vocabulary: Blender Foundations

**Course:** 3D Techniques (145120)
**Unit:** 1.3 — Blender Foundations
**Weeks:** 5–7

---

## Terms

| Term | Definition | Related Standard | DOK |
|------|-----------|-----------------|-----|
| **Viewport** | The 3D window in Blender where you see and interact with the scene; supports Solid, Wireframe, Material Preview, and Rendered shading modes | 7.6.5 | 1 |
| **Outliner** | The panel (top-right by default) that lists all objects in the scene, organized in collections — similar to a Layers panel in Photoshop | 7.6.5 | 1 |
| **Object Mode** | The Blender mode where you select, move, scale, and rotate whole objects | 7.6.9 | 1 |
| **Edit Mode** | The Blender mode where you directly manipulate a mesh's vertices, edges, and faces | 7.6.9 | 1 |
| **Mesh** | A 3D object made up of vertices, edges, and faces | 7.6.9 | 1 |
| **Vertex (pl. vertices)** | A single point in 3D space; the most basic element of a mesh | 7.6.9 | 1 |
| **Edge** | A line connecting two vertices; forms the boundaries of a face | 7.6.9 | 1 |
| **Face** | A flat polygon defined by three or more edges; makes up the visible surface of a mesh | 7.6.9 | 1 |
| **N-gon** | A polygon face with five or more vertices/edges; generally avoided in production meshes because it causes problems during subdivision and export | 7.6.9 | 2 |
| **Quad** | A four-sided polygon face; the preferred face type in production 3D modeling for clean subdivision | 7.6.9 | 2 |
| **Extrude (E)** | An Edit Mode operation that extends selected geometry (vertices/edges/faces) outward to create new connected mesh | 7.6.9 | 1 |
| **Loop Cut (Ctrl+R)** | Adds a new edge loop around a mesh, allowing localized detail to be added between existing edge loops | 7.6.9 | 2 |
| **Bevel (Ctrl+B)** | Adds material to a selected edge/vertex to create a chamfer or rounded edge instead of a sharp corner | 7.6.9 | 2 |
| **Inset (I)** | Creates a smaller inset face inside a selected face — used to prepare a surface for detailed work | 7.6.9 | 2 |
| **Subdivision Surface modifier** | A non-destructive modifier that smooths a mesh by subdividing it mathematically — controlled via "Level Viewport" | 7.6.9 | 2 |
| **Mirror modifier** | A non-destructive modifier that creates a mirrored copy of a mesh on a chosen axis — allows modeling only one half of a symmetrical object | 7.6.9 | 2 |
| **Principled BSDF** | The standard "universal" Blender shader — uses physically based rendering (PBR) values to simulate any real material | 7.6.8 | 2 |
| **PBR (Physically Based Rendering)** | A rendering approach that simulates how real materials interact with real light by using values like metallic, roughness, and base color | 7.6.8 | 2 |
| **Metallic** | A PBR material parameter: 0.0 = non-metal (plastic, wood, fabric); 1.0 = pure metal | 7.6.8 | 2 |
| **Roughness** | A PBR material parameter: 0.0 = mirror-smooth; 1.0 = completely diffuse/matte | 7.6.8 | 2 |
| **UV mapping** | The process of "unfolding" a 3D mesh onto a flat 2D plane so that 2D image textures can be applied accurately | 7.6.8 | 3 |
| **Eevee** | Blender's real-time render engine — fast, suitable for previews and stylized output | 7.6.6 | 2 |
| **Cycles** | Blender's physically accurate path-tracing render engine — slower but produces photorealistic results | 7.6.6 | 2 |
| **3-point lighting** | A standard photography/cinema lighting setup: Key Light (main), Fill Light (softer counter), Rim/Back Light (separation) | 7.4.2 | 2 |
| **HDRI** | High Dynamic Range Image — a spherical image used as an environment light source that wraps around the scene | 7.6.8 | 2 |

---

## Key Distinctions

| Term 1 | Term 2 | Key Difference |
|--------|--------|---------------|
| Object Mode | Edit Mode | Object Mode moves whole objects; Edit Mode manipulates mesh geometry (vertices/edges/faces) |
| Eevee | Cycles | Eevee = real-time rasterization (fast); Cycles = path-tracing (accurate, slower) |
| Metallic | Roughness | Metallic controls if a material looks like metal; Roughness controls how sharp or blurry its reflections are |
| UV mapping | 3D texturing | UV mapping creates the 2D "unfolded" canvas; applying textures paints on top of that canvas |
| Subdivision Surface | Mirror modifier | SubDiv smooths the mesh; Mirror copies one half to the other — both are non-destructive modifiers |

---

## Bell Ringer Prompts

1. What is the difference between Object Mode and Edit Mode? When do you use each?
2. Why do 3D modelers prefer quad faces over triangles and n-gons?
3. What does the Roughness value in a Blender material control? Give an example of a material with Roughness near 0 and one near 1.
4. Describe what a Loop Cut does and why it is one of the most-used Edit Mode tools.
5. Why use Eevee for a real-time product preview but Cycles for a final hero render?
