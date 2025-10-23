import { Router } from "express";
import { orderController } from "../controllers/orders.controller.js";


const ordersRouter=Router()

ordersRouter.get("/",orderController.getAllOrders)
ordersRouter.post("/",orderController.create)
ordersRouter.put("/:id",orderController.update)
ordersRouter.delete("/:id",orderController.delete)

export default ordersRouter