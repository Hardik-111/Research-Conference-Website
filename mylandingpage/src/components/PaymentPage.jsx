// PaymentPage.jsx
import React from "react";
import "./PaymentPage.css"; // Optional: Create a CSS file for custom styles
import { Footer } from "./footer";
import { Navigation } from "./navigation";

const PaymentPage = () => {
  return (
    <>
    <Navigation/>
    <div id="payment-page" className="text-center" style={{ marginTop:'6rem' }}>
      <div className="container">
        <div className="section-title">
          <h2>Mode of Payment</h2>
          <p>Please select a payment method:</p>
        </div>

        <div className="payment-methods">
          <h3>Offline Mode</h3>
          <p>Demand draft in favor of HABIT 2025 payable at Allahabad.</p>

          <h3>Online Mode</h3>
          <table className="payment-info-table">
            <thead>
              <tr>
                <th>Name of Bank</th>
                <th>Bank Account Number</th>
                <th>Branch Code</th>
                <th>MICR Code</th>
                <th>IFSC Code</th>
                <th>SWIFT Code</th>
                <th>Address of Bank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your Bank Name</td>
                <td>Your Account Number</td>
                <td>Your Branch Code</td>
                <td>Your MICR Code</td>
                <td>Your IFSC Code</td>
                <td>Your SWIFT Code</td>
                <td>Your Bank Address</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="fee-structure">
          <h3>Fee Structure</h3>
          <table className="fee-structure-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Early Bird</th>
                <th>Late</th>
                <th>On Spot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Students (UG/PG)</td>
                <td>2000 INR</td>
                <td>2500 INR</td>
                <td>3000 INR</td>
              </tr>
              <tr>
                <td>PhD/Post Doctoral Fellow/Research Scholar</td>
                <td>2500 INR</td>
                <td>3000 INR</td>
                <td>3500 INR</td>
              </tr>
              <tr>
                <td>Academia</td>
                <td>4000 INR</td>
                <td>5000 INR</td>
                <td>6000 INR</td>
              </tr>
              <tr>
                <td>Industries</td>
                <td>6000 INR</td>
                <td>7000 INR</td>
                <td>8000 INR</td>
              </tr>
              <tr>
                <td>Accompanying Person</td>
                <td>2500 INR</td>
                <td>3000 INR</td>
                <td>3500 INR</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="awards-and-honors">
          <h3>Awards and Honors</h3>
          <p>
            To promote the budding young scientist, participants are encouraged to apply for various awards 
            like Young Scientists Award, Best Poster Award, and Best Oral Presentation Award. 
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};



export default PaymentPage;
