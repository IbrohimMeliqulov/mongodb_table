import { Router } from "express";
import { customerController } from "../controllers/customers.controller.js";


const customerRouter=Router()

customerRouter.get("/",customerController.getAllCustomers)
customerRouter.post("/",customerController.create)
customerRouter.put("/:id",customerController.update)
customerRouter.delete("/:id",customerController.delete)

export default customerRouter