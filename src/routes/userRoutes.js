// src/routes/user.routes.js
import express from "express";
import {
  getAllUsers,
  updateUserRole,
  toggleUserStatus,
  deleteUser
} from "../controllers/userController.js";

import { verifyToken } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roles.js";

const router = express.Router();

// Admin Only Routes
router.get("/", verifyToken, allowRoles("admin"), getAllUsers);

router.put("/:id/role", verifyToken, allowRoles("admin"), updateUserRole);

router.patch("/:id/status", verifyToken, allowRoles("admin"), toggleUserStatus);

router.delete("/:id", verifyToken, allowRoles("admin"), deleteUser);

export default router;