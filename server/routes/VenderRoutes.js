const vendorController = require("../controllers/VendorController");
const express = require("express");

const router = express.Router();
router.post("/register", vendorController.VendorRegistration);
router.post("/login", vendorController.VendorLogin);

module.exports = router;
