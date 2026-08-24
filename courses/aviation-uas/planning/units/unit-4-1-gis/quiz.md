# Quiz: GIS, Remote Sensing & Photogrammetry

**Course:** Unmanned Aircraft (177024)
**Unit:** 4.1 — GIS, Remote Sensing & Photogrammetry
**Format:** 15 MCQ | End of Week 30 | ~15 min
**Standards:** 7.10.1–7.10.11

---

## Questions

### 1.
A GIS (Geographic Information System) is best described as:

A. A flight planning app for airspace visualization
B. A computer system for capturing, storing, analyzing, and displaying spatially referenced data
C. A satellite navigation system used for precision agriculture
D. A photogrammetry engine that stitches aerial images

> **Answer: B** — GIS integrates spatial data with databases for analysis and display (7.10.1)

---

### 2.
An orthomosaic differs from a regular aerial photograph because it is:

A. Larger in file size due to high resolution
B. Geometrically corrected so that all pixels represent accurate horizontal distances — suitable for measurement
C. Captured at night using thermal sensors
D. A single image taken from directly overhead at the highest altitude possible

> **Answer: B** — Orthomosaics are geometrically corrected and measurable; regular photos have perspective distortion (7.10.5)

---

### 3.
To produce a high-quality orthomosaic from UAS imagery, standard recommended overlap settings are:

A. 20% frontal overlap, 20% sidelap
B. 80% frontal overlap, 60–65% sidelap
C. 50% frontal overlap, 10% sidelap
D. 100% overlap — every point must appear in every image

> **Answer: B** — 80/60-65 overlap is the professional standard for reliable photogrammetry (7.10.5)

---

### 4.
Ground Sampling Distance (GSD) refers to:

A. The distance between Ground Control Points during a survey
B. The altitude above ground level during a mapping mission
C. The real-world size represented by one pixel in an aerial image — smaller GSD = higher resolution
D. The minimum separation distance between UAS in a swarm operation

> **Answer: C** — GSD measures image resolution in ground terms; lower altitude = smaller GSD = higher resolution (7.10.5)

---

### 5.
The difference between raster and vector GIS data is:

A. Raster data is 3D; vector data is 2D
B. Raster data is stored as a grid of pixels; vector data is stored as geometric shapes (points, lines, polygons) with attribute tables
C. Raster data requires GPS; vector data does not
D. Raster data is used only for web maps; vector data is used only in desktop GIS

> **Answer: B** — Raster = pixel grid; vector = geometric shapes with attributes (7.10.3)

---

### 6.
An attribute table in a GIS vector layer contains:

A. The coordinate system and projection settings for the layer
B. Data values associated with each spatial feature — such as feature type, area, height, or owner name
C. The image tiles used to render the layer's background map
D. Processing logs from photogrammetry software

> **Answer: B** — Attribute tables store non-spatial data linked to geographic features (7.10.4)

---

### 7.
A Digital Elevation Model (DEM) is best used for:

A. Planning flight routes in congested urban airspace
B. Identifying variations in surface elevation across a landscape
C. Generating color-corrected orthomosaics for publication
D. Displaying METAR and TAF weather data on a map

> **Answer: B** — DEMs represent surface elevation; used for terrain analysis, earthwork calculations, and watershed modeling (7.10.6)

---

### 8. [HOT]
A student collects 240 aerial images at 120 ft AGL over a 5-acre field. After uploading to WebODM, the orthomosaic shows a blank patch in one corner of the field. The most likely cause is:

A. The camera sensor overheated in the sun
B. Insufficient image overlap in that corner of the survey area — that section of the field had too few images for photogrammetry to reconstruct it
C. WebODM does not process images taken at altitudes above 100 ft
D. The orthomosaic projection does not cover that geographic area

> **Answer: B** — Gaps in orthomosaics result from insufficient overlap; the solver cannot reconstruct surfaces without multiple image views (7.10.5)

---

### 9.
QGIS is described as "open-source." This means:

A. The software is available only to government users with a FOIA request
B. The software's source code is publicly available and the software is free to use, modify, and distribute
C. QGIS maps are automatically published to the internet when saved
D. QGIS cannot be used commercially — only for academic research

> **Answer: B** — QGIS is free, open-source GIS software (7.10.1)

---

### 10.
Remote sensing includes which of the following UAS applications?

A. Filing flight plans and obtaining airspace authorization
B. Collecting aerial imagery, thermal data, or multispectral data from a distance without direct contact
C. Programming autonomous waypoint missions
D. Maintaining Part 107 pilot certification

> **Answer: B** — Remote sensing = collecting data from a distance without contact; UAS imagery is remote sensing (7.10.2)

---

### 11.
LiDAR differs from photogrammetry because LiDAR:

A. Produces only 2D maps, while photogrammetry produces 3D models
B. Uses laser pulses to directly measure distances, generating high-accuracy 3D point clouds; photogrammetry derives 3D data from overlapping 2D images
C. Requires GPS authorization while photogrammetry does not
D. Is only available on military drones, not civilian platforms

> **Answer: B** — LiDAR uses laser ranging; photogrammetry uses image analysis to derive 3D data (7.10.2)

---

### 12.
A coordinate system (CRS) in GIS is important because:

A. It determines the color scheme used to render raster layers
B. It defines the mathematical framework that allows spatial data from different sources to align correctly on the same map
C. It sets the maximum zoom level available in Felt
D. It controls the number of digits used in GPS coordinates

> **Answer: B** — CRS alignment is required for layers to overlay correctly (7.10.7)

---

### 13.
A Felt map is most useful for which of the following purposes?

A. Processing raw UAS imagery into an orthomosaic
B. Conducting advanced spatial analysis with Python scripting
C. Collaboratively building and sharing maps with team members in a browser-based environment
D. Filing LAANC authorization for a survey flight

> **Answer: C** — Felt is a collaborative web GIS tool (7.10.1)

---

### 14. [HOT]
A client asks you to deliver "centimeter-level accuracy" for a boundary survey. Which tool would you add to your standard DJI Mavic 3 photogrammetry workflow to achieve this?

A. Increase the survey altitude to 400 ft to capture more images per flight
B. Place Ground Control Points (GCPs) precisely surveyed with an RTK GPS receiver, then reference them during WebODM processing
C. Enable DJI ActiveTrack during the survey mission
D. Switch from JPG to RAW image format — RAW provides centimeter accuracy

> **Answer: B** — GCPs with RTK GPS improve absolute accuracy from meter-level to centimeter-level (7.10.5)

---

### 15.
Spatial analysis in GIS enables a UAS operator to:

A. Visualize images in 3D before processing them in WebODM
B. Identify patterns, relationships, and trends in geographic data — such as measuring all building footprints or finding which parcels are within 300 ft of a wetland
C. Transmit imagery in real-time to a cloud server during flight
D. Calculate the aircraft's battery consumption during a survey mission

> **Answer: B** — Spatial analysis answers geographic questions: proximity, area, overlap, pattern (7.10.8)

---

## Answer Key

| Q | A | Standard |
|---|---|---|
| 1 | B | 7.10.1 |
| 2 | B | 7.10.5 |
| 3 | B | 7.10.5 |
| 4 | C | 7.10.5 |
| 5 | B | 7.10.3 |
| 6 | B | 7.10.4 |
| 7 | B | 7.10.6 |
| 8 | B | 7.10.5 |
| 9 | B | 7.10.1 |
| 10 | B | 7.10.2 |
| 11 | B | 7.10.2 |
| 12 | B | 7.10.7 |
| 13 | C | 7.10.1 |
| 14 | B | 7.10.5 |
| 15 | B | 7.10.8 |
