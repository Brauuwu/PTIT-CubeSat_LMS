import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CURRICULUM, getLessonsForLab } from '../src/data/curriculum.js';
import { sourceKey, projectKey } from '../src/components/editor/blockly-project.js';
import { loginDestination } from '../src/contexts/auth-session.js';

const seed = JSON.parse(readFileSync(new URL('../fastapi-backend/app/firmware/curriculum/seed.json', import.meta.url), 'utf8'));

test('seed preserves original IDs while normalizing lesson kinds and adding disabled test slots', () => {
  const lessons = seed.labs.flatMap(lab => lab.lessons);
  const originals = Object.keys(CURRICULUM).map(Number).flatMap(lab => getLessonsForLab(lab));
  assert.equal(lessons.length, 135);
  // Lab 2-8 checkpoints (`checkpointId`) are self-review pages of the legacy view; Lab 0/1 quizzes are server-graded lessons.
  const legacyOnly = lesson => lesson.type === 'labtest' || (lesson.type === 'quiz' && lesson.checkpointId);
  for (const item of originals.filter(lesson => !legacyOnly(lesson))) assert.ok(lessons.some(lesson => lesson.id === item.id), item.id);
  for (const item of originals.filter(lesson => lesson.type === 'quiz' && lesson.checkpointId)) assert.ok(!lessons.some(lesson => lesson.id === item.id), item.id);
  assert.deepEqual([...new Set(lessons.map(item => item.type))].sort(), ['document', 'labtest', 'practice', 'quiz', 'video']);
  assert.equal(lessons.filter(item => item.type === 'practice' && item.lab_id >= 2).length, 29);
  assert.equal(lessons.find(item => item.id === 'assembly-6').content.mode, 'assembly');
  assert.equal(lessons.find(item => item.id === 'assembly-6').default_required, false);
  for (const lab of seed.legacy) assert.equal(lab.lessons.filter(item => item.type === 'labtest').length, 1);
  assert.equal(lessons.find(item => item.id === 'summary-2').title, 'Tổng kết');
  assert.equal(lessons.find(item => item.id === 'components').default_required, false);
  const quizzes = lessons.filter(item => item.type === 'quiz');
  assert.deepEqual(quizzes.map(item => item.id), ['quiz-0-1', 'quiz-0-2', 'quiz-0-3', ...Array.from({ length: 13 }, (_, i) => `quiz-1-${i + 1}`)]);
  for (const quiz of quizzes) {
    assert.equal(quiz.default_enabled, false);
    assert.equal(quiz.default_required, false);
    assert.equal(quiz.preview_allowed, false);
    assert.equal(quiz.content.bank_ready, false);
  }
  assert.doesNotMatch(JSON.stringify(seed), /correct_choice|"answers?"|"explanation"/);
  for (const lab of seed.labs) {
    assert.equal(lab.lessons.at(-1).type, 'labtest');
    assert.equal(lab.lessons.at(-1).default_enabled, false);
    assert.deepEqual(lab.lessons.map(item => item.order_no), lab.lessons.map((_, index) => index));
    if (lab.id >= 2) for (const lesson of lab.lessons.filter(item => item.type !== 'labtest')) assert.ok(lab.groups.includes(lesson.content.group));
  }
});

test('class drafts isolate both editors by user/class while keeping legacy keys unchanged', () => {
  for (const key of [sourceKey, projectKey]) {
    assert.notEqual(key(2, 'Lab2-01a_Battery_I2C', 'user:1:class:2'), key(2, 'Lab2-01a_Battery_I2C', 'user:1:class:3'));
    assert.notEqual(key(2, 'Lab2-01a_Battery_I2C', 'user:1:class:2'), key(2, 'Lab2-01a_Battery_I2C', 'user:2:class:2'));
    assert.notEqual(key(2, 'Lab2-01a_Battery_I2C'), key(2, 'Lab2-01a_Battery_I2C', 'user:1:class:2'));
  }
});

test('class curriculum routes restore after login without allowing arbitrary paths', () => {
  for (const path of ['/preview', '/classes/12/curriculum', '/classes/12/learn?lesson=document-2-1']) assert.equal(loginDestination(path), path);
  for (const path of ['/classes/12/learn/../../evil', '/classes/12/curriculum//evil', '/classes/12/unknown']) assert.equal(loginDestination(path), '/');
});
