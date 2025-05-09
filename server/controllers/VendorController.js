const vendor = require("../models/Vendor");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");


// Step 1: Verify email
const VerifyEmail= async (req, res) => {
  const { email } = req.body;
  try {
    const user = await vendor.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }
    res.status(200).json({ message: 'Email verified', email });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Step 2: Update password
const ResetPass= async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await vendor.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Server error' });
  }
}


const VendorRegistration = async (req, res) => {
  const { userName, mobile, email, password } = req.body;

  try {
    const vendorEmail = await vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("Email Already registered please login");
    }const vendorMobile = await vendor.findOne({ mobile });
    if (vendorMobile) {
      return res.status(400).json("Mobile number is already in use ");
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
    if (!vendorDetails || !(await bcrypt.compare(password, vendorDetails.password))) {
      return res.status(401).json("Invalid credentials");
    }

    // Convert Mongoose document to plain object and remove password
    const vendorWithoutPassword = vendorDetails.toObject();
    delete vendorWithoutPassword.password;

    const token = jsonWebToken.sign(
      { id: vendorDetails._id, email: vendorDetails.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      vendor: vendorWithoutPassword
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { VendorRegistration, VendorLogin, ResetPass,VerifyEmail };
