"""Key question banks and quiz policies by lesson id so `quiz` lessons can own their own bank.

Existing rows describe each lab's Lab Test, so they are backfilled with `labtest-<lab_id>`.
The check constraint is widened for per-lesson quizzes (1..20 questions, pass score up to the
number drawn) while Lab Test policies stay at exactly 5 questions.

Downgrade refuses to run while per-lesson quiz banks or policies exist; dropping the new key
would otherwise merge or delete teacher-authored questions. The lesson_id columns are derived
data for Lab Test rows, so removing them loses nothing.
"""

from alembic import op

revision = "0016_lesson_quiz_banks"
down_revision = "0015_lesson_type_quiz"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("ALTER TABLE question_banks ADD COLUMN IF NOT EXISTS lesson_id TEXT")
    # Published banks are immutable through the trigger; the backfill is a one-off key addition.
    op.execute("ALTER TABLE question_banks DISABLE TRIGGER protect_quiz_bank")
    op.execute("UPDATE question_banks SET lesson_id = 'labtest-' || lab_id WHERE lesson_id IS NULL")
    op.execute("ALTER TABLE question_banks ENABLE TRIGGER protect_quiz_bank")
    op.execute("ALTER TABLE question_banks ALTER COLUMN lesson_id SET NOT NULL")
    op.execute("ALTER TABLE question_banks DROP CONSTRAINT IF EXISTS uq_bank_version")
    op.execute(
        "ALTER TABLE question_banks ADD CONSTRAINT uq_bank_version UNIQUE (class_id, lesson_id, version)"
    )

    op.execute("ALTER TABLE quiz_policies ADD COLUMN IF NOT EXISTS lesson_id TEXT")
    op.execute("UPDATE quiz_policies SET lesson_id = 'labtest-' || lab_id WHERE lesson_id IS NULL")
    op.execute("ALTER TABLE quiz_policies ALTER COLUMN lesson_id SET NOT NULL")
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS quiz_policies_pkey")
    op.execute("ALTER TABLE quiz_policies ADD PRIMARY KEY (class_id, lesson_id)")
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS ck_quiz_policy")
    op.execute(
        """ALTER TABLE quiz_policies ADD CONSTRAINT ck_quiz_policy CHECK (
            num_questions BETWEEN 1 AND 20 AND pass_score BETWEEN 1 AND num_questions
            AND time_limit_minutes BETWEEN 1 AND 180 AND max_attempts BETWEEN 1 AND 100
            AND (lesson_id NOT LIKE 'labtest-%' OR num_questions = 5))"""
    )


def downgrade():
    op.execute(
        """DO $$ BEGIN
        IF EXISTS (SELECT 1 FROM question_banks WHERE lesson_id NOT LIKE 'labtest-%')
           OR EXISTS (SELECT 1 FROM quiz_policies WHERE lesson_id NOT LIKE 'labtest-%') THEN
            RAISE EXCEPTION 'Cannot downgrade: per-lesson quiz banks exist; remove them first';
        END IF;
        END $$"""
    )
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS ck_quiz_policy")
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS quiz_policies_pkey")
    op.execute("ALTER TABLE quiz_policies ADD PRIMARY KEY (class_id, lab_id)")
    op.execute(
        """ALTER TABLE quiz_policies ADD CONSTRAINT ck_quiz_policy CHECK (
            num_questions=5 AND pass_score BETWEEN 1 AND 5 AND time_limit_minutes BETWEEN 1 AND 180
            AND max_attempts BETWEEN 1 AND 100)"""
    )
    op.execute("ALTER TABLE quiz_policies DROP COLUMN IF EXISTS lesson_id")
    op.execute("ALTER TABLE question_banks DROP CONSTRAINT IF EXISTS uq_bank_version")
    op.execute(
        "ALTER TABLE question_banks ADD CONSTRAINT uq_bank_version UNIQUE (class_id, lab_id, version)"
    )
    op.execute("ALTER TABLE question_banks DROP COLUMN IF EXISTS lesson_id")
