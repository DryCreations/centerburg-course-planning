# Lab: UAS GIS Workflow — Imagery to Map

**Course:** Unmanned Aircraft (177024)
**Unit:** 4.1 — GIS, Remote Sensing & Photogrammetry
**Duration:** 3 days | **Weeks:** 28–29
**Tools:** WebODM (school install or cloud), QGIS, Felt, DJI Mavic 3
**Standards Focus:** 7.10.1–7.10.11

---

## Objectives

By the end of this lab, students will:
- Plan a basic photogrammetry survey mission (altitude, overlap, GSD)
- Process UAS imagery through WebODM to produce an orthomosaic
- Import the orthomosaic into QGIS and add at least 2 vector layers
- Create and share a collaborative map in Felt
- Interpret GIS output for a real-world analysis question

---

## Background

> Commercial UAS applications increasingly require GIS skills. An operator who can fly a survey, process the imagery, and deliver a usable map product is worth significantly more than one who can only fly. This lab teaches the full professional workflow from flight planning through final map product.

---

## Instructions

### Day 28-1 — Survey Mission Planning + Flight

**Part A: Mission Planning**

Before launching, configure the survey mission parameters in DJI Pilot 2 (or alternative mission planning tool):

| Parameter | Required Value | Your Setting |
|-----------|---------------|-------------|
| Survey altitude | 120 ft AGL | |
| Frontal overlap | 80% | |
| Sidelap | 65% | |
| Camera angle | Nadir (straight down, 90°) | |
| Image format | JPG + RAW if available | |
| Estimated GSD | Calculate: GSD ≈ altitude(cm) × sensor width(mm) ÷ focal length(mm) ÷ image width(px) | |

**Calculate your GSD:** For the DJI Mavic 3 at 120 ft AGL (3,657 cm), 4/3" sensor:
- Approximate GSD ≈ 3.0–3.5 cm/pixel at this altitude
- Record your calculated value

**Survey Area:** [Teacher specifies: school grounds, athletic field, or designated site]

**Part B: Flight**
- Complete full preflight checklist (Unit 2.2 format)
- Execute the survey mission; monitor for link, battery, and obstacle conflicts
- Note actual flight time and image count on your flight log

---

### Day 29-2 — Photogrammetry Processing in WebODM

**Setup:** Log in to class WebODM instance (URL provided by teacher) or use local WebODM installation.

**Processing Steps:**
1. Create a new project: "Unit 4.1 Survey — [Your Name] — [Date]"
2. Upload all imagery from your survey flight
3. Set processing options:
   - Task type: 3D Point Cloud + Orthophoto + DTM
   - Feature quality: High (or Medium if processing time is constrained)
   - Min num features: 8000
4. Start processing. Record start time.
5. While processing, answer these questions in your lab notebook:
   - What happens to image quality if overlap is reduced to 40%?
   - What would decrease your GSD (produce higher-resolution imagery)?
   - What is the purpose of a Ground Control Point (GCP)?

**When processing is complete:**
6. Download: Orthophoto (GeoTIFF), DEM (GeoTIFF), and point cloud (LAZ if available)
7. View the 3D point cloud in the WebODM viewer — take a screenshot showing the point cloud from an oblique angle

---

### Day 30-3 — QGIS Analysis + Felt Collaborative Map

**Part A: QGIS**

1. Open QGIS. Start a new project. Set CRS to EPSG:4326 (WGS 84).
2. Load the orthomosaic (GeoTIFF) as a raster layer.
3. Load the DEM as a second raster layer. Set it to a "Pseudocolor" renderer showing elevation variation.
4. Add an OpenStreetMap base map (XYZ Tiles → OpenStreetMap) for context.
5. Create a new vector polygon layer. Digitize at least 3 features visible in your orthomosaic (e.g., buildings, parking lots, athletic fields, vegetation zones). Add at least one attribute field to the polygon layer: "Feature_Type" (text field).
6. Export a final map layout using the QGIS print composer:
   - Add: title, north arrow, scale bar, legend, and your name
   - Export as PNG or PDF

**Part B: Felt Collaborative Map**

1. Teacher shares a Felt map for this unit — join using the class link.
2. Add your orthomosaic as an uploaded image layer (or add your 3 digitized polygons as a GeoJSON layer exported from QGIS).
3. Annotate the map with at least one note explaining what your survey area shows.
4. View at least 2 classmates' contributions; add one comment on each.

---

## Questions for Lab Notebook

Answer these after completing all 3 days:

1. At 120 ft AGL, what is the approximate GSD for your DJI Mavic 3 survey? How would this change at 200 ft AGL?
2. What is the difference between a DEM and an orthomosaic?
3. What is the difference between raster and vector data? Give one example of each from your lab.
4. Why is image overlap important in photogrammetry? What would happen to your orthomosaic if overlap was only 20%?
5. Name one real-world application of UAS photogrammetry in each of these industries: agriculture, construction, emergency management.

---

## Standards Demonstrated

| ✓ | Standard | What to Show |
|---|----------|--------------|
| ☐ | **7.10.1** — Identify GIS applications | Felt collaborative map with annotation |
| ☐ | **7.10.2** — Remote sensing concepts | Lab notebook Q1–Q3 answers |
| ☐ | **7.10.3** — Raster vs. vector | QGIS project: both raster (ortho) and vector (digitized polygons) |
| ☐ | **7.10.4** — Attribute tables | Vector layer attribute field "Feature_Type" filled in |
| ☐ | **7.10.5** — Photogrammetry workflow | WebODM orthomosaic and DEM produced and downloaded |
| ☐ | **7.10.6** — Elevation data interpretation | DEM layer visualized in QGIS |
| ☐ | **7.10.7** — Coordinate systems | Project CRS set to WGS 84; recorded in lab notes |
| ☐ | **7.10.8** — Spatial analysis | QGIS map layout showing feature digitization |
