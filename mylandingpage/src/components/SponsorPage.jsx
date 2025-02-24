import React from 'react';
import { Navigation } from './navigation'; // Import the Navigation component as a named export
import { Footer } from './footer'; // Import the Footer component as a named export
import './sponsorPage.css'; // Local styles for SponsorPage

export const SponsorPage = () => {
  const sponsorImages = [
    { src: '/sponsors/sponsor1.jpeg', alt: 'Sponsor 1' },
    { src: '/sponsors/sponsor2.jpeg', alt: 'Sponsor 2' },
    { src: '/sponsors/sponsor3.jpeg', alt: 'Sponsor 3' },
    { src: '/sponsors/sponsor4.jpeg', alt: 'Sponsor 4' },
    { src: '/sponsors/sponsor5.jpeg', alt: 'Sponsor 5' },
    { src: '/sponsors/sponsor6.jpeg', alt: 'Sponsor 6' },
  ];

  return (
      <>
      <Navigation />
      <div id="sponsor-page" className="sponsor-page-section">
        <div className="container">
          <header className="section-title text-center">
            <h2>Our Sponsors</h2>
            <p className="subtitle">We’re grateful for the support of our amazing partners</p>
          </header>
          <div className="sponsor-list">
            {sponsorImages.map((sponsor, index) => (
              <div className="sponsor-card" key={index}>
                <img src={sponsor.src} alt={sponsor.alt} className="sponsor-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
