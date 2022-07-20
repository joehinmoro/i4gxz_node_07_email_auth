// IMPORTS
const { join } = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const { methodOverride } = require("./utils");
const mailerRoute = require("./routes/mailer");
require("dotenv").config();

// APP AND SETTINGS
// instantiate app
const app = express();
// set view engine
app.set("view engine", "ejs");
// set views folder
app.set("views", join(__dirname, "views/"));

// GENERAL MIDDLEWARE
// parse form data in req body
app.use(express.urlencoded({ extended: true }));
// parse json in req body
app.use(express.json());
// override posty request to appropriate method
app.use(methodOverride);

// ROUTES
app.use("/mailer", mailerRoute);

// SERVER
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, host, () => {
    console.log(`Listening on host:${host} port:${port}`);
});
