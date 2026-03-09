import express, { Request, Response, NextFunction } from "express";
import { foodData } from "../data/foodData";

export const foodRoutes = express.Router();

/**
 * GET /api/foods
 * Get all food items
 */
foodRoutes.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data: foodData,
      message: "Food items fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching food items",
    });
  }
});

/**
 * GET /api/foods/:id
 * Get a specific food item by ID
 */
foodRoutes.get("/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const food = foodData.find((f) => f.id === parseInt(id));

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: food,
      message: "Food item fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching food item",
    });
  }
});

/**
 * GET /api/foods/type/:type
 * Get food items by type (breakfast, lunch, dinner)
 */
foodRoutes.get("/type/:type", (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const filteredFood = foodData.filter(
      (f) => f.type.toLowerCase() === type.toLowerCase()
    );

    res.status(200).json({
      success: true,
      data: filteredFood,
      message: `${type} items fetched successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching food items by type",
    });
  }
});
