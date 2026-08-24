# Quiz: Scripting & Code Literacy

**Course:** 3D Techniques (145120)
**Unit:** 3.2 — Scripting & Code Literacy
**Weeks:** 23–25 (three weekly quizzes)
**WebXam Note:** Strand 5 = ~26% of EOC. These questions model the WebXam's logic-tracing and concept-ID format closely.
**Format:** Multiple Choice, 10–12 questions per week

> **Both tracks (Core and Extension) take the same quiz.** Extension students will find some questions address content they've implemented in code; Core students address the same concepts through reading and tracing.

---

## Questions

| # | Question | A | B | C | D | Answer | DOK | Standard |
|---|----------|---|---|---|---|--------|-----|---------|
| 1 | In Python, which symbol is used to write a comment? | // | /* | # | -- | C | 1 | 5.5.5 |
| 2 | What is a boolean expression? | A type of variable that holds numeric values | A statement that evaluates to either True or False | A loop that runs a fixed number of times | A function with no parameters | B | 1 | 5.3.1 |
| 3 | What is the output of the following truth table row? A=True, B=False, Expression: A AND B | True | False | True and False | Cannot be determined | B | 2 | 5.3.2 |
| 4 | What is the difference between a syntax error and a logic error? | A syntax error is harder to find; a logic error stops the program | A syntax error stops the program from running; a logic error lets it run but produces wrong results | They are the same thing | Logic errors only happen in loops | B | 2 | 5.4.7 |
| 5 | Convert binary 1010 to decimal: | 8 | 10 | 12 | 5 | B | 2 | 2.3.1 |
| 6 | In Python, the keyword that begins a conditional block is: | loop | when | if | check | C | 1 | 5.3.4 |
| 7 | A for loop is best used when: | You don't know how many times the loop will run | You want the loop to run exactly a known number of times | The loop condition may never become False | You need to define a function | B | 2 | 5.3.6 |
| 8 | Which SDLC phase involves writing the actual code? | Plan | Design | Development (Code) | Deploy | C | 1 | 5.6.1 |
| 9 | **[HOT]** Trace this code. What will it print?
```
x = 5
if x > 3:
    print("A")
elif x == 5:
    print("B")
else:
    print("C")
```
| A | B | C | A and B | A | 3 | 5.3.4 |
| 10 | **[HOT]** A student is looking at a script. One function calls a second function, which calls a third. She needs to trace the execution order. Best tool: | Flowchart | Python timeline | Call-stack trace diagram | Git log | C | 3 | 5.3.9 |
| 11 | In Git, a "commit" represents: | The start of a new repository | A saved snapshot of changes to a project at a specific point in time | Deleting a file from version control | Sharing a file publicly | B | 1 | 5.7.2 |
| 12 | The Agile SDLC is best characterized by: | Long sequential phases with no customer contact until delivery | Short iterative cycles (sprints) with frequent review, feedback, and adaptation | A single fixed budget with no scope changes | Testing only at the end of the project | B | 2 | 5.6.12 |
| 13 | **[HOT]** Examine this code. What kind of error is present?
```
for i in range(10):
print(i)
```
| Logic error — prints wrong values | Syntax error — the print statement is not indented inside the for loop | Runtime error — range has too many values | No error | B | 3 | 5.4.6 |
| 14 | **[HOT]** A script is supposed to move every 3rd object in a Blender scene one unit to the right. After running it, ALL objects move. What type of error is this and what is the likely cause? | Syntax error — extra parenthesis | Logic error — the conditional that checks "every 3rd object" is incorrect (likely wrong modulo condition) | Syntax error — indentation issue | Import error — the Blender module isn't loaded | B | 3 | 5.4.7 |
| 15 | **[HOT]** A developer is choosing between Agile and Waterfall for a 3-year government software contract with strict legal requirements and fixed deliverables. Which methodology is more appropriate and why? | Agile — shorter sprints are always better | Waterfall — fixed requirements and regulatory compliance fit the linear, documented structure of Waterfall better | Agile — government projects need frequent feedback | Waterfall — it requires no testing | B | 4 | 5.6.12 |
| 16 | A function in Python is defined using the keyword: | call | define | function | def | D | 1 | 5.3.9 |
| 17 | What does hexadecimal #FF0000 represent in color? | Blue | White | Red | Green | C | 2 | 2.3.2 |
| 18 | **[HOT]** A student writes pseudocode for a Blender automation task: "If object is on layer 3, apply a red material. Otherwise, apply blue." Translate this to Python-style pseudocode (not real code, but structured logic):
Which correctly mirrors this logic? | `for obj in layer3: material = red` | `if obj.layer == 3: material = red; else: material = blue` | `while layer == 3: red += 1` | `def layer(red, blue): return 3` | B | 3 | 5.6.6 |

---

## Answer Key

| # | Answer | # | Answer |
|---|--------|---|--------|
| 1 | C | 10 | C |
| 2 | B | 11 | B |
| 3 | B | 12 | B |
| 4 | B | 13 | B |
| 5 | B | 14 | B |
| 6 | C | 15 | B |
| 7 | B | 16 | D |
| 8 | C | 17 | C |
| 9 | A | 18 | B |

---

## Standards Covered

| Standard | Description | Questions |
|----------|-------------|-----------|
| 2.3.1 | Binary/hex conversion | Q5, Q17 |
| 2.3.2 | Binary/hex in context | Q17 |
| 5.3.1–5.3.2 | Boolean logic and truth tables | Q2, Q3 |
| 5.3.4 | Conditional statements | Q6, Q9 |
| 5.3.6 | For loops | Q7 |
| 5.3.9 | Functions and call stacks | Q10, Q16 |
| 5.4.6 | Syntax errors | Q13 |
| 5.4.7 | Logic errors | Q4, Q14 |
| 5.5.5 | Comments and naming conventions | Q1 |
| 5.6.1 | SDLC phases | Q8 |
| 5.6.6 | Pseudocode | Q18 |
| 5.6.12 | Agile vs. Waterfall | Q12, Q15 |
| 5.7.2 | Version control — commits | Q11 |

---

## Bell Ringer Pool

*Week 23: Q1–Q7 (concepts + boolean focus) Mon–Thu. Week 23 quiz Q1–Q10.*
*Week 24: Q8, Q12, Q13, Q18 Mon–Thu. Week 24 quiz Q8–Q15.*
*Week 25: Q9 retrace, Q14, Q15, Q17 Mon–Thu. Week 25 full Strand 5 practice quiz.*
