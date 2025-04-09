import express, { Router } from "express";
import { verifyToken } from "../middleware.js";
import {
  addCategories,
  deleteCategories,
  editCategories,
  getCategories,
} from "../controllers/categories.js";

const router = express.Router();

router.post("/", verifyToken, addCategories);
router.get("/", verifyToken, getCategories);
router.put("/:id", verifyToken, editCategories);
router.delete("/:id", verifyToken, deleteCategories);

export default router;
