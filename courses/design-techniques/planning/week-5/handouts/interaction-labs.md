# The Interaction Labs

**Design Techniques, Weeks 5 and 6.** Eight short labs, one per day. Each takes about ten minutes and teaches
**one** thing you can then use in your own project.

**Do the lab in a scratch file, not in your project.** Get it working, then go use it for real.

---

## Lab 1: Back (Mon, week 5)

Last week you made a button go to another screen. Getting back is the same move in reverse, and forgetting it
is the single most common prototype mistake.

1. Make two frames side by side. Name them `Home` and `Detail`
2. Put a button on `Home`. Connect it to `Detail`
3. On `Detail`, put a small arrow or the word "Back" in the **top left corner**
4. Prototype tab, drag from the back arrow to `Home`
5. Present. Go forward, come back, go forward again

**Why the top left:** people expect it there. Putting it somewhere clever costs them time every single
screen.

> **In your project:** every screen except your home screen needs a way back, in the same spot every time.

---

## Lab 2: Overlay (Tue, week 5)

An overlay sits **on top** of the screen instead of replacing it. Confirmations, menus, and popups.

1. Duplicate one of your frames
2. On the copy, draw a rectangle covering the whole screen. Fill it black, then set its **opacity to 40%**.
   That is the dimmed background
3. On top of that, draw a smaller white rounded rectangle in the middle. Add text and two buttons: "Cancel"
   and "Confirm"
4. Connect a button on the original frame to this one
5. Connect "Cancel" back to the original

**The dim is the whole trick.** It says "the screen is still there, you are just on top of it."

> **In your project:** use it for anything a person should confirm, or for a menu that does not deserve its
> own screen.

---

## Lab 3: State change (Wed, week 5)

The same screen, one thing different. A toggle flips, a heart fills, a button reads "Added."

1. Duplicate a frame. Keep both **identical** except for one element
2. On the copy, change just that one thing: fill an outlined heart, flip a toggle to the right and change its
   color, change a button's text from "Add" to "Added" and dim it
3. Connect the element on frame 1 to frame 2
4. Connect it back, so it can toggle off again
5. Present and click it a few times

**The trap:** if you accidentally move anything else, it jumps when you click. Everything except the one
changing element must be in exactly the same position.

> **In your project:** this is what makes a prototype feel real. One good state change beats two extra
> screens.

---

## Lab 4: Scroll (Thu, week 5)

A list longer than the screen that actually scrolls.

1. Make a phone frame
2. Inside it, build a list of items that runs **past the bottom** of the frame. Eight or ten rows
3. Select the frame. In the right panel, find **Clip content** and turn it **on**
4. Still on the frame, in the Prototype tab set **Overflow scrolling** to **Vertical scrolling**
5. Present and drag the list up and down

> **In your project:** any list of more than about five things should scroll rather than shrink to fit.

---

## Lab 5: Selection (Mon, week 6)

Pick one of several options and see which one is picked.

1. Make a frame with three options in a row: three buttons, three sizes, three days, whatever fits your app
2. Duplicate it twice, so you have three near-identical frames
3. On frame A, style option 1 as **selected**: a filled background, a border, a check mark. The other two
   plain
4. On frame B, option 2 is selected. On frame C, option 3
5. Connect every option on every frame to the frame where that option is selected

Nine connections. It feels tedious, and that tedium is exactly why real apps use components instead of
frames. **You are learning what the shortcut is for.**

> **In your project:** use it anywhere a person chooses between a few things.

---

## Lab 6: Input (Tue, week 6)

A field that looks like a person typed in it.

1. Make a frame with an **empty** text field: a rounded rectangle, thin border, gray placeholder text inside
   like "Search" or "Your name"
2. Duplicate it. On the copy, replace the placeholder with real-looking text in a **darker** color, and add a
   thin colored border to show the field is active
3. Connect the empty field to the filled version
4. Add a third frame showing the result, the search results or a confirmation

**The color difference matters.** Placeholder gray and typed black are how a person can tell at a glance
whether a field is empty.

> **In your project:** only if your task actually involves typing. Do not add a search bar just to have one.

---

## Lab 7: Transitions (Wed, week 6)

How a screen arrives says something about what just happened.

1. Take any two connected frames
2. Prototype tab, click the blue connection arrow
3. Change **Animation** from Instant and try each of these:
   - **Instant**: no animation. Fast and honest
   - **Move in**: the new screen slides over. Good for going deeper
   - **Push**: the old screen is pushed out. Good for next and previous
   - **Dissolve**: a fade. Good for a change of context
4. Present after each and notice how different the same click feels

**The convention worth knowing:** going deeper slides in from the right, going back slides out to the left.
Matching that means nobody has to think about where they are.

> **In your project:** pick one and use it consistently. Mixing five animations feels broken, not exciting.

---

## Lab 8: Putting it together (Thu, week 6)

No new skill. Take your prototype and check every path:

- [ ] Can I reach every screen?
- [ ] Can I get **back** from every screen?
- [ ] Does every interaction actually fire?
- [ ] Does anything jump when it should not?
- [ ] If I hand this to someone, can they do the task with no explanation?

Fix what fails. That list is the grading rubric.
