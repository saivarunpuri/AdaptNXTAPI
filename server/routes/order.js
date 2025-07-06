const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrder,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const {
  authenticateToken,
  requireAdmin,
  requireCustomer,
} = require("../middlewear/auth");

// Customer routes
router.post("/", authenticateToken, requireCustomer, createOrder);
router.get("/my-orders", authenticateToken, requireCustomer, getUserOrders);
router.get("/my-orders/:id", authenticateToken, requireCustomer, getOrder);

// Admin routes - more specific routes first
router.put("/:id/status", authenticateToken, requireAdmin, updateOrderStatus);
router.get("/", authenticateToken, requireAdmin, getAllOrders);
router.get("/:id", authenticateToken, requireAdmin, getOrder);

module.exports = router;
