// Checkpoint quizzes and the Lab Test are graded on the server (AGENTS.md rules 5-6): they never gate
// the next lesson and never count toward lab completion. Mirrors NON_SEQUENTIAL_LESSON_TYPES in
// fastapi-backend/app/services/progress.py.
const NON_SEQUENTIAL_TYPES = new Set(['quiz', 'labtest']);

export const isSequentialLesson = lesson => !NON_SEQUENTIAL_TYPES.has(lesson.type);
