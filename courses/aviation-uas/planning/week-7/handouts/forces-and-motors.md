# Why A Drone Flies, And Why It Turns

**Aviation UAS | Unit 1.2 Aerodynamics**

You have been flying these for two weeks. **You have not yet been told what is actually happening.**

Today: the four forces, the three axes, and the thing that surprises everybody, which is that a drone has
no steering of any kind. It only has four motors that spin at different speeds.

---

## Part 1: The four forces

Every aircraft, from a paper airplane to a 747 to a Mavic, has these four acting on it.

| Force | Direction | On a multirotor, it comes from |
|-------|-----------|-------------------------------|
| **Lift** | Up | The propellers pushing air **down** |
| **Weight** | Down | Gravity on the mass of the aircraft, battery and payload |
| **Thrust** | The direction of travel | **Tilting** the whole aircraft so some lift points sideways |
| **Drag** | Opposite the direction of travel | Air resistance |

### The three states, and this is the part that gets tested

| State | The relationship |
|-------|------------------|
| **Hover** | **Lift = Weight.** Perfectly balanced. Nothing is winning |
| **Climb** | **Lift > Weight** |
| **Descend** | **Lift < Weight** |
| **Speed up** | **Thrust > Drag** |
| **Constant speed** | **Thrust = Drag** |

> **A hover is not "no forces." It is forces that cancel.** That distinction is worth more than it
> looks: it is Newton's first law, and it is why a drone in a steady hover keeps hovering until
> something changes.

### Draw it

**A free-body diagram** is four arrows from the center of the aircraft. The length of each arrow shows
how big that force is.

```
              LIFT
               ^
               |
     DRAG <----+----> THRUST
               |
               v
             WEIGHT
```

**You will draw this for three states**: hover, climb, and forward flight. The arrows change length.
That is the whole exercise, and it is worth doing by hand rather than describing.

---

## Part 2: Where lift actually comes from

Two explanations, and **you need both**, because the exam asks about both.

### Newton's third law

**Every action has an equal and opposite reaction.**

The propellers throw air **downward**. The air pushes the aircraft **upward**. That is it. That is most
of your lift on a multirotor.

**This is the honest explanation for a drone**, and it is the one to reach for first.

### Bernoulli's principle

**Faster-moving air has lower pressure.**

A propeller blade is an **airfoil**, the same shape as a wing, just rotating instead of moving forward.
Air moving over the curved top travels faster and has lower pressure than air under the flatter bottom.
The pressure difference produces lift.

| Part of an airfoil | What it is |
|---|---|
| **Leading edge** | The front, where air meets it |
| **Trailing edge** | The back, where air leaves |
| **Chord line** | A straight line from leading edge to trailing edge |
| **Camber** | The curve of the surface. More camber, more lift, more drag |
| **Angle of attack** | The angle between the chord line and the oncoming air |

**Propeller pitch** is the built-in angle of the blade. A higher-pitch prop moves more air per rotation:
more thrust, more current draw, shorter flight.

> **Both explanations are correct and they describe the same event.** Newton says the air went down so
> the aircraft went up. Bernoulli says the pressure was lower on top. Neither one is the "real" one.

---

## Part 3: The four motors

**This is the part nobody guesses correctly.**

### Two spin one way, two spin the other

Looking down at the aircraft:

```
        FRONT

    1 (CW)   2 (CCW)
        \     /
         \   /
         /   \
        /     \
    4 (CCW)   3 (CW)

        BACK
```

**Diagonal pairs spin the same direction.** 1 and 3 clockwise, 2 and 4 counterclockwise.

### Why: torque

**Newton's third law again.** A motor spinning a prop clockwise pushes back on the airframe
counterclockwise. That reaction is called **torque**.

If all four spun the same way, all four torques would add up and **the aircraft would spin continuously
on its own.** You would have no way to stop it.

With two clockwise and two counterclockwise, **the torques cancel** and the aircraft holds a heading.

> **Everything a drone does, it does by breaking a balance on purpose.** Hovering is balance. Every
> movement is a deliberate imbalance, then a return to balance.

---

## Part 4: The three axes

| Axis | Motion | What it looks like |
|------|--------|--------------------|
| **Pitch** | Nose up and down | Rotating around the **lateral** axis, wingtip to wingtip |
| **Roll** | Tilting left and right | Rotating around the **longitudinal** axis, nose to tail |
| **Yaw** | Nose turning left and right, staying level | Rotating around the **vertical** axis |

**Memory aid:** pitch is a nod, roll is a head tilt toward your shoulder, yaw is shaking your head no.

---

## Part 5: How the motors produce each one

**No control surfaces. No rudder. No ailerons. Just four motors at different speeds.**

| To do this | The motors do this | Why it works |
|---|---|---|
| **Climb** | **All four speed up** equally | Total lift now exceeds weight |
| **Descend** | **All four slow down** equally | Lift is now less than weight |
| **Hover** | All four hold steady | Lift equals weight |
| **Pitch forward** | **Back two speed up**, front two slow down | The back lifts, the nose drops, the aircraft tilts, and some lift now points forward as thrust |
| **Pitch back** | **Front two speed up**, back two slow down | Nose rises, aircraft tilts back, slows or reverses |
| **Roll right** | **Left two speed up**, right two slow down | The left side lifts, the aircraft tilts right, lift points right |
| **Roll left** | **Right two speed up**, left two slow down | Mirror of the above |
| **Yaw right** | The **two counterclockwise** motors speed up, the two clockwise slow down | The torques no longer cancel. The leftover torque rotates the airframe |
| **Yaw left** | The **two clockwise** motors speed up, the two counterclockwise slow down | Leftover torque the other way |

### The two ideas to take out of this table

**1. Forward flight is tilted lift.** A multirotor has no separate thrust source. It tilts, and part of
what was holding it up now pushes it forward.

**This has a consequence you have felt:** when you tilt forward, the *upward* part of your lift gets
smaller, so the aircraft sinks slightly unless it adds power. **That is why the aircraft dips when you
first push forward**, and why it climbs slightly when you stop.

**2. Yaw is made of torque, not of pushing sideways.** Nothing pushes the tail around. The aircraft
stops cancelling its own torque, on purpose, and the leftover twist rotates it.

> **This is why yaw feels slower and mushier than roll and pitch.** It is working with a much smaller
> force.

---

## Part 6: Why this matters when you are flying

| What you have felt | What was happening |
|---|---|
| It sinks when you push forward hard | Lift tilted away from vertical. Less of it is holding you up |
| It floats up when you stop | Lift returned to vertical |
| Yaw feels slower than roll | Yaw uses leftover torque, which is a much smaller force |
| It drifts after you let go | Newton's first law. Nothing removed the momentum yet |
| It fights you in wind | Drag, and the aircraft tilting to hold position against it |
| Heavy battery or payload, worse performance | Weight went up. Lift must go up to match, so every motor works harder and flight time drops |

**Center of gravity:** payload mounted off center means the flight controller has to run some motors
harder permanently just to stay level. That costs flight time and control authority, and in the worst
case the aircraft cannot correct at all.

---

## Vocabulary

| Term | Meaning |
|---|---|
| **Lift** | The upward force, from pushing air down |
| **Weight** | Gravity acting on mass |
| **Thrust** | The force in the direction of travel |
| **Drag** | Air resistance opposing motion |
| **Free-body diagram** | A drawing showing every force acting on an object as an arrow |
| **Newton's first law** | An object keeps doing what it is doing unless a force acts on it |
| **Newton's third law** | Every action has an equal and opposite reaction |
| **Bernoulli's principle** | Faster-moving air has lower pressure |
| **Airfoil** | A shape that produces lift when air moves over it |
| **Leading / trailing edge** | Front and back of an airfoil |
| **Chord line** | Straight line from leading edge to trailing edge |
| **Camber** | The curve of an airfoil surface |
| **Angle of attack** | Angle between the chord line and the oncoming air |
| **Propeller pitch** | The built-in blade angle |
| **Torque** | The twisting reaction on the airframe from a spinning motor |
| **Pitch** | Nose up and down, around the lateral axis |
| **Roll** | Tilt left and right, around the longitudinal axis |
| **Yaw** | Nose left and right while level, around the vertical axis |
| **Center of gravity** | The point the aircraft's weight acts through |
| **Load factor** | The ratio of lift to weight. In a hover it is 1 |

---

## Standards

- **7.4.2** Describe the forces of flight and the three axes of motion
- **7.4.3** Define Newton's Laws of Motion and Bernoulli's Principle
- **7.4.4** Identify the parts of an airfoil and describe how an airfoil works
- **7.4.6** Discuss the role of thrust and the relationship between lift and drag
- **7.4.9** Describe the effects of loading, weight and balance on center of gravity and performance
- **7.4.16** Define load factor and G-forces

---

## Today's work

1. **Draw three free-body diagrams**: hover, climb, forward flight. Label all four forces, and make the
   arrow lengths mean something
2. **Draw the motor layout from above.** Mark which two are clockwise and which two are counterclockwise
3. **In your own words, one sentence each:** why two motors spin backwards; why forward flight costs you
   altitude unless you add power; why yaw feels slower than roll
4. **Then, for each of these, say what the four motors are doing:** climb, pitch forward, roll left, yaw
   right

> **If you can answer number 4 without looking, you understand a multirotor better than most people who
> own one.**
