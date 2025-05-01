export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>STANDARD FINANCE LOAN APPLICATION</h2>
      <form action="https://formspree.io/f/mkgrgnky" method="POST" encType="multipart/form-data">
        <h3>Applicant Details</h3>
        <label>Full Name:</label><br /><input type="text" name="full_name" required /><br /><br />
        <label>Date of Birth:</label><br /><input type="date" name="dob" required /><br /><br />
        <label>Gender:</label><br />
        <select name="gender" required>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select><br /><br />
        <label>Marital Status:</label><br /><input type="text" name="marital_status" required /><br /><br />
        <label>National ID / Passport No:</label><br /><input type="text" name="id_number" required /><br /><br />
        <label>Phone Number:</label><br /><input type="tel" name="phone" required /><br /><br />
        <label>Email Address:</label><br /><input type="email" name="email" required /><br /><br />
        <label>Residential Address:</label><br /><textarea name="address" required></textarea><br /><br />

        <h3>Employment & Income</h3>
        <label>Employment Status:</label><br />
        <select name="employment_status" required>
          <option>Employed</option>
          <option>Self-Employed</option>
          <option>Unemployed</option>
        </select><br /><br />
        <label>Monthly Income:</label><br /><input type="text" name="income" required /><br /><br />

        <h3>Loan Details</h3>
        <label>Loan Amount Requested:</label><br /><input type="text" name="loan_amount" required /><br /><br />
        <label>Loan Purpose:</label><br /><input type="text" name="loan_purpose" required /><br /><br />
        <label>Preferred Repayment Period:</label><br /><input type="text" name="repayment_period" required /><br /><br />

        <h3>Banking Details</h3>
        <label>Bank Name:</label><br /><input type="text" name="bank_name" required /><br /><br />
        <label>Account Name:</label><br /><input type="text" name="account_name" required /><br /><br />
        <label>Account Number:</label><br /><input type="text" name="account_number" required /><br /><br />

        <h3>Uploads</h3>
        <label>Upload Valid ID:</label><br /><input type="file" name="valid_id" required /><br /><br />
        <label>Upload Selfie:</label><br /><input type="file" name="selfie" required /><br /><br />

        <h3>Declaration</h3>
        <label>
          <input type="checkbox" name="declaration" required />
          I declare that the information provided is true and complete.
        </label><br /><br />

        <input type="hidden" name="_next" value="https://standardfinanceloanservice.com/thank-you" />
        <button type="submit" style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          Submit Application
        </button>
      </form>
    </main>
  );
}
