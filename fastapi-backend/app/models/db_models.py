"""Compatibility imports; all ORM models share app.db.database.Base."""

from app.models.tables import Base, GoogleIdentity, PasswordResetToken, RevokedToken, User, UserRole

__all__ = ["Base", "GoogleIdentity", "PasswordResetToken", "RevokedToken", "User", "UserRole"]
