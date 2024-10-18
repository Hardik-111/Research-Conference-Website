// Payment.jsx
import React from "react";
// import { PaymentSummary } from "./PaymentPage";

export const Payment = () => {
  return (
        <div className="payment-summary" id="payment">
      <h2>Payment Options</h2>
      <p><strong>Offline Mode:</strong> Demand draft in favor of HABIT 2025 payable at Allahabad.</p>
      <p><strong>Online Mode:</strong> Please contact for bank details.</p>

      <h3>Fee Structure</h3>
      <table className="fee-structure-summary-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Early Bird</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Students (UG/PG)</td>
            <td>2000 INR</td>
          </tr>
          <tr>
            <td>PhD/Post Doctoral Fellow/Research Scholar</td>
            <td>2500 INR</td>
          </tr>
          <tr>
            <td>Academia</td>
            <td>4000 INR</td>
          </tr>
          <tr>
            <td>Industries</td>
            <td>6000 INR</td>
          </tr>
          <tr>
            <td>Accompanying Person</td>
            <td>2500 INR</td>
          </tr>
        </tbody>
      </table>
      <a
                  href='https://research-conference-website.vercel.app/payment-page'
                  className='btn btn-custom btn-lg page-scroll'
                  style={{ alignItems:'center' }}
                >
                  Learn More
                </a>{' '}
    </div>
  );
};
