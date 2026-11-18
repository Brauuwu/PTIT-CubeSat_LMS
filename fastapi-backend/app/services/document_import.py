"""Teacher document import: turn a Word (.docx) or PDF file into Markdown text.

Nothing is stored here; the teacher reviews the returned Markdown and saves it as the
lesson's `markdown` parameter like any other edit. Parsing is limited in size and refuses
XML with entity declarations. Legacy .doc files are rejected with a hint to resave as .docx.
"""

import base64
import binascii
import io
import re
import zipfile
from xml.etree import ElementTree as ET

from app.core.lms_errors import LMSError

MAX_FILE_BYTES = 10 * 1024 * 1024
MAX_XML_BYTES = 30 * 1024 * 1024
MAX_PDF_PAGES = 300
MAX_MARKDOWN_CHARS = 100000  # same ceiling as the lesson `markdown` parameter

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
OLE_MAGIC = b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1"


def invalid(message, details=None):
    raise LMSError(422, "CONFIG_INVALID", message, details or {})


def decode_upload(content: str) -> bytes:
    raw = content.strip()
    if raw.lower().startswith("data:") and "," in raw:
        raw = raw.split(",", 1)[1]
    try:
        data = base64.b64decode(raw, validate=True)
    except (ValueError, binascii.Error):
        invalid("Nội dung tệp tải lên không đúng định dạng base64.")
    if len(data) > MAX_FILE_BYTES:
        invalid("Tệp vượt quá giới hạn 10 MB.")
    if not data:
        invalid("Tệp rỗng.")
    return data


def detect_format(data: bytes) -> str:
    """Decide by file signature, not by the name or the declared type."""
    if data.startswith(b"%PDF-"):
        return "pdf"
    if data.startswith(b"PK"):
        return "docx"
    if data.startswith(OLE_MAGIC):
        invalid(
            "Định dạng Word cũ (.doc) chưa được hỗ trợ. Hãy mở bằng Word và lưu lại thành .docx hoặc PDF."
        )
    invalid("Chỉ hỗ trợ tệp Word (.docx) hoặc PDF.")


def _run_text(run) -> str:
    parts = []
    for node in run:
        tag = node.tag.removeprefix(W)
        if tag == "t" and node.text:
            parts.append(node.text)
        elif tag == "tab":
            parts.append(" ")
        elif tag in ("br", "cr"):
            parts.append("\n")
    return "".join(parts)


def _flag(properties, name) -> bool:
    node = None if properties is None else properties.find(W + name)
    if node is None:
        return False
    return node.get(W + "val", "true").lower() not in ("false", "0", "none")


def _paragraph_text(paragraph) -> str:
    """Join runs, merging neighbours with the same emphasis so `**a****b**` never appears."""
    groups: list[list] = []
    for run in paragraph.iter(W + "r"):
        text = _run_text(run)
        if not text:
            continue
        props = run.find(W + "rPr")
        key = (_flag(props, "b"), _flag(props, "i"))
        if groups and groups[-1][0] == key:
            groups[-1][1] += text
        else:
            groups.append([key, text])
    out = []
    for (bold, italic), text in groups:
        stripped = text.strip()
        if not stripped or not (bold or italic):
            out.append(text)
            continue
        mark = "***" if bold and italic else "**" if bold else "*"
        lead, trail = text[: len(text) - len(text.lstrip())], text[len(text.rstrip()) :]
        out.append(f"{lead}{mark}{stripped}{mark}{trail}")
    return "".join(out).replace("\n", "  \n").strip()


def _heading_level(style: str) -> int:
    if style.lower() == "title":
        return 1
    match = re.fullmatch(r"(?i)heading\s*(\d)", style)
    return min(max(int(match.group(1)), 1), 6) if match else 0


def _cell_text(cell) -> str:
    texts = [_paragraph_text(p) for p in cell.iter(W + "p")]
    return " ".join(t for t in texts if t).replace("|", "\\|")


def _table(table) -> str:
    rows = []
    for row in table.findall(W + "tr"):
        cells = [_cell_text(c) for c in row.findall(W + "tc")]
        if any(cells):
            rows.append(cells)
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    lines = ["| " + " | ".join(rows[0]) + " |", "| " + " | ".join(["---"] * width) + " |"]
    lines += ["| " + " | ".join(r) + " |" for r in rows[1:]]
    return "\n".join(lines)


def docx_to_markdown(data: bytes) -> tuple[str, list[str]]:
    try:
        archive = zipfile.ZipFile(io.BytesIO(data))
        info = archive.getinfo("word/document.xml")
    except (zipfile.BadZipFile, KeyError):
        invalid("Tệp Word (.docx) không hợp lệ.")
    if info.file_size > MAX_XML_BYTES:
        invalid("Nội dung tài liệu Word quá lớn để nhập.")
    xml = archive.read(info)
    if b"<!DOCTYPE" in xml or b"<!ENTITY" in xml:
        invalid("Tệp Word chứa khai báo XML không được phép.")
    try:
        body = ET.fromstring(xml).find(W + "body")
    except ET.ParseError:
        invalid("Tệp Word (.docx) không hợp lệ.")
    if body is None:
        return "", []
    blocks: list[str] = []
    previous_list = False
    images = 0
    for child in body:
        tag = child.tag.removeprefix(W)
        if tag == "tbl":
            text, is_list = _table(child), False
        elif tag == "p":
            images += sum(1 for _ in child.iter(W + "drawing")) + sum(
                1 for _ in child.iter(W + "pict")
            )
            text = _paragraph_text(child)
            props = child.find(W + "pPr")
            style_node = None if props is None else props.find(W + "pStyle")
            level = _heading_level(style_node.get(W + "val", "") if style_node is not None else "")
            is_list = bool(props is not None and props.find(W + "numPr") is not None) and not level
            if text and level:
                text = "#" * level + " " + text
            elif text and is_list:
                text = "- " + text
        else:
            continue
        if not text:
            continue
        if is_list and previous_list and blocks:
            blocks[-1] += "\n" + text
        else:
            blocks.append(text)
        previous_list = is_list
    warnings = [f"Bỏ qua {images} hình ảnh; hãy chèn lại bằng Markdown nếu cần."] if images else []
    return "\n\n".join(blocks), warnings


def pdf_to_markdown(data: bytes) -> tuple[str, list[str], int]:
    try:
        from pypdf import PdfReader
    except ImportError:
        raise LMSError(
            501,
            "CONFIG_INVALID",
            "Máy chủ chưa cài thư viện đọc PDF (pypdf). Quản trị viên cần chạy: pip install -r requirements.txt",
            {},
        ) from None
    try:
        reader = PdfReader(io.BytesIO(data))
        if reader.is_encrypted:
            invalid("PDF được mã hóa bằng mật khẩu; hãy bỏ mật khẩu rồi thử lại.")
        total = len(reader.pages)
        if total > MAX_PDF_PAGES:
            invalid(f"PDF có {total} trang, vượt giới hạn {MAX_PDF_PAGES} trang.")
        pages = [(page.extract_text() or "").strip() for page in reader.pages]
    except LMSError:
        raise
    except Exception:
        invalid("Không đọc được tệp PDF.")
    paragraphs = []
    for page in pages:
        for chunk in re.split(r"\n\s*\n", page):
            joined = " ".join(line.strip() for line in chunk.splitlines() if line.strip())
            if joined:
                paragraphs.append(joined)
    warnings = ["PDF chỉ lấy được chữ; định dạng, bảng và hình ảnh cần chỉnh lại bằng Markdown."]
    return "\n\n".join(paragraphs), warnings, total


def import_document(content: str) -> dict:
    data = decode_upload(content)
    kind = detect_format(data)
    pages = None
    if kind == "docx":
        markdown, warnings = docx_to_markdown(data)
    else:
        markdown, warnings, pages = pdf_to_markdown(data)
    if not markdown.strip():
        invalid(
            "Không tìm thấy văn bản trong tệp. Nếu là PDF quét từ ảnh, hãy dùng bản có thể chọn chữ."
        )
    if len(markdown) > MAX_MARKDOWN_CHARS:
        invalid(
            f"Nội dung dài {len(markdown)} ký tự, vượt giới hạn {MAX_MARKDOWN_CHARS}. Hãy tách thành nhiều tài liệu."
        )
    return {
        "format": kind,
        "markdown": markdown,
        "characters": len(markdown),
        "pages": pages,
        "warnings": warnings,
    }
