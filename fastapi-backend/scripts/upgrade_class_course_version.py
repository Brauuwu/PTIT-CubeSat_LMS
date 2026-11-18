"""Move one class to the newest published course version without losing learning data.

A class is pinned to the course version it was published with. This one-off script publishes a
new class configuration and re-points the class's progress, quiz attempts and question banks to
it inside a single transaction.

By default only Lab 0 changes: the script first publishes a hybrid course version made of the
class's current Labs 1-8 plus Lab 0 from the newest course version, so lesson ids, progress and
orders of Labs 1-8 stay exactly as they are. --full-course moves to the newest course version
as-is and aborts if any lesson id of the class does not exist there (curriculum restructures
renamed ids; they need an explicit mapping first).

Usage (from fastapi-backend):
    python scripts/upgrade_class_course_version.py 1 --dry-run
    python scripts/upgrade_class_course_version.py 1 --i-have-a-backup

--dry-run executes every statement and then rolls back, so it also proves the triggers allow
the changes. Lessons that exist only in the new course version are copied as DISABLED so
students who finished a lab do not lose completion and no later lab is locked; the teacher
enables them after adding content. Lab 0 lessons take the new scaffold order.
"""

import argparse
import asyncio
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from sqlalchemy import text  # noqa: E402
from sqlalchemy.ext.asyncio import create_async_engine  # noqa: E402

from app.core.config import get_settings  # noqa: E402

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")


class Abort(Exception):
    pass


class DryRun(Exception):
    pass


async def one(conn, sql, **params):
    return (await conn.execute(text(sql), params)).first()


async def rows(conn, sql, **params):
    return (await conn.execute(text(sql), params)).all()


async def snapshot(conn, class_id, course_id):
    """(membership, lesson, status) of every lesson progress row of the class on one version."""
    found = await rows(
        conn,
        """SELECT lp.membership_id, lp.lesson_id, lp.status FROM lesson_progress lp
           JOIN class_memberships m ON m.id = lp.membership_id
           WHERE m.class_id = :c AND lp.course_version_id = :v""",
        c=class_id,
        v=course_id,
    )
    return sorted(tuple(r) for r in found)


async def build_lab0_hybrid(conn, old_id, newest_id):
    """Publish a course version = old Labs 1-8 + Lab 0 from the newest version."""
    hybrid = f"{old_id}-lab0-{newest_id[-8:]}"
    if await one(conn, "SELECT 1 FROM course_versions WHERE id=:h", h=hybrid):
        return hybrid
    await conn.execute(
        text(
            """INSERT INTO course_versions(id, course_id, version, status, source_hash)
               SELECT :h, o.course_id, (SELECT max(version) + 1 FROM course_versions c2 WHERE c2.course_id = o.course_id),
                      'draft', 'hybrid:' || o.source_hash || ':' || n.source_hash
               FROM course_versions o, course_versions n WHERE o.id=:old AND n.id=:new"""
        ),
        {"h": hybrid, "old": old_id, "new": newest_id},
    )
    cols = "order_no, title, objectives, estimated_minutes, groups, evidence"
    await conn.execute(
        text(
            f"""INSERT INTO labs(course_version_id, id, {cols})
                SELECT :h, id, {cols} FROM labs WHERE course_version_id=:old AND id <> 0
                UNION ALL SELECT :h, id, {cols} FROM labs WHERE course_version_id=:new AND id = 0"""
        ),
        {"h": hybrid, "old": old_id, "new": newest_id},
    )
    cols = "lab_id, type, order_no, title, content, completion_rule, preview_allowed"
    await conn.execute(
        text(
            f"""INSERT INTO lessons(course_version_id, id, {cols})
                SELECT :h, id, {cols} FROM lessons WHERE course_version_id=:old AND lab_id <> 0
                UNION ALL SELECT :h, id, {cols} FROM lessons WHERE course_version_id=:new AND lab_id = 0"""
        ),
        {"h": hybrid, "old": old_id, "new": newest_id},
    )
    await conn.execute(
        text("UPDATE course_versions SET status='published' WHERE id=:h"), {"h": hybrid}
    )
    print(f"Đã tạo phiên bản giáo trình lai {hybrid} (Lab 1-8 giữ nguyên, Lab 0 theo {newest_id}).")
    return hybrid


async def upgrade(conn, class_id, new_id, full_course=False):
    latest = await one(
        conn,
        "SELECT version, status FROM class_course_versions WHERE class_id=:c ORDER BY version DESC LIMIT 1",
        c=class_id,
    )
    if latest is None:
        raise Abort("Lớp chưa có cấu hình giáo trình nào.")
    if latest.status != "published":
        raise Abort("Lớp đang có bản nháp chưa xuất bản; xuất bản hoặc bỏ bản nháp trước.")
    old = await one(
        conn,
        "SELECT version, course_version_id FROM class_course_versions WHERE class_id=:c AND status='published' ORDER BY version DESC LIMIT 1",
        c=class_id,
    )
    if new_id is None:
        new_id = (
            await one(
                conn,
                "SELECT id FROM course_versions WHERE status='published' ORDER BY created_at DESC LIMIT 1",
            )
        ).id
    if not await one(
        conn, "SELECT 1 FROM course_versions WHERE id=:v AND status='published'", v=new_id
    ):
        raise Abort(f"Phiên bản giáo trình {new_id} chưa được xuất bản.")
    if old.course_version_id == new_id:
        raise Abort("Lớp đã dùng phiên bản giáo trình mới nhất.")
    if not full_course:
        new_id = await build_lab0_hybrid(conn, old.course_version_id, new_id)
    old_id, old_v, new_v = old.course_version_id, old.version, old.version + 1
    print(f"Lớp {class_id}: phiên bản lớp {old_v} ({old_id}) -> {new_v} ({new_id})")

    missing_settings = await rows(
        conn,
        """SELECT s.lesson_id FROM class_lesson_settings s
           WHERE s.class_id=:c AND s.version=:ov AND NOT EXISTS
             (SELECT 1 FROM lessons l WHERE l.course_version_id=:nv AND l.id=s.lesson_id)""",
        c=class_id,
        ov=old_v,
        nv=new_id,
    )
    missing_progress = await rows(
        conn,
        """SELECT DISTINCT lp.lesson_id FROM lesson_progress lp
           JOIN class_memberships m ON m.id = lp.membership_id
           WHERE m.class_id=:c AND lp.course_version_id=:ov AND NOT EXISTS
             (SELECT 1 FROM lessons l WHERE l.course_version_id=:nv AND l.id=lp.lesson_id)""",
        c=class_id,
        ov=old_id,
        nv=new_id,
    )
    if missing_settings or missing_progress:
        ids = sorted({r[0] for r in missing_settings + missing_progress})
        raise Abort(
            "Bài có ở bản cũ nhưng không có ở bản mới (cần ánh xạ ID trước): " + ", ".join(ids)
        )

    before = await snapshot(conn, class_id, old_id)
    counts_before = {
        "attempts": (
            await one(conn, "SELECT count(*) FROM quiz_attempts WHERE class_id=:c", c=class_id)
        )[0],
        "banks": (
            await one(conn, "SELECT count(*) FROM question_banks WHERE class_id=:c", c=class_id)
        )[0],
    }

    await conn.execute(
        text(
            """INSERT INTO class_course_versions(class_id, version, course_version_id, status, lab_settings)
               SELECT class_id, :nv, :new, 'draft', lab_settings FROM class_course_versions
               WHERE class_id=:c AND version=:ov"""
        ),
        {"c": class_id, "nv": new_v, "new": new_id, "ov": old_v},
    )
    # Teacher choices carry over; Lab 0 follows the new scaffold order.
    await conn.execute(
        text(
            """INSERT INTO class_lesson_settings
                 (class_id, version, lesson_id, course_version_id, enabled, required, order_no, params, status)
               SELECT s.class_id, :nv, s.lesson_id, :new, s.enabled, s.required,
                      CASE WHEN l.lab_id = 0 THEN l.order_no ELSE s.order_no END, s.params, 'draft'
               FROM class_lesson_settings s
               JOIN lessons l ON l.course_version_id=:new AND l.id=s.lesson_id
               WHERE s.class_id=:c AND s.version=:ov"""
        ),
        {"c": class_id, "nv": new_v, "new": new_id, "ov": old_v},
    )
    added = await rows(
        conn,
        """INSERT INTO class_lesson_settings
             (class_id, version, lesson_id, course_version_id, enabled, required, order_no, params, status)
           SELECT :c, :nv, l.id, :new, false, false, l.order_no, '{}', 'draft'
           FROM lessons l WHERE l.course_version_id=:new AND NOT EXISTS
             (SELECT 1 FROM class_lesson_settings s WHERE s.class_id=:c AND s.version=:nv AND s.lesson_id=l.id)
           RETURNING lesson_id""",
        c=class_id,
        nv=new_v,
        new=new_id,
    )
    await conn.execute(
        text(
            """INSERT INTO prerequisites(class_id, version, lab_id, required_lab_id)
               SELECT class_id, :nv, lab_id, required_lab_id FROM prerequisites
               WHERE class_id=:c AND version=:ov"""
        ),
        {"c": class_id, "nv": new_v, "ov": old_v},
    )

    # Re-point learning data in place so submissions and attempt history stay attached.
    p = {"c": class_id, "old": old_id, "new": new_id, "ov": old_v, "nv": new_v}
    await conn.execute(
        text(
            """UPDATE lesson_progress lp SET course_version_id=:new, lesson_version=:new || '/' || lp.lesson_id
               FROM class_memberships m WHERE m.id=lp.membership_id AND m.class_id=:c AND lp.course_version_id=:old"""
        ),
        p,
    )
    for table in ("progress_events", "quiz_attempt_grants"):
        await conn.execute(
            text(
                f"""UPDATE {table} t SET lesson_version=:new || '/' || substr(t.lesson_version, length(:old) + 2)
                    FROM class_memberships m
                    WHERE m.id=t.membership_id AND m.class_id=:c AND left(t.lesson_version, length(:old) + 1) = :old || '/'"""
            ),
            p,
        )
    await conn.execute(text("ALTER TABLE quiz_attempts DISABLE TRIGGER protect_quiz_attempt"))
    await conn.execute(
        text(
            """UPDATE quiz_attempts SET course_version_id=:new, lesson_version=:new || '/' || lesson_id
               WHERE class_id=:c AND course_version_id=:old"""
        ),
        p,
    )
    await conn.execute(text("ALTER TABLE quiz_attempts ENABLE TRIGGER protect_quiz_attempt"))
    await conn.execute(text("ALTER TABLE question_banks DISABLE TRIGGER protect_quiz_bank"))
    await conn.execute(
        text("UPDATE question_banks SET course_version_id=:new WHERE class_id=:c"), p
    )
    await conn.execute(text("ALTER TABLE question_banks ENABLE TRIGGER protect_quiz_bank"))
    await conn.execute(
        text(
            """UPDATE completion_overrides SET version=:nv,
                 lesson_version = CASE WHEN lesson_version IS NULL THEN NULL
                   ELSE :new || '/' || substr(lesson_version, length(:old) + 2) END
               WHERE class_id=:c AND version=:ov"""
        ),
        p,
    )

    # Settings first, then the class row: the snapshot trigger freezes settings once it is published.
    await conn.execute(
        text(
            "UPDATE class_lesson_settings SET status='published' WHERE class_id=:c AND version=:nv"
        ),
        p,
    )
    await conn.execute(
        text(
            "UPDATE class_course_versions SET status='published' WHERE class_id=:c AND version=:nv"
        ),
        p,
    )

    after = await snapshot(conn, class_id, new_id)
    if before != after:
        raise Abort("Tiến độ sau nâng cấp không khớp tiến độ trước nâng cấp; đã hủy toàn bộ.")
    leftover = await one(
        conn,
        """SELECT count(*) FROM lesson_progress lp JOIN class_memberships m ON m.id=lp.membership_id
           WHERE m.class_id=:c AND lp.course_version_id=:old""",
        c=class_id,
        old=old_id,
    )
    if leftover[0]:
        raise Abort("Còn tiến độ gắn với phiên bản cũ; đã hủy toàn bộ.")
    counts_after = {
        "attempts": (
            await one(conn, "SELECT count(*) FROM quiz_attempts WHERE class_id=:c", c=class_id)
        )[0],
        "banks": (
            await one(conn, "SELECT count(*) FROM question_banks WHERE class_id=:c", c=class_id)
        )[0],
    }
    if counts_before != counts_after:
        raise Abort("Số lượt thi hoặc ngân hàng thay đổi bất thường; đã hủy toàn bộ.")
    status = Counter(r[2] for r in after)
    print(f"Tiến độ giữ nguyên: {len(after)} dòng {dict(status)}; {counts_after}")
    print(
        "Bài mới được chép ở trạng thái TẮT:",
        ", ".join(sorted(r[0] for r in added)) or "(không có)",
    )


async def main():
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument("class_id", type=int)
    parser.add_argument(
        "--course-version", help="Mặc định: phiên bản giáo trình đã xuất bản mới nhất"
    )
    parser.add_argument(
        "--full-course",
        action="store_true",
        help="Dùng nguyên phiên bản mới nhất (mặc định chỉ thay Lab 0)",
    )
    parser.add_argument("--dry-run", action="store_true", help="Chạy đủ rồi hoàn tác")
    parser.add_argument(
        "--i-have-a-backup", action="store_true", help="Xác nhận đã sao lưu cơ sở dữ liệu"
    )
    args = parser.parse_args()
    if not args.dry_run and not args.i_have_a_backup:
        print("Cần --i-have-a-backup (hoặc dùng --dry-run). Hãy pg_dump cơ sở dữ liệu trước.")
        return 2
    engine = create_async_engine(get_settings().async_database_url)
    try:
        async with engine.begin() as conn:
            await upgrade(conn, args.class_id, args.course_version, args.full_course)
            if args.dry_run:
                raise DryRun
        print("Đã nâng cấp và xuất bản.")
    except DryRun:
        print("--dry-run: mọi thay đổi đã được hoàn tác.")
    except Abort as exc:
        print("DỪNG:", exc)
        return 1
    finally:
        await engine.dispose()
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
