import express from "express";
import { addProduct, deleteProduct, filterByPrice, filterByRating, getAllProducts, getFeaturedProducts, getProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get('/', getAllProducts);

// GET PRODUCT
router.get('/:id', getProduct);

// CREATE PRODUCT
router.post('/', addProduct);

// UPDATE PRODUCT
router.put('/:id', updateProduct);

// DELETE PRODUCT
router.delete('/:id', deleteProduct);

// GET FEATURED PRODUCTS
router.get('/featured', getFeaturedProducts);

// PRICE FILTER
router.post('/price-filter', filterByPrice);

// RATING FILTER
router.post('rating-filter', filterByRating);

export default router;