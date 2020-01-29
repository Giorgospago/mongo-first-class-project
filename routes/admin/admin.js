const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});
route.use("/auth", require("./auth"));
route.use("/users", AdminAuth, require("./users"));
route.use("/products", AdminAuth, require("./products"));
route.use("/categories", AdminAuth, require("./categories"));

module.exports = route;