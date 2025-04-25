const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  fullName: String, email: String, phone: String, password: String, address: String,
  idFile: String, selfieFile: String,
  bankName: String, bankNumber: String, iban: String,
  income: String, amount: String, purpose: String, duration: String, repaymentMethod: String,
  acceptedTerms: Boolean,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Loan", LoanSchema);
