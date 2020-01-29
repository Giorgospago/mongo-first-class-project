const express = require("express");
const route = express.Router();

// Home Route
route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Home Page"
    });
});
route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

module.exports = route;