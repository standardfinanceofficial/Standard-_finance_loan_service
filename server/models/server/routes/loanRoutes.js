const express = require("express");
const router = express.Router();
const { submitLoanApplication } = require("../controllers/loanController");

router.post("/apply", submitLoanApplication);

module.exports = router;
