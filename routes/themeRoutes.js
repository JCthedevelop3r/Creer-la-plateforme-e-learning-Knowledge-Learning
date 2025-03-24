const express = require("express");
const router = express.Router();
const themesAdminController = require("../controllers/admin/themesAdmin");

router.post("/create-theme", themesAdminController.createTheme);
router.put("/update-theme", themesAdminController.updateTheme);
router.delete("/delete-theme", themesAdminController.deleteTheme);

module.exports = router;
