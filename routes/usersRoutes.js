const express = require("express");
const router = express.Router();
const usersAdminController = require("../controllers/admin/usersAdmin");

router.post("/create-user", usersAdminController.createUser);
router.put("/update-user", usersAdminController.updateUser);
router.delete("/delete-user", usersAdminController.deleteUser);

module.exports = router;
