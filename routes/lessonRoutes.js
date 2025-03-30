const express = require("express");
const router = express.Router();
const lessonsAdminController = require("../controllers/admin/lessonsAdmin");

router.post("/create-lesson", lessonsAdminController.createLesson);
router.put("/update-lesson", lessonsAdminController.updateLesson);
router.delete("/delete-lesson", lessonsAdminController.deleteLesson);

router.get("/:lessonId", lessonsAdminController.getLessonById);

module.exports = router;
