const express = require("express");
const router = express.Router();
const Theme = require("../models/Theme");

// Route to fetch all themes
router.get("/themes", async (req, res) => {
  try {
    const themes = await Theme.find();
    res.json(themes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
