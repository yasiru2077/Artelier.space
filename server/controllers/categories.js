import { db } from "../connect.js";
import util from "util";

const query = util.promisify(db.query).bind(db);

export const addCategories = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "category name is required" });
    }

    const q = "insert into categories (name, description) values (?,?)";

    const values = [name, description || null];

    const data = await query(q, values);

    return res.status(201).json({
      message: "category added successfully",
      artist_id: data.insertId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const q = "select * from categories";

    const data = await query(q);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

export const editCategories = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const checkData = await query(
      "select * from categories where category_id=?",
      [id]
    );

    if (checkData.length === 0) {
      return res.status(404).json({ error: "categories not found" });
    }

    const updateQ =
      "update categories set name=?, description=? where category_id =?";

    const values = [name, description || null];

    const data = await query(updateQ, values);

    return res.status(200).json({
      message: "categories updated successfully",
      affected: data.affectedRows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if artist exists
    const checkData = await query(
      "SELECT * FROM categories WHERE category_id = ?",
      [id]
    );

    if (checkData.length === 0) {
      return res.status(404).json({ error: "Artist not found" });
    }

    // Delete artist
    const deleteQuery = "DELETE FROM categories WHERE category_id = ?";
    const data = await query(deleteQuery, [id]);

    return res.status(200).json({
      message: "Artist deleted successfully",
      affected: data.affectedRows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
