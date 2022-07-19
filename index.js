// IMPORTS
const express = require("express");

// APP AND SETTINGS
const app = express();

// SERVER
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, host, () => {
    console.log(`Listening on host:${host} port:${port}`);
});
