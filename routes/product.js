import express from "express";

import {
  getProductDetails,
  getAllProducts,
  createProduct,
  updateProduct,
  addProductImage,
  deleteProductImage,
  deleteProduct,
  addCategory,
  deleteCategory,
  getAllCategories,
  getAdminProducts,
} from "../controllers/product.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// product

router.get("/all", getAllProducts);
router.get("/admin",isAuthenticated, isAdmin, getAdminProducts);
router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct);

router.post("/new", isAuthenticated, isAdmin, singleUpload, createProduct);

router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage);

// category
router.post("/category", isAuthenticated, isAdmin, addCategory);
router.get("/categories", getAllCategories);
router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);

export default router;
