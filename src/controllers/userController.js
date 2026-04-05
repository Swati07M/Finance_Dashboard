// src/controllers/user.controller.js
import User from "../models/User.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json({
      success: true,
      count: users.length,
      users
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE ROLE
export const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    );

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ACTIVATE / DEACTIVATE USER
export const toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    user.isActive = !user.isActive;
    await user.save();

    res.json({
      success: true,
      message: `User is now ${user.isActive ? "Active" : "Inactive"}`
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};