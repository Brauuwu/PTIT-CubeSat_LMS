"""Markdown documentation router for CubeSat LMS."""

from pathlib import Path
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response

from app.services.auth import get_required_user

router = APIRouter(prefix="/api/docs", tags=["docs"], dependencies=[Depends(get_required_user)])

DOCS_DIR = Path(__file__).resolve().parents[2] / "data" / "docs"
QUIZZES_DIR = Path(__file__).resolve().parents[2] / "data" / "quizzes"


@router.get("/{doc_id}")
async def get_doc(doc_id: str):
    if not doc_id or ".." in doc_id or "/" in doc_id or "\\" in doc_id:
        raise HTTPException(status_code=400, detail="Tên tài liệu không hợp lệ")
    filename = doc_id if doc_id.endswith(".md") else f"{doc_id}.md"
    file_path = (DOCS_DIR / filename).resolve()
    if file_path.parent != DOCS_DIR.resolve() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="Không tìm thấy tài liệu")
    return Response(
        content=file_path.read_text(encoding="utf-8"),
        media_type="text/markdown; charset=utf-8",
        headers={"Cache-Control": "public, max-age=3600"},
    )


quizzes_router = APIRouter(prefix="/api/quizzes-data", tags=["quizzes-data"], dependencies=[Depends(get_required_user)])


@quizzes_router.get("/{filename}")
async def get_quiz_file(filename: str):
    if not filename or ".." in filename or "/" in filename or "\\" in filename:
        raise HTTPException(status_code=400, detail="Tên tệp câu hỏi không hợp lệ")
    file_path = (QUIZZES_DIR / filename).resolve()
    if file_path.parent != QUIZZES_DIR.resolve() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="Không tìm thấy tệp câu hỏi")
    media_type = "text/csv; charset=utf-8" if filename.endswith(".csv") else "text/markdown; charset=utf-8"
    return Response(
        content=file_path.read_text(encoding="utf-8-sig" if filename.endswith(".csv") else "utf-8"),
        media_type=media_type,
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
