const express = require("express");
const route = express.Router();
const AuthController = require("../../controllers/AuthController");
const AuthValidator = require("../../validators/AuthValidator");
const AdminAuth = require("../../middlewares/adminAuth");

route.post("/login", AuthValidator.login, AuthController.adminLogin);
route.get("/check", AdminAuth, AuthController.checkToken);

module.exports = route;