import { db } from "../connect.js";
import util from "util";

const query = util.promisify(db.query).bind(db);

export const addArtist = async (req, res) => {
  try {
    const { name, biography, email, website } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Artist name is required" });
    }

    const insertQuery =
      "INSERT INTO artists (name, biography, email, website) VALUES (?, ?, ?, ?)";
    const values = [name, biography || null, email || null, website || null];

    const data = await query(insertQuery, values);

    return res.status(201).json({
      message: "Artist added successfully",
      artist_id: data.insertId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getArtist = async (req, res) => {
  try {
    const { id } = req.params;

    const selectQuery = "SELECT * FROM artists WHERE artist_id = ?";
    const data = await query(selectQuery, [id]);

    if (data.length === 0) {
      return res.status(404).json({ error: "Artist not found" });
    }

    return res.status(200).json(data[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getArtists = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM artists";
    const data = await query(selectQuery);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const editArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, biography, email, website } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Artist name is required" });
    }

    // Check if artist exists
    const checkData = await query("SELECT * FROM artists WHERE artist_id = ?", [
      id,
    ]);

    if (checkData.length === 0) {
      return res.status(404).json({ error: "Artist not found" });
    }

    // Update artist
    const updateQuery =
      "UPDATE artists SET name = ?, biography = ?, email = ?, website = ? WHERE artist_id = ?";
    const values = [
      name,
      biography || null,
      email || null,
      website || null,
      id,
    ];

    const data = await query(updateQuery, values);

    return res.status(200).json({
      message: "Artist updated successfully",
      affected: data.affectedRows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if artist exists
    const checkData = await query("SELECT * FROM artists WHERE artist_id = ?", [
      id,
    ]);

    if (checkData.length === 0) {
      return res.status(404).json({ error: "Artist not found" });
    }

    // Delete artist
    const deleteQuery = "DELETE FROM artists WHERE artist_id = ?";
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
