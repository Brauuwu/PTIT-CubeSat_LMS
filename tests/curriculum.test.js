import test from 'node:test';
import assert from 'node:assert/strict';
import { CURRICULUM, getLessonsForLab, getLessonForLab, lessonUrl } from '../src/data/curriculum.js';
import { LABS } from '../src/data/labs.js';
import { READING_NOTES, lessonReadingContent } from '../src/data/lesson-reading.js';
import { projectKey, sourceKey, loadDraft } from '../src/components/editor/blockly-project.js';

test('PTITCube syllabus exposes 179 ordered sections and all 39 individual exercises', () => {
  assert.deepEqual(LABS.map(lab => getLessonsForLab(lab.id).length), [10, 37, 13, 24, 39, 18, 12, 14, 12]);
  const sections = Object.values(CURRICULUM).flatMap(lab => lab.lessons);
  assert.equal(new Set(sections.map(item => item.id)).size, 179);
  assert.equal(sections.filter(item => item.type === 'practice').length, 39);
  assert.equal(sections.filter(item => item.type === 'video').length, 25);
  assert.equal(sections.filter(item => item.type === 'document').length, 35);
  assert.equal(sections.filter(item => item.type === 'quiz').length, 60);
  for (const lab of LABS) {
    const lessons = getLessonsForLab(lab.id);
    assert.equal(lessons[0].type, 'video');
    // README pattern: ... -> Tổng hợp -> Lab Test, and every Doc is followed by its check questions.
    assert.deepEqual(lessons.slice(-2).map(item => [item.type, item.id]), [['summary', `summary-${lab.id}`], ['labtest', `labtest-${lab.id}`]]);
    lessons.forEach((item, index) => { if (item.type === 'document') assert.equal(lessons[index + 1].type, 'quiz', `${item.id} must be followed by a quiz`); });
    // Lab 2-8: self-review checkpoints; Lab 0/1: server-graded quiz lessons `quiz-<lab>-<n>` (no checkpoint).
    for (const quiz of lessons.filter(item => item.type === 'quiz')) {
      if (lab.id <= 1) assert.match(quiz.id, new RegExp(`^quiz-${lab.id}-[0-9]+$`));
      else assert.equal(quiz.id, `quiz-${quiz.checkpointId}`);
    }
    assert.equal(lab.description, CURRICULUM[lab.id].objective);
    if (lab.id === 0) continue;
    for (const lesson of lessons.filter(item => item.type === 'practice')) {
      assert.equal(lesson.repositoryUrl, `https://github.com/PTITCube/${lesson.id}`);
      assert.ok(lesson.id.startsWith(`Lab${lab.id}-`));
    }
  }
  const lab4 = getLessonsForLab(4);
  assert.ok(lab4.findIndex(item => item.id === 'Lab4-01b_Environment_Library') < lab4.findIndex(item => item.id === 'video-4-3'));
  assert.ok(lab4.findIndex(item => item.id === 'Lab4-03b_GPS_Library') < lab4.findIndex(item => item.id === 'video-4-5'));
  // New 2026-11 PTITCube exercises sit next to the exercise they extend (README order).
  const next = (lab, id) => getLessonsForLab(lab)[getLessonsForLab(lab).findIndex(item => item.id === id) + 1].id;
  assert.equal(next(1, 'Lab1-02_Control_Multiple_LEDs'), 'Lab1-03_PWM_LED');
  assert.equal(next(3, 'Lab3-04_Watchdog_And_Event'), 'Lab3-05_Event_Driven_Queue');
  assert.equal(next(4, 'Lab4-03b_GPS_Library'), 'quiz-practice-4-nmea-raw');
  assert.equal(next(4, 'quiz-doc-4-4'), 'Lab4-03c_GPS_PTITCube');
  // Practice groups are followed by their own check questions.
  assert.equal(next(1, 'Lab1-03_PWM_LED'), 'quiz-1-4');
  assert.equal(next(3, 'Lab3-05_Event_Driven_Queue'), 'quiz-practice-3-wdt-event');
});

test('every document has topic-specific reading; video links remain explicit until supplied', () => {
  for (const lab of LABS) for (const lesson of getLessonsForLab(lab.id)) {
    if (lesson.type === 'document' && lesson.id !== 'document') { // Lab 0 Doc 0.1 renders docs/lab0-intro.
      assert.ok(READING_NOTES[lesson.id]?.length >= 3);
      assert.ok(lessonReadingContent(lab, lesson).includes(lesson.title));
    }
    if (lesson.type === 'video') assert.equal(lesson.videoUrl ?? '', '');
  }
});

test('lesson URLs restore selection, invalid/cross-lab IDs fall back and Lab0 keeps its original IDs', () => {
  assert.deepEqual(getLessonsForLab(0).map(item => item.id), [
    'overview', 'document', 'quiz-0-1', 'document-0-2', 'quiz-0-2', 'video-0-2', 'components', 'quiz-0-3', 'summary-0', 'labtest-0',
  ]);
  const url = new URL(lessonUrl('lab4', 'Lab4-02b_IMU_Library'), 'http://localhost');
  assert.equal(getLessonForLab(4, url.searchParams.get('lesson')).id, 'Lab4-02b_IMU_Library');
  assert.equal(getLessonForLab(1, 'Lab4-02b_IMU_Library').id, 'video-1-1');
  assert.equal(getLessonForLab(4, 'missing').id, 'video-4-1');
});

test('exercise storage isolates all code/workspaces while preserving legacy lab keys', () => {
  const exercises = Object.entries(CURRICULUM).flatMap(([lab, value]) => value.lessons.filter(item => item.type === 'practice').map(item => [Number(lab), item.id]));
  for (const key of [projectKey, sourceKey]) {
    assert.equal(new Set(exercises.map(([lab, exercise]) => key(lab, exercise))).size, 39);
    for (const [lab, exercise] of exercises) assert.notEqual(key(lab, exercise), key(lab));
  }
  assert.equal(projectKey(1), 'ptit:blockly:v1:lab:1');
  assert.equal(sourceKey(1), 'ptit:source:v1:lab:1');
});

test('drafts saved under a renamed exercise id stay readable, and new keys win over old ones', () => {
  const store = new Map();
  globalThis.localStorage = { getItem: key => store.get(key) ?? null };
  try {
    store.set(sourceKey(6, 'Lab6-01_Multitasking_Scheduler'), 'old draft');
    assert.equal(loadDraft(sourceKey, 3, 'Lab3-03_Multitasking_Scheduler'), 'old draft');
    store.set(sourceKey(3, 'Lab3-03_Multitasking_Scheduler'), 'new draft');
    assert.equal(loadDraft(sourceKey, 3, 'Lab3-03_Multitasking_Scheduler'), 'new draft');
    store.set(sourceKey(2, 'Lab2-01a_Battery_GPIO'), 'adc draft');
    assert.equal(loadDraft(sourceKey, 2, 'Lab2-01a_Battery_I2C'), 'adc draft');
    assert.equal(loadDraft(sourceKey, 1, 'Lab1-02_Control_Multiple_LEDs'), null);
  } finally { delete globalThis.localStorage; }
});
