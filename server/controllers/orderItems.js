import { db } from "../connect.js";
import util from "util";

const query = util.promisify(db.query).bind(db);

// CREATE Order Item
export const createOrderItem = async (req, res) => {
  try {
    const { order_id, artwork_id, quantity, price } = req.body;

    const q = `INSERT INTO order_items 
      (order_id, artwork_id, quantity, price)
      VALUES (?, ?, ?, ?)`;

    const values = [
      order_id,
      artwork_id,
      quantity || 1,
      price,
    ];

    await query(q, values);
    res.status(201).json("Order item created successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error creating order item.");
  }
};

// GET Single Order Item
export const getOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM order_items WHERE order_item_id = ?", [id]);

    if (result.length === 0) return res.status(404).json("Order item not found.");
    res.status(200).json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving order item.");
  }
};

// GET All Order Items
export const getOrderItems = async (req, res) => {
  try {
    const result = await query("SELECT * FROM order_items");
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving order items.");
  }
};

// GET Order Items by Order ID
export const getOrderItemsByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await query("SELECT * FROM order_items WHERE order_id = ?", [orderId]);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving order items.");
  }
};

// UPDATE Order Item
export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { artwork_id, quantity, price } = req.body;

    const q = `UPDATE order_items 
      SET artwork_id = ?, quantity = ?, price = ?
      WHERE order_item_id = ?`;

    const values = [artwork_id, quantity, price, id];

    await query(q, values);
    res.status(200).json("Order item updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error updating order item.");
  }
};

// DELETE Order Item
export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    await query("DELETE FROM order_items WHERE order_item_id = ?", [id]);
    res.status(200).json("Order item deleted successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error deleting order item.");
  }
};
