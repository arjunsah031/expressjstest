// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productroutes');

// Initialize the Express app
const app = express();
app.use(bodyParser.json());

// Log the environment variables for debugging
console.log('MONGODB_URI:', process.env.MONGODB_URI);  // This should log the MongoDB URI

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use the product routes
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app;
