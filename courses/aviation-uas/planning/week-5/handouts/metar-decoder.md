# The METAR Decoder

**Aviation UAS, Week 5.** You have been reading weather off a graphical interface all year. This week you
learn to read the raw code the graphics are built from. Keep this page. You will use it every flight day.

---

## A whole METAR, taken apart

```
KCMH 141851Z 27012G22KT 10SM FEW045 SCT120 24/13 A2998
```

| Piece | What it is | This one says |
|-------|-----------|---------------|
| `KCMH` | Station identifier | Port Columbus |
| `141851Z` | Day and time, in Zulu | The 14th at 1851 UTC |
| `27012G22KT` | Wind | From 270 degrees at 12 knots, gusting 22 |
| `10SM` | Visibility | 10 statute miles |
| `FEW045` | Sky condition | Few clouds at 4,500 feet |
| `SCT120` | Sky condition | Scattered at 12,000 feet |
| `24/13` | Temperature / dew point | 24 C and 13 C |
| `A2998` | Altimeter | 29.98 inches of mercury |

**Read it left to right, always in that order.** The order never changes, which is the whole reason the
format exists.

---

## Field by field

### Station identifier

Four letters. In the lower 48, they start with **K**. `KCMH` is Columbus, `KOSU` is Ohio State University
Airport.

### Time: the Z

`141851Z` is **day 14, at 1851 Zulu.** Zulu is UTC, the same clock everywhere in the world, so that a weather
report means the same thing in Ohio as it does in Tokyo.

**Ohio is UTC minus 4 in summer (EDT), minus 5 in winter (EST).**

So `1851Z` in September is **2:51 PM** local. Subtract 4, and if you go below zero, wrap back a day.

> **Check the time before you trust the weather.** A METAR is an observation, not a forecast. If it is three
> hours old, it is describing a sky that may not exist anymore.

### Wind: `27012G22KT`

Break it into three parts:

| Part | Means |
|------|-------|
| `270` | The direction the wind is coming **FROM**, in degrees. 270 is due west |
| `12` | Speed, **12 knots** |
| `G22` | Gusting to **22 knots**. This part only appears when there are gusts |
| `KT` | The unit: knots. Always knots |

**Special cases:**

- `00000KT` is **calm**
- `VRB05KT` means **variable direction** at 5 knots, common when the wind is light
- `27012KT` with no G means steady, no gusts

> **The gust is the number that matters to you.** Your aircraft does not care about the average. It gets hit
> by the peak.

### Visibility

A number followed by `SM` for **statute miles**. `10SM` is ten miles. `1/2SM` is half a mile. `2SM` is two.

**Part 107 requires 3 statute miles.** Anything below `3SM` is an automatic no-go.

### Sky condition

Two parts: **how much** of the sky is covered, and **how high** the layer is.

| Code | Coverage | In eighths |
|------|----------|-----------|
| `SKC` or `CLR` | Clear | none |
| `FEW` | Few | 1 to 2 |
| `SCT` | Scattered | 3 to 4 |
| `BKN` | Broken | 5 to 7 |
| `OVC` | Overcast | 8, the whole sky |

The three digits after are the height **in hundreds of feet above the ground.**

- `OVC007` is **overcast at 700 feet**
- `SCT045` is **scattered at 4,500 feet**
- `BKN012` is **broken at 1,200 feet**

**Add two zeros.** That is the whole trick.

> `BKN` or `OVC` is what pilots call a **ceiling.** That is the lowest layer you cannot see through.

### Temperature and dew point

`24/13` is **24 C over a dew point of 13 C.** Always Celsius. A minus sign shows as `M`, so `M02/M05` is
minus 2 over minus 5.

**When the two numbers get close together, expect fog or mist.** `18/17` is one degree apart and is telling
you the air is nearly saturated.

### Altimeter

`A2998` is **29.98 inches of mercury.** Put the decimal after the first two digits.

### Weather codes, the ones you will actually see

| Code | Means |
|------|-------|
| `RA` | Rain |
| `SN` | Snow |
| `BR` | Mist |
| `FG` | Fog |
| `HZ` | Haze |
| `TS` | Thunderstorm |
| `DZ` | Drizzle |

With intensity in front: `-` light, `+` heavy, nothing is moderate. So `-RA` is light rain and `+TSRA` is a
heavy thunderstorm with rain.

**`VC` means in the vicinity**, so `VCTS` is a thunderstorm nearby but not overhead. Treat that as a no-go
regardless.

---

## Practice: decode these

Write out every field in plain English.

**1.** `KOSU 141953Z 00000KT 10SM CLR 26/11 A3001`

**2.** `KCMH 150151Z 18015G25KT 5SM -RA BKN015 OVC030 19/17 A2985`

**3.** `KTZR 150253Z VRB04KT 1/2SM FG OVC002 16/16 A2992`

<details>
<summary>Answers</summary>

**1.** Ohio State University Airport, the 14th at 1953Z (3:53 PM EDT). Wind calm. Visibility 10 statute
miles. Sky clear. 26 C over a dew point of 11 C. Altimeter 30.01. **This is a perfect flying day.**

**2.** Columbus, the 15th at 0151Z (9:51 PM EDT on the 14th). Wind from 180 at 15 knots gusting 25.
Visibility 5 statute miles. Light rain. Broken at 1,500 feet, overcast at 3,000. 19 C over 17 C. Altimeter
29.85. **No-go: gusting 25, and it is raining.**

**3.** Bolton Field, the 15th at 0253Z. Wind variable at 4 knots. Visibility **half a statute mile** in fog.
Overcast at **200 feet**. 16 over 16, saturated, which is why there is fog. Altimeter 29.92. **No-go:
visibility is far below the 3 statute mile minimum.**

</details>

---

## TAF, in one paragraph

A **TAF** is the forecast version. Same codes, but it covers a window of time instead of a moment, and it
uses `FM` (from) to mark when conditions are expected to change.

```
KCMH 141720Z 1418/1524 27010KT P6SM SCT050 FM150200 31012G20KT P6SM BKN035
```

That reads: from 1800Z, wind 270 at 10, visibility better than 6 miles, scattered at 5,000. **From 0200Z**,
wind shifts to 310 at 12 gusting 20 and the layer drops to broken 3,500.

**METAR is what is happening. TAF is what is expected.** Check both: the METAR tells you whether you can
launch, the TAF tells you whether you will be able to land in an hour.

---

## Where to get them

**aviationweather.gov.** That is the official source. Not a phone weather app, not a search result.
