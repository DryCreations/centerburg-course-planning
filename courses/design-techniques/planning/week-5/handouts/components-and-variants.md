# Components, Variants, and Interactive Components

**Design Techniques, Week 5.** Three features that let one thing hold all of its own states, so a button knows
how to look when it is pressed without you building a second frame for it.

Each builds on the last. **Do them in order.**

---

> **On a free account, some of this may be limited.** Components and instances work. Variants and
> interactive components may or may not, depending on your plan. **Try it, and if a step does not work, use
> the frame method in `overlays-scroll-input.md` instead.** The frame method is never wrong, it is just more
> clicking. Nothing in this project requires a paid account.

## Why this matters right now

You have a nav bar on four screens. Right now those are four separate copies, and if you change one you have
to remember to change the other three. You will not remember.

You also have buttons that should look different when they are selected, and the only tool you have for that
so far is duplicating the whole screen.

**Components fix the first problem. Variants fix the second. Interactive components make the second one
happen by itself.**

---

## Part 1: Components

A **component** is a master copy. Every **instance** of it updates when you change the master.

### Make one

1. Build something you use more than once: your nav bar, a button, a list row
2. Select everything in it
3. **Right-click, Create component** (or `Ctrl + Alt + K`)
4. The outline turns purple and a diamond icon appears. **That is the master**

### Use it

- `Ctrl + C`, `Ctrl + V` to drop instances anywhere
- Drag one onto each screen

### The payoff

Change the master and **every instance changes.** Rename a tab, change a color, fix the spacing once.

### What you can still change per instance

Text and images. So a list row component can say something different in every instance while keeping
identical structure. **That is the whole reason list rows are components.**

> **Make these components right now:** your nav bar, your tab bar, your buttons, your list row. Anything that
> appears on more than one screen.

---

## Part 2: Variants

A **variant** is a component with more than one version inside it, and a dropdown to switch between them.

Instead of three separate button components (Default, Selected, Disabled), you have **one** button with a
State property.

### Build one

1. Make your button as a component (Part 1)
2. Select it, and in the right panel click **Add variant** (the plus next to Variants), or press
   `Ctrl + Alt + B`
3. You now have two versions inside a dashed purple box. **Change the second one:** fill it, change the text
   color, add a border
4. In the right panel, rename the property from `Property 1` to **`State`**
5. Rename the values from `Default` and `Variant 2` to **`Default`** and **`Selected`**
6. Add a third if you need it: `Disabled`

### Use it

Drop an instance on a screen, and in the right panel there is now a **State dropdown.** Pick Default or
Selected. Same component, different look, no extra frames.

### Naming matters

The property name and the value names are what you see in the dropdown. `State: Default / Selected / Disabled`
reads clearly. `Property 1: Variant 2` does not.

> **Good properties to build:** `State` (default, selected, disabled), `Type` (primary, secondary), `Icon`
> (yes, no).

---

## Part 3: Interactive components

This is the one that saves you frames. **The component reacts on its own**, without you connecting anything
on the screen.

### Build one

1. Select your **component set**, the dashed purple box holding all the variants
2. Go to the **Prototype** tab
3. Click the **Default** variant
4. Drag the blue connector to the **Selected** variant
5. Set the trigger to **While hovering** or **On click**
6. Set Animation to **Smart animate**, 200ms

Now **every instance of that button** hovers and reacts, on every screen, forever. You built it once.

### What to use it for

| Interaction | Trigger | Variants |
|-------------|---------|----------|
| Button reacts to the mouse | While hovering | Default, Hover |
| Button looks pressed | While pressing | Default, Pressed |
| Toggle flips | On click | Off, On |
| Heart fills | On click | Empty, Filled |
| Checkbox checks | On click | Unchecked, Checked |
| Tab highlights | On click | Inactive, Active |

### The rule that decides where an interaction lives

> **If it changes only that one element, put it in the component.**
> **If it changes the screen, connect it on the screen.**

| What happens | Where it goes |
|--------------|---------------|
| A heart fills in | **Component.** Nothing else changed |
| A toggle flips | **Component** |
| A button looks pressed | **Component** |
| Tapping a row opens a detail page | **Screen.** You went somewhere |
| A confirmation box appears | **Screen.** Open overlay |
| Submitting shows a success page | **Screen** |

**Getting this wrong is the most common way a prototype becomes unmanageable.** If you build a heart-fill as
two screen frames, then you need two copies of every other screen state too, and it multiplies fast.

---

## Part 4: Smart animate

When two frames or two variants share elements **with the same name**, smart animate moves them instead of
cutting.

1. Select a prototype connection
2. Change Animation to **Smart animate**
3. Set the duration to **200 to 300ms.** Longer feels sluggish

**The requirement:** the layers have to be **named the same thing** in both. If the circle is `Dot` in one
and `Ellipse 4` in the other, Figma cannot match them and it just cuts.

> **Where it is worth it:** a toggle knob sliding across, a card growing into a detail view, a menu sliding
> in. Not everywhere. A screen that animates every element feels slow.

---

## Do Now

1. **Turn your nav bar or tab bar into a component.** Replace the copies on your other screens with instances
2. **Turn your main button into a component with variants:** `State: Default / Selected`
3. **Make it interactive:** connect Default to Selected inside the component set, on click or while hovering
4. **Drop it on a screen and test it in Present**
5. Go through your prototype and ask of every interaction you have planned: **does this belong in the
   component or on the screen?** Move any that are in the wrong place

---

## If You Finish Early

1. Make your **list row** a component and place several instances with different text
2. Add a third variant, `Disabled`, and use it somewhere it makes sense
3. Build a **toggle** as an interactive component with smart animate, so the knob slides
4. Add a `Type` property to your button: `primary` and `secondary`, so one component covers both
5. Rename the layers inside your variants so they match, then turn smart animate on and watch the difference

---

## When it goes wrong

| Problem | Fix |
|---------|-----|
| Changing one instance changed all of them | You edited the master. Undo, and edit the instance instead |
| I cannot change the text on an instance | Double-click into the text layer specifically |
| The State dropdown is not there | You are selecting the frame, not the instance. Click the instance itself |
| My interactive component does nothing | You connected the instances on the canvas, not the variants inside the component set |
| Smart animate just cuts | The layers are not named the same in both variants |
| Everything turned purple and I am lost | `Ctrl + Z`. Purple means component, and that is fine |
