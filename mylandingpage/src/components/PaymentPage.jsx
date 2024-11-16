// PaymentPage.jsx
import React from "react";
import "./PaymentPage.css"; // Optional: Create a CSS file for custom styles
import { Footer } from "./footer";
import { Navigation } from "./navigation";

const PaymentPage = () => {
  return (
    <>
      <Navigation />
      <div id="payment-page" className="text-center" style={{ marginTop: '7rem' }}>
        <div className="container">
          <p>
                <strong>
                After Payment Register at: <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN</a>
                </strong>
            </p>
          <div className="section-title">
            <h2>Mode of Payment</h2>
            <p>Please select a payment method:</p>
          </div>

          <div className="payment-methods">
            <h3>Offline Mode</h3>
            <p>Demand draft in favor of <strong> SNFCE MNNIT</strong> payable at Allahabad.</p>

            <h3>Online Mode</h3>
            <p>Transfer to the following bank details:</p>
            <table className="payment-info-table">
              <tbody>
                <tr>
                  <td><strong>Bank Account Name:</strong></td>
                  <td>SNFCE MNNIT Allahabad</td>
                </tr>
                <tr>
                  <td><strong>Bank Account Number:</strong></td>
                  <td>10424975574</td>
                </tr>
                <tr>
                  <td><strong>Bank Name and Branch:</strong></td>
                  <td>SBI, MNNIT Allahabad</td>
                </tr>
                <tr>
                  <td><strong>IFSC Code:</strong></td>
                  <td>SBIN0002580</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="fee-structure">
            <h3>Fee Structure - From India(INR) </h3>
            <table className="fee-structure-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Early Bird (INR)</th>
                  <th>Late (INR)</th>
                  <th>On Spot (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Students (UG/PG)</td>
                  <td>2500</td>
                  <td>3000</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <td>PhD/Post Doctoral Fellow/Research Scholar</td>
                  <td>3500</td>
                  <td>4000</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>Faculty/Scientist</td>
                  <td>5000</td>
                  <td>6000</td>
                  <td>7000</td>
                </tr>
                <tr>
                  <td>Industries</td>
                  <td>6000</td>
                  <td>7000</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>Accompanying Person</td>
                  <td>2500</td>
                  <td>3000</td>
                  <td>3500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="fee-structure">
            <h3>Fee Structure - Foreign Delegates(USD)</h3>
            <table className="fee-structure-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Early Bird (USD)</th>
                  <th>Late (USD)</th>
                  <th>On Spot (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Students (UG/PG)</td>
                  <td>200</td>
                  <td>250</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>PhD/Post Doctoral Fellow/Research Scholar</td>
                  <td>250</td>
                  <td>300</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Faculty/Scientist</td>
                  <td>300</td>
                  <td>400</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Industries</td>
                  <td>400</td>
                  <td>500</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Accompanying Person</td>
                  <td>200</td>
                  <td>250</td>
                  <td>300</td>
                </tr>
              </tbody>
            </table>
          </div>
   
          <p>Registration Fee includes registration charges, refreshments served during the conference, conference kit and entry to cultural events. All payment details shall be mentioned by participant in the online registration form.
          </p>
          <h3>Registration Procedure</h3>
            <p>
                All participants are requested to register online at <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN </a>. 
                Participants should submit the printed filled registration form along with DD (offline mode) or electronic receipt 
                (online mode).<br></br>
                Please mention <b>HABIT 2025</b> in transaction remarks.
            </p>
          <div className="awards-and-honors">
            <h3>Awards and Honors</h3>
            <p>
              To promote budding young scientists, participants are encouraged to apply for various awards 
              such as the Young Scientists Award, Best Poster Award, and Best Oral Presentation Award. 
              The <b>HABIT-2025</b> Young Scientist Award includes a cash prize along with a certificate.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
