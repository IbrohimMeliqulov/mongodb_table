import { Router } from "express";
import { districtController } from "../controllers/districts.controller.js";


const districtRouter=Router()

districtRouter.get("/",districtController.getAllDistricts)
districtRouter.post("/",districtController.create)
districtRouter.put("/:id",districtController.update)
districtRouter.delete("/:id",districtController.delete)


export default districtRouter