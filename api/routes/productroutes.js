const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontrollers');

// POST route to add a new product
router.post('/products', productController.createProduct);

module.exports = router;
