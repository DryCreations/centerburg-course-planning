# Thursday Live Build: The Counter and the Win

**Middle School CS, Week 4, Thursday. Teacher script.** Build this on the projector in front of them, from
nothing, while they watch. Do not paste it in finished. The point is that they see it fail and then see it
work.

**Time:** about 12 minutes. **Rule for students:** hands off keyboards while you build, they get work time
right after.

---

## Before you start

Open a maze project on the board with a player and walls already working. Say: "Right now you can drive
around. Nothing happens when you touch anything. Let's fix that."

---

## Beat 1: Place items (2 min)

Drop three or four item sprites into the maze, kind **Food**.

Drive into one. **Nothing happens.** Say it out loud: "I touched it and nothing happened. The game does not
know it is supposed to care."

## Beat 2: Make touching do something (2 min)

Add:

```
on overlap Player with Food:
    otherSprite.destroy()
```

Run it. Items disappear. Ask: **"Am I winning yet?"** No. Nothing is counting. "The game forgets every item
the instant it disappears."

## Beat 3: The counter (3 min)

```
let keys = 0
```

Say the sentence: **"A variable is a named container. When it counts how many times something happened, we
call it a counter."**

Then add the counting line inside the overlap:

```
on overlap Player with Food:
    otherSprite.destroy()
    keys += 1
    info.setScore(keys)
```

Run it. Score climbs on screen. **This is the moment the variable becomes visible.** Point at the number
going up and say "that is the variable, on screen, doing its job."

## Beat 4: Deliberately break the win (3 min)

Add the win, but **on purpose use the wrong number**:

```
    if keys == 3:
        game over WIN
```

...while there are **5** items in the maze.

Collect all five. **Nothing happens at 5.** Let them sit with it a second, then ask: "Why not?"

Walk them to it: the `if` checks for exactly 3, and the counter blew right past 3 up to 5. Show that
collecting exactly three DOES win, to prove the code works and the *number* is what is wrong.

## Beat 5: Fix it (2 min)

Count the items out loud on the board. Change the 3 to a 5. Run it. Win fires.

**The line to leave them with:** "The number in your if has to match how many items you actually placed. This
will be the bug in half your projects today."

---

## The whole thing, for reference

```javascript
let keys = 0
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    keys += 1
    info.setScore(keys)
    if (keys == 5) {
        game.over(true)
    }
})
```

> **Note:** paste this into the **JavaScript** editor, then switch back to Blocks. Sprite and tile **art**
> cannot be pasted, so any images have to be drawn in the editor.

---

## Questions to ask while circulating

- "How many items are in your maze? What number is in your if? Say both out loud."
- "Show me the line that adds one. What would happen if you deleted it?"
- "What would you change to make it a loss instead of a win?"
- "What if a student picks up the same item twice? Can they? Why not?" (destroy removes it)
