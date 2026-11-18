"""Merge 0015_password_reset_tokens (Xuân) with the lesson quiz chain ending at 0018 (Trung, PR #4).

Both branches start from 0014_merge_lesson_started_at and touch unrelated tables: one adds
password_reset_tokens, the other adds the quiz lesson type and per-lesson quiz banks.
"""

revision = "0019_merge_reset_and_quiz"
down_revision = ("0015_password_reset_tokens", "0018_quiz_reveal_after_pass")
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
