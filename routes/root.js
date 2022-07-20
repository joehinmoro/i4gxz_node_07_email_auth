// IMPORTS
const express = require("express");

const router = express.Router();

// ROUTES
router.use((req, res) => {
    res.redirect("/mailer");
});

// EXPORTS
module.exports = router;
