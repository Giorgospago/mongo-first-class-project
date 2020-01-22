const express = require("express");
const route = express.Router();

// Home Route
route.get("/", (req, res) => {
    res.send("OK");
});
route.use("/admin", require("./admin/admin"));
route.use("/client", require("./client/client"));

module.exports = route;