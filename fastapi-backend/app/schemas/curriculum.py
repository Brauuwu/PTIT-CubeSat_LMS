from pydantic import Field

from app.schemas.classes import InputModel


class LabSettingInput(InputModel):
    lab_id: int = Field(ge=0, le=8)
    enabled: bool
    prerequisites: list[int] = Field(default_factory=list, max_length=9)


class LessonSettingInput(InputModel):
    lesson_id: str = Field(min_length=1, max_length=200)
    enabled: bool
    required: bool
    order_no: int = Field(ge=0, le=1000)
    params: dict = Field(default_factory=dict)


class SettingsInput(InputModel):
    course_version_id: str = Field(min_length=1, max_length=100)
    expected_version: int = Field(ge=0)
    labs: list[LabSettingInput] = Field(min_length=1, max_length=9)
    lessons: list[LessonSettingInput] = Field(min_length=1, max_length=300)


class PublishInput(InputModel):
    expected_version: int = Field(ge=1)


class DocumentImportInput(InputModel):
    filename: str = Field(min_length=1, max_length=255)
    # Base64 of a .docx or PDF file of at most 10 MB (about 13.4 million base64 characters).
    content: str = Field(min_length=4, max_length=14_500_000)
