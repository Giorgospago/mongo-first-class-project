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

route.get("/email", async (req, res) => {

    await Mail.sendMail({
        from: "DEVELOBIRD <test@develobird.gr>",
        to: "giorgospago23@gmail.com",
        subject: "Test email subject",
        html: "<h1>PAOK OLE</h1>"
    });

    res.json({
        success: true,
        message: "email send"
    });
});

module.exports = route;