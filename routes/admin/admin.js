const express = require("express");
const route = express.Router();
const AdminAuth = require("../../middlewares/adminAuth");
const StatsController = require("../../controllers/StatsController");

route.get("/", AdminAuth, (req, res) => {
    res.json({
        success: true,
        message: "Admin Area"
    });
});
route.get("/stats", AdminAuth, StatsController.dashboardStats);
route.use("/auth", require("./auth"));
route.use("/users", AdminAuth, require("./users"));
route.use("/products", AdminAuth, require("./products"));
route.use("/categories", AdminAuth, require("./categories"));

module.exports = route;