import { Router } from "express";
import customerRouter from "./customers.routes.js";
import water_productsRouter from "./water_products.routes.js";
import districtRouter from "./disctricts.routes.js";

const MainRouter = Router();

MainRouter.use("/customer", customerRouter);
MainRouter.use("/water_products", water_productsRouter);
MainRouter.use("/districts", districtRouter);

export default MainRouter;
