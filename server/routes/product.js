const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
} = require("../controllers/productController");
const { authenticateToken, requireAdmin } = require("../middlewear/auth");

// Public routes
router.get("/", getProducts);
router.get("/categories", getCategories);
router.get("/:id", getProduct);

// Admin only routes
router.post("/", authenticateToken, requireAdmin, createProduct);
router.put("/:id", authenticateToken, requireAdmin, updateProduct);
router.delete("/:id", authenticateToken, requireAdmin, deleteProduct);

module.exports = router;
