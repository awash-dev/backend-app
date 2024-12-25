const ProductModel = require("../../model/ProductModel");

// Product Delete Controller
const deleteProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters

  try {
    // Find and delete the product by ID
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    // Check if the product was found and deleted
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with a success message
    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { deleteProduct };
