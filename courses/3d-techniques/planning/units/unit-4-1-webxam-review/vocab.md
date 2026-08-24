# Vocabulary: WebXam Review — Key Terms by Strand Priority

**Course:** 3D Techniques (145120)
**Unit:** 4.1 — WebXam Preparation & Initial Test
**Weeks:** 28–29
**⚑ WebXam Initial Test — administer by April 23**

---

## How to Use This Document

This is a review reference, not a first-introduction list. Terms are grouped by strand and weighted by EOC frequency. **Bold = high-frequency EOC terms** based on strand weighting.

---

## Priority 1 — Strand 7: 3D Modeling & Animation (highest weight)

| Term | Definition | Standard | EOC Priority |
|------|-----------|---------|-------------|
| **Topology** | How polygons are arranged — edge loops, quad-dominant mesh for deformation and SubDiv compatibility | 7.6.5 | HIGH |
| **Control loop** | An edge loop added near a crease to make SubDiv Surface modifier hold a sharp edge | 7.6.9 | HIGH |
| **UV mapping** | Unwrapping a 3D surface onto a flat 2D grid for applying textures precisely | 7.6.9 | HIGH |
| **Keyframe** | A recorded object state at a specific time that Blender uses to calculate in-between frames | 7.7.2 | HIGH |
| **Interpolation** | Blender-calculated values between keyframes; determines motion feel (linear = constant speed; Bezier = ease in/out) | 7.7.2 | HIGH |
| **Render output** | Final image or image sequence saved to disk; format choices: PNG (lossless), MP4 (compressed video) | 7.8.1 | HIGH |
| **Follow Path constraint** | Attaches a camera or object to a curve so it travels the path over a set number of frames | 7.7.5 | HIGH |
| **Principled BSDF** | Blender's primary material shader that combines diffuse, metallic, roughness, and normal inputs in one node | 7.6.9 | HIGH |
| **HDRI** | High Dynamic Range Image — used as an environment light source that provides realistic, directionless ambient lighting | 7.8.1 | MED |
| **Normal map** | A texture that fakes surface detail without adding polygons — stores surface direction data as RGB values | 7.6.9 | MED |
| **Boolean modifier** | Blender modifier that subtracts, adds, or intersects two mesh objects; must clean up n-gons after use | 7.6.9 | MED |
| **STL** | 3D file format used for 3D printing — stores only surface geometry, no materials | 7.4.2 | MED |
| **Constraint (CAD)** | A rule applied to a sketch in OnShape (e.g., perpendicular, equal, tangent) that fully defines geometry | 7.4.2 | MED |

---

## Priority 2 — Strand 5: Programming & Computer Science (~26% combined)

| Term | Definition | Standard | EOC Priority |
|------|-----------|---------|-------------|
| **Algorithm** | A step-by-step procedure to solve a problem | 5.3.1 | HIGH |
| **Boolean expression** | A statement that evaluates to True or False using AND, OR, NOT | 5.3.2 | HIGH |
| **Conditional statement** | if/elif/else block that runs code based on a condition | 5.3.4 | HIGH |
| **For loop** | Iterates over a range or list a fixed number of times | 5.3.6 | HIGH |
| **Syntax error** | Code that cannot run because of a typo or format violation | 5.4.6 | HIGH |
| **Logic error** | Code that runs but produces incorrect output | 5.4.7 | HIGH |
| **SDLC** | Software Development Life Cycle — Plan, Design, Implement, Test/Review, Deploy, Maintain | 5.6.1 | HIGH |
| **Flowchart** | Visual diagram of an algorithm using standard shapes (diamond = decision; rectangle = process) | 5.6.7 | HIGH |
| **Binary** | Base-2 number system (0s and 1s) used by all digital hardware | 2.3.1 | MED |
| **Hexadecimal** | Base-16 number system (0–9, A–F) used for color codes and memory addresses | 2.3.2 | MED |
| **Version control** | System for tracking changes to files over time, allowing previous versions to be reviewed or restored | 5.7.1 | MED |

---

## Priority 3 — Strands 1 & 2: Professional & Career Skills

| Term | Definition | Standard | EOC Priority |
|------|-----------|---------|-------------|
| **Portfolio** | A professional collection of work demonstrating skills and growth | 1.1.5 | MED |
| **Networking** | Building professional relationships within an industry | 2.4.4 | MED |
| **Design brief** | Written project specification: scope, deliverables, constraints | 1.2.12 | MED |
| **Copyright** | Automatic IP protection over original creative work | 1.3.8 | MED |
| **Work-for-hire** | Work created on company time owned by the employer | 1.3.7 | LOW |

---

## Bell Ringer Prompts (Strand 7 Focus)

1. What is a control loop, and why do you need it when using the SubDiv Surface modifier?
2. Explain the difference between an image sequence and an MP4 render. When would you choose each?
3. Describe the UV mapping workflow: what is the first step, and what does a good UV layout look like?
4. What does the Graph Editor show, and how does changing a keyframe interpolation from Linear to Bezier affect animation?
5. What is the difference between Eevee and Cycles, and which should you use for a final portfolio render?
