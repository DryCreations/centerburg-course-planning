# Overlays, Scrolling, and Text Input

**Design Techniques, Week 5.** Three more things your app needs, each built two ways: the **frame method**,
which works on every Figma account, and the **shortcut**, if your account offers it.

> **Use the frame method unless you have checked that the shortcut works for you.** The frame method is never
> wrong. It is just more clicking.

---

## Working on the free plan

You are on a free Figma account. Two things matter:

### 1. Work in your **Drafts**, not a team project

**Drafts are unlimited. Team files are not.** On the left sidebar, make sure your file lives under **Drafts**.
If you started it inside a team project, drag it to Drafts now.

### 2. Your file is **yours**

Free accounts limit how many people can edit one file. **Do not build a shared group file.** Each of you has
your own project and your own file, which is how this assignment is set up anyway.

### 3. Your share link shows the whole file

On a free account, sending someone your prototype link also lets them see the file behind it. **That is
fine for this class.** Just know that the link is not a private preview.

---

# 1. Overlays and modals

An **overlay** sits **on top of** the screen instead of replacing it. The screen behind stays visible but
dimmed.

**Use it for:** a confirmation ("Delete this?"), a menu, a date picker, a short message that does not deserve
its own screen.

**Do not use it for:** information nobody asked for.

## The frame method (works on any account)

1. **Duplicate** the frame the overlay appears over. Name the copy `Home - confirm`
2. On the copy, draw a rectangle covering the **whole screen**. Fill it **black**, then set **opacity to 40%**
3. On top of that, draw a smaller **white rounded rectangle** in the middle
4. Add your text and two buttons: **Cancel** and **Confirm**
5. Prototype tab: connect the button on the original frame → `Home - confirm`
6. Connect **Cancel** → back to the original frame

**The dim is the whole trick.** It says "the screen is still there, you are just on top of it."

## The shortcut (if your account offers it)

Build the dialog as its own small frame off to the side, then connect with the action set to **Open overlay**
instead of Navigate. Figma places it on top and keeps the screen behind.

**Check it works before you rely on it.** If the Open overlay option is missing or does nothing in Present,
use the frame method.

## Getting it right

- **The dim goes edge to edge.** A dialog floating on an undimmed screen looks like a mistake
- **Two buttons maximum.** More than that means it should be a screen
- **The destructive one is not the default.** "Delete" should not be the easy, obvious button
- **Cancel must work.** An overlay you cannot back out of is a trap

---

# 2. Scrolling and list behavior

Real lists are longer than the screen. Yours should look like it.

## The frame method (works on any account)

You are not making it actually scroll. You are making it **look like a real list.**

1. Build your list so the rows **run off the bottom edge** of the frame
2. **Cut the last row off deliberately**, halfway through. That partial row is the signal that says "there is
   more below"
3. Anything outside the frame will not show in Present, so the frame edge does the clipping for you

**That half-visible row is doing real work.** A list that ends neatly at the bottom edge looks like the whole
list. A list cut mid-row looks like it continues.

**To show scrolling happened:** make a second frame showing the list **further down**, and connect them.

## The shortcut (if your account offers it)

1. Select the **frame**
2. Right panel: turn **Clip content** ON
3. Prototype tab: set **Overflow scrolling** to **Vertical scrolling**
4. Present and drag

**Check it in Present before you rely on it.**

## Rules for lists

| Rule | Why |
|------|-----|
| **One row is one thing** | A row holding two items is confusing to tap |
| **Rows are the same height** | Uneven rows read as broken, not as variety |
| **Something is tappable** | The whole row, not a tiny arrow at the end |
| **More than five items scrolls** | Do not shrink rows to fit. Let it run off |
| **A divider or spacing between rows** | So they read as separate things |

## The empty state

**Every list starts empty for somebody.** Decide what yours shows before there is anything in it.

A good empty state says **what goes here** and **how to add the first one.**

```
        [ small icon ]

     No assignments yet

  Tap + to add your first one
```

**A blank screen reads as broken.** This is the single most-skipped screen in student work.

---

# 3. Text input

You are not making a real, typeable field. You are making a field that **looks like it was typed in.**

## The frame method (works everywhere)

### The empty state

1. Rounded rectangle, thin gray border
2. **Placeholder text inside, in gray**, saying what goes there: "Search", "Your name", "Room number"
3. The label above it if it needs one

### The filled state

1. **Duplicate the frame.** On the copy, replace the placeholder with real-looking text
2. Make that text **darker**, close to your main text color
3. Add a **thin colored border** to the field, so it reads as active
4. Optional: a thin vertical line after the text, the cursor

### Connect them

Original field → filled version. Then the filled version's button → wherever the result goes.

**Three frames total:** empty, filled, result.

## The color difference is the point

**Gray placeholder, dark typed text.** That difference is how a person knows at a glance whether a field is
empty. If your placeholder is the same color as real text, every field looks filled in.

## Rules

| Rule | Why |
|------|-----|
| **Label it** | A field with only a placeholder loses its label once you type |
| **Placeholder is an example, not an instruction** | "Jordan Reyes" beats "Enter your name here" |
| **Make it tall enough to tap** | A thin field is hard to hit with a thumb |
| **Only add fields your task needs** | Do not add a search bar just to have one |

---

## Do Now

1. **Add an overlay** somewhere: a confirmation, a menu, or a message. Build it with the frame method
2. **Make one list look real:** rows running off the bottom, last one cut mid-row
3. **Design the empty state** for that list
4. **Add one text field** if your task involves typing. Empty and filled versions
5. **Test every path in Present**, including backing out of the overlay

---

## If you finish

1. Try the **shortcut** version of overlay or scroll and see whether it works on your account. Report back
2. Add a **loading state**: what your screen shows while it is waiting
3. Add a **toast**: a small "Saved" message that appears over the screen
4. Go back through every screen and check the back button is in the same corner

---

## Quick reference

| Thing | Frame method | Shortcut |
|-------|--------------|----------|
| Overlay | Duplicate frame, black rect at 40%, dialog on top, Navigate | Open overlay action |
| Scroll | Rows run off the bottom edge, last one cut mid-row | Clip content + Overflow scrolling |
| Selection | Two frames, or two components | Variants + Change to |
| Text input | Empty frame, filled frame, Navigate between | Same |

**The frame method always works. Start there.**
