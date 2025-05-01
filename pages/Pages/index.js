export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>STANDARD FINANCE LOAN APPLICATION</h2>
      <form action="https://formspree.io/f/mkgrgnky" method="POST" encType="multipart/form-data">
        <label>Full Name:</label><br /><input type="text" name="full_name" required /><br />
        <label>Email:</label><br /><input type="email" name="email" required /><br />
        <label>Phone:</label><br /><input type="tel" name="phone" required /><br />
        <label>Loan Amount:</label><br /><input type="text" name="loan_amount" required /><br />
        <label>Upload Valid ID:</label><br /><input type="file" name="valid_id" required /><br />
        <label>Upload Selfie:</label><br /><input type="file" name="selfie" required /><br />
        <label><input type="checkbox" name="declaration" required /> I agree to the terms.</label><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
