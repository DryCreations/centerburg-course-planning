/**
 * Centerburg CTE Pretest Builder
 * -------------------------------------------------------------------------
 * Turns a sheet of multiple-choice questions into a Google Form quiz and
 * (optionally) attaches it to a Google Classroom class as a DRAFT assignment.
 *
 * HOW TO USE (full steps are in README.md):
 *   1. Open a new Google Sheet. File > Import the course CSV (e.g.
 *      aviation-uas-pretest.csv). Import as "Replace current sheet".
 *   2. Extensions > Apps Script. Paste this file in, and paste appsscript.json
 *      into the manifest (View > Show manifest / "appsscript.json").
 *   3. Edit the CONFIG block below (title, course id, options).
 *   4. Run buildPretest(). Approve the permissions prompt the first time.
 *   5. Check the log for the Form link. If ATTACH_TO_CLASSROOM is true, the
 *      assignment lands in that class as a DRAFT for you to review and post.
 *
 * The sheet's first row must be the header from the CSV:
 *   standard, outcome, question, option_a, option_b, option_c, option_d, answer
 * "answer" is the letter (A-D) of the correct option. In the CSVs the correct
 * answer is always A; if you reorder options while editing, update "answer".
 */

// ============================ CONFIG ============================
var CONFIG = {
  SHEET_NAME: '',              // '' = the first/active tab; or name a tab e.g. 'aviation'
  FORM_TITLE: 'Aviation UAS — Diagnostic Pretest',
  FORM_DESCRIPTION:
      'This is a practice diagnostic, not a grade. It is modeled on the WebXam ' +
      'end-of-course test. Most of this has not been taught yet, so a low score ' +
      'is expected and useful. Answer your best and do not guess wildly.',

  POINTS_PER_QUESTION: 0,      // 0 keeps it ungraded-feeling; the quiz still marks correct answers
  SHUFFLE_OPTIONS: true,       // scramble A-D so the correct answer is not always first
  SHUFFLE_QUESTIONS: false,    // set true to also randomize question order
  SHOW_STANDARD_IN_HELP: false,// students never see the standard. The standard->question mapping is saved to
                               // the "Key" sheet instead, so results can be analyzed per standard/outcome.
  COLLECT_EMAIL: true,         // require sign-in / capture responder email (needed for per-student analysis)

  WRITE_KEY_SHEET: true,       // write a hidden "Key" tab mapping each question to its standard/outcome/answer
  KEY_SHEET_NAME: 'Key',       // used by analyzeResults() to score responses per standard
  FORM_ID_OVERRIDE: '',        // leave '' to analyze the last form built; or paste a form id to analyze it

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

  var form = FormApp.create(CONFIG.FORM_TITLE);
  form.setDescription(CONFIG.FORM_DESCRIPTION)
      .setIsQuiz(true)
      .setCollectEmail(CONFIG.COLLECT_EMAIL)
      .setShuffleQuestions(CONFIG.SHUFFLE_QUESTIONS);

  var built = 0, skipped = [], key = [];
  rows.forEach(function (r, i) {
    try {
      var res = addQuestion_(form, r);            // {item, correctText}
      key.push([res.item.getId(), r.question, r.standard, r.outcome, res.correctText]);
      built++;
    } catch (e) {
      skipped.push('Row ' + (i + 2) + ': ' + e.message);
    }
  });

  // Remember this form and save the answer key so analyzeResults() can score per standard.
  PropertiesService.getDocumentProperties().setProperty('PRETEST_FORM_ID', form.getId());
  if (CONFIG.WRITE_KEY_SHEET) writeKeySheet_(key);

  var editUrl = form.getEditUrl();
  var pubUrl = form.getPublishedUrl();
  Logger.log('Built %s questions. Skipped %s.', built, skipped.length);
  if (skipped.length) Logger.log('Skipped:\n' + skipped.join('\n'));
  Logger.log('EDIT the form here:  ' + editUrl);
  Logger.log('SHARE/answer here:   ' + pubUrl);
  Logger.log('Answer key saved to the "%s" tab. After students respond, run analyzeResults().',
             CONFIG.KEY_SHEET_NAME);

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
  ['standard','outcome','question','option_a','option_b','option_c','option_d','answer']
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
      standard: idx.standard >= 0 ? String(row[idx.standard] || '').trim() : '',
      outcome:  idx.outcome  >= 0 ? String(row[idx.outcome]  || '').trim() : '',
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
  var formId = (CONFIG.FORM_ID_OVERRIDE ||
                PropertiesService.getDocumentProperties().getProperty('PRETEST_FORM_ID'));
  if (!formId) throw new Error('No form id found. Run buildPretest first, or set CONFIG.FORM_ID_OVERRIDE.');

  var key = readKeySheet_();            // itemId -> {question, standard, outcome, correct}
  var form = FormApp.openById(formId);
  var responses = form.getResponses();
  if (!responses.length) { Logger.log('No responses yet.'); return; }

  // tallies
  var byStd = {}, byOut = {}, students = [];
  function bump(map, k, correct) {
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
      if (!perOut[meta.outcome]) perOut[meta.outcome] = { asked: 0, correct: 0 };
      perOut[meta.outcome].asked++; if (correct) perOut[meta.outcome].correct++;
    });
    students.push({ email: email, perOut: perOut });
  });

  writeSummarySheet_('By Standard', ['Standard', 'Asked', 'Correct', '% Correct'], byStd);
  writeSummarySheet_('By Outcome',  ['Outcome',  'Asked', 'Correct', '% Correct'], byOut);
  writeStudentSheet_(students, byOut);
  Logger.log('Wrote "By Standard", "By Outcome", and "By Student". Responses scored: %s', responses.length);
}

function writeKeySheet_(key) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(CONFIG.KEY_SHEET_NAME) || ss.insertSheet(CONFIG.KEY_SHEET_NAME);
  sh.clear();
  sh.appendRow(['item_id', 'question', 'standard', 'outcome', 'correct']);
  if (key.length) sh.getRange(2, 1, key.length, 5).setValues(key);
  sh.hideSheet();
}

function readKeySheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(CONFIG.KEY_SHEET_NAME);
  if (!sh) throw new Error('No "' + CONFIG.KEY_SHEET_NAME + '" tab. Rebuild the form so the key is saved.');
  var v = sh.getDataRange().getValues();
  var map = {};
  for (var i = 1; i < v.length; i++) {
    map[String(v[i][0])] = { question: v[i][1], standard: v[i][2], outcome: v[i][3], correct: v[i][4] };
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

function writeStudentSheet_(students, byOut) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('By Student') || ss.insertSheet('By Student');
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
