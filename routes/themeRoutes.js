const express = require("express");
const router = express.Router();
const Theme = require("../models/Theme");
const themesAdminController = require("../services/themesService");

// Route to create a theme
router.post("/create-theme", themesAdminController.createTheme);
router.post("/update-theme", themesAdminController.updateTheme);

module.exports = router;
