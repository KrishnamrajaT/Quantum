const vendor = require("../models/Vendor");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");

const VendorRegistration = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const vendorEmail = await vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("Email already taken");
    }
    const hasshedPass = await bcrypt.hash(password, 10);
    const newVendor = new vendor({
      username,
      email,
      password: hasshedPass,
    });
    await newVendor.save();
    res.status(201).json({ message: "Vendor Registered Succesfully" });
    console.log("registered");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const VendorLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const vendorDetails = await vendor.findOne({ email });
    if (!vendorDetails || !(await bcrypt.compare(password, vendorDetails.password))) {
      return res.status(401).json("User invalid");
    }
    res.status(201).json({ message: "Login Succesfully" });
    console.log("Login Succesfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
  console.log('Plaintext password:',password);
console.log('Hashed password:', vendor.password);
};

module.exports = { VendorRegistration, VendorLogin };
