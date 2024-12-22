// import express from "express";
// const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/products.js');


// const router = express.Router();

// router.get("/", getAllProducts); // Get all products
// router.get("/:id", getProductById); // Get a single product by ID
// router.post("/", createProduct); // Create a new product
// router.put("/:id", updateProductById); // Update a product by ID
// router.delete("/:id", deleteProductById); // Delete a product by ID

// export default router;

import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.js';


const router = express.Router();
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;
