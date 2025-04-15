const express = require("express");
const router = express.Router();
const usersAdminController = require("../controllers/admin/usersAdmin");

router.post("/create-user", usersAdminController.createUser);
router.put("/update-user/:id", usersAdminController.updateUser);
router.delete("/delete-user/:id", usersAdminController.deleteUser);
router.get("/get-user-by-id/:id", usersAdminController.getUserById);

module.exports = router;
