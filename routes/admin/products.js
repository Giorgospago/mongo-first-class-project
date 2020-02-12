const express = require("express");
const ProductsController = require("../../controllers/ProductsController");
const route = express.Router();

route.get("/", ProductsController.list);
route.post("/cart", ProductsController.listCart);
route.get("/:productId", ProductsController.getOne);
route.post("/", upload.single("photo"), ProductsController.create);
route.delete("/:productId", ProductsController.deleteProduct);
route.put("/:productId", ProductsController.update);
route.get("/category/:categoryId", ProductsController.listByCategory);

module.exports = route;
