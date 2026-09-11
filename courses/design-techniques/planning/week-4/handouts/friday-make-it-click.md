# Friday: Make It Click

**Design Techniques, Week 4, Friday.** Today you turn yesterday's screen into something that actually
works when you click it. That is called a **prototype**, and it is the last step of the design process we
have been naming all week.

**This is a lab, graded on completion.** If it clicks, you are done.

**Were you absent yesterday?** Everything you need to build the screen is in `figma-intro-build.md`. Do that
first, then come back here.

---

## First: the quiz retake

If you want to retake last week's quiz, **do it now, at the start of class.** It is open on Google Classroom.
Your retake score **replaces** your original.

**The room is silent until everyone taking it is finished.** No talking, no music out loud, no asking me
questions across the room. If you are not taking the retake, start on the work below quietly. When the last
person turns it in, we go back to normal.

Nothing today is time-gated. Take the retake, then join in. You will not be behind.

---

## The goal

**Someone should be able to click one thing on your screen and have the screen respond.**

That is the whole bar. Pick either:

- **Play becomes pause:** clicking the play button takes you to a version of the screen where the button
  looks paused
- **Button changes screen:** clicking a button takes you to a different screen entirely (a song list, a
  settings page, anything)

Either one counts. Pick the one you find more interesting.

---

## The steps

### 1. Copy your screen

- Press `V`, then click the **frame name** (`Player`) above your screen. That selects the whole frame, not
  just one thing inside it.
- `Ctrl + C`, then `Ctrl + V`
- Drag the copy so it sits next to the original
- Double-click its name and rename it **`Player - Paused`** (or whatever your second screen is)

### 2. Change something on the copy

On the **copy only**, make at least two visible changes so you can tell the two screens apart at a glance:

- Change the play button's fill to `3A3A4E` so it reads as "off"
- Change the white progress bar's `W` to something different, like `240`

If your two screens look identical, you will not be able to tell whether the click worked.

### 3. Connect them

1. Top right, switch from the **Design** tab to the **Prototype** tab
2. Click your **play button** on the first screen
3. A small blue **+** appears on its edge. **Drag that + across to the second frame** and let go.
4. A blue arrow connects them. That arrow is your prototype.

### 4. Test it

- Hit **Present** (the play triangle, top right)
- Click your button. It should jump to the second screen.
- Press `Esc` to come back

### 5. Connect it back

Do the same in reverse: on the **second** screen, drag the **+** from its button back to the **first** frame.
Now you can click back and forth as many times as you want.

---

## Turn in

Share your file and post the link on Google Classroom:

1. Top right, click **Share**
2. Change the access to **Anyone with the link**
3. Click **Copy link**
4. Paste it into the assignment

**Checklist:**

- [ ] Two frames, side by side
- [ ] The second one is visibly different from the first
- [ ] They are connected **both ways** in the Prototype tab
- [ ] It works when you hit **Present**
- [ ] Link posted on Classroom

---

## Nothing happens when I click

| Problem | Fix |
|---------|-----|
| Clicking does nothing in Present | You probably connected the wrong layer. Check the layers panel on the left, select the actual button shape, and drag the + again |
| I dragged the + but no arrow appeared | You have to drop it **on the frame itself**, not on empty canvas |
| I only see one screen in Present | Press `Esc`, click the FIRST frame, then hit Present again so it starts there |
| I copied only part of my screen | Select the frame by its **name** above it, not by clicking inside it |
| I cannot find the Prototype tab | Top right corner, next to "Design." Make sure something is selected |

---

## If You Finish Early

1. **Restyle it** in your own colors. Keep the play button the brightest thing on the screen, then squint at
   it: does your eye still go there first?
2. **Add a third screen** and connect it, so you can click through all three.
3. **Change the transition.** In the Prototype tab, click the blue arrow, and change Animation from Instant
   to "Move in" or "Smart animate." Present it again and see the difference.
4. **Rebuild the screen from memory** in a new frame without looking at the spec. This is the fastest way to
   actually learn where the tools are.

---

## Next week

We use Figma for real. You will pick an app or website screen that genuinely frustrates you, work out exactly
what is wrong with it, and redesign it. **Start thinking about one this weekend.** You will need it Monday.

Anything that annoys you counts: an ordering app, a school page, a checkout, a settings menu, a site buried
in ads. If you catch yourself getting irritated at a screen between now and Monday, that is your target.
