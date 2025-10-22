import { Router } from "express";
import { water_productsController } from "../controllers/water_products.controller.js";

const water_productsRouter = Router();

water_productsRouter.get("/", water_productsController.getAllProducts);
water_productsRouter.post("/", water_productsController.create);
water_productsRouter.put("/:id", water_productsController.update);
water_productsRouter.delete("/:id", water_productsController.delete);

export default water_productsRouter;
