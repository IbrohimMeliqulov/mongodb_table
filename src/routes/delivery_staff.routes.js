import { Router } from "express";
import { deliver_staffController } from "../controllers/delivery_staff.controller.js";

const delivery_staffRouter=Router()


delivery_staffRouter.get("/",deliver_staffController.getAllStaff)
delivery_staffRouter.post("/",deliver_staffController.create)
delivery_staffRouter.put("/:id",deliver_staffController.update)
delivery_staffRouter.delete("/:id",deliver_staffController.delete)

export default delivery_staffRouter