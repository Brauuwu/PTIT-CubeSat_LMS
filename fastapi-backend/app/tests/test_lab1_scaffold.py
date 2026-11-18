"""Lab 1 structure: ordered lessons, untouched practice ids, quiz slots without answers."""

import json
import unittest
from pathlib import Path

SEED = Path(__file__).resolve().parents[1] / "firmware" / "curriculum" / "seed.json"
PRACTICE = [
    "Lab1-01_Blink_LED",
    "Lab1-02_Control_Multiple_LEDs",
    "Lab1-03_Button",
    "Lab1-04_LED_Button",
    "Lab1-05_7_Segment_LED",
    "Lab1-06_Serial_Communication",
    "Lab1-07_Serial_Control_LED",
    "Lab1-08_WiFi_Connection",
    "Lab1-09_WiFi_AP_Mode",
    "Lab1-10_Web_Server_LED",
]


class Lab1ScaffoldTests(unittest.TestCase):
    def lessons(self):
        labs = json.loads(SEED.read_text("utf-8"))["labs"]
        return next(lab for lab in labs if lab["id"] == 1)["lessons"]

    def test_order_numbers_are_contiguous_and_labtest_is_last(self):
        lessons = self.lessons()
        self.assertEqual([item["order_no"] for item in lessons], list(range(len(lessons))))
        self.assertEqual(lessons[-1]["id"], "labtest-1")
        self.assertEqual(lessons[-1]["type"], "labtest")
        self.assertEqual(lessons[-2]["id"], "summary-1")

    def test_practice_ids_are_kept_in_order(self):
        practice = [item["id"] for item in self.lessons() if item["type"] == "practice"]
        self.assertEqual(practice, PRACTICE)

    def test_has_thirteen_quiz_slots_eight_docs_three_videos(self):
        lessons = self.lessons()
        quizzes = [item["id"] for item in lessons if item["type"] == "quiz"]
        self.assertEqual(quizzes, [f"quiz-1-{n}" for n in range(1, 14)])
        docs = [item for item in lessons if item["type"] == "document" and item["id"] != "summary-1"]
        self.assertEqual(len(docs), 8)
        self.assertTrue(all("markdown" in item["content"] for item in docs))
        self.assertEqual(len([item for item in lessons if item["type"] == "video"]), 3)

    def test_quiz_slots_are_disabled_and_answer_free(self):
        for item in self.lessons():
            if item["type"] != "quiz":
                continue
            self.assertFalse(item["default_enabled"])
            self.assertFalse(item["content"]["bank_ready"])
            self.assertNotIn("questions", item["content"])
            self.assertEqual(item["completion_rule"]["kind"], "quiz_pass")

    def test_each_practice_follows_its_group_quiz(self):
        ids = [item["id"] for item in self.lessons()]
        self.assertLess(ids.index("Lab1-02_Control_Multiple_LEDs"), ids.index("quiz-1-4"))
        self.assertLess(ids.index("Lab1-04_LED_Button"), ids.index("quiz-1-6"))
        self.assertLess(ids.index("Lab1-10_Web_Server_LED"), ids.index("quiz-1-13"))


if __name__ == "__main__":
    unittest.main()
