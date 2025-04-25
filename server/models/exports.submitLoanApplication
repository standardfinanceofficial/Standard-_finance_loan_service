const Loan = require("../models/Loan");

exports.submitLoanApplication = async (req, res) => {
  try {
    const application = new Loan(req.body);
    await application.save();
    res.status(200).json({ message: "Application submitted" });
  } catch (error) {
    res.status(500).json({ error: "Error saving application" });
  }
};
