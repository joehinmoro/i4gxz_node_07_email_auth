// IMPORTS
const express = require("express");

const router = express.Router();

// ROUTES
router.use((req, res) => {
    res.render("mailer/_404", { title: "404 Not Found" });
});

// EXPORTS
module.exports = router;
