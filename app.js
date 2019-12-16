// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require MongoDB connection and Models
require("./config/db");

// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("OK");
});

app.get("/users", (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
});

app.get("/users/:userId", (req, res) => {
    User.findById(req.params.userId, (err, users) => {
        res.json(users);
    });
});

app.post("/users", (req, res) => {
    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    u.save().then(() => {
        res.json({
            message: "User created"
        });
    });
});

app.delete("/users/:userId", (req, res) => {
    User.deleteOne({_id: req.params.userId}, (err) => {
        res.json({
            message: "User Deleted"
        });
    });
});