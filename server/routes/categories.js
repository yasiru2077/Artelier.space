import express, { Router } from "express";
import { verifyToken } from "../middleware.js";
import { addCategories } from "../controllers/categories.js";

const router = express.Router();

router.post("/", verifyToken, addCategories);

export default router;
