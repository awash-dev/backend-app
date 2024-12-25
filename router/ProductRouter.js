// router/productRoutes.js
const express = require("express");
const { getProducts } = require("../controller/products/ProductList");
const { createProduct } = require("../controller/products/ProductPost");
const { deleteProduct } = require("../controller/products/ProductDelete");
const { updateProduct } = require("../controller/products/ProductUpdate");
const productController = require("../controller/products/productIdController");
const upload = require("../config/multerconfig");
const router = express.Router();

// Product list route
router.get("/list", getProducts);

// Product create route with Multer middleware for image upload
router.post("/post", upload.single("image"), createProduct);

// Product delete route
router.delete("/delete/:id", deleteProduct);

// Product update route with Multer middleware for image upload
router.put("/update/:id", upload.single("image"), updateProduct);

// Route to get a product by ID
router.get("/list/:id", productController.getProductById);

module.exports = router;
