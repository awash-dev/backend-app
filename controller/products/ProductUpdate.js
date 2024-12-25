const ProductModel = require("../../model/ProductModel");

// Product Update Controller
const updateProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
  const { name, description, price, category, stock } = req.body; // Destructure the updated fields
  const image = req.file ? req.file.path : null; // Get the image path if a new image is uploaded

  try {
    // Find the product by ID and update it
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      { name, description, price, category, stock, image },
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    // Check if the product was found and updated
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { updateProduct };
