import express from "express";

import { getOrderController, addOrderController } from "../controllers/orderController.js";

const ordersRouter = express.Router();

ordersRouter.get("/getorders", getOrderController);

ordersRouter.post("/addorder", addOrderController);

export default ordersRouter;