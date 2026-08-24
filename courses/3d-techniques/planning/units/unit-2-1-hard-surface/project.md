# Project: Hard Surface Scene

**Course:** 3D Techniques (145120)
**Unit:** 2.1 — Polygonal Modeling, Hard Surface Techniques & Animation
**Duration:** Weeks 10–13

---

## Overview

Design and model a hard surface scene in Blender containing at least 3 distinct objects modeled using polygon workflow. Apply PBR materials, set up a lit environment, and create two deliverables: a rendered still image (hero render) and a short animation (5–10 seconds). This is the main production work of Q2 and feeds directly into your BPA entry for Unit 2.2.

---

## Class Prompt: Hard Surface Scene

### What You're Building

A rendered 3D scene featuring at least 3 hard surface objects modeled from reference images. The scene should have a coherent visual concept — a product showcase, an industrial snap, a sci-fi composition — not just random objects. Apply PBR materials, a lit environment (HDRI or 3-point), and animate at least one element.

### Requirements by Week

| Week | Focus | Required Output |
|------|-------|----------------|
| **10–11** | Polygon modeling — 3+ objects with hard surface workflow | All 3 objects blocked in and detailed; Boolean cutouts applied |
| **12** | Materials, UV unwrap, HDRI environment | PBR materials applied to all objects; hero render (Eevee, min 1920×1080) |
| **13** | Keyframe animation + export | 5–10 sec animation rendered as image sequence; assembled video |

### Deliverables Summary

| Deliverable | Format | Due |
|------------|--------|-----|
| All modeled objects | `.blend` file | End of Week 11 |
| Hero still render | PNG, ≥1920×1080 | End of Week 12 |
| Short animation | Video or GIF, 5–10 sec | End of Week 13 |
| Process documentation | 1-page written or bullet-point doc | End of Week 13 |

### Process Documentation Requirements
1. Object descriptions: what each object is and what reference was used
2. Material decisions: one sentence per material explaining PBR choices (why these metallic/roughness values)
3. Animation description: what is animated and for how long
4. What worked and what you'd change
5. How this scene relates to your BPA project direction (if applicable)

---

## Modeling Standards (All Students)

- [ ] Minimum 3 distinct hard surface objects, each modeled from reference
- [ ] Each object uses: box modeling base → loop cuts → at least one bevel → Subdivision Surface modifier
- [ ] At least one boolean operation applied and topology cleaned
- [ ] No n-gons on subdivided surfaces; correct normals throughout
- [ ] All objects named in the Outliner (no "Cube.001", "Cube.002")

---

## Materials Standards

- [ ] Each object has at least one material using Principled BSDF
- [ ] Materials are visually distinct from each other (different metallic, roughness, color combinations)
- [ ] UV unwrap visible in `.blend` file (at least one object manually unwrapped with seams)
- [ ] HDRI or 3-point lighting setup in place

---

## Animation Standards

- [ ] At least one object or element is animated (object transform, camera move, or particle)
- [ ] At least 2 keyframes with an eased curve visible in Graph Editor
- [ ] Output: image sequence → video assembled in Video Sequencer or exported from Blender

---

## BPA Challenge Prompt (Optional)

> **For #425 Computer Modeling students:** The objects you model in Weeks 10–11 can be the 3D model portion of your BPA entry. Build your WSAP-aligned object during this unit with deliberate quality — it transitions directly to Unit 2.2 refinement.
>
> **For #440 Computer Animation Team students:** The animation work in Week 13 is the foundation of your team animation entry. The 5–10 second output here becomes the opening or test sequence for your 2-minute BPA animation. Teams should coordinate scene design so that objects and assets built here can be reused in the full BPA piece.
>
> **For V11 2D Animation Team students:** V11 is 2D animation (Blender Grease Pencil or similar). The keyframe and timing skills from Week 13 apply directly, but consider whether your 3D hard surface objects could serve as reference or background plates for your 2D scenes.
>
> **Key deadlines at end of Q2:**
>
> | Deadline | Date | Event |
> |----------|------|-------|
> | December 1 | Virtual event registration | V11 2D Animation Team |
> | End of Q2 | First complete version of BPA entry done | All BPA events |
>
> See [bpa-events.md](../../bpa-events.md).

---

## Standards & Rubric

Walk the room as students work. Ask students to point to evidence for each standard before scoring.

| Standard | Description | Look-For (Proficient = 3) | Beginning (1) | Developing (2) | Proficient (3) | Advanced (4) |
|----------|-------------|--------------------------|---------------|----------------|----------------|--------------|
| **7.6.1** | Plan + storyboard for animation | Process documentation + animation planning submitted | No documentation | Concept sketch only | Process doc + animation plan complete | Process doc + detailed timing chart per scene |
| **7.6.3** | Keyframes + tweens + paths | Animated element with eased curves in Graph Editor | No animation | Keyframes set; no easing | Animated element with easing in Graph Editor | Animation + Graph Editor screenshot + curve rationale |
| **7.6.4** | Special effects | Particle system applied and configured | No particle system | Default particles (unchanged) | Particle system configured (count, lifetime, velocity) | Particle system + physics settings explained |
| **7.6.5** | Create + import 3D assets | Scene built from 3+ modeled assets | 1 object | 2 objects | 3+ objects assembled into scene | 3+ objects + asset import or linked library used |
| **7.6.6** | Render + export animations | Image sequence rendered; compiled into video output | Still image only | Sequence rendered; not compiled | Image sequence → compiled video output | Compiled video + render settings screenshot |
| **7.6.7** | Virtual assets + environments | HDRI environment applied to scene | No environment | Flat color world only | HDRI applied with intentional rotation/strength | HDRI + note on why this environment suits the scene |
| **7.6.8** | Create + render materials | PBR workflow with UV-mapped textures on at least 1 object | No textures | Basic colors only | Principled BSDF + UV-mapped texture on 1+ object | UV textures on 2+ objects + normal map or roughness map |
| **7.6.9** | Box modeling (hard surface) | Hard surface polygon workflow with SubDiv + booleans | No SubDiv or booleans | 1 technique | SubDiv + booleans both used in model | SubDiv + booleans + edge loops or bevel for hard surface look |
| **7.6.10** | NURBS (CAD connection) | Process doc notes where CAD/NURBS workflow differs from polygon | No note | Brief mention | 1-paragraph comparison: NURBS vs. polygon | Comparison + specific example from model (e.g., a curved surface decision) |
| **7.3.4** | Computer animation integration | Animation element present in final video | No animation in video | Animation present; not exported | Animation in compiled video output | Animation + narration or audio synced to animation moment |
| **7.3.10** | Produce, test, debug, archive | Consistent file naming; organized folder; all deliverables present | Disorganized; missing files | Some naming convention | All deliverables present with consistent naming | Organized folder + version log + backup noted |

---

## Submission Checklist

- [ ] `.blend` file: `[YourName]_Unit2.1_HardSurface.blend`
- [ ] Hero render: `[YourName]_Unit2.1_HeroRender.png` (≥1920×1080)
- [ ] Animation video: `[YourName]_Unit2.1_Animation.[mp4/gif]` (5–10 seconds)
- [ ] Process documentation: `[YourName]_Unit2.1_ProcessDoc.pdf/docx`
- [ ] All files saved to portfolio folder

---

## Portfolio Note

This project is Artifact #5 — and likely the portfolio centerpiece of Q1–Q2. Your hero render is the work you will show BPA judges, BAC advisors, and any college/career reviewer who opens your portfolio this year. Make it count.

---

## Extension Task

Add a particle simulation to your scene: fire or sparks from a metallic joint, dust from a surface, or ambient floating particles. Configure the physics settings (gravity, lifetime, velocity) deliberately. Render with cycles and include the particle effect in a 3-second clip separate from your main animation output.
