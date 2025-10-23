import { Router } from "express";
import customerRouter from "./customers.routes.js";
import water_productsRouter from "./water_products.routes.js";
import addressRouter from "./address.routes.js";
import districtsRouter from "./districts.routes.js";
import ordersRouter from "./orders.routes.js";
import delivery_staffRouter from "./delivery_staff.routes.js";

const MainRouter = Router();

MainRouter.use("/customers", customerRouter);
MainRouter.use("/water_products", water_productsRouter);
MainRouter.use("/address", addressRouter);
MainRouter.use("/districts",districtsRouter)
MainRouter.use("/orders",ordersRouter)
MainRouter.use("/delivery_staff",delivery_staffRouter)

export default MainRouter;
