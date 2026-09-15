# Airspace and Sectional Charts

**Aviation UAS, Week 5.** Weather tells you whether you *can* fly. Airspace tells you whether you *may*.

---

## The two kinds

| | Controlled | Uncontrolled |
|---|-----------|--------------|
| **Who separates traffic** | Air traffic control | Nobody. The pilot is responsible |
| **Drone authorization** | **Required before you fly** | Not required |
| **Classes** | B, C, D, E | G |

**Most of the country, near the ground, is Class G.** Controlled airspace clusters around airports, and the
busier the airport, the bigger and more layered the airspace around it.

---

## The classes

### Class B: the busiest airports

Around major airports. Columbus is not Class B, but Cleveland Hopkins and Cincinnati are nearby examples.

**Shape:** an upside-down wedding cake. Rings that get wider as they get higher, so you can be under Class B
and be in Class G on the ground.

**Chart symbol:** solid blue lines.

### Class C: busy airports with a control tower and radar

**Shape:** usually two rings, an inner core out to about 5 nautical miles and an outer shelf out to about 10.

**Chart symbol:** solid magenta lines.

### Class D: airports with a control tower

**Shape:** a single ring, usually about 4 nautical miles across.

**Chart symbol:** dashed blue lines.

### Class E: controlled airspace that is not B, C, or D

Where it reaches the ground it usually surrounds a smaller airport with instrument approaches.

**Chart symbol:** a dashed magenta line where it starts at the surface, a faded magenta band where it starts
at 700 feet.

### Class G: uncontrolled

Everything else, near the ground. **No authorization needed.** Most school flying happens here.

> **Class G does not mean no rules.** Every Part 107 rule still applies: 400 feet, 3 statute miles, visual
> line of sight, daylight, not over people.

---

## What it means for you

| Class | Can you fly a drone? |
|-------|---------------------|
| **B** | Only with authorization |
| **C** | Only with authorization |
| **D** | Only with authorization |
| **E at the surface** | Only with authorization |
| **G** | Yes, following all the normal rules |

**Authorization for most of these comes through LAANC**, and it is often near-instant.

---

## LAANC

**Low Altitude Authorization and Notification Capability.** The system that grants automated authorization to
fly in controlled airspace.

**How it works:**

1. You open a LAANC-approved app and drop a pin on where you want to fly
2. The app shows the **maximum altitude** pre-approved for that grid square: 0, 100, 200, 300, or 400 feet
3. You request it, and if the grid allows that altitude, approval comes back in seconds
4. If you want higher than the grid allows, that is a **further coordination** request and takes days

**The grid squares are the thing to understand.** Controlled airspace near an airport is divided into
squares, each with a ceiling. Right off the end of a runway a square may be **0 feet**, meaning no drone
flight at all. A few miles out it may be 400.

> **A ceiling of 0 is real.** It does not mean "ask nicely." It means no.

---

## Reading a sectional chart

A **sectional** is the aviation map. Everything on it is a symbol, and the colors carry meaning.

| You see | It means |
|---------|----------|
| **Solid blue** rings | Class B |
| **Solid magenta** rings | Class C |
| **Dashed blue** ring | Class D |
| **Dashed magenta** ring | Class E starting at the surface |
| **Faded magenta** band | Class E starting at 700 feet AGL |
| **Blue or magenta numbers** in a box on a ring | The floor and ceiling of that piece, in hundreds of feet |
| **Magenta or blue airport symbol** | Magenta means no control tower, blue means towered |
| **Blue flag** | A visual checkpoint |
| **Small blue circle with lines** | An obstruction, such as a tower |

### The stacked numbers

On a Class C or B ring you will see numbers stacked like a fraction:

```
 70
---
 25
```

**Top is the ceiling, bottom is the floor**, both in hundreds of feet MSL. So this piece of airspace runs
from **2,500 feet up to 7,000 feet.** Below 2,500 in that spot, you are not in it.

**That is why "am I under Class B?" is a real question with a real answer.**

---

## The tools you actually use

| Tool | For |
|------|-----|
| **FAA UAS Facility Map** | The grid ceilings. What altitude is pre-approved where |
| **A LAANC app** | Requesting and receiving authorization |
| **Sectional chart** | Understanding the shape of the airspace you are in |
| **NOTAMs** | Temporary restrictions that are not on any chart |

> **Check NOTAMs even when the airspace is clear.** A temporary flight restriction for an event, a fire, or a
> VIP movement will not appear on a sectional, and it overrides everything.

---

## Practice problems

**1.** You are flying at a park. The FAA UAS Facility Map shows your grid square as **200**. What does that
mean, and what is your maximum altitude?

**2.** You want to fly at 350 feet in a grid marked **200**. What are your options?

**3.** A sectional shows your location inside a **dashed blue ring**. What class is that, and what do you need?

**4.** Your location is inside a Class C ring, and the numbers read 70 over 25. You want to fly at 300 feet
AGL, and the ground is roughly at sea level. Are you inside that Class C shelf?

**5.** Your site is **Class G**, no authorization needed. Name four rules that still apply.

**6.** A grid square reads **0**. What does that mean?

<details>
<summary>Answers</summary>

**1.** 200 feet AGL is pre-approved through LAANC for that square. You request it and get near-instant
approval. Your maximum is **200 feet**, not 400, even though 400 is the general Part 107 limit.

**2.** Either fly at 200 or below, or file a **further coordination** request, which takes days and is not
guaranteed. You do not simply fly higher.

**3.** **Class D**, an airport with a control tower. You need authorization before flying.

**4.** **No.** That shelf runs from 2,500 to 7,000 feet MSL. At 300 feet you are well underneath it, in
whatever airspace is below, usually Class G or E.

**5.** Any four: 400 feet AGL maximum, 3 statute miles visibility, visual line of sight at all times, daylight
or civil twilight with anti-collision lighting, not over people who are not part of the operation, one
aircraft at a time, registration if over 0.55 lb, no careless or reckless operation.

**6.** **No drone flight is pre-approved there at any altitude.** Usually right off the end of a runway. It is
not an invitation to ask, it is a no.

</details>

---

## Before every flight, in order

1. **Where am I?** Look it up on the Facility Map
2. **What class?** If controlled, request LAANC
3. **What is my ceiling?** The grid number, or 400, whichever is lower
4. **Any NOTAMs?** Check for temporary restrictions
5. **What is the weather?** Your METAR and your personal minimums

**All five, every time.** Four out of five is how people end up in the news.
