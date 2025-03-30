const express = require("express");
const router = express.Router();

const themesAdminRoutes = require("./themeRoutes");
const coursesAdminRoutes = require("./courseRoutes");
const lessonsAdminRoutes = require("./lessonRoutes");

router.get("/", function (req, res) {
  res.json({ message: "Bienvenue sur l'API de Knowledge Learning !" });
});

router.use("/admin/themes", themesAdminRoutes);
router.use("/admin/courses", coursesAdminRoutes);
router.use("/admin/lessons", lessonsAdminRoutes);

module.exports = router;
