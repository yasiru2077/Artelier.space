import { db } from "../connect.js";
import multer from "multer";
import path from "path";
import util from "util";

const query = util.promisify(db.query).bind(db);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 169123123.jpg
  },
});

export const upload = multer({ storage: storage });

export const addArtWork = async (req, res) => {
  try {
    const {
      title,
      artist_id,
      category_id,
      description,
      price,
      dimensions,
      medium,
      year_created,
      in_stock,
      featured,
    } = req.body;

    const image_path = req.file ? req.file.path : null;

    const q = `INSERT INTO artworks 
        (title, artist_id, category_id, description, price, image_path, dimensions, medium, year_created, in_stock, featured) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      title,
      artist_id,
      category_id,
      description,
      price,
      image_path,
      dimensions,
      medium,
      year_created,
      in_stock === "true" || in_stock === true ? 1 : 0,
      featured === "true" || featured === true ? 1 : 0,
    ];

    await query(q, values);
    res.status(201).json("Artwork added successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error adding artwork.");
  }
};

// GET single artwork
export const getArtWork = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM artworks WHERE artwork_id = ?", [
      id,
    ]);

    if (result.length === 0) return res.status(404).json("Artwork not found.");
    res.status(200).json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving artwork.");
  }
};

// GET all artworks
export const getArtWorks = async (req, res) => {
  try {
    const result = await query("SELECT * FROM artworks");
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving artworks.");
  }
};

// EDIT artwork
export const editArtWork = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      artist_id,
      category_id,
      description,
      price,
      dimensions,
      medium,
      year_created,
      in_stock,
      featured,
    } = req.body;

    const image_path = req.file ? req.file.path : null;

    let q = `
        UPDATE artworks 
        SET title=?, artist_id=?, category_id=?, description=?, price=?, ${
          image_path ? "image_path=?, " : ""
        }dimensions=?, medium=?, year_created=?, in_stock=?, featured=?
        WHERE artwork_id=?`;

    let values = [
      title,
      artist_id,
      category_id,
      description,
      price,
      ...(image_path ? [image_path] : []),
      dimensions,
      medium,
      year_created,
      in_stock === "true" || in_stock === true ? 1 : 0,
      featured === "true" || featured === true ? 1 : 0,
      id,
    ];

    await query(q, values);
    res.status(200).json("Artwork updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error updating artwork.");
  }
};

// DELETE artwork
export const deleteArtWork = async (req, res) => {
  try {
    const { id } = req.params;
    await query("DELETE FROM artworks WHERE artwork_id = ?", [id]);
    res.status(200).json("Artwork deleted successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error deleting artwork.");
  }
};
