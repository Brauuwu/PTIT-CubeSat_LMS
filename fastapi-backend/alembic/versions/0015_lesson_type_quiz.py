"""Allow the `quiz` lesson type (per-document / per-practice check questions).

Lab 0 gained quiz slots after Doc 0.1, Doc 0.2 and the practice step. Question answers
stay server-side; this migration only widens ck_lesson_type.

Downgrade refuses to run while any `quiz` lesson exists. Restoring the old four-type
constraint would either violate it or require deleting curriculum rows, and published
course versions are immutable snapshots, so no data is dropped automatically.
"""

from alembic import op

revision = "0015_lesson_type_quiz"
down_revision = "0014_merge_lesson_started_at"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("ALTER TABLE lessons DROP CONSTRAINT IF EXISTS ck_lesson_type")
    op.execute(
        "ALTER TABLE lessons ADD CONSTRAINT ck_lesson_type "
        "CHECK (type IN ('video','document','practice','labtest','quiz'))"
    )


def downgrade():
    op.execute(
        """DO $$ BEGIN
        IF EXISTS (SELECT 1 FROM lessons WHERE type = 'quiz') THEN
            RAISE EXCEPTION 'Cannot downgrade: quiz lessons exist; remove those course versions first';
        END IF;
        END $$"""
    )
    op.execute("ALTER TABLE lessons DROP CONSTRAINT IF EXISTS ck_lesson_type")
    op.execute(
        "ALTER TABLE lessons ADD CONSTRAINT ck_lesson_type "
        "CHECK (type IN ('video','document','practice','labtest'))"
    )
