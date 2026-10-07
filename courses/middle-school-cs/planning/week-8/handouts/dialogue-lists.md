# Talking Back

**Middle School CS | Week 8, Wednesday**

**Your game can ask the player something and do different things with the answer.**

Questions continue from Tuesday. **Start at 21.**

**First half is this sheet. Second half is your project plan.**

---

## The four blocks

All of these are in the **Game** drawer.

| Block | What it does | What you get back |
|---|---|---|
| `splash` | A short message. Press A and it goes away | Nothing |
| `show long text` | A longer message, with a layout: bottom, center, top, or full screen | Nothing |
| `ask` | A **yes or no** question. **A means yes, B means no** | **true** or **false** |
| `ask for string` | Pops up a keyboard. The player types | **The text they typed** |

There is also `ask for number`, which works the same way but gives you a number.

**The first two just say things. The last two hand something back**, which means you can put the answer
in a variable and use it.

**21.** Which two blocks give you something back? Why does that matter?

---

## Using what comes back

```
  set reply to  ask for string "What is your name?"
  splash  join("Hello, ", reply)
```

**22.** Build that. **What happens if the player types nothing and just presses the button?**

```
  if  ask "Do you want the sword?"  then
      splash "You take the sword."
  else
      splash "You leave it."
```

**23.** Build that too. **Which button is yes?**

**24.** `ask` gives back true or false. **What kind of block does that fit into?**

---

## Dialogue is a list

A character with four lines to say is **a list of four strings.**

```
  set lines to array of  "Hello."  "I lost my key."  "Find it and I'll pay you."
  for line of lines
      show long text  line  bottom
```

**25.** Build that. **What does the `for element` loop save you from writing?**

**26.** Add a fourth line without touching the loop. **What did you have to change?**

---

## Two lists that go together

**This is the useful one.** A quiz needs questions **and** answers. That is **two lists, in the same
order**, read with **the same index.**

```
  set questions to array of  "What color is the sky?"  "How many legs on a spider?"
  set answers   to array of  "blue"                    "8"

  set score to 0
  for index from 0 to (length of questions) - 1
      set reply to  ask for string  (questions get value at index)
      if  reply = (answers get value at index)  then
          change score by 1
```

**Index 0 goes with index 0. Index 1 goes with index 1.** That is the whole idea, and it is called
**parallel lists.**

**27.** Build it with your own three questions. **What is your score if you get them all right?**

**28.** Now add a fourth question to `questions` **and forget to add its answer.** Run it. **What happens,
and why?**

**29.** Put the answer in, but **at the wrong position** in the list. Run it again. **What is wrong now,
and would the program tell you?**

**30. This is the danger of parallel lists.** In your own words: **what two things must always be true
about them?**

---

## Then: back to your plan

**The rest of the period is your project plan.** It is due tomorrow.

**31.** Does your game have anything a character would **say**? If yes, write the lines as a list. If no,
say what your game uses instead to tell the player what is going on.

---

## Grading

**Questions 28, 29 and 30 are worth the most.** Breaking parallel lists on purpose is how you learn to
spot it later.

Question 31 is graded as part of your plan, not as practice.
