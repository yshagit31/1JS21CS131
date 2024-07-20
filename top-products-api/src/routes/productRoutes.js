const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for fetching products
router.get('/companies/:companyName/categories/:category/products', productController.getProducts);

module.exports = router;
