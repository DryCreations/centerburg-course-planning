# Wave Defender

**Middle School CS, Week 6.** A new game, and a different kind of game.

So far you have built a **maze** (move around, collect things) and a **catcher** (things fall, you catch
them). This one is a **shooter**: you fire back.

**No new big ideas.** This is `if`, loops, variables, and overlap, all of which you already know. The only
new block is the one that makes a projectile.

---

## What you are making

A ship at the bottom of the screen. Meteors come down in **formations**. You shoot up at them. Hit them and
they break. Let one reach the bottom and you lose a life.

```
        *   *   *   *      <- a wave, spawned with a loop
          *   *   *
              |
              ^            <- your shot
             /_\           <- your ship
```

---

# DAY 1 (Mon): Ship, movement, and shooting

## Step 1: The ship

1. New project. Name it **Wave Defender**
2. **Sprites**: `set ship to sprite of kind Player`. Draw a small ship
3. **Controller**: `move ship with buttons`
4. **Sprites**: `set ship y to 110`
5. **Sprites**: `set ship stay in screen ON`

**Test:** you slide left and right along the bottom and cannot drive off the edge.

## Step 2: Shooting

This is the one new block. It is in the **Projectiles** category.

6. **Controller**: `on A button pressed`
7. Inside it: `projectile from ship with vx 0 vy -100`

Read it: **make a projectile starting at the ship, moving 0 sideways and -100 up.** Negative y is up, because
y counts downward from the top of the screen.

**Test:** press A, a shot flies upward.

> **Why -100?** Positive vy goes down, negative goes up. If your shots fall instead of rising, the sign is
> wrong.

## Step 3: Make it feel right

8. Change the projectile's image to something small: a dot, a short line
9. Try different speeds. `-150` is snappy, `-60` is slow and floaty
10. Add a sound on the `on A button pressed`

**Test:** hold A. You should get a stream of shots.

## Goal for today

- [ ] A ship that moves along the bottom and stays on screen
- [ ] Pressing A fires a projectile that travels **up**
- [ ] You can explain why vy is negative

---

# DAY 2 (Tue): Waves, built with loops

**This is where the loop work pays off.** A formation is a loop.

## Step 4: One meteor

11. **Sprites**: `set meteor to sprite of kind Enemy`. Draw a meteor
12. `set meteor position to x 80, y 0`
13. `set meteor vy to 30`

**Test:** one meteor falls.

## Step 5: A row, with `for index`

14. Wrap it in `for index from 0 to 5`
15. Set the x to `20 + index * 25`

```
for index from 0 to 5:
    set meteor to sprite of kind Enemy
    set meteor position to x (20 + index * 25), y 0
    set meteor vy to 30
```

**Test:** a row of six meteors, evenly spaced.

## Step 6: A block, with a nested loop

Two loops: one for rows, one for the meteors in each row.

```
for row from 0 to 2:
    for index from 0 to 5:
        set meteor to sprite of kind Enemy
        set meteor position to x (20 + index * 25), y (row * 20)
        set meteor vy to 30
```

**Test:** three rows of six. **Eighteen meteors from six blocks.**

Trace it: the inner loop makes a whole row, then the outer loop moves down and does it again.

## Step 7: Waves that keep coming

16. Put the whole thing inside a `forever`
17. Add `pause 4000` after the nested loops, inside the forever

**Test:** a new formation arrives every four seconds.

## Step 8: Shapes, with `remainder`

Make the formation interesting instead of a rectangle.

**Every other one lower:**
```
set meteor position to x (20 + index * 25), y (row * 20 + remainder of index ÷ 2 * 10)
```

**A gap in the middle:** skip spawning when `index = 3`, using an `if` around the spawn.

**Try both.** Pick the one that looks better.

## Goal for today

- [ ] A formation spawned with a **nested loop**
- [ ] Waves that keep coming on a timer
- [ ] At least one shape made with `remainder` or an `if`

---

# DAY 3 (Wed): Hits, misses, and ending

## Step 9: Shots destroy meteors

18. **Sprites**: `on sprite of kind Projectile overlaps otherSprite of kind Enemy`
19. Inside: `sprite.destroy()` and `otherSprite.destroy()`
20. Then: `change score by 1`

**Destroy both.** If you only destroy the meteor, one shot clears a whole column.

**Test:** shoot a meteor. Both disappear, score goes up.

## Step 10: Meteors that get through

21. `set life to 3` at the start
22. In a `forever`: `if meteor y > 120 then` `destroy meteor` and `change life by -1`

**Test:** let one through. You lose a life.

## Step 11: Meteors hitting the ship

23. `on sprite of kind Player overlaps otherSprite of kind Enemy`
24. Inside: `otherSprite.destroy()` and `change life by -1`

## Step 12: Ending it

MakeCode ends the game automatically when life hits 0. To add a **win**:

25. `if score >= 30 then game over WIN`

## Step 13: Clean up

**Every projectile and every meteor has to be destroyed eventually**, or the game crawls.

- Projectiles: set `auto destroy` ON, or destroy them when they leave the top
- Meteors: destroyed on hit, at the bottom, or on the ship

**Test:** play for a full minute. Does it stay fast?

## Goal for today

- [ ] Shots destroy meteors and score
- [ ] Meteors that reach the bottom cost a life
- [ ] The game **ends**, win or lose
- [ ] Still fast after a minute

---

# DAY 4 (Thu): Make it yours, then show it

Pick **at least two**. They are in rough order of difficulty.

| # | Idea | What it uses |
|---|------|--------------|
| 1 | **Waves get faster.** A `speed` variable that grows each wave | A variable, `change by` |
| 2 | **A tough meteor** every 5th one, worth 3 points | `remainder`, an `if` |
| 3 | **A power-up** meteor that gives a life back | A new kind, an overlap |
| 4 | **Shot cooldown**: a timer variable so holding A does not spray | A variable counting down |
| 5 | **Two shots at once** when score passes 15 | An `if` around the shoot block |
| 6 | **A boss**: one big meteor that takes 5 hits | A hit counter variable |
| 7 | **Different formation each wave**, chosen with `remainder of waveCount ÷ 3` | `remainder`, `if / else if` |

Then **play each other's**.

---

## Final checklist

- [ ] A ship that moves and stays on screen
- [ ] Shooting with a projectile travelling up
- [ ] A formation built with a **nested loop**
- [ ] Waves arriving on a timer inside a `forever`
- [ ] A shape made with `remainder` or an `if`
- [ ] Shots destroy meteors **and themselves**
- [ ] Meteors reaching the bottom cost a life
- [ ] The game **ends**
- [ ] Still fast after a minute
- [ ] At least two things from Day 4
- [ ] Project link shared on Google Classroom

---

## The four loops, one more time

| Loop | Where you used it in this game |
|------|-------------------------------|
| `for index` | Spacing meteors across a row |
| Nested `for` | Rows and columns of a formation |
| `forever` | Waves that keep arriving |
| `while` | A cooldown or a countdown, if you added one |

---

## Bugs you will hit

| What happens | Why | Fix |
|--------------|-----|-----|
| Shots fall downward | vy is positive. Up is **negative** | Use `-100` |
| One shot clears a whole column | You destroyed the meteor but not the projectile | Destroy **both** in the overlap |
| The game crawls after a minute | Projectiles or meteors are never destroyed | Auto destroy on, and destroy at the bottom |
| All meteors in one spot | The position ignores `index` | Use `index` in the x |
| One extra meteor per row | `for index from 0 to 5` runs **six** times | That is correct. Count 0,1,2,3,4,5 |
| Meteors spawn instantly forever | No `pause` inside the `forever` | Add `pause 4000` after the loops |
| Holding A fires hundreds of shots | No cooldown | Day 4, idea 4 |
| The ship drives off screen | `stay in screen` is off | Turn it on |
