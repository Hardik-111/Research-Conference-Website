import React from 'react';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <header id="header" style={{ marginTop: '70px', marginBottom: '5px' }}> {/* Space from fixed navbar */}
      <div className="intro">
        <Box
          className="img-responsive"
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '500px',
            backgroundImage: 'url(/img/conf/pics2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Caption Container with Blur Overlay */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '45%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(3px)',
              color: 'white',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4.35rem', fontWeight: 'bold', marginTop: '0.8rem' }}>HABIT-2025</h1>
              <h3 style={{ color: 'white', fontSize: '2.85rem', fontWeight: '600', marginTop: '0.1rem' }}>
                International Conference on Health and Agricultural Biotechnology: Interdisciplinary Trends
              </h3>
              <h3 style={{ color: 'yellow', fontSize: '1.75rem', fontWeight: '600', marginTop: '1.2rem' }}>
                [February 28 - March 02, 2025]
              </h3>
              <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '300', marginTop: '1.8rem' }}>Organized by:</h3>
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: '500', marginTop: '0rem' }}>Department of Biotechnology</h3>
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: '500', marginTop: '0.1rem' }}>
                Motilal Nehru National Institute of Technology Allahabad, Prayagraj-211004, India
              </h3>
            </div>
          </Box>
        </Box>
      </div>

      {/* Floating Message */}
      <div id="about-1" style={{ marginTop: '2rem', marginBottom: '4rem', position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px', // Limit the width of the floating message
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'red',
            fontWeight: 'bold',
            fontSize: '2rem',
            backgroundColor: '#fff',
            padding: '5px 15px',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              animation: 'marquee 7s linear infinite', // Animation for movement
            }}
          >
            For discount on Group Registrations, contact us!
          </Box>
        </Box>
      </div>
    </header>
  );
};

export default Header;
