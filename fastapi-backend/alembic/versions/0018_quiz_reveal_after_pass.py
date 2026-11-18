"""Open the explanations as soon as a student reaches the pass score.

`after_pass` reveals an attempt's answers when it passes, or once the attempts are used up
(the old `after_attempts` behaviour) so a failed attempt still leaves retakes without a leak.
It becomes the default policy, and policies still on the old default are moved to it; they
only show answers earlier for attempts that already passed. Attempt policy snapshots are
immutable and are not touched, so attempts already taken keep the rule they started with.

Downgrade maps `after_pass` back to `after_attempts` and restores the previous default.
"""

from alembic import op

revision = "0018_quiz_reveal_after_pass"
down_revision = "0017_quiz_all_approved"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("ALTER TABLE quiz_policies ALTER COLUMN reveal_policy SET DEFAULT 'after_pass'")
    op.execute(
        "UPDATE quiz_policies SET reveal_policy = 'after_pass' WHERE reveal_policy = 'after_attempts'"
    )


def downgrade():
    op.execute(
        "UPDATE quiz_policies SET reveal_policy = 'after_attempts' WHERE reveal_policy = 'after_pass'"
    )
    op.execute("ALTER TABLE quiz_policies ALTER COLUMN reveal_policy SET DEFAULT 'after_attempts'")
