# Power-Ups

**Middle School CS, Week 5.** Everything you have learned this week, used together for one thing: a special
star that does something different when you catch it.

**No new blocks.** This is `if`, variables, and the `remainder` block, combined.

---

## What a power-up is

A **power-up** is an item that changes the rules for a while when you collect it.

Three parts, every time:

1. **Something marks it as special** so the player can see it
2. **Catching it changes something**
3. **The change wears off**, or it would not be special

---

## Step 1: Make some stars special

You already spawn stars in a loop with a counter. Use the `remainder` block to make **every fifth one**
different.

```
for index from 0 to 4:
    set star to sprite of kind Food
    change starCount by 1
    if remainder of starCount ÷ 5 = 0 then
        set star image to the GOLD star
        set star kind to PowerUp
    else
        set star image to the normal star
```

**The player has to be able to tell.** A power-up that looks identical to everything else is not a power-up,
it is a surprise. Make it a different color, bigger, or spinning.

> **Make a new sprite kind.** In the `set kind` block, click the dropdown and **Add a new kind** called
> `PowerUp`. That way you can write a separate overlap block just for it.

---

## Step 2: Catching it does something

A second overlap block, for the new kind:

```
on sprite of kind Player overlaps otherSprite of kind PowerUp:
    destroy otherSprite
    change score by 5
```

**Pick one effect to start with.** Here are five, easiest first:

| Power-up | What it does | Blocks you need |
|----------|--------------|-----------------|
| **Bonus points** | Worth 5 instead of 1 | `change score by 5` |
| **Extra life** | Gives a life back | `change life by 1` |
| **Speed boost** | Player moves faster | `set mySprite speed`, or change the move block |
| **Slow motion** | Stars fall slower | A `fallSpeed` variable your spawner uses |
| **Magnet** | Nearby stars come to you | Harder. Save it for later |

---

## Step 3: Make it wear off

**This is the part that makes it a power-up** instead of a permanent upgrade.

Use a variable as a timer:

```
on sprite of kind Player overlaps otherSprite of kind PowerUp:
    destroy otherSprite
    set boostTimer to 5
    set fallSpeed to 20

forever:
    if boostTimer > 0 then
        change boostTimer by -1
    else
        set fallSpeed to 40
    pause 1000
```

Read it out loud: *every second, if the timer is above zero take one off it; otherwise put the speed back to
normal.*

> **Show the timer on screen** so the player knows the boost is running out. `set score to boostTimer` works
> in a pinch, or use a countdown block.

**Bonus points and extra life do not need a timer.** They happen once and they are done. Only effects that
*change the rules* need to wear off.

---

## Step 4: Tell the player it happened

Right now the star vanishes and something invisible changes. That is confusing.

Add **one** of these inside the power-up overlap:

- `splash "SPEED BOOST"` for a moment
- Change the background color while the boost is on
- `set mySprite say "!"` for half a second
- A sound effect

**Any game that changes the rules without telling you feels broken.** This is the same idea as a loading
state or a confirmation: the player has to know something happened.

---

## Your task

**Required:**

- [ ] Some stars are visibly different, chosen with the `remainder` block
- [ ] They are a different **kind**, with their own overlap block
- [ ] Catching one does something different from a normal star
- [ ] The player can **tell** it happened

**If your effect changes the rules:**

- [ ] It wears off using a timer variable
- [ ] The player can see the timer running down

---

## If you finish

1. **A second kind of power-up.** Use `remainder ÷ 7 = 0` so it shows up on a different schedule
2. **A bad one.** Every 8th star costs you a life instead. Make it obviously red
3. **Stack them.** What happens if you catch two boosts at once? Decide, then make it do that
4. **Make them rarer as the game goes on**, so it gets harder
5. Go back to your **Maze Collector** and put a power-up in it

---

## When it goes wrong

| Problem | Why | Fix |
|---------|-----|-----|
| Every star is a power-up | Your condition is wrong, or `starCount` is never changed | Check it is `= 0`, and that you change the counter inside the loop |
| No star is ever a power-up | The counter starts at a value the condition never hits, or the `if` is outside the loop | Trace it: what is `starCount` on each pass? |
| The power-up overlap never fires | The star's kind was never actually set to PowerUp | Check the `set kind` block is inside the `if` |
| The boost never ends | Nothing decreases the timer | Something inside the loop has to change it. Same rule as `while` |
| The boost ends instantly | Your pause is missing, so the timer counts down at full speed | `pause 1000` inside the loop |
| Two overlap blocks both fire | The star is still kind Food as well | It should be one kind or the other, not both |
