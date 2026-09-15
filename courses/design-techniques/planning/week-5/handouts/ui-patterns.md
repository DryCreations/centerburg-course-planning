# UI Patterns: The Parts Apps Are Made Of

**Design Techniques, Week 5.** Almost every app you use is built from the same small set of pieces. They have
names. Once you know the names you stop inventing things from scratch and start making deliberate choices.

---

## Why patterns exist

A **pattern** is a solution that has been used so many times it became the expected answer.

When you use one, a person already knows how it works before they look at it. **They spend their attention on
your content instead of on figuring out your interface.**

> **Breaking a convention is allowed. Breaking it by accident is not.** If your back button is in the bottom
> right, every person using your app pays a small tax on every screen. Sometimes that is worth it. Usually it
> is not.

---

## Navigation patterns

### Tab bar

A row of 3 to 5 destinations pinned to the **bottom** of the screen, visible everywhere.

- **Use when:** there are a few top-level sections a person moves between constantly
- **Rules:** 3 to 5 items maximum, an icon plus a short label, and the current one is visually marked
- **Do not:** hide the primary destination in here and put something decorative in its place

### Nav bar / top bar

A strip across the **top** holding the screen title, a back arrow on the left, and sometimes one action on
the right.

- **Use when:** you need a title and a way back, which is almost always
- **Rules:** back goes **top left**, always. The title says where you are, not what the app is called

### Hamburger menu

Three stacked lines that open a hidden list of destinations.

- **Use when:** you have many destinations that people use rarely
- **The cost:** anything behind it gets used far less, because it is invisible until tapped
- **Do not:** put your primary action in here

### Back

Returning to where you came from.

- **Rules:** top left, same place on every screen, every screen except home

---

## Content patterns

### List

Rows stacked vertically, each one tappable.

- **Use when:** showing many similar things: messages, songs, events, search results
- **Rules:** one row is one thing. Keep the rows the same height. If the list runs past the screen, it
  scrolls

### Card

A contained block with its own edge, holding a picture, a title, and a bit of text.

- **Use when:** each item needs more than a line of text, or has an image
- **Rules:** a card is one thing. If a person cannot tell where one card ends and the next begins, it is not
  working

### Empty state

What a screen shows when there is nothing in it yet.

- **Use when:** any list that starts empty
- **Rules:** say what goes here and how to add the first one. A blank screen reads as broken

---

## Action patterns

### Primary button

The one thing you most want a person to do. Filled, high contrast, the most prominent thing on the screen.

**One per screen.** Two primary buttons means zero primary buttons.

### Secondary button

A real option that should not compete. An outline, or just text, or a muted fill.

### Floating action button (FAB)

A circular button floating over the content, bottom right, for the single most common action.

- **Use when:** there is one obvious thing people come to do repeatedly, like "add"
- **Do not:** use more than one, or cover content that matters

### Destructive action

Delete, remove, cancel. Usually red, usually asking for confirmation first.

---

## Input patterns

### Text field

- A **label** saying what goes in it
- **Placeholder text** in gray, showing an example
- A visible change when it is active

### Toggle

On or off, right now, no confirmation. The change happens immediately.

### Selector

Choosing one of a few options. Segmented buttons, radio buttons, or a dropdown when there are many.

---

## Feedback patterns

### Modal / dialog

A box on top of a dimmed screen that has to be dealt with before continuing.

- **Use when:** confirming something destructive, or asking a question you genuinely need answered
- **Do not:** use for information a person did not ask for

### Toast / snackbar

A small message that appears briefly and disappears on its own. "Saved." "Added to cart."

- **Use when:** confirming something worked, without interrupting

### Loading state

What the screen shows while it is waiting. A spinner, a progress bar, or a gray outline of the content.

- **Use when:** anything takes more than a moment. **Nothing happening reads as broken**

---

## The conventions worth knowing

| Convention | Where |
|------------|-------|
| Back | Top left |
| Screen title | Top center or top left |
| Primary action | Bottom, or top right |
| Main navigation | Bottom tab bar, or behind the hamburger |
| Add | A plus, often a FAB bottom right |
| Settings | A gear, usually top right or in the menu |
| Search | A magnifying glass, top |
| Destructive actions | Red, and confirmed |
| Selected items | Filled, colored, or check-marked |

---

## Run your own wireframes against this

Go through the screens you sketched. For each one:

1. **Name every element** using the words above. "That's a card." "That's a list row." "That's a secondary
   button."
2. **Anything you cannot name** is either something you invented, which needs a reason, or a pattern you do
   not know yet. Ask.
3. **Find your primary action.** Is there exactly one per screen? Is it the most prominent thing?
4. **Check your conventions.** Is back in the top left on every screen? Does anything repeat in a different
   place on different screens?
5. **Check your empty states.** Does any list on your screens start empty? What does it say?

---

## Do Now

On your wireframes, **label every element with its pattern name.** Then answer, in writing:

> The one pattern I am using that I did not know the name of yesterday: ________________
>
> One place I am breaking a convention, and why it is worth it: ________________
>
> One screen that needs an empty state I had not thought about: ________________

---

## If You Finish Early

1. Open an app on your phone and **name every element on one screen** using this vocabulary
2. Find an app that **breaks** one of these conventions. Did it cost you, or did it work?
3. Find an **empty state** in a real app and decide whether it is helpful or just blank
4. Look at the same app on a phone and on a computer. Which patterns changed, and why?
