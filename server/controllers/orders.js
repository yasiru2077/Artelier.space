import { db } from "../connect.js";
import util from "util";

const query = util.promisify(db.query).bind(db);

// CREATE Order
export const createOrder = async (req, res) => {
  try {
    const {
      user_id,
      total_amount,
      status,
      shipping_address,
      billing_address,
      payment_method,
    } = req.body;

    const q = `INSERT INTO orders 
      (user_id, total_amount, status, shipping_address, billing_address, payment_method)
      VALUES (?, ?, ?, ?, ?, ?)`;

    const values = [
      user_id,
      total_amount,
      status || 'pending',
      shipping_address,
      billing_address,
      payment_method,
    ];

    await query(q, values);
    res.status(201).json("Order created successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error creating order.");
  }
};

// GET Single Order
export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query("SELECT * FROM orders WHERE order_id = ?", [id]);

    if (result.length === 0) return res.status(404).json("Order not found.");
    res.status(200).json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving order.");
  }
};

// GET All Orders
export const getOrders = async (req, res) => {
  try {
    const result = await query("SELECT * FROM orders");
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error retrieving orders.");
  }
};

// UPDATE Order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      user_id,
      total_amount,
      status,
      shipping_address,
      billing_address,
      payment_method,
    } = req.body;

    const q = `UPDATE orders 
      SET user_id = ?, total_amount = ?, status = ?, shipping_address = ?, billing_address = ?, payment_method = ?
      WHERE order_id = ?`;

    const values = [
      user_id,
      total_amount,
      status,
      shipping_address,
      billing_address,
      payment_method,
      id,
    ];

    await query(q, values);
    res.status(200).json("Order updated successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error updating order.");
  }
};

// DELETE Order
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await query("DELETE FROM orders WHERE order_id = ?", [id]);
    res.status(200).json("Order deleted successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error deleting order.");
  }
};
