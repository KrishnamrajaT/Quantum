const vendorController = require("../controllers/VendorController");
const express = require("express");

const router = express.Router();
router.post("/register", vendorController.VendorRegistration);
router.post("/login", vendorController.VendorLogin);
router.post("/verify-email", vendorController.VerifyEmail);
router.post("/reset-password", vendorController.ResetPass);



module.exports = router;
