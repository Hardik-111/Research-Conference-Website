// Payment.jsx
import React from "react";

export const Payment = () => {
  return (
    <div className="payment-summary" id="payment" style={{ color:'black' }}>
      <h2>Payment Options</h2>
      <p><strong >Offline Mode:</strong> Demand draft in favor of HABIT 2025 payable at Allahabad.</p>
      <p><strong>Online Mode:</strong> Bank transfer to the following account:</p>
      <p>
        <strong>Bank Account Name:</strong> SNFCE MNNIT Allahabad <br />
        <strong>Bank Account Number:</strong> 10424975574 <br />
        <strong>Bank Name and Branch:</strong> SBI, MNNIT Allahabad <br />
        <strong>IFSC Code:</strong> SBIN0002580
      </p>

      <div className="fee-structure" >
            <h3>Fee Structure - From India(INR) </h3>
            <table className="fee-structure-table" >
              <thead >
                <tr  >
                  <th>Category</th>
                  <th>Early Bird (INR)</th>
                  <th>Late (INR)</th>
                  <th>On Spot (INR)</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td style={{ color:'black'}}>Students (UG/PG)</td>
                  <td style={{ color:'black'}}>2500</td>
                  <td style={{ color:'black'}}>3000</td>
                  <td style={{ color:'black'}}>3500</td>
                </tr>
                <tr>
                  <td style={{ color:'black'}}>PhD/Post Doctoral Fellow/Research Scholar</td>
                  <td style={{ color:'black'}}>3500</td>
                  <td style={{ color:'black'}}>4000</td>
                  <td style={{ color:'black'}}>5000</td>
                </tr>
                <tr>
                  <td style={{ color:'black'}}>Faculty/Scientist</td>
                  <td style={{ color:'black'}}>5000</td>
                  <td style={{ color:'black'}}>6000</td>
                  <td style={{ color:'black'}}>7000</td>
                </tr>
                <tr>
                  <td style={{ color:'black'}}>Industries</td>
                  <td style={{ color:'black'}}>6000</td>
                  <td style={{ color:'black'}}>7000</td>
                  <td style={{ color:'black'}}>8000</td>
                </tr>
                <tr>
                  <td style={{ color:'black'}}>Accompanying Person</td>
                  <td style={{ color:'black'}}>2500</td>
                  <td style={{ color:'black'}}>3000</td>
                  <td style={{ color:'black'}}>3500</td>
                </tr>
              </tbody>
            </table>
          </div>
      <a
        href='/payment-page'
        className='btn btn-custom btn-lg page-scroll'
        style={{ alignItems: 'center' }}
      >
        Register
      </a>
    </div>
  );
};
