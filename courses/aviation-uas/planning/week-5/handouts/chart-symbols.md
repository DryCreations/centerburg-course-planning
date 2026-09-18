# Two More Things on the Chart

**Aviation UAS, Week 5.** You have been reading airspace. Today, two other things on a sectional that are
much simpler to identify, and one of them matters more to a drone pilot than any circle on the map.

---

# 1. Obstructions

Towers, antennas, stacks, and anything else tall enough that an aircraft could hit it.

**This is the symbol that matters most to you**, because obstructions live in the exact band of altitude you
fly in.

## The symbol

| What you see | What it is |
|--------------|-----------|
| A thin shape like an upside-down V, or a narrow tower outline | A single obstruction |
| A wider version with a broader base | A taller obstruction, 1,000 ft AGL or more |
| Two or more drawn joined together | A group of obstructions |
| Small marks radiating from the top, like a starburst | It is **lit** at night |

## The two numbers

Every obstruction has two numbers next to it, stacked:

```
1549          <- the taller number: height above SEA LEVEL (MSL)
(451)         <- in parentheses: height above the GROUND (AGL)
```

> **The number in parentheses is yours.** You fly in feet above the ground, so AGL is the number that tells
> you whether a tower is above or below you.

**Why both exist:** a pilot in an airplane flies by altimeter, which reads MSL. You fly by how high you are
off the ground. Same tower, two ways of describing it.

### Work one out

If an obstruction reads `1549 (451)`:

- The ground there is at about **1,098 feet** above sea level, because 1549 minus 451
- The tower is **451 feet tall**
- Your legal ceiling is **400 feet AGL**
- **That tower is taller than you are allowed to fly.** You cannot go over it. You go around it

## Why this is not just trivia

- **Anything over 400 feet AGL is above your legal ceiling.** You will never be looking down on it
- **Towers have guy-wires.** Thin steel cables running from partway up the tower out to anchors on the
  ground, sometimes a long way out. **They are nearly invisible from the air and they are not drawn on the
  chart.** Give a guyed tower a wide berth, not a close pass
- **A lit tower is lit because it is a hazard.** The lighting is the FAA saying "aircraft hit things here"

---

# 2. Airports

Simple to identify, and useful because airports are where controlled airspace comes from.

## The symbol

| What you see | What it means |
|--------------|---------------|
| **Magenta** airport symbol | **No** control tower |
| **Blue** airport symbol | **Has** a control tower |
| A circle with runway lines drawn inside | Hard-surfaced runways |
| A plain circle | Turf or unpaved |
| Small tick marks around the outside of the circle | Fuel is available |
| An **R** in a box | Private. Permission required |

**Magenta means no tower. Blue means tower.** That is the same color logic as the airspace rings, and it is
not a coincidence: towered fields get Class D or busier airspace, which is drawn in blue.

## The text block

Next to every airport is a block of text. Read it top to bottom:

```
CENTERBURG MUNI          <- name
(4I9)                    <- identifier
1129  L  40   122.8      <- field elevation, lighting, runway length, frequency
```

| Piece | Means |
|-------|-------|
| **Name** | What the field is called |
| **Identifier** | The three or four character code |
| **Field elevation** | Height of the field above sea level, in feet |
| **L** | Runway lighting available |
| **Runway length** | In **hundreds** of feet, so 40 means 4,000 ft |
| **Frequency** | The radio frequency for the field |

> **Field elevation is the useful one for you.** It is MSL, so if you want to know how high a nearby tower
> is relative to the ground you are standing on, this is how you compare.

---

## Practice: find these

Open your chart viewer. Write down where you found each one.

- [ ] A single obstruction. Write **both** of its numbers
- [ ] An obstruction **taller than 400 feet AGL**
- [ ] A **lit** obstruction
- [ ] A **group** of obstructions
- [ ] The **tallest** obstruction you can find. How tall AGL?
- [ ] An airport with **no** tower
- [ ] An airport **with** a tower
- [ ] An airport's **field elevation**
- [ ] An airport with a runway **longer than 5,000 feet**
- [ ] A **private** airport

---

## Answer these

**1.** An obstruction reads `2150 (380)`. How tall is the tower, how high is the ground, and can you legally
fly above it?

**2.** You see a magenta airport symbol with no rings around it at all. What airspace are you in at ground
level, and do you need authorization?

**3.** Why does an obstruction have two numbers instead of one?

**4.** You are planning to fly near a tall guyed tower. It is 600 feet AGL and you plan to stay at 200 feet.
Name two things you still have to think about.

<details>
<summary>Answers</summary>

**1.** The tower is **380 feet** tall. The ground is at **1,770 feet** MSL (2150 minus 380). **Yes**, legally:
380 is below your 400 foot ceiling, so 400 feet AGL would put you just above it. **But it would be close**,
and that is not a margin worth taking.

**2.** **Class G**, uncontrolled. **No authorization needed.** All the normal Part 107 rules still apply.

**3.** Because two different kinds of pilot need two different numbers. An airplane pilot flies by altimeter,
which reads **MSL**. You fly by height above the ground, **AGL**. Same tower, two descriptions.

**4.** Any two: the **guy-wires**, which extend well out from the base, are nearly invisible from the air, and
are not on the chart. The **turbulence** around a large structure on a windy day. Keeping **visual line of
sight** if the tower gets between you and the aircraft. Losing **controller signal** if the structure is
between you and the drone.

</details>

---

## The short version

| | |
|---|---|
| **Obstruction** | Tower shape. Top number is MSL, **number in parentheses is AGL, and that one is yours** |
| **Over 400 AGL** | Taller than you may legally fly. Go around, never over |
| **Starburst marks** | Lit at night, which means it is a known hazard |
| **Guy-wires** | Not on the chart, nearly invisible, extend far out. Stay well clear |
| **Magenta airport** | No tower |
| **Blue airport** | Has a tower |
| **Runway length** | In hundreds of feet |
