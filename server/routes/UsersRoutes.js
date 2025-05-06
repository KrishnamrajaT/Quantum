const userController = require("../controllers/UserController");
const express = require("express");

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/", userController.getAllUsers);
router.get("/getById/:id", userController.getUserById);
router.put("/update/:id", userController.editUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;