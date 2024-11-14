// Payment.jsx
import React from "react";

export const Payment = () => {
  return (
    <div className="payment-summary" id="payment">
      <h2>Payment Options</h2>
      <p><strong>Offline Mode:</strong> Demand draft in favor of HABIT 2025 payable at Allahabad.</p>
      <p><strong>Online Mode:</strong> Bank transfer to the following account:</p>
      <p>
        <strong>Bank Account Name:</strong> SNFCE MNNIT Allahabad <br />
        <strong>Bank Account Number:</strong> 10424975574 <br />
        <strong>Bank Name and Branch:</strong> SBI, MNNIT Allahabad <br />
        <strong>IFSC Code:</strong> SBIN0002580
      </p>

      <h3>Fee Structure</h3>
      <table className="fee-structure-summary-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Early Bird (INR)</th>
            <th>Late (INR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Students (UG/PG)</td>
            <td>2000</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>PhD/Post Doctoral Fellow/Research Scholar</td>
            <td>2500</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Academia</td>
            <td>4000</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Industries</td>
            <td>6000</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>Accompanying Person</td>
            <td>2500</td>
            <td>3000</td>
          </tr>
        </tbody>
      </table>
      <a
        href='/payment-page'
        className='btn btn-custom btn-lg page-scroll'
        style={{ alignItems: 'center' }}
      >
        Learn More
      </a>
    </div>
  );
};
