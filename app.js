// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require MongoDB connection and Models
require("./config/db");
require("./config/mail");

// Initialize my Express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import Application Routes
app.use(require("./routes/base"));