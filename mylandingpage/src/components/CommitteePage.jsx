import React from 'react';
import { Footer } from './footer';
import { Navigation } from './navigation';

export const CommitteePage = () => {
  const speakers = [
    { name: 'Prof. Prashant Mishra', institute: 'IIT Delhi' },
    { name: 'Prof. Savita Yadav', institute: 'AIIMS, New Delhi' },
    { name: 'Prof. B. Jayaram', institute: 'IIT Delhi' },
    { name: 'Prof. Bushra Ateeq', institute: 'IIT Kanpur' },
    { name: 'Prof. T.P. Singh', institute: 'AIIMS, New Delhi' },
    { name: 'Prof. R. Prasad', institute: 'IIT Roorkee' },
    { name: 'Dr. Imran Siddiqui', institute: 'CSIR-CDRI Lucknow' },
    { name: 'Prof. Pratyoosh Shukla', institute: 'BHU' },
    { name: 'Prof. Pritish Vardwaj', institute: 'IIIT Allahabad' },
    { name: 'Prof. Tapobrata Lahiri', institute: 'IIIT Allahabad' },
    { name: 'Prof. Dinesh Yadav', institute: 'DDU Gorakhpur University' },
    { name: 'Dr. Srinivasan Ramachandran', institute: 'GEU, Dehradun' },
    { name: 'Prof. Bishwajit Kundu', institute: 'IIT Delhi' },
    { name: 'Dr. Praveen Bharti', institute: 'ICMR-NIMR, New Delhi' },
    { name: 'Dr. Sanjay Kumar', institute: 'IIT BHU' },
    { name: 'Dr. Aditya K. Padhi', institute: 'IIT BHU' },
    { name: 'Dr. Pranjal Chandra', institute: 'IIT BHU' },
    { name: 'Dr. Sunil Kumar', institute: 'CSIR-NEERI Nagpur' },
    { name: 'Dr. Pramod Katara', institute: 'University of Allahabad' },
    { name: 'Dr. Samarendra Singh', institute: 'BHU' },
    { name: 'Dr. Sandeep Kushwaha', institute: 'DBT-NIAB Hyderabad' },
    { name: 'Dr. Shailesh Sharma', institute: 'DBT-NIAB Hyderabad' },
    { name: 'Dr. Mitihilesh Singh', institute: 'ICAR-IVRI Bareilly' },
    { name: 'Dr. Prem N. Yadav', institute: 'CSIR-CDRI Lucknow' },
    { name: 'Dr. Sanjeeb K. Sahoo', institute: 'ILS, Bhubaneswar' },
    { name: 'Dr. Nitin Singh Chouhan', institute: 'TIFR, Mumbai' },
    { name: 'Dr. Debasis Das', institute: 'TIFR, Mumbai' },
  ];

  const advisoryCommittee = [
    { name: 'Dr. Giovanna Chiorino', country: 'Italy' },
    { name: 'Dr. Rattan Yaday', country: 'UK' },
    { name: 'Dr. Maria Scatolini', country: 'Italy' },
    { name: 'Dr. Jennifer Ann Harikrishna', country: 'Malaysia' },
    { name: 'Dr. Panlada Tittabutr', country: 'Thailand' },
    { name: 'Dr. Luciana Scotti', country: 'Brazil' },
    { name: 'Dr. Ashutosh Sharma', country: 'Mexico' },
    { name: 'Dr. S. Ramachandran', country: 'India' },
  ];

  
  const organizingSecretaries = [
    { name: 'Dr. Radha Rani' },
    { name: 'Dr. Joyabrata Mal' },
    { name: 'Dr. Rupika Sinha' },
    { name: 'Dr. Harinder Singh (CHED)' },
    { name: 'Dr. Dushyant Kumar (CSED)' },
  ];

  return (
    <>
      <Navigation />
      <div id='committee' className='text-center'>
        <div className='container'>
          <div className='section-title' style={{ marginBottom: '6rem' }}>
            <h2>Organizing Committee</h2>
            <p><b>Patron:</b> Prof. Rama Shanker Verma, Director, MNNIT Allahabad</p>
            <p><b>Chairperson:</b> Dr. Manisha Sachan, Head, Department of Biotechnology</p>
            <p><b>Convener:</b> Dr. Ashutosh Mani</p>
            <p><b>Treasurer:</b> Dr. Joyabrata Mal</p>
          </div>

          <h2>Organizing Secretaries</h2>
          <table className="table table-bordered" style={{ backgroundColor: 'white', marginBottom: '3rem' }}>
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {organizingSecretaries.map((secretary, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{secretary.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Advisory Committee</h2>
          <table className="table table-bordered" style={{ backgroundColor: 'white', marginBottom: '3rem' }}>
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {advisoryCommittee.map((member, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.country}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ marginBottom: '3rem' }}>Speakers in HABIT 2025</h2>
          <table className="table table-bordered" style={{ backgroundColor: 'white' }}>
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Institute/Address</th>
              </tr>
            </thead>
            <tbody>
              {speakers.map((speaker, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{speaker.name}</td>
                  <td>{speaker.institute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};