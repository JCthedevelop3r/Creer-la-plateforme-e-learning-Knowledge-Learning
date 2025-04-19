const express = require("express");
const router = express.Router();
const themesAdminController = require("../controllers/admin/themesAdmin");

router.post("/create-theme", themesAdminController.createTheme);
router.get("/get-all-themes", themesAdminController.getAllThemes);
router.get("/get-theme-by-id/:id", themesAdminController.getThemeById);
router.put("/update-theme/:themeId", themesAdminController.updateTheme);
router.delete("/delete-theme/:themeId", themesAdminController.deleteTheme);

router.get("/:themeName", themesAdminController.getThemeByName);

module.exports = router;
