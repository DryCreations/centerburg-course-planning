# UI Patterns

**Design Techniques, Weeks 5 and 6.** The named building blocks apps are made of. Each section lands on the
day you actually need it, so you are learning a pattern right before you put it on a screen.

| Day | Section | What you are doing that day |
|-----|---------|----------------------------|
| Tue wk 5 | **1. Navigation and focus** | Laying out your screens |
| Wed wk 5 | **2. Content** | Building screen 1 |
| Thu wk 5 | **3. Feedback and state** | Building screens 2 and 3 |
| Fri wk 5 | **4. Consistency** | Connecting and testing |
| wk 6 | **5. Input** | The last screen |

---

## Why patterns exist

A **pattern** is a solution used so many times it became the expected answer.

When you use one, a person already knows how it works before they look at it. **They spend their attention on
your content instead of on figuring out your interface.**

> **Breaking a convention is allowed. Breaking it by accident is not.** If your back button is in the bottom
> right, every person using your app pays a small tax on every screen.

---

# 1. Navigation and focus (Tuesday)

## It has to look like a real app

**Not everything has to work.** Your prototype has four or five working interactions. A real app has
hundreds.

But it should **look like the whole app exists.** That means putting things on the screen that you are not
going to build:

- A tab bar with four destinations, even though only one of them goes anywhere
- A search icon in the top bar that does nothing
- A settings gear that is not wired up
- A profile picture in the corner

**This is normal and it is what professionals do.** A mockup shows what the finished product looks like. The
prototype underneath it only proves the one path you care about.

> **The test:** if someone looked at a screenshot of your screen, would they believe it was a real app? If
> your screen has one button and nothing else, no.

**Mark what is not built.** Keep a short list of the features you are showing but not implementing. You will
need it for your write-up, and it is the difference between "I forgot" and "I decided."

## Navigation patterns

### Tab bar

A row of 3 to 5 destinations pinned to the **bottom** of the screen, visible on every screen.

- **Use when:** there are a few top-level sections a person moves between constantly
- **Rules:** 3 to 5 items, an icon plus a short label, and the current one is visually marked
- **Show all of them even if only one works**

### Nav bar / top bar

A strip across the **top** holding the screen title, a back arrow on the left, and sometimes one action on
the right.

- **Use when:** you need a title and a way back, which is almost always
- **Rules:** back goes **top left, always.** The title says where you are, not what the app is called

### Hamburger menu

Three stacked lines that open a hidden list of destinations.

- **Use when:** you have many destinations people use rarely
- **The cost:** anything behind it gets used far less, because it is invisible until tapped
- **Never put your primary action in here**

### Back

- Top left, the same place on every screen, on every screen except home

## Moving between pages

Before you build anything, draw your **screen flow**: boxes with arrows.

```
     [ HOME ]
       |  \
       |   \
   [ LIST ] [ SETTINGS ]
       |
   [ DETAIL ]
```

Three questions it has to answer:

1. **Can you reach every screen?** A screen nothing points at is a screen nobody sees
2. **Can you get back from every screen?** Every arrow needs one going the other way
3. **How many taps to the thing they came for?** If your one task takes five taps, cut some

> **Two or three taps.** If a person came to check tomorrow's lunch and it takes five screens, the design is
> the problem, not the person.

## The primary action, and how to draw focus to it

**Every screen has one thing you most want a person to do.** On a menu screen it is opening an item. On a
cart screen it is checking out.

**One per screen.** Two primary buttons means zero primary buttons.

### The five ways to make something win

| Tool | How you use it |
|------|----------------|
| **Size** | Make it bigger than everything near it |
| **Color** | Give it the only saturated color on the screen |
| **Contrast** | Filled and solid, while everything else is outlined or gray |
| **Whitespace** | Put empty space around it so nothing crowds it |
| **Position** | Put it where the eye lands: bottom of the screen on a phone, or top right |

**Use two or three, not one.** A button that is only bigger is not obviously the primary. A button that is
bigger **and** the only colored thing **and** has space around it is impossible to miss.

### Secondary actions

Real options that should not compete. Make them an outline, or plain text, or a muted fill. **If a person
cannot tell your primary from your secondary at a glance, neither is doing its job.**

### The squint test

Squint at your screen until it blurs. **What is still visible?** That should be your primary action. If it is
your header image or a random button, fix it before you build anything else.

## Do Now

1. Draw your **screen flow** as boxes and arrows. Check all three questions
2. On every screen, **circle the primary action**
3. Name **which two or three tools** you are using to make it win
4. Add the things that make it **look like a real app**: the tab bar, the icons, the pieces you are not
   building
5. **List what you are showing but not implementing**

---

# 2. Content (Wednesday)

### List

Rows stacked vertically, each one tappable.

- **Use when:** showing many similar things: messages, events, search results
- **Rules:** one row is one thing, rows are the same height, and a list longer than the screen scrolls

### Card

A contained block with its own edge, holding a picture, a title, and some text.

- **Use when:** each item needs more than a line of text, or has an image
- **Rules:** a card is one thing. If a person cannot see where one ends and the next begins, it is not working

### Empty state

What a screen shows when there is nothing in it yet.

- **Use when:** any list that starts empty
- **Rules:** say what goes here and how to add the first one. **A blank screen reads as broken**

### Image placeholder

A gray box where a photo will be. Standard practice in a mockup. Keep them the same proportion so the layout
does not jump when real images arrive.

---

# 3. Feedback and state (Thursday)

### Selected state

Showing which option is currently picked: filled, colored, or check-marked. **A choice with no visible
selection is a choice a person cannot verify.**

### Modal / dialog

A box on top of a dimmed screen that has to be dealt with before continuing.

- **Use when:** confirming something destructive, or asking a question you genuinely need answered
- **Do not:** use for information a person did not ask for

### Toast / snackbar

A small message that appears briefly and disappears on its own. "Saved." "Added to cart."

### Loading state

What the screen shows while it is waiting: a spinner, a bar, or a gray outline of the content.

- **Nothing happening reads as broken.** Even in a mockup, showing that you thought about it counts

### Destructive action

Delete, remove, cancel. Usually red, and usually confirmed first.

---

# 4. Consistency (Friday)

The thing that separates a prototype that feels real from three unrelated pictures.

| Check | Should be true |
|-------|----------------|
| Back button | Same corner on every screen |
| Tab bar | Same position, same items, same order |
| Titles | Same size and placement |
| Buttons | The same kind of button looks the same everywhere |
| Spacing | The same margin from the screen edge on every screen |
| Color | Your primary color means one thing and is not used decoratively |

**Lay all your screens side by side and look across them, not at them.** Anything that shifts position
between screens is a bug.

---

# 5. Input (Week 6)

### Text field

A **label** saying what goes in it, **placeholder text** in gray showing an example, and a visible change when
it is active.

### Toggle

On or off, immediately, no confirmation.

### Selector

Choosing one of a few options: segmented buttons, radio buttons, or a dropdown when there are many.

---

## The conventions table

| Convention | Where |
|------------|-------|
| Back | Top left |
| Screen title | Top center or top left |
| Primary action | Bottom, or top right |
| Main navigation | Bottom tab bar |
| Add | A plus, often bottom right |
| Settings | A gear, top right or in the menu |
| Search | A magnifying glass, top |
| Destructive actions | Red, and confirmed |
| Selected items | Filled, colored, or check-marked |
