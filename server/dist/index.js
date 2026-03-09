"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const foodRoutes_1 = require("./routes/foodRoutes");
const foodData_1 = require("./data/foodData");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});
app.use("/api/foods", foodRoutes_1.foodRoutes);
app.get("/", (req, res) => {
    res.status(200).json(foodData_1.foodData);
});
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
    });
});
app.listen(PORT, () => {
    console.log(`🍔 FoodZone Server is running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`🔗 API Documentation: http://localhost:${PORT}/api/foods`);
});
//# sourceMappingURL=index.js.map