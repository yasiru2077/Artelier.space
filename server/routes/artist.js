import express from "express";
import { verifyToken } from "../middleware.js";
import {
  addArtist,
  deleteArtist,
  editArtist,
  getArtist,
  getArtists,
} from "../controllers/artist.js";

const router = express.Router();

router.post("/", verifyToken, addArtist);
router.get("/all", verifyToken, getArtists);
router.get("/:id", verifyToken, getArtist);
router.put("/:id", verifyToken, editArtist);
router.delete("/:id", verifyToken, deleteArtist);

export default router;
