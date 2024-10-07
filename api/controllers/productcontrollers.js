const Product = require('../models/products');

// Controller to handle adding a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, inStock } = req.body;

    // Create a new product instance
    const product = new Product({
      name,
      price,
      category,
      inStock,
    });

    // Save the product to the database
    await product.save();

    // Return a success response
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};
