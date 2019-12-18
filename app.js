// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require MongoDB connection and Models
require("./config/db");

// Require Controllers
const UsersController = require("./controllers/UsersController");

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
