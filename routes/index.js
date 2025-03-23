const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/test", (req, res) => {
  res.json({ message: "Hello depuis Express !" });
});

module.exports = router;
