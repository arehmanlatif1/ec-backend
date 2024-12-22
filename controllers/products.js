import fs from 'fs';
import path from 'path';

// Dynamically load JSON file with import assertion
const products = JSON.parse(fs.readFileSync(path.resolve('json/items.json'), 'utf-8'));

// Get all products
export const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Get a single product by ID
export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
};

// Create a new product
export const createProduct = (req, res) => {
    const { title, price, description, category, image, rating } = req.body;
    const newProduct = {
        id: products.length + 1, // Generate a simple ID
        title,
        price,
        description,
        category,
        image,
        rating,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Update an existing product by ID
export const updateProductById = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const updatedProduct = { ...products[productIndex], ...req.body };
    products[productIndex] = updatedProduct;
    res.status(200).json(updatedProduct);
};

// Delete a product by ID
export const deleteProductById = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products.splice(productIndex, 1);
    res.status(200).json({ message: 'Product deleted successfully' });
};



// import products from '../json/items.json';

// // Get all products
// export const getAllProducts = (req, res) => {
//     res.status(200).json(products);
// };

// // Get a single product by ID
// export const getProductById = (req, res) => {
//     const { id } = req.params;
//     const product = products.find(product => product.id === parseInt(id));
//     if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json(product);
// };

// // Create a new product
// export const createProduct = (req, res) => {
//     const { title, price, description, category, image, rating } = req.body;
//     const newProduct = {
//         id: products.length + 1, // Generate a simple ID
//         title,
//         price,
//         description,
//         category,
//         image,
//         rating,
//     };
//     products.push(newProduct);
//     res.status(201).json(newProduct);
// };

// // Update an existing product by ID
// export const updateProductById = (req, res) => {
//     const { id } = req.params;
//     const productIndex = products.findIndex(product => product.id === parseInt(id));
//     if (productIndex === -1) {
//         return res.status(404).json({ message: 'Product not found' });
//     }

//     const updatedProduct = { ...products[productIndex], ...req.body };
//     products[productIndex] = updatedProduct;
//     res.status(200).json(updatedProduct);
// };

// // Delete a product by ID
// export const deleteProductById = (req, res) => {
//     const { id } = req.params;
//     const productIndex = products.findIndex(product => product.id === parseInt(id));
//     if (productIndex === -1) {
//         return res.status(404).json({ message: 'Product not found' });
//     }
//     products.splice(productIndex, 1);
//     res.status(200).json({ message: 'Product deleted successfully' });
// };





// import productData from "../models/Product.js";

// // Gets all products
// export const getProducts = async (req, res) => {
//   try {
//     const products = await productData.find();
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets singular product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const product = await productData.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Invalid Product ID" });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets all white products
// export const getProductByWhite = async (req, res) => {
//   try {
//     const product = await productData.find({ ProductType: "White Wine" });
//     if (!product) {
//       return res.status(404).json({ message: "No white products found." });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets all red products
// export const getProductByRed = async (req, res) => {
//   try {
//     const product = await productData.find({ ProductType: "Red Wine" });
//     if (!product) {
//       return res.status(404).json({ message: "No red products found." });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets all rosé products
// export const getProductByRose = async (req, res) => {
//   try {
//     const product = await productData.find({ ProductType: "Rosé Wine" });
//     if (!product) {
//       return res.status(404).json({ message: "No rosé products found." });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets all sparkling products, note VARIETAL TYPE vs. PRODUCT TYPE
// export const getProductById = async (req, res) => {
//   try {
//     const product = await productData.find({
//       VarietalType: "Sparkling",
//     });
//     if (!product) {
//       return res.status(404).json({ message: "No sparkling products found." });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Gets all products by country
// export const getProductByCountryState = async (req, res) => {
//   try {
//     const { country } = req.params;
//     const product = await productData.find({ CountryState: country });
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: "No products from that country found." });
//     }
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };




// import Product from "../models/Product.js";

// // Get all products
// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a single product by ID
// export const getProductById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (product) {
//       return res.json(product);
//     } else {
//       return res.status(404).json({ error: "Product not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create a new product
// export const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, image } = req.body;

//     // Ensure all required fields are present
//     if (!name || !description || !price || !category) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Create a new product
//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       category,
//       image,
//     });

//     // Save the new product to the database
//     await newProduct.save();

//     // Return the created product
//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update an existing product
// export const updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
//     if (updatedProduct) {
//       res.status(200).json(updatedProduct);
//     } else {
//       res.status(404).json({ error: "Product not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     if (deletedProduct) {
//       res.status(200).json({ message: "Product deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Product not found" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };
