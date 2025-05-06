const User = require("../models/Users");
// const bcrypt = require("bcryptjs");
// const jsonWebToken = require("jsonwebtoken");

//Registre User
const registerUser = async (req, res) => {
  const { username, email, city } = req.body;

  try {
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(400).json("Email already taken");
    }
    const newUser = new User({
      username,
      email,
      city,
    });
    await newUser.save();
    res.status(201).json({ message: "user created Succesfully" });
    console.log("created");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Edit user
const editUser = async (req, res) => {
  try {
    const { username, email, city } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, city },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerUser, deleteUser, editUser, getUserById, getAllUsers };
