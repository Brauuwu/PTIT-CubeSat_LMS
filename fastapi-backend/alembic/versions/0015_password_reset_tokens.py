"""Add password_reset_tokens table for email and admin-assisted password recovery.

Downgrade retains the table and records intentionally so pending requests and
token revocation state are never lost during a revision rollback; re-upgrade is
idempotent.
"""

from alembic import op

revision = "0015_password_reset_tokens"
down_revision = "0014_merge_lesson_started_at"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("""CREATE TABLE IF NOT EXISTS password_reset_tokens (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        token_hash VARCHAR(64) UNIQUE,
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        source VARCHAR(20) NOT NULL DEFAULT 'email',
        requested_ip VARCHAR(64),
        issued_by BIGINT REFERENCES users(id) ON DELETE SET NULL,
        expires_at TIMESTAMPTZ NOT NULL,
        used_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        CONSTRAINT ck_password_reset_status CHECK (status IN ('pending','issued','used','revoked')),
        CONSTRAINT ck_password_reset_source CHECK (source IN ('email','admin_request','admin_link'))
    )""")
    op.execute(
        "CREATE INDEX IF NOT EXISTS idx_password_reset_user_status "
        "ON password_reset_tokens(user_id, status)"
    )


def downgrade():
    # Retain password_reset_tokens to preserve pending requests and single-use revocation records.
    pass
