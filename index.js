// IMPORTS
const { join } = require("path");
const express = require("express");
const { mailerRoute, rootRoute, _404Route } = require("./routes");
require("dotenv").config();

// APP AND SETTINGS
// instantiate app
const app = express();
// set view engine
app.set("view engine", "ejs");
// set views folder
app.set("views", join(__dirname, "views/"));

// GENERAL MIDDLEWARE
// serve static files (public)
app.use(express.static(join(__dirname, "public")));
// parse form data in req body
app.use(express.urlencoded({ extended: true }));
// parse json in req body
app.use(express.json());

// ROUTES
// mailer route (main)
app.use("/mailer", mailerRoute);
// root route (redirects to /mailer)
app.all("/", rootRoute);
// general 404 route
app.use(_404Route);

// SERVER
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, host, () => {
    console.log(`Listening on host:${host} port:${port}`);
});
