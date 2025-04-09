import express from "express";
import {
  addArtWork,
  getArtWorks,
  getArtWork,
  editArtWork,
  deleteArtWork,
  upload,
} from "../controllers/artworks.js";

const router = express.Router();

router.post("/", upload.single("image"), addArtWork);         
router.get("/", getArtWorks);                                 
router.get("/:id", getArtWork);                               
router.put("/:id", upload.single("image"), editArtWork);      
router.delete("/:id", deleteArtWork);                        

export default router;
