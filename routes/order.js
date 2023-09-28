import express from "express";
import {
  createOrder,
  getAdminOrders,
  getMYOrders,
  getOrderDetails,
  processOrder,
  processPayment,
} from "../controllers/order.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.get("/my", isAuthenticated, getMYOrders);
router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, isAdmin, processOrder);

router.get("/admin", isAuthenticated, isAdmin, getAdminOrders)

// payment 
router.post("/payment", isAuthenticated, processPayment)

export default router;
