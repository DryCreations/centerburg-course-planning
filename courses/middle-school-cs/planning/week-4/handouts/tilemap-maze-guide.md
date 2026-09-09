# Tile Map Maze: The Guide

**Middle School CS · Week 4.** Everything you need to build the Maze Collector. Start a **brand new project**.

> **Note on the code below:** your tile art and your player sprite have to be made in the editor, so the
> snippets here assume you have already made them. Type or drag these in rather than expecting a full copy and
> paste to work.

---

## Part 1: Find the tile map editor (Wednesday)

1. Go to the **Scene** category in the toolbox.
2. Drag out the **`set tilemap to`** block into `on start`.
3. Click the grey map box inside that block. The **tile map editor** opens.
4. Set your map size (start small, around 16 by 16, you can grow it later).
5. Pick a tile from the palette and paint your maze. Leave open paths for the player to walk.

## Part 2: Mark your walls

This is the part that makes it a maze instead of a picture.

- In the tile map editor, find the **wall tool** (the layer or toggle for walls).
- Paint the walls onto every tile you want to be solid.
- Walls are what stop the player. A tile that *looks* like a wall but is not marked as one will let the
  player walk right through it.

## Part 3: Move the player

Make a player sprite, then add these two blocks:

```javascript
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
```

- **`controller.moveSprite`** lets the arrow keys move your sprite.
- **`scene.cameraFollowSprite`** keeps the camera on the player as the maze scrolls.

To drop the player onto a specific starting tile, use **`place mySprite on top of random tile`** from the
Scene category, or place it on a tile you picked.

## Part 4: Test your collision

Run it and drive the player straight at a wall.

- If the player **stops**, your walls are marked correctly.
- If the player **walks through**, go back to the wall tool. The tile is painted but not marked as a wall.

**That is Wednesday's goal: a maze you drew, and a player that cannot cheat through the walls.**

---

## Part 5: Add items and count them (Thursday)

Place several item sprites around the maze. Then count them with a **variable** and check for the win with an
**if statement**:

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

**Reading it out loud:**

- `let keys = 0` makes a **variable** that starts at zero.
- `on overlap` runs every time the player touches an item.
- `otherSprite.destroy()` removes the item you just touched.
- `keys += 1` adds one to your count. This is the variable doing its job.
- The **`if`** checks whether you have them all yet. Change `5` to however many items you placed.

> If your win never triggers, count your items. The number in the `if` has to match how many you actually
> placed.

---

## Vocabulary for this week

| Term | What it means |
|------|---------------|
| **Tile map** | A game map built from a grid of small square tiles. |
| **Tile** | One square of the grid. |
| **Wall** | A tile marked as solid, so sprites cannot move through it. |
| **Collision** | What happens when two things in a game touch, like a player hitting a wall. |
| **Variable** | A named container holding a value, like your item count. |
| **Counter** | A variable used to count how many times something happened. |
