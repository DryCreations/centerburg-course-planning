# State: The Thing Your Prototype Was Faking

**Course:** Design Techniques (145095) | **Week 7**

Last week you built a prototype that works. To make it work, some of you built **four nearly identical
screens** that differ by one number, one filled heart, or one word.

That is not a design decision. That is you faking something because you could not build it yet.

**This week you build it.**

---

## The idea, in one page

Every screen is made of two kinds of things.

| | | Example |
|---|---|---|
| **Layout** | Does not change. The structure | The cart icon is always top right. The list always has rounded cards |
| **State** | Changes as the person uses it | *How many items* are in the cart. *Whether* this one is favorited. *Which* tab is selected |

**A variable is a named box that holds one piece of state.**

```
   cartCount  =  3
   ^            ^
   the name     the value, which changes
```

Three screens can all read `cartCount`. One button can change it. Nobody duplicates anything.

> **This is exactly what a variable means in code.** Designers and programmers are describing the same
> thing. If you have taken a programming class, you already know this idea, and this is where it shows up
> in design.

---

## Step 1: Find the state in your own project

**Before you touch Figma.** Open your file and look at your frames.

Find any two frames that are **mostly the same**. Then answer:

| Question | Your answer |
|---|---|
| Which two frames are nearly identical? | |
| What is the **one thing** that differs between them? | |
| What would you call that thing, in one or two words? | |
| What **changes** it? Which button or action? | |
| What **reads** it? Which screens show it? | |

**That one thing is your state.** That name is your variable name.

### Examples, so you can recognize yours

| What you duplicated | The state underneath | Variable |
|---|---|---|
| Empty cart screen and cart-with-3-items screen | How many things are in the cart | `cartCount` (number) |
| Heart outline and heart filled | Whether this is favorited | `isFavorited` (boolean) |
| Four tab screens, each with a different tab highlighted | Which tab is selected | `activeTab` (text) |
| "Add" button and "Added" button | Whether it has been added | `isAdded` (boolean) |
| Light screens and a dark version | Which theme is on | `isDarkMode` (boolean) |

**If you genuinely cannot find one, come get me.** Most projects have two or three. Some have none, and
those students get a different task, which is fine.

---

## Step 2: The three types, and picking the right one

| Type | Holds | Use it when |
|---|---|---|
| **Number** | 3, 0, 17 | You are counting something |
| **Boolean** | true or false | There are exactly two possibilities: on/off, yes/no, filled/empty |
| **String (text)** | "Home", "Large" | There is a small set of named options |

**Most beginners reach for text when they want a boolean.** If the only two answers are yes and no, use a
boolean. `isFavorited = true` is better than `favoriteStatus = "yes"`, because "yes", "Yes", and "YES" are
three different strings and only one of them will work.

### Naming

- **Say what it is, not what it looks like.** `cartCount`, not `numberThing`
- **Booleans start with `is` or `has`.** `isFavorited`, `hasSeenIntro`. Then the name reads as a question
- **No spaces.** Stick a capital in instead: `cartCount`, `activeTab`

---

## Step 3: Make the variable

1. Open the **Variables** panel. It is in the right sidebar under **Local variables**, on the design tab
   with nothing selected. Look for a icon like a database or a list
2. **Create variable**, then choose the type: Number, Boolean, or String
3. Name it, using the rules above
4. Give it a **starting value.** This is what the person sees the first time. For a cart, that is almost
   always **0**

> **Starting value matters more than people expect.** It is your **empty state**, which we talked about
> last unit. `cartCount = 0` is the screen a new user actually sees first.

---

## Step 4: Change it from a button

This is the half that makes it real.

1. Select the button that should change the value
2. **Prototype** tab, drag a connection, or add an interaction
3. Set the action to **Set variable**
4. Pick your variable
5. Give it the new value

| For a counter | Set `cartCount` to `cartCount + 1` |
|---|---|
| For a toggle on | Set `isFavorited` to `true` |
| For a toggle off | Set `isFavorited` to `false` |
| For a real toggle | Set `isFavorited` to `not isFavorited` |

**Test it.** Present, click the button a few times, and watch the number go up. **If nothing happens, the
interaction is on the wrong layer**, which is the most common problem on this page.

---

## Step 5: Make a screen read it

A variable nobody can see is not doing anything yet.

### Text that updates

1. Select the text layer that should show the value
2. In the right sidebar, find the **bind** control next to the text content. It is a small icon that looks
   like a chip or a link
3. Choose your variable

Now that text shows the current value. **Change the value, the text changes. Everywhere.**

### Things that appear and disappear

1. Select the layer that should only show sometimes, the "3" badge on a cart icon, for example
2. Bind its **visibility** to a boolean

If your state is a number and you want the badge hidden at zero, you need a **condition**, which is the
next step.

---

## Step 6: Delete the frames you no longer need

**This is the deliverable.** Go back to the duplicate frames that the variable replaced and delete them.

Then write down which ones you deleted and why. Turning four frames into one is the entire point of this
week, and the list of deleted frames is the proof.

> **One frame that changes beats four frames that do not.** Four frames means every future edit has to be
> made four times, and the day you forget one is the day it looks broken.

---

## If you get ahead: conditionals

Now the state can make decisions.

On an interaction, add a **Conditional**:

```
   IF   cartCount > 0
        show the badge
   ELSE
        hide the badge
```

Things worth trying:

- **Empty state, handled properly.** If `cartCount` is 0, show "Your cart is empty." Otherwise show the
  list. **One frame, both states**
- **A button that refuses.** If the field is empty, the Submit button is gray and does nothing
- **A limit.** If `cartCount` is 10, stop adding, and say why

**"Empty state" stops being a screen you drew and starts being a condition.** That is the jump.

---

## Further: multiple values that move together

If you have two variables that always change at once, or a set of screens that all shift between a light
and a dark version, that is what **modes** are for. Ask and I will show you, individually.

---

## Common problems

| What you see | What it is |
|---|---|
| Clicking the button does nothing | The interaction is on the wrong layer. Select the actual button, not the frame or the text inside it |
| The number shows as `cartCount` instead of `3` | The text is not bound. You typed the name instead of binding it |
| It works once and then stops | You set it to a fixed value instead of `cartCount + 1` |
| It resets every time I change screens | Check you are setting the variable rather than a local override |
| The badge shows "0" | Bind its visibility to a condition, or hide it when the count is zero |

---

## Turn in Friday

- [ ] At least **one real variable** driving something that used to be duplicated
- [ ] A button that **changes** it, working in Present
- [ ] At least one place that **reads** it and updates on its own
- [ ] The duplicate frames **deleted**, and listed
- [ ] A short write-up: what the state is, what changes it, what reads it, and how many frames it saved
- [ ] Portfolio updated, share link on Google Classroom

---

## Why this is the last thing in this unit

Because it is the line between **drawing an app** and **describing how an app behaves.**

Everything before this week was about what a screen looks like. This week is about what a screen *knows*.
Every real app is a small pile of state and a set of rules about what changes it, and once you can see
that, you stop designing screens one at a time and start designing a system.
