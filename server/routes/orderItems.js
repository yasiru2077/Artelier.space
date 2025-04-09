import express from "express";
import {
  createOrderItem,
  getOrderItem,
  getOrderItems,
  getOrderItemsByOrderId,
  updateOrderItem,
  deleteOrderItem,
} from "../controllers/orderItems.js";

const router = express.Router();

router.post("/", createOrderItem);
router.get("/", getOrderItems);
router.get("/:id", getOrderItem);
router.get("/order/:orderId", getOrderItemsByOrderId); // get all items for one order
router.put("/:id", updateOrderItem);
router.delete("/:id", deleteOrderItem);

export default router;
