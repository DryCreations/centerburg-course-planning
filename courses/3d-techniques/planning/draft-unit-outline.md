# 3D Techniques — Draft Unit Outline

**Subject Code: 145120 | 4 Quarters | ~36 weeks**
**Status: DRAFT — for review and revision**

---

## Design Principles

- Quarter structure aligned to BPA Competition Season Calendar and WebXam testing window
- BPA primary events: **#425 Computer Modeling** (individual) or **#440 Computer Animation Team** (team) — summative project Q2–Q3
- **Q1:** TinkerCAD for 3D spatial vocabulary, technical drawing, and a real client design project (hall pass); Blender starts Week 6 and runs through end of year
- **Q2–Q4:** Blender is the sole production tool — polygonal modeling, hard surface techniques, UV/textures, animation, rendering
- **Programming (Strand 5, ~26% EOC):** Covered in one week of conceptual exposure (Q3 Unit 3.2) — bell-ringer vocabulary, one annotated-script reading session, one flowchart exercise. Full Blender Python writing is available as an **extension track** only. WebXam Strand 5 performance is explicitly **not the instructional priority** this year — this course runs once before transitioning to Hard Surface Modeling (145140)
- Course focus: 3D spatial communication, modeling, hard surface techniques, and 3D printing (Strand 7 ~51%); programming addressed minimally
- At least 1 major project per quarter; BPA project spans Q2–Q3

### WebXam Testing Timeline

| Milestone | Target Date | Notes |
|---|---|---|
| **Pretest** | Week 1 (August) | Baseline score; identifies student strengths/gaps across creative and programming strands |
| **Initial WebXam** | By April 23 (~Week 33) | All students complete first attempt |
| **Retake Window Opens** | 30 days after initial | Minimum 30-day wait per WebXam policy |
| **Retake Deadline** | By May 23 (~Week 37) | Before school ends May 27 |
| **Makeups** | Weeks 33–37 | Students absent on test day make up ASAP to preserve retake window |

### EOC Weight Summary (for pacing reference)

| Area | Weight | Instructional Priority |
|---|---|---|
| 7.6 Animation | 19.54% | HIGH — largest single outcome |
| 7.4 Graphics | 12.64% | HIGH — 3D modeling core |
| 7.3 Production | 10.34% | HIGH — production pipeline |
| 5.3 Logical Operations & Control Structures | 8.05% | MEDIUM — code literacy for all (Q3); Blender Python writing is extension |
| 7.2 Multimedia Tools | 8.05% | MEDIUM — planning/tools |
| 5.7 Configuration Management | 5.75% | MEDIUM — version control concepts (what/why, commit history, branching) taught conceptually; no hands-on Git required |
| 1.1 Employability Skills | 4.60% | Woven into career units |
| 1.2 Leadership & Comms | 4.60% | Woven into presentations |
| 1.3 Business Ethics & Law | 4.60% | Woven into IP/licensing |
| 1.7 Entrepreneurship | 4.60% | Dedicated unit |
| 5.5 Programming Conventions | 4.60% | MEDIUM — code reading focus; naming/comments as literacy (Q3) |
| 5.4 IDE | 3.45% | MEDIUM — Blender scripting environment navigation; writing is extension (Q3) |
| 5.6 Software Dev Lifecycle | 3.45% | MEDIUM — SDLC concepts, flowcharting, pseudocode for all (Q3) |
| 2.3 Data Encoding | 2.30% | LOW — binary/hex context |
| 2.4 Emerging Technologies | 2.30% | LOW — integrated (AI tools, 3D printing, XR) |
| 9.6 Cybersecurity Law | 1.15% | LOW — IP/licensing |

### Daily Class Structure

Every class period follows the same rhythm:

| Phase | Time | Details |
|-------|------|---------|
| **Bell Ringer** | First 5–7 min | One question from the current unit's `quiz.md` (projected on the board). Students respond on paper or digitally. Teacher cold-calls 2–3 students; class discusses briefly. Mon–Thu rotate DOK 1–2 vocab/recall; DOK 3–4 scenario questions after at least one day of instruction on the topic. |
| **Instruction / Demo** | 10–15 min *(as needed)* | Mini-lesson, live demo, or clarifying review. Skipped or shortened on heavy work days. |
| **Work Time** | 25–35 min | Students work on the current **lab** or **project**. There is always an active lab or project — no dead time. Students who finish early move to the extension task in the lab or project document. |
| **Wrap-Up** | Last 5 min | Teacher circulates for quick status checks; students update progress log or answer one exit question. |
| **End-of-Week Quiz** | Friday *(last 15–20 min)* | 10–20 MCQ from the unit's `quiz.md`. 70% DOK 1–2 (vocab/recall), 30% DOK 3–4 (analysis/application). Modeled after WebXam format. |

> **Always a project:** Students always have a multi-week project in progress. When a lab is finished early, the next action is always to work on the current project. Extension tasks inside labs also point forward to the next unit.

### Per-Unit Resources

Each unit has a dedicated folder under `planning/units/` containing:

| File | Purpose |
|------|---------|
| `vocab.md` | 15–25 vocabulary terms with definitions, standard codes, and DOK levels |
| `quiz.md` | 10–20 MCQ end-of-week quiz; includes answer key, DOK rating, and standard reference per question |
| `lab.md` | 1–3 day skill exercise with step-by-step instructions and a **standards-demonstrated checklist** (this is the rubric) |
| `project.md` | Multi-week summative work with a **Class Prompt** and an optional **BPA Challenge Prompt** |

---

## Quarter 1: Foundations — CAD, Technical Drawing & Blender Foundations (Weeks 1–9)

### Unit 1.0: WebXam Pretest & Course Orientation (Week 1)

**Focus:** Establish baseline. Students take the WebXam pretest under test-like conditions.

**Activities:**
- Day 1–2: Course overview, syllabus, lab orientation; **TinkerCAD warm-up activity** (no login barrier — create a simple geometric form; demonstrates 3D concepts on Day 1; Autodesk Education account set up Day 4); introduction to OnShape (Q1 primary CAD tool) and Blender (Q2+ primary tool); course arc toward Hard Surface Modeling (145140) explained
- Day 3: **WebXam Pretest** — full-length practice under timed conditions
- Day 4–5: Score analysis — teacher reviews class-wide results to identify weak strands; students review their own results and set personal learning goals

> **Why pretest?** The pretest reveals which WebXam strands need instructional attention. 3D production (~51%) is the primary focus across Q1–Q2; programming (~26%) is introduced at a code literacy level for all students in Q3, with writing extension for advanced students. Individual scores help the teacher calibrate pacing and help students set personal learning goals for the modeling-heavy work ahead.

---

### Unit 1.1: Course Introduction & Career Landscape (Week 2)

**Focus:** 3D/interactive media industry overview. Course tools and arc introduced (OnShape Q1, Blender Q2+). BPA introduction.

**Competencies Covered:**
- 1.1.1 Knowledge, skills, abilities for careers
- 1.1.2 Scope of career opportunities, education, training, certification
- 1.1.3 Develop a career plan
- 1.1.4 Professional organizations, networking
- 1.1.5 Self-promotion, portfolio development
- 2.4.1 Emerging technologies applicable to marketplace
- 2.4.2 Fundamental architectures of emerging tech
- 2.4.3 Research value of emerging technologies
- 2.4.4 Describe emerging technologies (VR/MR, 3D printing, AI, IoT)

**Activities:**
- 3D industry survey: game dev, film VFX, architecture visualization, product design, VR/AR, and additive manufacturing / 3D printing industry
- Introduce BPA; review WSAP event listings for 3D modeling and animation events (#425, #440, V11)
- Students self-assess skills and interests to begin identifying their focus area
- Emerging tech showcase: students research one 3D/immersive technology (3D printing, XR, AI-generated 3D, photogrammetry)

---

### Unit 1.2: Technical Drawing & Hall Pass Design (Weeks 3–5)

**Focus:** Learning to communicate about and work in 3D space — orthographic views, dimension notation, and the full design cycle from client brief to physical print. Students use TinkerCAD as the CAD tool for this unit. The deliverable is a real printed hall pass designed for and delivered to a teacher at the school.

**Competencies Covered:**
- 7.4.2 Select color, shape, size, texture of objects
- 7.4.3 Create or acquire graphics
- 7.4.4 Manipulate and layer objects
- 7.4.8 Manipulate graphic objects
- 7.6.9 Create 3D shapes through box modeling
- 2.4.4 Describe emerging technologies (Additive Manufacturing / 3D Printing)
- 7.2.9 Provide sample layout to stakeholders for review
- 7.2.11 Client personas and narratives for intended outcomes
- 1.1.1 Knowledge, skills, abilities for careers (applied: professional client interaction)
- 1.1.7 Problem-solving and critical thinking (applied: iterating based on client feedback)

**3D Spatial Vocabulary Introduced:**
X/Y/Z axes, translation, rotation, scale, dimension (length/width/height), orthographic projection, isometric view, front/side/top view, tolerance, constraint, extrude, boolean, STL, layer height, supports — these terms are the foundation for all subsequent Blender and 3D work.

**Week 3 — 3D Spatial Vocabulary & Orthographic Thinking:**
- How to describe objects in 3D space: X/Y/Z axes; translating vs. rotating vs. scaling; dimensions (L × W × H)
- The three standard views: front, side, top — students sketch all three by hand from a physical object on their desk (phone, stapler, tape dispenser, or similar); annotate with estimated dimensions
- Dimension notation: how engineers communicate measurements on drawings; tolerances and why they exist; reading a simple 2D drawing provided by the teacher
- TinkerCAD intro: interface tour; add and resize shapes using the ruler; align and group; use the workplane; export as STL
- Lab exercise: model a simple dimensioned object in TinkerCAD that matches a hand-sketched drawing (e.g., a box with a hole and a raised lip); verify dimensions using the ruler tool
- Vocabulary quiz (bell ringer format): orthographic projection, isometric view, tolerance, constraint, dimension, scale, bill of materials

**Week 4 — Client Meeting & Design Specification:**
- Introduce the teacher client. The whole class works from the same client brief (teacher provides one at the start of the period, or teacher facilitates a short live Q&A with the client teacher):
  - Client wants a hall pass for their classroom
  - Constraints: must fit in a student's hand comfortably; cannot be so large or heavy it's a distraction; text requirements (teacher name, room number, and "HALL PASS"); color options limited to available lab filament
  - Any aesthetic preferences (rounded vs. sharp edges, minimalist vs. detailed, a school logo or icon)
- Students write **user stories** in the format: *"As a [teacher], I need a hall pass that [characteristic] so that [reason]."* Minimum 3 user stories.
- Create a **design spec document** in Google Docs:
  - User stories
  - Labeled hand-sketch of the design (front, top, side views with dimensions noted)
  - Material and color selection with rationale
  - At least one key design decision explained (e.g., "I chose rounded edges because they are safer and easier to print without supports")
- Begin TinkerCAD model based on the spec; export first prototype as STL and slice it (Cura/PrusaSlicer/FlashPrint); screenshot slice preview included in design spec doc

**Week 5 — Iteration, Print & Client Delivery:**
- Print first prototype on lab printers (groups share print queue — teacher manages scheduling)
- Show printed prototype to teacher client; gather written feedback (teacher fills out a simple feedback form: "What I like, What I'd change, Does it meet my needs?")
- Students document the feedback and make at least one measurable design revision in TinkerCAD (e.g., increased text size, added a hanging hole, adjusted thickness); document what changed and why
- Print final version; deliver to teacher client
- **Deliverable — "Hall Pass Design Package":** printed hall pass + design spec document + one-page client reflection (what the client needed, what you designed, what you changed after feedback, what you would do differently)

> **What makes this project meaningful:** The teacher client is real. The print gets used. Students experience the full design cycle — brief → spec → prototype → feedback → revision → delivery — in 3 weeks. This is the same workflow they will use in Blender BPA projects starting in Q2, and the same workflow professional 3D designers use every day.

> **BPA Connection — #425 Computer Modeling:** The design documentation habits built here (design brief, client constraints, revision log) directly preview the research profile and process documentation required for the Computer Modeling event. Students pursuing #425 should note their documentation approach.

---

### Unit 1.3: Blender Foundations (Weeks 6–8)

---

### Unit 1.3: Blender Foundations (Weeks 6–8)

**Focus:** Introduction to Blender's interface and core mesh editing workflow. Students come to Blender having just held their 3D-printed object — the physical print from Unit 1.2 serves as a concrete reference for what "3D" means before the software is opened. Students build the hands-on Blender skills needed for Q2's hard surface modeling and animation units.

**Competencies Covered:**
- 7.6.5 Create and import 3D assets and environments
- 7.6.8 Create and render materials in a 3D environment
- 7.6.9 Create 3D shapes through box modeling
- 7.6.11 Describe voxels and their uses
- 7.4.2 Select color, shape, size, texture of objects
- 7.4.3 Create or acquire graphics
- 7.4.4 Manipulate and layer objects
- 7.2.7 Select colors based on color theory and psychology

**Week 6 — Blender Interface & Object Mode:**
- Blender interface tour: viewport, outliner, properties panel, timeline; viewport navigation (orbit, pan, zoom; numpad shortcuts)
- Scene basics: add/delete objects; use the outliner and collections; 3D cursor; object origins
- Object Mode transforms: grab (G), scale (S), rotate (R); axis constraints; precise numeric input
- Exercise: arrange a still-life composition of primitives — scale, rotate, and position 5 objects; apply a flat material to each
- Discussion: how does this environment relate to the technical drawing and dimensions work from Unit 1.2?

**Week 7 — Edit Mode & Basic Mesh Modeling:**
- Object Mode vs. Edit Mode (Tab): mesh components — vertices, edges, faces; selection modes; proportional editing
- Core Edit Mode tools: extrude (E), loop cut (Ctrl+R), bevel (Ctrl+B), inset (I), merge
- Modifiers introduction: Subdivision Surface (smooth forms), Mirror (symmetrical modeling), Solidify
- Edge loops and mesh topology preview: why quad topology matters for clean results
- **Project sprint:** model a simple hard surface object (USB drive housing, phone stand, tool handle) using box modeling + loop cuts + bevel — this deliberately previews Unit 2.1 techniques at a guided level

**Week 8 — Materials, Lighting & First Render:**
- Shader Editor basics: create a new material; adjust Base Color, Metallic, Roughness in the Principled BSDF shader
- UV mapping intro: Smart UV Project — understand *what* UV unwrapping does conceptually before the full workflow in Unit 2.1
- Lighting setup: add Point, Area, and Sun lights; build a 3-point light setup; observe how light affects material appearance
- Camera: position and lock camera; understand focal length and framing
- Render engines: Eevee (real-time) vs. Cycles (path-traced) — when to use each; set output resolution; render and save
- Exercise: re-light and render the Week 6 object; adjust Metallic/Roughness values to see PBR material changes

**Major Project — "Blender First Model":**
Model a simple mechanical or everyday object in Blender (not an unmodified primitive — must use at least loop cuts, an extrude, and a bevel). Apply at least 2 materials with distinct PBR values. Set up 3-point lighting and render a hero image. Submit the render + `.blend` file.

This is an intentionally low-stakes familiarization project. The goal is Blender confidence and workflow familiarity — not production-quality output. Students should identify what they want to improve heading into Unit 2.1.

> **BPA Connection — #425 Computer Modeling:** Students pursuing #425 can use this week to brainstorm what their WSAP-aligned object will be. The object built here does not need to be the BPA entry — but good ideas should be noted. Full BPA production begins in Unit 2.1.

---

### Unit 1.4: Multimedia Tools, BPA Showcase & Event Selection (Weeks 8–9)

**Focus:** BPA event showcase and selection (Week 8). Pre-production planning tools (Week 9).

**Competencies Covered:**
- 7.2.1 Navigational structures, wireframes, flowcharts
- 7.2.3 Build in interactive elements
- 7.2.8 Describe music, video, special effects to be used
- 7.2.9 Provide sample layout to stakeholders for review
- 7.2.10 Visual design elements for audience and use
- 7.2.11 Client personas and narratives

**Activities:**

*Week 8 — BPA Event Showcase:*
- Review examples of BPA competition entries: 3D models, computer animations, design portfolios — what does a competition-ready entry look like?
- Review the 3D-relevant BPA event list (#425 Computer Modeling, #440 Computer Animation Team, V11 2D Animation, universal events) as a class
- Preliminary interest survey — students identify a primary event and a backup; form teams for #440 Computer Animation (up to 3 members) or V11 (team virtual event)
- Note: this course does **not** recommend programming events for BPA — students who want a non-modeling event should consider universal presentation and entrepreneurship events (see [bpa-events.md](bpa-events.md))

*Week 9 — Pre-Production Planning & Event Finalization:*
- Students finalize BPA event selection by end of the week; virtual event students (V11) must register by December 1
- Download and review WSAP guidelines for selected event
- Create initial pre-production plan/design document for BPA project
- Peer review of plans

---

## Quarter 2: Applied Skills — 3D Production & BPA Project (Weeks 10–18)

### Unit 2.1: Polygonal Modeling, Hard Surface Techniques & Animation (Weeks 10–13)

**Focus:** The core 3D production unit. Students build directly on Blender foundations from Unit 1.3. Weeks 10–11 cover polygon mesh modeling and hard surface techniques (HSM-aligned content). Week 12 covers PBR materials, UV mapping, and rendering. Week 13 covers keyframe animation, tweening, and sequences.

**Competencies Covered:**
- 7.6.1 Develop plan and storyboard for animation
- 7.6.2 Create and import 2D assets and environments
- 7.6.3 Create key frames, apply tweens and paths
- 7.6.4 Create special effects and virtual navigation
- 7.6.5 Create and import 3D assets and environments
- 7.6.6 Render and export animations
- 7.6.7 Create and import virtual assets and environments
- 7.6.8 Create and render materials in a 3D environment
- 7.6.9 Create 3D shapes through box modeling
- 7.6.10 Create 3D shapes through NURBS
- 7.6.11 Describe voxels and their uses
- 7.3.4 Incorporate computer animation
- 7.4.2–7.4.10 Graphics competencies (applied in material/color/render work)

**Weeks 10–11 — Polygon Modeling & Hard Surface Techniques (Blender):**
- Interface: Edit Mode, mesh components (vertices/edges/faces), selection modes, proportional editing
- Core polygon operations: extrude, loop cut, bevel/chamfer, inset, bridge, merge, dissolve
- Hard surface workflow: box modeling from reference image; subdivision surface modifier (control loops, crease); bevel modifier for sharp edges; mirror modifier for symmetrical objects
- Edge flow and mesh topology: maintaining quads, avoiding n-gons for clean deformation
- Boolean operations in Blender modifier stack (connect to OnShape booleans from Q1)
- Exercise: model a mechanical object (tool, consumer electronics housing, or vehicle part) using at least 3 hard surface operations

**Week 12 — Materials, UV Mapping & Rendering:**
- PBR (Physically Based Rendering): Base Color, Metallic, Roughness, Normal maps
- UV unwrapping: Smart UV Project, mark seams, manual unwrap; UV editing workspace
- Texture painting basics; applying image textures; export UV layout from Blender and refine in **GIMP** for hand-painted or composited texture maps (raster editing complements Blender's UV workflow)
- Render engines: Eevee (real-time) vs. Cycles (path-traced); lighting fundamentals (3-point light setup, HDRI)
- Export: render still images; prepare scene for animation export

**Week 13 — Keyframe Animation, Tweening & Sequences:**
- Timeline, Dope Sheet, Graph Editor: keyframes and interpolation modes (Linear, Bezier, Constant)
- Animate object transforms (location, rotation, scale); camera animation
- Path animation: follow path constraint; special effects: particle system basics
- Storyboarding: plan a 10–20 second sequence before animating
- Export animation: render as image sequence → compile to video with Video Sequencer

**Major Project — "Hard Surface Scene":**
Design and model a hard surface scene in Blender containing at least 3 distinct hard-surface objects (modeled from reference images using polygon workflow). Apply PBR materials, light and render a hero still image, then animate one element for a 5–10 second output. Deliverables: Blender project file, hero render, animation render, brief process documentation (reference images, modeling choices, render settings).

> **BPA Option — #440 Computer Animation Team or V11 2D Animation Team:** The animation work in Week 13 is the foundation of the BPA animation entry. Students doing #440 extend this toward a full 2-minute team animation on the WSAP topic (team of 2–3, formed during Week 8–9 showcase). Students doing V11 create a 1:30–2:30 min 2D animation (virtual event, no qualifying required). V11 students must register by December 1. See [bpa-events.md](bpa-events.md).
>
> **BPA Option — #425 Computer Modeling:** The hard surface models built in Weeks 10–11 can be refined and documented as the #425 Computer Modeling entry. Students pursuing #425 should build their WSAP-aligned object during Weeks 10–11 modeling work.

---

### Unit 2.2: BPA Project — Hard Surface Modeling or Animation (Weeks 14–18)

**Focus:** Full project cycle for BPA competition entry using modeling (#425) or animation (#440/V11) developed since Q1.

**Competencies Reinforced:**
- All 7.6 Animation competencies (applied)
- All 7.4 Graphics competencies (applied)
- 7.3.1 Select media elements
- 7.3.2 Generate text for presentations
- 7.3.3 Incorporate graphics
- 7.3.5 Prepare and integrate images with graphics
- 7.3.6 Incorporate video footage
- 7.3.9 Integrate sound with visuals
- 7.3.10 Produce, test, debug, archive final product
- 7.3.11 Apply accessibility guidelines
- 5.6.1–5.6.17 Software Development Lifecycle (project documentation, SDLC workflow, deployment)

**BPA Project Workflow (5 weeks):**

**#425 Computer Modeling — Individual:**
1. **Week 14:** Finalize project concept — complete research profile (industry application, target scenario), design brief, production schedule
2. **Weeks 15–16:** Modeling production — refine and complete assets, develop full scene, apply PBR materials and lighting; build profile documentation alongside
3. **Week 17:** Final render package — hero images, wireframe views, presentation sheet/layout; write process documentation
4. **Week 18:** Peer critique using WSAP Computer Modeling rubric; finalize submission materials

**#440 Computer Animation Team — Team (up to 3):**
1. **Week 14:** Finalize team proposal — storyboard, shot list, design brief, production schedule; confirm role assignments
2. **Weeks 15–16:** Animation production — complete character/object animation, environment build, special effects
3. **Week 17:** Render final sequence; integrate sound/music, title card, credits
4. **Week 18:** Screening and peer review using WSAP Computer Animation rubric

**V11 2D Animation Team — Virtual Event (pre-submission):**
- Same general workflow as #440 but 2D animation (Blender 2D/Grease Pencil or equivalent)
- Submit entry package by January 15 pre-submission deadline

> *Note: All BPA entries from this course are in the modeling/animation category (#425/#440/V11). Students whose primary interest is entrepreneurship or presentation may select a universal BPA event instead — see [bpa-events.md](bpa-events.md) for options.*

> *⚑ December 1 — Virtual Events registration deadline (V11 2D Animation Team)*
> *By end of Q2: first complete version of BPA entry finished*

> *Note: Programming competencies (5.3–5.7) are covered in class as required for the WebXam; however, programming events (#330, #355) are not recommended for BPA in this course. All students complete a modeling or animation BPA entry.*

> *⚑ December 1 — Virtual Events registration deadline (V11 2D Animation Team)*
> *By end of Q2: first version complete*

---

## Quarter 3: Competition Season & Advanced Topics (Weeks 19–27)

### Unit 3.1: Testing, Refinement & Local Competition (Weeks 19–22)

**Focus:** Polish BPA projects; run local competition/showcase.

**Competencies Covered:**
- 1.1.7 Problem-solving, critical thinking
- 1.1.9 Give and receive constructive feedback
- 1.2.4 Negotiation and conflict resolution
- 1.2.7 Problem-solving and consensus building
- 1.2.8 Leadership styles — internal/external relationships
- 1.2.9 Digital communication advantages/disadvantages
- 1.2.10 Interpersonal skills, collaboration, teamwork

**Activities:**
- Final revision of BPA entries using WSAP rubric
- Peer model/animation critique using WSAP rubric; written feedback forms
- Polish renders, compile required submission materials (research profile, design brief, process documentation)

**BPA Local Competition / Showcase (January):**
- All students present their 3D model or animation work and explain their creative process
- BAC judges from product design, engineering, architecture, and game development
- Scored using WSAP rubric; top performers advance to state

> **Competition Pathway:** Local school showcase (January) → students who placed well *may choose* to advance to the Ohio State Leadership Conference (February–March) → state qualifiers *may choose* to advance to the NLC, Nashville (May 6–10). Advancing at every stage is the student’s choice.

> *⨑ January 15 — Virtual Events pre-submission deadline (V11 2D Animation)*

---

### Unit 3.2: Code Concepts & Extension (Week 23)

**Focus:** Conceptual Strand 5 literacy — enough exposure for students to recognize programming concepts on the WebXam MCQ. This is **not** a hands-on coding unit for most students. One week only. Extension track students continue writing Blender Python independently.

> **Why only one week?** This course runs once before transitioning to Hard Surface Modeling (145140), which has no programming on its WebXam at all. Investing 3 weeks in Strand 5 instruction (26% of a WebXam students will only take once) at the expense of Blender production time is the wrong trade. One week of conceptual exposure covers the vocabulary; extension students who want to write code can.

**Competencies — All Students (conceptual exposure):**
- 5.3.1–5.3.7: Boolean logic; recognize conditional, loop, and selection structures in annotated scripts
- 5.4.6–5.4.7: Identify syntax/logic errors by reading code (no running required)
- 5.5.5: Recognize naming conventions and comments in a given script
- 5.6.1–5.6.10: SDLC phases — plan, design, code, test, deploy, maintain; recognize phases from a description
- 5.6.12: Agile vs. waterfall (conceptual comparison)
- 5.7.1–5.7.3: Version control concepts — what a commit, diff, and branch represent (conceptual; no Git hands-on)
- 2.3.1–2.3.2: Binary/hex conversion (standalone worksheet)

**Competencies — Extension Track Only (students who opt in; ongoing):**
- 5.3.8–5.3.12: Write nested structures, functions, error handling in Blender Python
- 5.4.1–5.4.5: Configure and use Blender scripting editor; write, run, and test scripts
- 5.5.2, 5.5.6–5.5.7: Reuse libraries; format output; read inputs
- 5.6.11–5.6.17: Write, deploy, and maintain a script; peer code review
- 5.7.1–5.7.3 applied: track script changes with commits

**Week 23 Activities — All Students:**

*Bell ringers Mon–Fri:* Strand 5 vocabulary and concept questions in standard MCQ format (used as review only — not new instruction). Topics rotate: control structures (Mon), SDLC phases (Tue), version control concepts (Wed), error types (Thu), Agile/waterfall (Fri).

*One class session — Annotated Script Reading:*
- Teacher projects a 20-line Blender Python script with every line already annotated (comments explain each block)
- Students read through it as a class; teacher traces execution: "What happens on this line? What does this loop do? What is the if/else checking?"
- Students answer 5 questions on paper about the script: identify the loop, identify the if/else, predict what the final scene looks like, identify one naming convention, spot one potential error

*One class session — Flowchart & SDLC:*
- Given 8-step pseudocode description of a simple program, students draw a flowchart (start/end, process, decision, loop symbols)
- Teacher demo: walk through the SDLC using the Unit 1.2 Hall Pass project as the example (plan = Week 3 brief, design = design spec doc, build = TinkerCAD model, test = first print, deploy = delivery to teacher, maintain = what would happen if the teacher wanted a change next year) — students label each phase
- Agile vs. waterfall discussion: 5 minutes, compare using the hall pass project vs. a large software product

*One work session — Binary/Hex Worksheet:*
- 10-question standalone worksheet: convert between binary, hex, and decimal (2.3.1–2.3.2)
- Done in class, graded as a completion check — not tested again

**Week 23 Activities — Extension Students (in addition to above):**
- Independent Blender Python work: modify a given base script (a loop placing objects in a row) by changing object type, step distance, and adding a color-alternating condition — 15–20 lines of working code
- Extension students continue this track into Q4 if they wish; the Blender Python capstone option in Unit 4.2 is available to them

**Assessment:**
- All students: annotated script reading (5 questions), flowchart exercise, binary/hex worksheet — completion-based
- Extension: modified script submitted by end of week

---

### Unit 3.3: Business, Ethics & Intellectual Property (Weeks 24–27)

**Focus:** Business context for the 3D industry. IP law in digital content. Remaining Strand 1 competencies. **Expanded to 4 weeks** (was 2) using the time freed by compressing Unit 3.2 — this creates more space for BPA refinement alongside the business content, and allows additional Blender advanced techniques time.

**Competencies Covered:**
- 1.1.6 Work ethic, accountability
- 1.1.11 Cultural beliefs and practices
- 1.1.12 Healthy lifestyles
- 1.2.4 Negotiation and conflict resolution
- 1.2.7 Problem-solving and consensus building
- 1.2.12 Technical writing — forms and reports
- 1.3.4 Federal/state consumer protection laws
- 1.3.5 Safety compliance measures
- 1.3.7 Labor laws affecting employment
- 1.3.8 Computer and intellectual property laws
- 1.7.13 Protect intellectual property
- 9.6.1 Licensing and intellectual property laws (copyright, trademark, DRM)

**Week 24 — IP, Licensing & 3D Asset Law:**
- Who owns a 3D model? Scenarios: client work (work-for-hire), free assets with attribution licenses, AI-generated meshes, scan-based models from copyrighted objects
- Open source and Creative Commons in the 3D asset world (TurboSquid, Sketchfab, Fab.com licensing tiers)
- Software licensing: Blender (GPL), TinkerCAD/OnShape (proprietary SaaS), free vs. paid alternatives
- Scenario drill: given 5 situations (student wants to use a Sketchfab model in a client project, downloads a texture pack, uses a 3D scan of a product), determine what is legal and why

**Week 25 — Business Ethics, Work Habits & Career Readiness:**
- Ethics scenarios: missed deadlines, claiming work is original when it isn't, using paid assets without a license
- Labor law basics: work-for-hire vs. contractor, portfolio ownership after leaving a job
- Technical writing practice: draft a one-page professional design brief for the Unit 4.2 capstone project (this becomes the proposal document used in the capstone)
- Career reflection: update career plan from Unit 1.1; identify 1–2 next steps (internship, portfolio platform, ArtStation, freelance profile)

**Weeks 26–27 — Advanced Blender Production (bonus time):**
- Additional Blender production time for students to push their BPA-adjacent work further or explore techniques they haven't had time for (particle systems, more complex UV work, advanced lighting rigs)
- Extension students continue Python work
- Teacher circulates for individual coaching; strong students can begin scoping their Unit 4.2 capstone project

**Major Project — "IP & Licensing Case Study":**
Analyze a real-world case involving 3D asset theft, AI-generated content IP, or software licensing dispute. Write a 1–2 page technical report with findings and professional recommendations. Covers 9.6 Cybersecurity Law and 1.3 Business Ethics outcomes.

---

## Quarter 4: Testing, Capstone & Career Readiness (Weeks 28–37)

### Unit 4.1: WebXam Review & Initial Test (Weeks 28–29)

**Focus:** Targeted EOC test review and initial WebXam administration.

**Weeks 28–29 — Review:**
- EOC test review keyed to blueprint weights — prioritize Strand 7 (Animation 20%, Graphics 13%, Production 10%); Strand 5 (~26%) is reviewed at conceptual level using bell-ringer-style MCQs (same format as Unit 3.2 bell ringers) — no new programming instruction
- Practice questions covering all tested outcomes
- Compare performance on practice questions to pretest baseline — target weak areas

**End of Week 29 — Initial WebXam:**
- **⚑ WebXam Initial Test — administer by April 23**
- Makeups for absent students must happen within the same week to preserve the 30-day retake window
- After test: students receive preliminary scores

---

### Unit 4.2: Capstone Project + Remediation & Retake (Weeks 30–37)

**Focus:** Large summative capstone completed during the 30-day retake window. All students work on an independent capstone; students who need to retake also receive embedded remediation.

**Competencies Covered (applied/reinforced):**
- All 7.6 Animation competencies (revisited)
- All 7.4 Graphics competencies (revisited)
- All 5.3–5.7 Programming competencies (revisited for WebXam)
- All 7.3 Production competencies (revisited)
- 1.1.1–1.1.5 (Career planning and employability — revisited)
- 1.1.10 Coping skills for workplace demands

**Major Project — "Capstone + Technical Portfolio" (Summative):**
Two linked deliverables:
1. **Capstone piece** — Student-chosen project demonstrating mastery. Must be different from BPA entry.
   - **Hard Surface Scene / Product Visualization:** Model and render a detailed hard surface or architectural scene; apply PBR materials; light and render hero images
   - **Animated Short / Motion Graphics:** Storyboard-to-final 15–30 second animation or product introduction sequence
   - **3D-Printed Prototype + Documentation — "Professional Delivery Package":** Take a design from concept sketch → TinkerCAD or Blender model → rendered visualization → 3D printed physical prototype → one-page design brief. This option previews the HSM 145140 standard *2.13 Rollout & Handoff* (the 7% outcome requiring students to deliver a complete production package to a client/stakeholder).
   - **Technical Drawing Portfolio:** Full set of TinkerCAD designs, annotated orthographic views, slicer documentation, and printed prototype for a multi-part design
   - Must include: proposal, design documentation, production files, final presentation with process write-up
2. **Technical Portfolio** — Curated collection of 4–6 best pieces from the year with process documentation, résumé, and career plan update. The capstone piece is the centerpiece.

Students present the portfolio and capstone at an end-of-year showcase for class and/or BAC panel.

**Weekly Structure (Weeks 30–37):**

| Day | All Students | Retake Students (additional) |
|---|---|---|
| Mon | Capstone project work | — |
| Tue | Capstone project work | 30 min targeted WebXam review (weak areas from initial test) |
| Wed | Capstone project work | — |
| Thu | Peer critique / check-in | 30 min targeted WebXam review |
| Fri | Capstone project work | — |

**Week-by-Week Milestones:**
- **Week 30:** Project proposal — concept, design document, schedule. Begin asset creation.
- **Week 31:** Core production — modeling and animation work; advanced extension students may explore **Fusion 360** (parametric/feature-based modeling that previews the HSM 145140 curriculum) or pursue a Blender Python capstone (Parametric Modifier Script) with teacher approval
- **Week 32:** Continued production — refine assets, add detail, iterate
- **Week 33:** Testing, debugging, polish. Begin portfolio assembly.
- **Week 34:** Finalize capstone piece. **NLC May 6–10** — state qualifiers travel to Nashville
- **Week 35:** Portfolio compilation — process documentation, résumé, career plan. NLC debrief.
- **Week 36:** Final portfolio revisions. **⚑ WebXam Retake — available 30 days after initial test (by May 23)**
- **Week 37:** End-of-year showcase — present capstone + portfolio to class/BAC. Course evaluation. Career reflection.

> **Retake policy note:** WebXam requires a minimum 30-day gap between attempts. Students who test April 23 are eligible to retake May 23. Students who test earlier can retake sooner. Schedule makeups promptly to preserve the full retake window before school ends May 27.
>
> **Differentiation:** Students who passed the WebXam on the first attempt spend full periods on the capstone and may take on stretch goals (additional animation sequences, advanced hard surface detailing, parametric Blender Python work). Students who need to retake dedicate ~30 minutes twice per week to targeted review on their weakest blueprint areas (animation, graphics, or programming concepts), using the remaining time on the capstone.

---

## Competency Coverage Checklist

All competencies from the standards document are touched at least once. Strand 5 (programming) is covered at **conceptual exposure level** for all students; full writing/running competencies are available via the extension track only.

| Strand | Outcomes | Primary Units | Coverage Level |
|---|---|---|---|
| 1.1 Employability Skills | 1.1.1–1.1.7, 1.1.9–1.1.12 | 1.1, 1.2, 3.1, 3.3, 4.2 | Full |
| 1.2 Leadership & Comms | 1.2.4, 1.2.7, 1.2.12 | 3.3 | Full |
| 1.3 Business Ethics & Law | 1.3.4, 1.3.5, 1.3.7, 1.3.8 | 3.3 | Full |
| 1.7 Entrepreneurship | 1.7.13 | 3.3 | Full |
| 2.3 Data Encoding | 2.3.1, 2.3.2 | 3.2 | Full (standalone worksheet) |
| 2.4 Emerging Technologies | 2.4.1–2.4.4 | 1.1, 1.2 | Full |
| 5.3 Logical Ops & Control | 5.3.1–5.3.7 (conceptual); 5.3.8–5.3.12 (extension) | 3.2 | Conceptual / Extension |
| 5.4 IDE | 5.4.6–5.4.7 (conceptual); 5.4.1–5.4.5 (extension) | 3.2 | Conceptual / Extension |
| 5.5 Programming Conventions | 5.5.5 (conceptual); 5.5.2, 5.5.6–5.5.7 (extension) | 3.2 | Conceptual / Extension |
| 5.6 Software Dev Lifecycle | 5.6.1–5.6.10, 5.6.12 (conceptual); 5.6.11–5.6.17 (extension) | 3.2 | Conceptual / Extension |
| 5.7 Configuration Management | 5.7.1–5.7.3 (conceptual) | 3.2 | Conceptual |
| 7.2 Multimedia Tools | 7.2.1, 7.2.3, 7.2.8–7.2.11 | 1.4 | Full |
| 7.3 Production | 7.3.1–7.3.6, 7.3.9–7.3.11 | 2.2, 4.2 | Full |
| 7.4 Graphics | 7.4.2–7.4.4, 7.4.8–7.4.10 | 1.2, 1.3, 2.1 | Full |
| 7.6 Animation | 7.6.1–7.6.11 | 2.1, 2.2, 4.2 | Full |
| 9.6 Cybersecurity Law | 9.6.1 | 3.3 | Full |
