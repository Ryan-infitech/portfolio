const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// POST /api/contact - Submit contact form
router.post("/contact", contactController.sendEmail);

module.exports = router;
