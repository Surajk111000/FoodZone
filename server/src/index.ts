import express from "express";
import path from "path";
import cors from "cors";
import { foodRoutes } from "./routes/foodRoutes";
import { foodData } from "./data/foodData";

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// Static files for images
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/foods", foodRoutes);

// Legacy endpoint for backward compatibility
app.get("/", (req, res) => {
  res.status(200).json(foodData);
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🍔 FoodZone Server is running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 API Documentation: http://localhost:${PORT}/api/foods`);
});
