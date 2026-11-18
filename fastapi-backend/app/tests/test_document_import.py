"""Word/PDF to Markdown import for the lesson editor (no content is stored)."""

import base64
import importlib.util
import io
import unittest
import zipfile

from app.core.lms_errors import LMSError
from app.services.document_import import import_document

NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"'


def b64(data: bytes) -> str:
    return base64.b64encode(data).decode()


def docx(body: str, *, prefix: str = "") -> bytes:
    xml = f'<?xml version="1.0" encoding="UTF-8"?>{prefix}<w:document {NS}><w:body>{body}</w:body></w:document>'
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w") as archive:
        archive.writestr("word/document.xml", xml)
    return buffer.getvalue()


def para(text: str, *, style: str = "", bold: bool = False, listed: bool = False) -> str:
    props = ""
    if style:
        props += f'<w:pStyle w:val="{style}"/>'
    if listed:
        props += '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>'
    run = f"<w:r>{'<w:rPr><w:b/></w:rPr>' if bold else ''}<w:t>{text}</w:t></w:r>"
    return f"<w:p>{'<w:pPr>' + props + '</w:pPr>' if props else ''}{run}</w:p>"


def pdf_with_text(text: str) -> bytes:
    stream = f"BT /F1 18 Tf 72 720 Td ({text}) Tj ET".encode()
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R "
        b"/Resources << /Font << /F1 5 0 R >> >> >>",
        b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]
    out, offsets = b"%PDF-1.4\n", []
    for number, body in enumerate(objects, 1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % number + body + b"\nendobj\n"
    xref = len(out)
    out += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objects) + 1)
    out += b"".join(b"%010d 00000 n \n" % offset for offset in offsets)
    out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF" % (len(objects) + 1, xref)
    return out


class DocxImportTests(unittest.TestCase):
    def test_headings_lists_emphasis_and_tables_become_markdown(self):
        table = (
            "<w:tbl><w:tr><w:tc>"
            + para("Tên")
            + "</w:tc><w:tc>"
            + para("Giá trị")
            + "</w:tc></w:tr>"
            "<w:tr><w:tc>" + para("a|b") + "</w:tc><w:tc>" + para("1") + "</w:tc></w:tr></w:tbl>"
        )
        body = (
            para("Tổng quan", style="Heading1")
            + para("Đoạn văn thường.")
            + para("Quan trọng", bold=True)
            + para("Mục một", listed=True)
            + para("Mục hai", listed=True)
            + table
        )
        result = import_document(b64(docx(body)))
        self.assertEqual(result["format"], "docx")
        markdown = result["markdown"]
        self.assertIn("# Tổng quan", markdown)
        self.assertIn("**Quan trọng**", markdown)
        self.assertIn("- Mục một\n- Mục hai", markdown)
        self.assertIn("| Tên | Giá trị |\n| --- | --- |\n| a\\|b | 1 |", markdown)
        self.assertEqual(result["characters"], len(markdown))

    def test_images_are_reported_not_silently_lost(self):
        picture = f"<w:p><w:r><w:drawing/></w:r>{para('Có ảnh')[5:]}"
        result = import_document(b64(docx(picture)))
        self.assertTrue(any("hình ảnh" in warning for warning in result["warnings"]))

    def test_rejects_entity_declarations_and_empty_documents(self):
        evil = docx(para("x"), prefix='<!DOCTYPE d [<!ENTITY e "boom">]>')
        for payload in (evil, docx("")):
            with self.assertRaises(LMSError) as raised:
                import_document(b64(payload))
            self.assertEqual(raised.exception.status_code, 422)


class FormatAndLimitTests(unittest.TestCase):
    def reject(self, payload, text):
        with self.assertRaises(LMSError) as raised:
            import_document(payload)
        self.assertEqual(raised.exception.status_code, 422)
        self.assertIn(text, raised.exception.message)

    def test_legacy_doc_text_and_bad_base64_are_rejected_with_hints(self):
        self.reject(b64(b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1" + b"0" * 64), ".docx")
        self.reject(b64(b"plain text, not a document"), "Chỉ hỗ trợ")
        self.reject("not base64!!", "base64")

    def test_oversized_file_is_rejected(self):
        self.reject(b64(b"%PDF-" + b"0" * (10 * 1024 * 1024)), "10 MB")


@unittest.skipIf(importlib.util.find_spec("pypdf") is None, "pypdf is not installed")
class PdfImportTests(unittest.TestCase):
    def test_pdf_text_is_extracted(self):
        result = import_document(b64(pdf_with_text("Xin chao CubeSat")))
        self.assertEqual(result["format"], "pdf")
        self.assertEqual(result["pages"], 1)
        self.assertIn("Xin chao CubeSat", result["markdown"])


@unittest.skipIf(importlib.util.find_spec("pypdf") is not None, "pypdf is installed")
class PdfLibraryMissingTests(unittest.TestCase):
    def test_missing_library_gives_an_actionable_error(self):
        with self.assertRaises(LMSError) as raised:
            import_document(b64(pdf_with_text("x")))
        self.assertEqual(raised.exception.status_code, 501)
        self.assertIn("pypdf", raised.exception.message)


if __name__ == "__main__":
    unittest.main()
