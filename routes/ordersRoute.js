import * as controller from "../controllers/orders.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getOrders);
router.get("/:id", controller.getOrderById);
router.get("/user/:id", controller.getOrderByUser);
router.post("/", controller.createOrder);
router.delete("/:id", controller.deleteOrderById);

export default router;

// import express from "express";
// import {
//   getOrders,
//   getOrder,
//   createOrder,
//   updateOrder,
//   deleteOrder,
// } from "../controllers/orders.js";

// const router = express.Router();

// router.get("/", getOrders); // Get all orders
// router.get("/:id", getOrder); // Get a single order by ID
// router.post("/", createOrder); // Create a new order
// router.put("/:id", updateOrder); // Update an order by ID
// router.delete("/:id", deleteOrder); // Delete an order by ID

// export default router;
