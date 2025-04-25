import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", password: "", address: "",
    idFile: null, selfieFile: null,
    bankName: "", bankNumber: "", iban: "",
    income: "", amount: "", purpose: "", duration: "", repaymentMethod: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/apply", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json()).then(console.log);
  };

  return (
    <div>
      <h1>Loan Application (Step {step})</h1>
      {/* Show form inputs based on step here */}
    </div>
  );
}

export default App;
