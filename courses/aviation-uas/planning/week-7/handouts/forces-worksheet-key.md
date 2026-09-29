# Forces Worksheet: Key and Teaching Notes

**Aviation UAS | Unit 1.2** | **Teacher only**

---

## How to run it

**Tuesday and Wednesday.** It is longer than one period on purpose, so nobody runs out of work.

| | |
|---|---|
| **Tuesday** | Board instruction, then Parts 1 to 3. **Part 1.3 drawing gets done in class**, on paper |
| **Wednesday** | Parts 4 to 6, then flight |

**No printing needed.** The document goes out on Classroom as make-a-copy. **The drawings are on paper**,
photographed and attached, which is better than a drawing tool anyway: they think about the arrow lengths
instead of fighting the software.

**Say the standards first**, before the agenda, in their full text. They are at the top of the worksheet
for the same reason.

---

## Part 1: The four forces

**1.1** Lift up, Weight down, Thrust in the direction of travel, Drag opposite the direction of travel.

**1.2** Lift: propellers pushing air down. Weight: gravity on the mass of aircraft, battery, payload.
Thrust: tilting the aircraft so part of the lift points sideways. Drag: air resistance.

**1.4**

| State | Lift / Weight | Thrust / Drag |
|-------|---------------|---------------|
| Hovering | **=** | n/a or both zero |
| Climbing | **>** | n/a |
| Descending | **<** | n/a |
| Speeding up | = (roughly) | **>** |
| Constant speed | = (roughly) | **=** |

**1.5** The forces are equal and opposite, so they **cancel**. A hover is balance, not absence. This is
Newton's first law and it is why a steady hover continues until something changes.

> **The misconception to catch:** students write "no forces are acting on it." Push on that every time.

---

## Part 2: Numbers

**Deliberately addition and subtraction only.** No formulas, no lift equation, nothing with a coefficient
in it. The numbers exist to make the relationships concrete, not to be math practice.

| | Answer |
|---|---|
| **2.1** | 4 x 250 = **1,000 g** lift, weight 1,000 g. **Hovering** |
| **2.2** | 4 x 300 = **1,200 g**. 1,200 - 1,000 = **200 g** surplus. **Climbing** |
| **2.3** | 4 x 200 = **800 g**, less than 1,000. **Descending** |
| **2.4** | New weight **1,200 g**. Each motor needs **300 g** to hover. Spare per motor: 400 - 300 = **100 g**, down from 400 - 250 = **150 g**. **Less room** |
| **2.5** | Adding weight costs you **margin**: the spare power available to climb, fight wind, or recover from a mistake. Accept any wording that captures reserve or headroom |
| **2.6** | Total **1,200 g**. **Back** is lifting harder. The back rises, the nose drops, the aircraft tilts forward, so it **moves forward** |

**2.4 and 2.5 are the point of Part 2.** Every student can compute it. The thing to draw out is that a
heavier aircraft is not just slower, it is **closer to the edge of what it can do**, which is why payload
matters for safety and not only for flight time.

**2.6 is the bridge to Part 5.** They compute an imbalance and derive a movement from it. If they get
2.6, Part 5 is mostly already done.

---

## Part 3: Where lift comes from

**3.1** The propellers throw air **downward**; the air pushes the aircraft **upward**. Equal and
opposite.

**3.2** The blade is an airfoil. Air over the curved top travels faster, so its pressure is lower than
the air under the flatter bottom. The pressure difference produces lift.

**3.3** They describe the **same event** from two directions. Newton accounts for the momentum of the air
going down; Bernoulli accounts for the pressure difference that made it go down. **Neither one is the
"real" one**, and students will want one to be. Say so explicitly.

**3.4** Leading edge (front), trailing edge (back), chord line (straight line front to back), camber (the
curve), angle of attack (angle between chord line and oncoming air).

**3.5** **Newton's first law.** The aircraft has momentum and nothing has removed it yet. Drag and the
flight controller's correction bring it to a stop, and neither is instant.

---

## Part 4: The four motors

**4.2** All torques would add instead of cancelling. The aircraft would **spin continuously** on its
vertical axis, and there would be no way to stop it.

**Ask this before you explain it.** Let a student get there. It takes about forty seconds and it is worth
far more than being told.

**4.3** Torque is the **twisting reaction on the airframe** from a motor spinning a propeller. Newton's
third law, in rotation.

**4.4** Two clockwise and two counterclockwise means the torques are **equal and opposite**, so they
cancel and the aircraft holds a heading.

**4.1** Diagonal pairs match. Front-left and back-right one way, front-right and back-left the other.

---

## Part 5: The three axes

**5.1** Pitch: nose up and down, around the **lateral** axis. Roll: tilt left and right, around the
**longitudinal** axis. Yaw: nose left and right while level, around the **vertical** axis.

**5.2**

| | |
|---|---|
| **Climb** | All four speed up equally |
| **Pitch forward** | **Back two speed up**, front two slow down |
| **Roll left** | **Right two speed up**, left two slow down |
| **Yaw right** | The two **counterclockwise** speed up, the two clockwise slow down |

**Watch for reversed answers on pitch and roll.** Students expect "go forward, front motors work harder."
It is the opposite: the back lifts, which drops the nose, which tilts the lift vector forward.

**5.3** Yaw uses **leftover torque**, not tilt. The aircraft stops cancelling its own torque on purpose.

---

## Part 6: The payoff questions

**These four matter more than the rest of the worksheet combined**, because they connect the physics to
something the student has physically felt.

**6.1** Pushing forward **tilts** the aircraft, so the lift vector tilts too. Less of it points straight
up, so the vertical component is smaller than the weight and the aircraft sinks until power is added.

**6.2** Yaw runs on leftover torque, which is a **much smaller force** than the lift differential that
drives pitch and roll.

**6.3** From **tilting the lift**. There is no separate thrust source. Part of the force that was holding
it up now pushes it forward.

**6.4** The flight controller must run some motors **permanently harder** to hold it level. That burns
margin continuously, costing flight time and control authority, and in the worst case it cannot correct
at all.

---

## What to grade

**Not the numbers.** Everybody can add.

Grade **1.5, 2.5, 3.3, 4.2, 5.3, and all of Part 6.** Those are the ones where a student either
understands the mechanism or is repeating words.

---

## The four-question check at the bottom

Worth doing out loud as a closer, cold-call style:

1. Why do two motors spin backwards?
2. What are all four doing when it yaws right?
3. Where does thrust come from with no forward-facing propeller?
4. Why does pushing forward cost you altitude?
