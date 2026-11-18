"""Attempts use every approved question, so the policy no longer pins the paper size.

Teachers decide the size by how many questions they approve (at least one). The policy check
therefore drops the "5 questions for Lab Test / pass score <= num_questions" rules and only
bounds the values; the paper size and the effective pass score are fixed per attempt when it
starts (policy snapshot), not in the stored policy.

Downgrade restores the stricter 0016 rules only while every policy still satisfies them;
otherwise it refuses, so no teacher setting is rewritten silently.
"""

from alembic import op

revision = "0017_quiz_all_approved"
down_revision = "0016_lesson_quiz_banks"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS ck_quiz_policy")
    op.execute(
        """ALTER TABLE quiz_policies ADD CONSTRAINT ck_quiz_policy CHECK (
            num_questions BETWEEN 1 AND 200 AND pass_score BETWEEN 1 AND 200
            AND time_limit_minutes BETWEEN 1 AND 180 AND max_attempts BETWEEN 1 AND 100)"""
    )


def downgrade():
    op.execute(
        """DO $$ BEGIN
        IF EXISTS (SELECT 1 FROM quiz_policies WHERE num_questions > 20 OR pass_score > num_questions
                   OR (lesson_id LIKE 'labtest-%' AND num_questions <> 5)) THEN
            RAISE EXCEPTION 'Cannot downgrade: policies exceed the previous limits; adjust them first';
        END IF;
        END $$"""
    )
    op.execute("ALTER TABLE quiz_policies DROP CONSTRAINT IF EXISTS ck_quiz_policy")
    op.execute(
        """ALTER TABLE quiz_policies ADD CONSTRAINT ck_quiz_policy CHECK (
            num_questions BETWEEN 1 AND 20 AND pass_score BETWEEN 1 AND num_questions
            AND time_limit_minutes BETWEEN 1 AND 180 AND max_attempts BETWEEN 1 AND 100
            AND (lesson_id NOT LIKE 'labtest-%' OR num_questions = 5))"""
    )
