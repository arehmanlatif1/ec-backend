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
        id: products.length + 1,
        title,
        price,
        description,
        category,
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