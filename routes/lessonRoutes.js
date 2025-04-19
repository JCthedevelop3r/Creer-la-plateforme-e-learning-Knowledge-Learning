const express = require("express");
const router = express.Router();
const lessonsAdminController = require("../controllers/admin/lessonsAdmin");

router.post("/create-lesson", lessonsAdminController.createLesson);
router.get("/get-all-lessons", lessonsAdminController.getAllLessons);
router.get("/get-lesson-by-id/:lessonId", lessonsAdminController.getLessonById);
router.put("/update-lesson/:lessonId", lessonsAdminController.updateLesson);
router.delete("/delete-lesson/:lessonId", lessonsAdminController.deleteLesson);

module.exports = router;
