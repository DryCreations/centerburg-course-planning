/**
 * Centerburg CTE Pretest Builder
 * =========================================================================
 * Fills a Google Form quiz from a tab of questions, then (optionally) attaches
 * it to a Google Classroom class. Also scores responses per standard/outcome.
 *
 * RECOMMENDED SETUP (one spreadsheet, reuse your own Forms) --------------------
 *
 * STEP 1 - One spreadsheet, one tab per course.
 *   - Make ONE Google Sheet (e.g. "CTE Pretests").
 *   - For each course, add a tab and import its CSV INTO THAT TAB:
 *       Right-click the tab > Rename it (e.g. "aviation").
 *       File > Import > Upload the CSV (e.g. aviation-uas-pretest.csv) >
 *       Import location = "Insert new sheet(s)" OR "Replace current sheet",
 *       Separator = "Detect automatically", and LEAVE
 *       "Convert text to numbers/dates" OFF so nothing gets mangled.
 *   - Keep the header row. The script matches columns BY NAME, so column order
 *     does not matter and extra columns are ignored.
 *
 * STEP 2 - Make (or reuse) a Google Form for that course, and copy its ID.
 *   - Create a blank Form (forms.google.com) or reuse an existing one.
 *   - Open the form's EDIT url. It looks like:
 *       https://docs.google.com/forms/d/FORM_ID_HERE/edit
 *     The long chunk between /d/ and /edit is the FORM ID. Copy it.
 *   - (Reusing a form keeps the same link in Classroom each time you rebuild.)
 *
 * STEP 3 - Install this script.
 *   - In the spreadsheet: Extensions > Apps Script.
 *   - Paste this file into Code.gs, and paste appsscript.json into the manifest
 *     (Project Settings > check "Show appsscript.json", then edit it).
 *
 * STEP 4 - Fill in CONFIG below, then Run > buildPretest.
 *   - SHEET_NAME   = the tab to read, e.g. 'aviation'
 *   - TARGET_FORM_ID = the FORM ID (or full form URL) from Step 2
 *   - Approve the permission prompt the first time (it is your own account).
 *   - The script clears that form's old questions and loads the tab's questions
 *     as a shuffled quiz. Check View > Logs for the form link.
 *   - Repeat per course: change SHEET_NAME + TARGET_FORM_ID, run again.
 *
 * STEP 5 - Attach to Classroom (optional).
 *   - Set ATTACH_TO_CLASSROOM = true.
 *   - Run listMyCourses once, read the log, and paste the class id into
 *     CLASSROOM_COURSE_ID. Run buildPretest again: it adds a DRAFT assignment
 *     linking the form, for you to review and post.
 *   - Or skip the API and attach the form by hand in Classroom
 *     (Create > Quiz assignment > insert the Form).
 *
 * STEP 6 - After students respond, Run > analyzeResults.
 *   - Writes tabs: "By Standard", "By Outcome", "By DOK", "By Student".
 *   - It scores against the hidden "Key <tab>" sheet written during the build.
 *
 * Leave TARGET_FORM_ID blank to CREATE a brand-new form instead of reusing one.
 * The header row the script needs (any order):
 *   standard, outcome, dok, scenario_id, scenario, question,
 *   option_a, option_b, option_c, option_d, answer
 * "answer" is the letter of the correct option (A in every shipped row).
 */

// ============================ CONFIG ============================
// The two things you will change most often are SHEET_NAME and TARGET_FORM_ID.
var CONFIG = {
  SHEET_NAME: 'aviation',      // <-- the tab to read (e.g. 'aviation', 'design', 'video')
  TARGET_FORM_ID: '',          // <-- PASTE THE FORM ID (or full form URL) here to fill an existing form.
                               //     Leave '' to create a brand-new form.
  CLEAR_EXISTING_ITEMS: true,  // when reusing a form, wipe its old questions first so rebuilds don't stack up

  FORM_TITLE: 'Aviation UAS — Diagnostic Pretest',  // used for a new form, and as the Classroom title default
  FORM_DESCRIPTION:
      'This is a practice diagnostic, not a grade. It is modeled on the WebXam ' +
      'end-of-course test. Most of this has not been taught yet, so a low score ' +
      'is expected and useful. Answer your best and do not guess wildly.',

  POINTS_PER_QUESTION: 0,      // 0 keeps it ungraded-feeling; the quiz still marks correct answers
  SHUFFLE_OPTIONS: true,       // scramble A-D so the correct answer is not always first
  SHUFFLE_QUESTIONS: false,    // randomize question order (auto-disabled when scenarios are present)
  SHOW_STANDARD_IN_HELP: false,// students never see the standard. The standard->question mapping is saved to
                               // the "Key" sheet instead, so results can be analyzed per standard/outcome.
  COLLECT_EMAIL: true,         // require sign-in / capture responder email (needed for per-student analysis)

  WRITE_KEY_SHEET: true,       // write a hidden "Key <tab>" sheet mapping each question to standard/outcome/answer
  FORM_ID_OVERRIDE: '',        // analyzeResults: leave '' to use the last form built; or paste a form id/url

  ATTACH_TO_CLASSROOM: false,  // set true to create a DRAFT assignment in Classroom
  CLASSROOM_COURSE_ID: '',     // required if attaching; run listMyCourses() to find it
  ASSIGNMENT_TITLE: '',        // '' = reuse FORM_TITLE
  ASSIGNMENT_INSTRUCTIONS: 'Diagnostic pretest — not graded. Do your best.'
};
// ================================================================

/** Main entry point. */
function buildPretest() {
  var rows = readRows_();
  if (!rows.length) throw new Error('No question rows found. Check the sheet and header.');

  var hasScenarios = rows.some(function (r) { return r.scenarioId; });
  var shuffleQ = CONFIG.SHUFFLE_QUESTIONS;
  if (hasScenarios && shuffleQ) {
    shuffleQ = false; // scenario groups rely on order; never shuffle across a shared scenario
    Logger.log('Scenarios present, so SHUFFLE_QUESTIONS was forced off to keep scenario groups together.');
  }

  var form;
  if (CONFIG.TARGET_FORM_ID) {
    form = FormApp.openById(toId_(CONFIG.TARGET_FORM_ID));   // reuse an existing form
    if (CONFIG.CLEAR_EXISTING_ITEMS) {
      form.getItems().forEach(function (it) { form.deleteItem(it); });
    }
    Logger.log('Filling existing form: ' + form.getTitle());
  } else {
    form = FormApp.create(CONFIG.FORM_TITLE);                // create a new form
    Logger.log('Created new form: ' + CONFIG.FORM_TITLE);
  }
  form.setDescription(CONFIG.FORM_DESCRIPTION)
      .setIsQuiz(true)
      .setCollectEmail(CONFIG.COLLECT_EMAIL)
      .setShuffleQuestions(shuffleQ);

  var built = 0, skipped = [], key = [], lastScenario = null;
  rows.forEach(function (r, i) {
    try {
      // When a new scenario begins, print the shared context once as a section header.
      if (r.scenarioId && r.scenarioId !== lastScenario) {
        form.addSectionHeaderItem().setTitle('Read the scenario').setHelpText(r.scenario);
      }
      lastScenario = r.scenarioId || null;

      var res = addQuestion_(form, r);            // {item, correctText}
      key.push([res.item.getId(), r.question, r.standard, r.outcome, r.dok, res.correctText]);
      built++;
    } catch (e) {
      skipped.push('Row ' + (i + 2) + ': ' + e.message);
    }
  });

  // Remember this form and save the answer key so analyzeResults() can score per standard.
  var props = PropertiesService.getDocumentProperties();
  props.setProperty('PRETEST_FORM_ID', form.getId());
  var keyName = keySheetName_();
  props.setProperty('KEYSHEET_' + form.getId(), keyName);
  if (CONFIG.WRITE_KEY_SHEET) writeKeySheet_(keyName, key);

  var editUrl = form.getEditUrl();
  var pubUrl = form.getPublishedUrl();
  Logger.log('Built %s questions. Skipped %s.', built, skipped.length);
  if (skipped.length) Logger.log('Skipped:\n' + skipped.join('\n'));
  Logger.log('EDIT the form here:  ' + editUrl);
  Logger.log('SHARE/answer here:   ' + pubUrl);
  Logger.log('Answer key saved to the hidden "%s" tab. After students respond, run analyzeResults().', keyName);

  if (CONFIG.ATTACH_TO_CLASSROOM) {
    if (!CONFIG.CLASSROOM_COURSE_ID) {
      Logger.log('ATTACH_TO_CLASSROOM is true but CLASSROOM_COURSE_ID is blank. ' +
                 'Run listMyCourses() to get the id, then set it in CONFIG.');
    } else {
      attachToClassroom_(form);
    }
  }
  return editUrl;
}

/** Reads and validates the question rows from the sheet. */
function readRows_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = CONFIG.SHEET_NAME ? ss.getSheetByName(CONFIG.SHEET_NAME) : ss.getSheets()[0];
  if (!sheet) throw new Error('Sheet not found: ' + CONFIG.SHEET_NAME);

  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  var header = values[0].map(function (h) { return String(h).trim().toLowerCase(); });
  var idx = {};
  ['standard','outcome','dok','scenario_id','scenario','question',
   'option_a','option_b','option_c','option_d','answer']
      .forEach(function (k) { idx[k] = header.indexOf(k); });

  ['question','option_a','option_b','option_c','option_d','answer'].forEach(function (k) {
    if (idx[k] < 0) throw new Error('Missing required column: ' + k);
  });

  var out = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var q = String(row[idx.question] || '').trim();
    if (!q) continue; // skip blank lines
    out.push({
      standard: idx.standard    >= 0 ? String(row[idx.standard] || '').trim() : '',
      outcome:  idx.outcome     >= 0 ? String(row[idx.outcome]  || '').trim() : '',
      dok:      idx.dok         >= 0 ? String(row[idx.dok] || '').trim().toLowerCase() : '',
      scenarioId: idx.scenario_id >= 0 ? String(row[idx.scenario_id] || '').trim() : '',
      scenario: idx.scenario    >= 0 ? String(row[idx.scenario] || '').trim() : '',
      question: q,
      options: {
        A: String(row[idx.option_a] || '').trim(),
        B: String(row[idx.option_b] || '').trim(),
        C: String(row[idx.option_c] || '').trim(),
        D: String(row[idx.option_d] || '').trim()
      },
      answer: String(row[idx.answer] || 'A').trim().toUpperCase().charAt(0)
    });
  }
  return out;
}

/** Adds one multiple-choice quiz item to the form. */
function addQuestion_(form, r) {
  var correctText = r.options[r.answer];
  if (!correctText) throw new Error('answer letter "' + r.answer + '" has no matching option');

  var texts = ['A','B','C','D']
      .map(function (k) { return r.options[k]; })
      .filter(function (t) { return t !== ''; });   // allow 3-option items too

  if (CONFIG.SHUFFLE_OPTIONS) texts = shuffle_(texts);

  var item = form.addMultipleChoiceItem();
  item.setTitle(r.question)
      .setPoints(CONFIG.POINTS_PER_QUESTION)
      .setRequired(false);

  if (CONFIG.SHOW_STANDARD_IN_HELP && (r.standard || r.outcome)) {
    var tag = [r.outcome, r.standard ? 'Standard ' + r.standard : ''].filter(String).join(' · ');
    item.setHelpText(tag);
  }

  var choices = texts.map(function (t) { return item.createChoice(t, t === correctText); });
  item.setChoices(choices);
  return { item: item, correctText: correctText };
}

// ===================== RESULTS ANALYSIS (per standard / outcome) =====================
/**
 * Scores the collected Form responses against the saved Key and writes three summary tabs:
 *   "By Standard"  — % correct on each competency standard
 *   "By Outcome"   — % correct on each outcome/strand (the WebXam-style baseline)
 *   "By Student"   — each responder's % correct per outcome
 * Run this after students have submitted. Uses the form from the last buildPretest run
 * (or set CONFIG.FORM_ID_OVERRIDE).
 */
function analyzeResults() {
  var props = PropertiesService.getDocumentProperties();
  var formId = CONFIG.FORM_ID_OVERRIDE ? toId_(CONFIG.FORM_ID_OVERRIDE)
                                       : props.getProperty('PRETEST_FORM_ID');
  if (!formId) throw new Error('No form id found. Run buildPretest first, or set CONFIG.FORM_ID_OVERRIDE.');

  var keyName = props.getProperty('KEYSHEET_' + formId) || keySheetName_();
  var key = readKeySheet_(keyName);     // itemId -> {question, standard, outcome, dok, correct}
  var form = FormApp.openById(formId);
  var responses = form.getResponses();
  if (!responses.length) { Logger.log('No responses yet.'); return; }

  // tallies
  var byStd = {}, byOut = {}, byDok = {}, students = [];
  function bump(map, k, correct) {
    if (k === '' || k == null) return;
    if (!map[k]) map[k] = { asked: 0, correct: 0 };
    map[k].asked++; if (correct) map[k].correct++;
  }

  responses.forEach(function (resp) {
    var email = resp.getRespondentEmail() || 'anonymous';
    var perOut = {}; // outcome -> {asked, correct} for this student
    resp.getItemResponses().forEach(function (ir) {
      var meta = key[ir.getItem().getId()];
      if (!meta) return; // item not in key (e.g. added by hand)
      var picked = ir.getResponse();
      var correct = (String(picked).trim() === String(meta.correct).trim());
      bump(byStd, meta.standard || meta.outcome, correct);
      bump(byOut, meta.outcome || meta.standard, correct);
      bump(byDok, meta.dok, correct);
      if (!perOut[meta.outcome]) perOut[meta.outcome] = { asked: 0, correct: 0 };
      perOut[meta.outcome].asked++; if (correct) perOut[meta.outcome].correct++;
    });
    students.push({ email: email, perOut: perOut });
  });

  var p = (CONFIG.SHEET_NAME ? CONFIG.SHEET_NAME + ' - ' : ''); // prefix keeps courses separate in one file
  writeSummarySheet_(p + 'By Standard', ['Standard', 'Asked', 'Correct', '% Correct'], byStd);
  writeSummarySheet_(p + 'By Outcome',  ['Outcome',  'Asked', 'Correct', '% Correct'], byOut);
  writeSummarySheet_(p + 'By DOK',      ['DOK (recall=low / reasoning=high)', 'Asked', 'Correct', '% Correct'], byDok);
  writeStudentSheet_(p + 'By Student', students, byOut);
  Logger.log('Wrote "%sBy Standard/Outcome/DOK/Student". Responses scored: %s', p, responses.length);
}

/** Name of the hidden answer-key tab for the current course tab. */
function keySheetName_() {
  return 'Key ' + (CONFIG.SHEET_NAME || 'Sheet1');
}

/** Accept either a raw id or a full Forms/Docs URL and return the id. */
function toId_(idOrUrl) {
  var s = String(idOrUrl).trim();
  var m = s.match(/\/d\/([a-zA-Z0-9_-]+)/) || s.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return m ? m[1] : s;
}

function writeKeySheet_(name, key) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.clear();
  sh.appendRow(['item_id', 'question', 'standard', 'outcome', 'dok', 'correct']);
  if (key.length) sh.getRange(2, 1, key.length, 6).setValues(key);
  sh.hideSheet();
}

function readKeySheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) throw new Error('No "' + name + '" tab. Rebuild the form (with this SHEET_NAME) so the key is saved.');
  var v = sh.getDataRange().getValues();
  var map = {};
  for (var i = 1; i < v.length; i++) {
    map[String(v[i][0])] = {
      question: v[i][1], standard: v[i][2], outcome: v[i][3], dok: v[i][4], correct: v[i][5]
    };
  }
  return map;
}

function writeSummarySheet_(name, header, map) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.clear();
  sh.appendRow(header);
  Object.keys(map).sort().forEach(function (k) {
    var a = map[k].asked, c = map[k].correct;
    sh.appendRow([k, a, c, a ? Math.round((c / a) * 100) + '%' : '']);
  });
  sh.autoResizeColumns(1, header.length);
}

function writeStudentSheet_(name, students, byOut) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.clear();
  var outcomes = Object.keys(byOut).sort();
  sh.appendRow(['Student'].concat(outcomes).concat(['Overall %']));
  students.forEach(function (s) {
    var row = [s.email], totA = 0, totC = 0;
    outcomes.forEach(function (o) {
      var p = s.perOut[o];
      if (p) { totA += p.asked; totC += p.correct; row.push(Math.round((p.correct / p.asked) * 100) + '%'); }
      else row.push('');
    });
    row.push(totA ? Math.round((totC / totA) * 100) + '%' : '');
    sh.appendRow(row);
  });
  sh.autoResizeColumns(1, outcomes.length + 2);
}

/** Creates a DRAFT Classroom assignment linking the form. Requires the Classroom advanced service. */
function attachToClassroom_(form) {
  var courseWork = {
    title: CONFIG.ASSIGNMENT_TITLE || CONFIG.FORM_TITLE,
    description: CONFIG.ASSIGNMENT_INSTRUCTIONS,
    materials: [{ link: { url: form.getPublishedUrl() } }],
    workType: 'ASSIGNMENT',
    state: 'DRAFT'            // review it in Classroom, then post when ready
    // no maxPoints => ungraded
  };
  var created = Classroom.Courses.CourseWork.create(courseWork, CONFIG.CLASSROOM_COURSE_ID);
  Logger.log('Created DRAFT Classroom assignment: ' + created.alternateLink);
}

/** Helper: list your Classroom courses and their ids (run once to find CLASSROOM_COURSE_ID). */
function listMyCourses() {
  var res = Classroom.Courses.list({ teacherId: 'me', courseStates: ['ACTIVE'] });
  (res.courses || []).forEach(function (c) {
    Logger.log('%s  ->  id: %s', c.name, c.id);
  });
  if (!res.courses) Logger.log('No active courses found for this account.');
}

/** Fisher-Yates shuffle. */
function shuffle_(a) {
  a = a.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
