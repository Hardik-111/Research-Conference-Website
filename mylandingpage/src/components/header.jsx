import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Array of images for the slider
const sliderImages = [
  `/img/conf/pics${1}.jpg`,
  `/img/conf/pics${2}.jpg`,
  // `/img/conf/pics${3}.jpg`,
  `/img/conf/pics${4}.jpg`,
  `/img/conf/pics${5}.jpg`,
  `/img/conf/pics${6}.jpg`,
  `/img/conf/pics${7}.jpg`,
  `/img/conf/pics${8}.jpg`,
  `/img/conf/pics${9}.jpg`,
  `/img/conf/pics${10}.jpg`,
  `/img/conf/pics${11}.jpg`,
  `/img/conf/pics${12}.jpg`,
  `/img/conf/pics${13}.jpg`,
  `/img/conf/pics${14}.jpg`,
  `/img/conf/pics${15}.jpg`,
];

const Header = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNext = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <header id="header" style={{ marginTop: '85px' }}> {/* Space from fixed nav bar */}
      <div className="intro">
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
          {/* Display image as an <img> element */}
          <img
            src={sliderImages[sliderIndex]}
            alt={`Slide ${sliderIndex + 1}`}
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
            }}
          />

          {/* Caption Container with Blur Overlay */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '35%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              color: 'white',
            }}
          >
            {/* Caption Content */}
            <div style={{ textAlign: 'center', padding: '20px',marginTop:'5rem',marginBottom:'0.5rem' }}>
              <h1 style={{ fontSize: '5rem' }}>HABIT 2025</h1>
              <p style={{ fontSize: '3rem' }}>
                An International Conference On Health and Agricultural Biotechnology: Interdisciplinary Trends
                February 28- March 2, 2025
              </p>
              {/* <a
                href="/about"
                className="btn btn-custom btn-lg page-scroll"
                style={{ backgroundColor: '#2c2d31', textDecoration: 'none', color: 'white' }}
              >
                Learn More
              </a> */}
            </div>
          </Box>

          {/* Navigation Controls (Prev and Next Icons) */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton onClick={handlePrev} sx={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', padding: '10px' }}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={handleNext} sx={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', padding: '10px' }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    </header>
  );
};

export default Header;
