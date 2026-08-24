# Lab: METAR Decode and Go/No-Go Weather Brief

**Course:** Unmanned Aircraft (177024)
**Unit:** 2.1 — Meteorology for UAS Operations
**Duration:** 3 days | **Weeks:** 10–11 (Days 1–3)
**Tools Needed:** Google Docs, [aviationweather.gov](https://aviationweather.gov) (no account required), teacher-provided METAR/TAF decode reference sheet
**FAA Study Guide Reference:** Chapter 3a (Aviation Weather Sources), Chapter 3b (Effects of Weather on sUAS Performance)

---

## Objectives

By the end of this lab, students will be able to:
- Decode all 12 elements of a METAR using FAA standard format
- Interpret a TAF for flight planning purposes
- Identify AIRMET and SIGMET types and their significance
- Make a documented go/no-go flight decision using real weather data
- Explain how weather conditions affect DJI Mavic 3 performance

---

## Background / Setup

> Every commercial UAS pilot must complete a weather check before every flight. This is both a legal requirement under Part 107 and a practical safety necessity. The FAA Part 107 knowledge test includes METAR decode questions — you must be able to look at a string of coded weather data and quickly determine whether conditions are legal and safe to fly. This lab builds exactly that skill.
>
> The primary source for aviation weather is [aviationweather.gov](https://aviationweather.gov) — a free FAA resource. You will use it in this lab and on every future flight day.

---

## METAR Decode Reference

Use this decode sequence for every METAR:

| Position | Element | Example | Meaning |
|---|---|---|---|
| 1 | Report type | `METAR` | Routine observation (SPECI = special update) |
| 2 | Station ID | `KCMH` | Columbus, OH — "K" prefix = contiguous US airport |
| 3 | Date/Time (UTC) | `151254Z` | 15th of month, 12:54 Zulu (UTC) |
| 4 | Modifier | `AUTO` | Automated station; `COR` = corrected report |
| 5 | Wind | `27015G22KT` | From 270° (west), 15 kts, gusting to 22 kts |
| 6 | Visibility | `10SM` | 10 statute miles; Part 107 minimum = 3SM |
| 7 | Weather | `+TSRA BR` | Heavy thunderstorm/rain and mist |
| 8 | Sky condition | `BKN014` | Broken clouds at 1,400 ft AGL |
| 9 | Temperature/Dew point | `22/10` | 22°C temp, 10°C dew point |
| 10 | Altimeter | `A3002` | 30.02 "Hg barometric pressure |
| 11 | Zulu time | (see position 3) | All METAR times are UTC |
| 12 | Remarks | `RMK TSNO` | Station reports no thunderstorm detection |

**Sky cover codes:** SKC = clear | FEW = 1–2/8 | SCT = 3–4/8 | BKN = 5–7/8 | OVC = 8/8 | VV = vertical visibility (fog)

**Part 107 minimum legal conditions:** Visibility ≥ 3 SM | Cloud clearance: 500 ft below, 2,000 ft horizontally from any cloud | Daylight only (civil twilight with anti-collision lighting for §107.29)

---

## Instructions

### Day 10-1 — METAR Decode Practice

Open a Google Doc. Decode each METAR below completely. For each one, list all 12 elements and their meanings, then answer: **Legal to fly under standard Part 107? Why or why not?**

---

**METAR 1:**
```
METAR KCMH 151254Z 27015G22KT 10SM FEW045 SCT250 22/10 A3002 RMK AO2
```

**METAR 2:**
```
METAR KLCK 211756Z AUTO 18008KT 2SM BR OVC004 14/13 A3005 RMK AO2
```

**METAR 3:**
```
METAR KOSU 081530Z 30012KT 15SM CLR 08/M02 A2990 RMK AO2 SLP134
```

**METAR 4:**
```
METAR KZZU 151953Z AUTO 09007KT 1/4SM FG VV002 18/18 A3010 RMK AO1
```

**METAR 5 (challenge):**
```
METAR KGGG 161753Z AUTO 14021G26KT 3/4SM +TSRA BR BKN008 OVC012CB 18/17 A2970 RMK PRESFR
```
> This is the FAA study guide example METAR. Decode it element by element, explain the cumulonimbus cloud significance, and explain what "PRESFR" means.

---

### Day 10-2 — TAF Interpretation + Go/No-Go Decision

**Part A: TAF Decode**

A TAF is a forecast for a 5-mile radius around an airport, valid for 24–30 hours. Use the same codes as METAR. Common TAF change groups:
- `TEMPO` = temporary conditions expected
- `FM` = from (a specific time, conditions change)
- `BECMG` = becoming (gradual change)

Decode this TAF:
```
TAF KCMH 151120Z 1512/1612 27012KT P6SM FEW035
     TEMPO 1514/1518 BKN020 -SHRA
     FM160000Z 26008KT P6SM SKC
     BECMG 1606/1608 VRB03KT P6SM SKC
```

Answer:
1. What conditions are forecast at 1:00 PM local (assume UTC-4)?
2. Between 3:00 PM and 7:00 PM local, what temporary conditions are expected?
3. After midnight UTC, what are conditions?
4. Is this forecast acceptable for a 4:00 PM commercial drone shoot? Explain.

**Part B: Go/No-Go Decision Worksheet**

You are planning a commercial real estate aerial photo shoot at a property in central Ohio. Your shoot window is **today, 2:00–4:00 PM local**. Using the METAR from Day 10-1 Exercise 3 (KOSU) as your current conditions and the TAF from Part A as your forecast, complete this Go/No-Go checklist:

| Factor | Requirement | Actual Conditions | Go / No-Go |
|---|---|---|---|
| Visibility | ≥ 3 SM | | |
| Cloud clearance | 500 ft below, 2,000 ft horizontal | | |
| Wind | Within manufacturer limits (DJI Mavic 3: 23 mph/20 kts) | | |
| Precipitation | No rain/snow | | |
| Temperature | Above aircraft min operating temp (-10°C) | | |
| SIGMET/AIRMET | No active convective SIGMET | | |
| TFR check | No TFR in effect | | |
| Overall Decision | | | **GO / NO-GO** |

Write a 3–4 sentence client communication explaining your decision.

---

### Day 10-3 — Live Weather Brief Using aviationweather.gov

Navigate to [aviationweather.gov](https://aviationweather.gov). Today you will look up **actual current weather** for a real flight scenario.

**Scenario:** You are planning a drone inspection flight at Knox County Airport (KKnox — KZNZ) today. Pull live data and complete the following:

1. **METAR:** Look up the current METAR for the nearest reporting station. Decode it fully. Is visibility ≥ 3 SM?
2. **TAF (if available):** What is the forecast for the next 6 hours?
3. **SIGMET/AIRMET check:** Go to Products → AIRMETs/SIGMETs. Are any active for Ohio?
4. **Winds aloft (optional):** Check winds aloft forecast (FB) for 3,000 ft over Ohio. What are the winds at that level?
5. **Go/No-Go:** Based on your live data, is it a go or no-go for a flight at 200 ft AGL in Class G airspace near KZNZ? Document your reasoning.

> **Real-world note:** This is exactly what you do before every commercial Part 107 flight. The FAA Part 107 knowledge test will ask you to decode METARs and interpret weather products. Practice this skill until it is automatic.

---

## Standards Demonstrated

| ✓ | Standard | What to Show |
|---|----------|--------------|
| ☐ | **7.11.4** — Weather products and resources for preflight planning | Days 10-2 and 10-3: use aviationweather.gov; interpret METAR/TAF |
| ☐ | **7.11.5** — Potential flight hazards | Day 10-2: SIGMET/AIRMET check in go/no-go worksheet |
| ☐ | **7.6.3** — Effects of temperature on weather | Day 10-1: temperature/dew point spread analysis (METAR 4) |
| ☐ | **7.11.3** — Weather and visibility requirements | Day 10-1: all 5 METARs evaluated for Part 107 legal minimums |
| ☐ | **7.6.12** — Thunderstorms | Day 10-1 METAR 5: cumulonimbus identification and action required |
| ☐ | **1.2.12** — Technical writing: forms and reports | Day 10-2: Go/No-Go worksheet and client communication |

---

## Extension Task

Look up the FAA Part 107 ACS (Airman Certification Standards) weather task requirements at faa.gov. Identify the **three specific weather products** an applicant must demonstrate ability to interpret. Add a brief note to your Google Doc explaining which of those you addressed in this lab.
