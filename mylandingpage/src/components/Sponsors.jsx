// src/components/Sponsors.jsx
import React from 'react';
import './sponsors.css';

export const Sponsors = () => {
  const sponsorImages = [
    '/sponsors/sponsor1.jpeg',
    '/sponsors/sponsor2.jpeg',
    '/sponsors/sponsor3.jpeg',
    '/sponsors/sponsor4.jpeg',
    '/sponsors/sponsor5.jpeg',
    '/sponsors/sponsor6.jpeg'
  ];

  return (
    <div id="sponsors" className="sponsors-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Our Sponsors</h2>
            <div className="sponsor-marquee">
              <div className="sponsor-track">
                {sponsorImages.map((img, index) => (
                  <div className="sponsor-item" key={index}>
                    <img src={img} alt={`Sponsor ${index + 1}`} />
                  </div>
                ))}
                {/* Duplicate images for continuous effect */}
                {sponsorImages.map((img, index) => (
                  <div className="sponsor-item" key={`duplicate-${index}`}>
                    <img src={img} alt={`Sponsor ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <a href="/sponsor" className="btn btn-custom btn-lg page-scroll">
                View All Sponsors
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};