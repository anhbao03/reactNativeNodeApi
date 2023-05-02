import express from "express";

import { getProductController, getProductByIdController, addProductController, updateProductController, deleteProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/getproducts", getProductController);

productRouter.get("/getproductbyid/:id", getProductByIdController);

productRouter.post("/addproducts", addProductController);

productRouter.put("/updateproducts", updateProductController);

productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;
