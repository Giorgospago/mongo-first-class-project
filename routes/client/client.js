const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");

route.use("/auth", require("./auth"));
route.get("/categories", CategoriesController.list);
route.get("/categories/:categoryId", CategoriesController.getProductsByCategory);

module.exports = route;