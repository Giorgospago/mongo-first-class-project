const express = require("express");
const route = express.Router();
const CategoriesController = require("../../controllers/CategoriesController");

route.use("/auth", require("./auth"));
route.get("/categories", CategoriesController.list);

module.exports = route;