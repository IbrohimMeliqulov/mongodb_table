import { Router } from "express";
import { districtController } from "../controllers/districts.controller.js";


const districtsRouter=Router()

districtsRouter.get("/",districtController.getAllDistricts)
districtsRouter.post("/",districtController.create)
districtsRouter.put("/:id",districtController.update)
districtsRouter.delete("/:id",districtController.delete)


export default districtsRouter