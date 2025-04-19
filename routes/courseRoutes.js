const express = require("express");
const router = express.Router();
const coursesAdminController = require("../controllers/admin/coursesAdmin");

router.post("/create-course", coursesAdminController.createCourse);
router.put("/update-course", coursesAdminController.updateCourse);
router.delete("/delete-course", coursesAdminController.deleteCourse);
router.get("/get-all-courses", coursesAdminController.getAllCourses);

router.get("/:courseName", coursesAdminController.getCourseByName);

module.exports = router;
