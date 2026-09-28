# The Aircraft, and the Battery That Runs It

**Aviation UAS | Week 7**

The rules got you legal. This is the part that keeps the aircraft flying and keeps you from starting a
fire in a classroom.

---

## Part 1: What it is made of

| Component | What it does | What it means when it fails |
|---|---|---|
| **Airframe** | The body. Holds everything in a known geometry | A cracked arm changes how the aircraft flies, even if it looks fine on the ground |
| **Motors** | Four (or six) of them, spinning at different speeds | The aircraft moves by **changing motor speeds**, not by tilting a surface. That is why it is so responsive |
| **ESCs** | Electronic speed controllers. Translate the flight controller's orders into motor speed | Stutter or desync shows up as a twitch or a sudden drop |
| **Propellers** | Convert motor rotation into thrust. **They are not all the same**, and they are handed | A chipped prop causes vibration, which ruins video and stresses the motor |
| **Flight controller** | The computer. Reads the sensors, decides what each motor does, hundreds of times a second | This is what makes a quadcopter flyable by a person at all |
| **IMU** | Accelerometers and gyroscopes. Tells the controller which way is up and how it is moving | A bad or uncalibrated IMU means drift, or a toilet-bowl circle it will not come out of |
| **GNSS / GPS** | Position. Enables position hold and return to home | **Indoors or under cover, you may not have it.** The aircraft will drift and it is not broken |
| **Compass** | Which way the nose is pointed | Interference from rebar, metal, or magnets makes return to home go the wrong direction |
| **Barometer** | Altitude, by air pressure | Wind gusts and enclosed spaces can confuse it |
| **Battery** | Power. The single most dangerous part of the aircraft | See Part 2 |
| **Gimbal** | Keeps the camera steady while the aircraft moves | Locked or jittering gimbal is usually a transport or calibration problem |
| **Radio / link** | Control signal and video downlink | Loss of link triggers a failsafe. **Know what your aircraft's failsafe does** |

### The idea worth keeping

**A multirotor cannot hover on its own.** It is inherently unstable, and it stays in the air because the
flight controller corrects it hundreds of times per second. Everything you feel as "it is flying itself"
is software.

That is also why **the sensors matter more than the motors.** A perfect motor with a confused IMU is a
crash.

---

## Part 2: Lithium polymer batteries

**This is the serious part of the week.** LiPo batteries store an enormous amount of energy in a soft
pouch, and they fail dramatically.

### Reading the label

| Marking | Means |
|---|---|
| **S** (3S, 4S, 6S) | Cells in series. More cells, higher voltage, more power |
| **mAh** | Capacity. Higher means longer flight and more weight |
| **C rating** | How fast it can safely discharge |

### The rules

| Rule | Why |
|---|---|
| **Never charge unattended** | A failure that someone is present for is a fire extinguisher problem. A failure at 2am is a building problem |
| **Never charge in the aircraft bag** | Heat, and nothing to contain a failure |
| **Charge on a hard, non-flammable surface** | Not carpet, not a couch, not paper |
| **Never puncture, crush, or bend a pack** | Physical damage is the most common cause of failure |
| **Never fly a puffed pack** | Swelling is gas from internal breakdown. That pack is done. **Retire it** |
| **Never fully drain one** | Over-discharge damages cells permanently. Land at the reserve, not at zero |
| **Storage charge for anything not being used soon** | Sitting at full charge degrades a pack. Most chargers have a storage mode |
| **Let a pack cool before charging** | A hot pack off a flight is not ready |
| **Transport in a fire-resistant bag or case** | Cheap insurance |

### If a pack is puffed, hot, hissing, or smoking

1. **Do not touch it with your hands**
2. **Tell me immediately.** Loudly
3. Move people away, not the battery
4. **Water does not put out a lithium fire.** Do not try
5. A pack in thermal runaway will burn until it is done. The job is keeping it away from anything else
   that can burn

> **Report damage honestly and immediately.** A dropped pack reported is a pack we retire. A dropped pack
> hidden is the one that fails in a bag a week later.

### Before every flight

- [ ] Pack is not puffed, and the case is intact
- [ ] Contacts clean, no corrosion
- [ ] Charged, and **cool**
- [ ] Seated with a positive click
- [ ] Reserve threshold known: **what percentage are you landing at?**

---

## Part 3: The preflight inspection

You have been doing this. Now here is what you are actually looking for at each step.

| Step | Looking for |
|---|---|
| **Airframe** | Cracks, especially at the arm joints. Loose screws. Anything that moves that should not |
| **Props** | Chips, nicks, cracks near the hub. Correct props on correct motors, correct orientation. **Spin each by hand** |
| **Motors** | Each spins freely and smoothly. Grit or roughness means bearings |
| **Gimbal and camera** | Clamp removed. Moves freely. Lens clean |
| **Battery** | Part 2 checklist |
| **Controller** | Charged. Sticks centered. Antennas positioned |
| **Storage** | Card in, formatted, space available |
| **Firmware** | Aircraft and controller current, and matched |
| **Calibration** | Compass and IMU if prompted, or if you have moved a long distance |
| **Environment** | Wind, obstacles, people, surface. Somewhere safe to put it down |

**Say it out loud, item by item.** Silent preflights skip things, every time.

---

## Part 4: After the flight

The part everyone skips, and the part an employer will judge you on.

- [ ] **Log the flight.** Date, location, aircraft, battery, duration, conditions, and anything unusual
- [ ] Batteries to storage charge if they are not being used again today
- [ ] Inspect props and airframe **again**. Damage happens in flight and in transport
- [ ] Offload footage
- [ ] Gimbal clamp back on
- [ ] Note anything that felt off, even if nothing is visibly wrong

### Why the log matters

| Who cares | Why |
|---|---|
| **An employer** | Flight hours are the resume |
| **An insurer** | No log, no claim |
| **The FAA** | Required after an incident, and it is your record of what happened |
| **You** | It is how you notice that one aircraft has been drifting for three weeks |

---

## Vocabulary

| Word | Meaning |
|---|---|
| **Airframe** | The physical structure of the aircraft |
| **ESC** | Electronic speed controller |
| **IMU** | Inertial measurement unit: accelerometers and gyros |
| **GNSS** | Satellite positioning, the general term. GPS is one system |
| **Gimbal** | Stabilized camera mount |
| **Failsafe** | What the aircraft does automatically when it loses the control link |
| **RTH** | Return to home |
| **LiPo** | Lithium polymer battery |
| **Thermal runaway** | Self-sustaining battery fire that cannot be extinguished normally |
| **Storage charge** | The partial charge a LiPo should sit at when not in use |
| **Puffed** | Swollen from internal gas. Always retire |
| **Preflight** | The inspection before flight |
| **Payload** | Anything carried beyond the aircraft itself |
| **MTOW** | Maximum takeoff weight |

---

## Standards

- **Strand 2.1** Apply safety practices
- **Strand 2.2** Maintain equipment and workspace according to manufacturer and safety requirements
- **7.9** Identify small UAS rules and operating limitations
