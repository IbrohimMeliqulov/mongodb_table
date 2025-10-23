import { Router } from "express";
import { addressController } from "../controllers/address.controller.js";

const addressRouter = Router();

addressRouter.get("/", addressController.getAllDistricts);
addressRouter.post("/", addressController.create);
addressRouter.put("/:id", addressController.update);
addressRouter.delete("/:id", addressController.delete);

export default addressRouter;
