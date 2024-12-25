// controllers/ProductPostController.js
const ProductModel = require("../../model/ProductModel");

// Product Post Controller
const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.path : null; // Get the image path from the uploaded file

  try {
    // Create a new product instance
    const newProduct = new ProductModel({
      name,
      description,
      price,
      category,
      image,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Respond with the created product
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createProduct };
