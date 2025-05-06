const vendor = require("../models/Vendor");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");

const VendorRegistration = async (req, res) => {
  const { userName, mobile, email, password } = req.body;

  try {
    const vendorEmail = await vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("Already registered please login");
    }
    const hasshedPass = await bcrypt.hash(password, 10);
    const newVendor = new vendor({
      userName,
      mobile,
      email,
      password: hasshedPass,
    });
    await newVendor.save();
    res.status(201).json({ message: "Client Registered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const VendorLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const vendorDetails = await vendor.findOne({ email });
    if (
      !vendorDetails ||
      !(await bcrypt.compare(password, vendorDetails.password))
    ) {
      return res.status(401).json("Invalid credentials");
    }

    const token = jsonWebToken.sign(
      { id: vendorDetails._id, email: vendorDetails.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { VendorRegistration, VendorLogin };
