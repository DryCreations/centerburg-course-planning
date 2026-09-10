# Figma Intro: Build the Player Screen

**Design Techniques, Week 4, Thursday and Friday.** This is a **lab**, graded on completion, not on how
good it looks. You are learning where the tools are. Next week you use them to design something of your own.

**Were you absent? Read this whole page and you can catch up on your own.** Everything you need is here.

---

## What you are making

A phone screen for a music player, built from the spec below, and then a **second** version of that screen
that your play button actually clicks through to.

**You are copying a spec, on purpose.** There are no design decisions to make today. That is the point: all
your effort goes into learning the tools instead of agonizing over choices. Match the spec as closely as you
can.

**Turn in (end of Friday):** the Figma file link, with two frames, connected, that plays and clicks.

---

## Part 1: Get into Figma (5 minutes)

1. Go to **figma.com**
2. Click **Log in**, then **Continue with Google**
3. Use your **school Google account**, the same one you use for Classroom
4. If it offers to give you a tour or asks what you plan to use Figma for, **skip it.** You do not need it.
5. Click **New design file** (it may say "Design file" under a plus button)
6. Top left, click the file name where it says "Untitled" and rename it: `Figma Intro - Your Name`

**Nothing to save.** Figma saves as you go. If you close the tab, your work is still there.

### The five things you need to know about the screen you are looking at

| Where | What it is |
|-------|-----------|
| **Top middle** | The toolbar: frame, shape, text, and the move tool |
| **Left panel** | The layers list: everything you have made, newest on top |
| **Middle** | The canvas: infinite space to work in |
| **Right panel** | Properties: size, position, color, corner radius, for whatever you have selected |
| **Top right** | The **Present** button (a play triangle). This is how you test a prototype. |

### Moving around

- **Zoom:** hold `Ctrl` and scroll, or press `Shift + 1` to fit everything on screen
- **Pan:** hold the **space bar** and drag
- **Undo:** `Ctrl + Z`. Use it constantly. You cannot break anything.

---

## Part 2: The tools (learn these five)

| Tool | Key | What it does |
|------|-----|--------------|
| **Move** | `V` | Select things, drag them, resize them. Your default. |
| **Frame** | `F` | Makes a screen. Everything lives inside a frame. |
| **Rectangle** | `R` | Boxes: bars, buttons, image placeholders |
| **Ellipse** | `O` | Circles |
| **Text** | `T` | Type. Click once, then start typing. |

**Two habits that will save you:**

- After you finish drawing something, **press `V`** to go back to the move tool. Most "why is it making
  another rectangle" problems are this.
- **Hold `Shift` while you draw** to keep a square square and a circle circular.

### Setting size and position exactly

Select anything and look at the **right panel**. You will see `W` and `H` (width and height) and `X` and `Y`
(position). **You can type numbers into those boxes.** That is how you match the spec exactly instead of
dragging until it looks about right. Use it.

`X` is how far from the left edge of the frame. `Y` is how far from the top.

---

## Part 3: The spec, step by step

Follow this in order. Every number goes in the right panel.

### Step 1: The frame

- Press `F`
- On the right, under **Phone**, choose any option that is **390 x 844** (iPhone 14 / 13 / 12 sizes are this)
- Click once on the canvas to place it
- Double-click its name above the frame and rename it: **`Player`**

Everything from here goes **inside** that frame. If something lands outside, drag it onto the frame and drop
it there.

### Step 2: The background

- Press `R`, draw a rectangle roughly covering the frame
- Right panel: set `W` **390**, `H` **844**, `X` **0**, `Y` **0**
- Under **Fill**, click the color swatch and type this hex code: **`1E1E28`**
- In the layers panel on the left, drag this layer to the **bottom** so it sits behind everything

### Step 3: The header text

- Press `T`, click near the top of the frame, type: **NOW PLAYING**
- Right panel: size **12**, and set the color to **`9A9AB0`**
- Set `X` **150**, `Y` **60**

### Step 4: The album art

- Press `R`, draw a box in the upper middle
- Set `W` **300**, `H` **300**, `X` **45**, `Y` **110**
- **Fill:** `3A3A4E`
- **Corner radius** (right panel, the icon that looks like a rounded corner): **16**

### Step 5: The song title and artist

- Press `T`, click below the album art, type a song name (make one up, or use a real one)
  - Size **24**, **Bold**, color **`FFFFFF`**, `X` **45**, `Y` **445**
- Press `T` again, type an artist name
  - Size **16**, color **`9A9AB0`**, `X` **45**, `Y` **480**

### Step 6: The progress bar

Two rectangles stacked, the second one shorter.

- Press `R`: `W` **300**, `H` **4**, `X` **45**, `Y` **540**, fill **`3A3A4E`**, corner radius **2**
- Press `R` again: `W` **110**, `H` **4**, `X` **45**, `Y` **540**, fill **`FFFFFF`**, corner radius **2**

The white one sits on top of the gray one, which is what makes it read as "this much has played."

### Step 7: The buttons

**The play button** (this is the big one):

- Press `O`, hold `Shift`, draw a circle
- Set `W` **72**, `H` **72**, `X` **159**, `Y` **600**
- **Fill:** `6C5CE7`

**The two smaller buttons:**

- Press `O`, hold `Shift`: `W` **48**, `H` **48**, `X` **75**, `Y` **612**, fill **`3A3A4E`**
- Press `O`, hold `Shift`: `W` **48**, `H` **48**, `X` **267**, `Y` **612**, fill **`3A3A4E`**

### Step 8: Look at what you just did

The play button is **bigger** and it is the **only bright color on the screen.** Everything else is gray on
dark. Squint at it: your eye goes straight to the play button.

That is **hierarchy**, the thing we spent last week on, and it is doing its job here because of size and
contrast. Nothing else on this screen is competing with it.

**You are done with Thursday.** If you got here, you are finished.

---

## Part 4: Make it click (Friday)

### Step 1: Make the second screen

- Press `V`, then click the **frame name** (`Player`) above the frame to select the whole thing
- `Ctrl + C`, then `Ctrl + V`. You now have a copy.
- Drag the copy to the right so it sits next to the original
- Rename it: **`Player - Paused`**

### Step 2: Change something on the copy

On the **copy only**, make it obviously different:

- Change the play button fill to **`3A3A4E`** (so it looks off), **and**
- Change the white progress bar's `W` to something else, like **240**

Now the two frames are visibly different, which is how you will know the click worked.

### Step 3: Connect them

1. Top right, switch from **Design** to the **Prototype** tab
2. Click the **play button circle** on your first frame
3. A small blue **+** appears on its right edge. **Drag that + across to the second frame** and let go.
4. A blue arrow now connects them. That arrow is your prototype.

### Step 4: Test it

- Press the **Present** button (the play triangle, top right)
- Your screen opens full size. **Click the play button.** It should jump to the paused version.
- Press `Esc` to come back

**If nothing happens when you click:** you probably connected the wrong layer. Go back, make sure you
selected the actual circle (check the layers panel on the left), and drag the + again.

### Step 5: Connect it back

Do the same thing in reverse: on the **second** frame, drag the + from its play button back to the **first**
frame. Now you can click back and forth forever.

**That is a prototype.** A rough, connected version you can test before anything gets built for real. You just
did the last step of the UX/UI design process.

---

## Turn in

- [ ] Figma file named `Figma Intro - Your Name`
- [ ] Frame 1 (`Player`) built to the spec
- [ ] Frame 2 (`Player - Paused`) with at least two visible changes
- [ ] The two frames connected **both ways**
- [ ] It works in **Present** mode
- [ ] Share the file link on Google Classroom (top right, **Share**, set to "Anyone with the link," copy)

Graded on completion. If it clicks, you are done.

---

## If You Finish Early

1. **Restyle it.** Change every color to your own scheme. Keep the play button the brightest thing, and see
   whether the hierarchy still holds.
2. **Add a third frame** and connect it, maybe a screen listing songs.
3. **Try a transition.** In the Prototype tab, with the arrow selected, change Animation from Instant to
   "Move in" or "Smart animate" and present it again.
4. **Round the play button's friends.** Make the two small circles into rounded squares and decide which
   version you like better, then say why in one sentence.
5. **Rebuild it from memory** in a new frame without looking at the spec. Fastest way to actually learn the
   tools.

---

## Stuck?

| Problem | Fix |
|---------|-----|
| It keeps making new shapes | Press `V` to go back to the move tool |
| My thing is not inside the frame | Drag it onto the frame in the **layers panel** on the left |
| I cannot see my work | `Shift + 1` fits everything on screen |
| I put in a wrong number | Click the box in the right panel and retype it, nothing is permanent |
| I deleted something | `Ctrl + Z` |
| The colors look wrong | Hex codes have no `#` needed, just type the six characters |
| Sign-in will not work | Keep going on paper: sketch the screen with boxes and labels, you will build it tomorrow |

---

## Teacher note: generating the reference image

The spec above is what students actually build from. A picture of the finished screen on a slide makes the
target concrete, so they can see where they are headed instead of trusting a list of numbers.

Prompt for an AI image generator:

> A single mobile phone music player screen, flat vector UI mockup, portrait orientation, 390 by 844
> proportions. Very dark navy background, hex 1E1E28. Small light gray label reading "NOW PLAYING" centered
> near the top. A large rounded square album art placeholder in medium slate gray, hex 3A3A4E, centered in the
> upper area. Below it, left aligned, a bold white song title and a smaller light gray artist name. Below
> those, a thin horizontal progress bar: a dark gray track with the left third filled in white. Near the
> bottom, three circles in a row: a large bright purple circle in the center, hex 6C5CE7, flanked by two
> smaller dark gray circles. Clean, minimal, flat, no gradients, no photographic content, no text other than
> what is described. Plenty of empty space.

Put the result on the Do Now slide labeled "Here is what yours should look like." Do not hand out the image
as the thing to trace: the numbers in the spec are what teach the right panel, which is the actual skill.
