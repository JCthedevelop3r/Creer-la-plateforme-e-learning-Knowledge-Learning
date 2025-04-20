const express = require("express");
const router = express.Router();
const coursesAdminController = require("../controllers/admin/coursesAdmin");

router.post("/create-course", coursesAdminController.createCourse);
router.get("/get-all-courses", coursesAdminController.getAllCourses);
router.get("/get-course-by-id/:courseId", coursesAdminController.getCourseById);
router.put("/update-course/:courseId", coursesAdminController.updateCourse);
router.delete("/delete-course/:courseId", coursesAdminController.deleteCourse);

router.get("/:courseName", coursesAdminController.getCourseByName);

module.exports = router;
