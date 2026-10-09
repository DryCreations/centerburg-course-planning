# Quiz Screenshot Blocks (Week 8 Friday)

**Teacher-only.** These are the block images for the screenshot half of the quiz. They match
`[SCREENSHOT 1]` through `[SCREENSHOT 14]` in `quiz-screenshot-questions.csv`.

**Every answer below was checked by running the code**, not by reading it.

## How to make each image

1. Open MakeCode Arcade, **new project**
2. Switch to the **JavaScript** tab (top middle)
3. **Delete whatever is in there**, then paste one snippet below
4. Switch back to the **Blocks** tab. The code appears as blocks
5. Screenshot just the blocks, then paste that image into the matching quiz question in the Google Form

> **Do one at a time and clear the editor between each.** Leftover code from the previous snippet ends up in
> your screenshot and either gives the answer away or confuses the question.

> **Students never see JavaScript.** The paste step is only how you get the blocks built quickly. Every
> question is worded in block language, and the image they see is blocks.

**Snippets that show a sprite include a tiny placeholder image.** Draw any sprite you like in the editor
before screenshotting; it does not change the answer.

**For the two button questions**, the image shows the event blocks and the question tells them the order
the buttons were pressed.

**They are ordered easiest to hardest.** If you run short on prep, cut from the bottom.

---

## 1. Counting with a for loop

```javascript
let total = 0
for (let index = 0; index <= 4; index++) {
    total += 2
}
```

**Question:** After this runs, what is the value of total?

**Options:** 10 / 8 / 4 / 5

**Answer:** 10. The loop runs for index 0, 1, 2, 3, 4: five times, adding 2 each time. Students who say 8 think `0 to 4` runs four times.

---

## 2. Get value at

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let names = ["Ana", "Ben", "Cal", "Dee"]
mySprite.sayText(names[2])
```

**Question:** What does the sprite say?

**Options:** Cal / Ben / Dee / 2

**Answer:** Cal. Index 2 is the third item, because counting starts at 0. Ben is the counting-from-1 answer.

---

## 3. Button events

```javascript
info.setScore(0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(3)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-1)
})
```

**Question:** The player presses A, then A again, then B. What is the score?

**Options:** 5 / 6 / 2 / 7

**Answer:** 5. 3 + 3 - 1. Six is forgetting the B press, 2 is counting each A once.

---

## 4. The shift after a remove

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let names = ["Ana", "Ben", "Cal", "Dee"]
names.removeAt(1)
mySprite.sayText(names[1])
```

**Question:** What does the sprite say?

**Options:** Cal / Ben / Ana / Dee

**Answer:** Cal. Removing index 1 takes out Ben, and everything after it shifts down one. Cal is now at index 1. This is the week's lesson in one question.

---

## 5. Length after adding and removing

```javascript
let scores = [10, 20, 30]
scores.push(40)
scores.push(50)
scores.removeAt(0)
let count = scores.length
```

**Question:** After this runs, what is the value of count?

**Options:** 4 / 5 / 3 / 6

**Answer:** 4. Three items, add two to make five, remove one to make four.

---

## 6. Insert in the middle

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let queue = ["Ana", "Ben", "Cal"]
queue.insertAt(1, "Zoe")
mySprite.sayText(queue[2])
```

**Question:** What does the sprite say?

**Options:** Ben / Zoe / Cal / Ana

**Answer:** Ben. Zoe goes in at index 1 and pushes Ben up to index 2. Zoe is the answer for index 1, Cal for index 3.

---

## 7. Looping over every item

```javascript
let prices = [4, 7, 2, 5]
let total = 0
for (let value of prices) {
    total += value
}
```

**Question:** After this runs, what is the value of total?

**Options:** 18 / 4 / 5 / 20

**Answer:** 18. The loop visits every item and adds each one: 4 + 7 + 2 + 5. Four is the length; 5 is just the last item.

---

## 8. A condition inside a loop

```javascript
let temps = [3, 8, 6, 1, 9]
let count = 0
for (let value of temps) {
    if (value > 5) {
        count += 1
    }
}
```

**Question:** After this runs, what is the value of count?

**Options:** 3 / 2 / 5 / 4

**Answer:** 3. 8, 6 and 9 are greater than 5. Students who say 2 usually skip 6; 5 is the length of the list.

---

## 9. Remove last value hands it back

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let bag = ["rope", "key", "map"]
let item = bag.pop()
mySprite.sayText(item)
```

**Question:** What does the sprite say?

**Options:** map / rope / key / 2

**Answer:** map. Remove last value takes the last item off and hands it back, and the variable catches it.

---

## 10. Removing while looping (Tuesday's bug)

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let stuff = ["a", "b", "c"]
for (let index = 0; index <= stuff.length - 1; index++) {
    stuff.removeAt(index)
}
mySprite.sayText(stuff.length)
```

**Question:** What does the sprite say?

**Options:** 1 / 0 / 3 / 2

**Answer:** 1. Pass 1 removes a, leaving b and c. Pass 2 is index 1, which is now c. Then the loop stops, because the list is too short. One item, b, is left. Zero is the answer you would expect if the bug did not exist.

---

## 11. Searching a list

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let bag = ["rope", "key", "apple", "map"]
mySprite.sayText(bag.indexOf("sword"))
```

**Question:** What does the sprite say?

**Options:** -1 / 0 / 4 / sword

**Answer:** -1. Find index of gives back -1 when the item is not in the list. Zero cannot mean not found, because 0 is a real index.

---

## 12. Parallel lists

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let questions = ["Sky color?", "Spider legs?", "Days in a week?"]
let answers = ["blue", "8", "7"]
mySprite.sayText(answers[questions.indexOf("Spider legs?")])
```

**Question:** What does the sprite say?

**Options:** 8 / 1 / Spider legs? / 7

**Answer:** 8. The question is found at index 1, and index 1 in the answers list is 8. One is the index itself; 7 is off by one.

---

## 13. Matching two lists (Wednesday's bell ringer)

```javascript
let mine = [3, 5, 8, 2]
let yours = [3, 6, 8, 9]
let same: number[] = []
for (let index = 0; index <= mine.length - 1; index++) {
    if (mine[index] == yours[index]) {
        same.push(mine[index])
    }
}
let count = same.length
```

**Question:** After this runs, what is the value of count?

**Options:** 2 / 1 / 4 / 3

**Answer:** 2. Positions 0 and 2 match (3 and 8). Four is the length of either list.

---

## 14. Buttons and a list together

```javascript
let mySprite = sprites.create(img`
    . . . .
    . 2 2 .
    . 2 2 .
    . . . .
    `, SpriteKind.Player)
let inventory: string[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    inventory.push("coin")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    inventory.pop()
    mySprite.sayText(inventory.length)
})
```

**Question:** The player presses A three times, then B once. What does the sprite say?

**Options:** 2 / 3 / 1 / coin

**Answer:** 2. Three coins go in, B takes one off, and the sprite says how many are left. Three is saying it before the remove.

---

## Block language, for rewording

If you reword any question, use the block names, not the JavaScript.

| In the snippet | In the blocks, and in the question |
|---|---|
| `names[2]` | **get value at** 2 |
| `names.removeAt(1)` | **remove value at** 1 |
| `scores.push(40)` | **add** 40 **to end** |
| `queue.insertAt(1, "Zoe")` | **insert at** 1 **value** "Zoe" |
| `bag.pop()` | **remove last value from** |
| `bag.indexOf("sword")` | **find index of** "sword" |
| `.length` | **length of** |
| `for (let value of prices)` | **for element** value **of** prices |
| `for (let index = 0; index <= 4; index++)` | **for index from** 0 **to** 4 |
| `total += 2` | **change** total **by** 2 |
| `==` | **=** |
