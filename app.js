// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require MongoDB connection and Models
require("./config/db");

// Require Controllers
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");

// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.send("OK");
});

// User Routes
app.get("/users", UsersController.list);
app.get("/users/:userId", UsersController.getOne);
app.post("/users", UsersController.create);
app.delete("/users/:userId", UsersController.deleteUser);
app.put("/users/:userId", UsersController.update);

// Product Routes
app.get("/products", ProductsController.list);
app.post("/products/cart", ProductsController.listCart);
app.get("/products/:productId", ProductsController.getOne);
app.post("/products", ProductsController.create);
app.delete("/products/:productId", ProductsController.deleteProduct);
app.put("/products/:productId", ProductsController.update);
app.get("/products/category/:categoryId", ProductsController.listByCategory);

// Category Routes
app.get("/categories", CategoriesController.list);
app.get("/categories/:categoryId", CategoriesController.getOne);
app.post("/categories", CategoriesController.create);
app.delete("/categories/:categoryId", CategoriesController.deleteCategory);
app.put("/categories/:categoryId", CategoriesController.update);

