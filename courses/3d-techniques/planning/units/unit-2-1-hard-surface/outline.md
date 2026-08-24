# Unit 2.1 — Hard Surface Modeling & Scene Composition: Outline

**Course:** 3D Techniques (145120)
**Quarter:** Q2 | **Weeks:** 13–16 | **Duration:** 4 weeks
**⚑ Quarter 2 Project**

---

## Student Overview

### What Is This Unit About?

Hard surface modeling is the bread and butter of product design, vehicle design, and game asset creation. This unit pushes you beyond basic mesh editing into advanced tools: boolean operations, subdivision surface workflow, UV unwrapping, and texture baking. You'll assemble multiple objects into a composed scene and render it with professional lighting.

### What You'll Be Able to Do

By the end of this unit you will be able to:

- Use boolean operations (Union, Difference, Intersect) for complex shape creation
- Apply the subdivision surface modifier to create smooth, high-poly geometry
- Unwrap UV coordinates and apply a tiled or hand-painted texture
- Set up a multi-object scene with depth (foreground, mid-ground, background) and 3-point lighting
- Render a high-resolution scene with at least 3 distinct objects

### Weekly Snapshot

| Week | Focus | Key Activity |
|------|-------|-------------|
| 13 | Boolean operations + SubSurf workflow | Boolean lab; subdivision surface exercise |
| 14 | UV unwrapping + textures | UV lab; texture applied to at least 1 object |
| 15–16 | Scene composition + 3-point lighting + final render | Project: 3-object scene, lit and rendered |

### Documents in This Unit

| File | What It Is | When You Use It |
|------|-----------|----------------|
| `vocab.md` | 22 terms: boolean, subdivision surface, UV unwrap, seam, texture, normal map, scene composition, depth of field | Review Week 13 |
| `quiz.md` | 22 MCQs covering 3.3–3.5 standards | Friday quizzes Weeks 13–16 |
| `lab.md` | Boolean ops lab + UV unwrap exercise | Weeks 13–14 — technique labs before project |
| `project.md` | **Hard Surface Scene** — 3+ objects, textures, 3-point lighting, final render (Q2 Project — Artifact #5) | Weeks 15–16 — the main modeling deliverable |

### Standards Covered

- **3.3.1** — Boolean operations in Blender
- **3.3.2** — Subdivision surface workflow
- **3.3.3** — UV unwrapping and seam placement
- **3.3.4** — Texture mapping (tiled and image textures)
- **3.4.1** — Scene composition (depth, scale, focal point)
- **3.4.2** — Lighting for rendered scenes
- **3.4.3** — Camera settings (focal length, depth of field)
- **3.5.1** — Render output settings (resolution, samples, format)

---

## Teacher Reference

### Pacing Guide

| Day | Activity | Notes |
|-----|----------|-------|
| Mon, Wk 13 | Boolean operations demo + vocab | Boolean cuts are non-destructive with modifier; teach Exact solver |
| Tue–Wed, Wk 13 | Lab: boolean lab (3 operations) | Union, Difference, Intersect — one of each, documented with screenshots |
| Thu–Fri, Wk 13 | Lab: subdivision surface workflow | Teach the "block → cage → smooth" workflow; crease edges to control subdivision |
| Mon, Wk 14 | UV unwrapping theory + seam placement | The "peeling an orange" metaphor; show what bad vs. good seam placement looks like |
| Tue–Wed, Wk 14 | Lab: UV unwrap exercise | Unwrap a cube + a more complex shape; check in UV editor |
| Thu–Fri, Wk 14 | Lab: apply image texture | Use a free PBR texture; connect in Shader Editor |
| Mon, Wk 15 | Project kickoff: concept + 3 objects planned | Teacher approves concept before modeling begins; at least 3 distinct objects |
| Tue–Thu, Wk 15 | Project: model all 3 objects | Daily check-ins; boolean and SubSurf must appear in at least 1 object each |
| Fri, Wk 15 | Quiz + progress check | Project: textures applied to at least 2 objects by this date |
| Mon–Tue, Wk 16 | Project: scene composition + 3-point lighting | Arrange objects with depth; set up key/fill/rim using area lights |
| Wed, Wk 16 | Project: camera placement + depth of field | Focal length + aperture for DOF; f/1.4 or below for visible blur |
| Thu, Wk 16 | Project: final render (1920×1080, 128+ samples) | Cycles recommended; check for fireflies before final render |
| Fri, Wk 16 | Quiz + submission + portfolio | Artifact #5; include process screenshots |

### Common Issues & Responses

- **Boolean creates non-manifold geometry:** Apply modifiers in the correct order; teach Apply Boolean before subdividing.
- **UV stretching on textures:** Require a UV stretch overlay check before submission.
- **Render has noisy/dark areas:** Require at least 128 Cycles samples for the final render; show the denoising node.

### Differentiation Notes

- **Students who need more support:** Provide a step-by-step UV seam placement guide for common object shapes.
- **Students who finish early:** Extension in project.md — add a 4th object and animate a simple turntable rotation.

### Assessment Notes

- Project uses the 1–4 look-for rubric. Students walk teacher through the scene during submission: name each object, the modeling technique used, and the lighting setup.

### BPA Connections

**BPA V25 3D Modeling:** Hard surface scene is the portfolio centerpiece for V25. Process screenshots (wireframe, UV layout, render comparison) are required documentation.
