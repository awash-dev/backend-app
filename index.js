const ProductRoutes = require("./router/ProductRouter");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors"); // Import CORS middleware
const authRouter = require("./router/auth");
const connectDB = require("./config/db");
const path = require("path");
const morgan = require("morgan"); // For logging

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev")); // Logging middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register user routes
app.use("/api/users", authRouter);
// Product routes
app.use("/api/products", ProductRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
