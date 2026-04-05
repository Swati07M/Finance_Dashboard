// src/routes/recordRoutes.js
import express from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

import { verifyToken } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roles.js";

const router = express.Router();

router.post("/", verifyToken, allowRoles("admin"), createRecord);
router.get("/", verifyToken, allowRoles("viewer","analyst","admin"), getRecords);
router.put("/:id", verifyToken, allowRoles("admin"), updateRecord);
router.delete("/:id", verifyToken, allowRoles("admin"), deleteRecord);

export default router;