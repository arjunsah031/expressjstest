const mongoose = require('mongoose');

// Define and export the Product model
module.exports = mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}));
