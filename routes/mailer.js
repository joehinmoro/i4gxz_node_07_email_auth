// IMPORTS
const express = require("express");
const { newMailController, createMailController, _404Controller } = require("../controllers/index");

const router = express.Router();

// ROUTES
// 1. NEW route (GET)
router.get("/", newMailController);

// 2. CREATE route (POST)
router.post("/", createMailController);

// 3. 404 Route
router.use(_404Controller);

// EXPORTS
module.exports = router;
