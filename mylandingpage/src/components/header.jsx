import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Array of images for the slider
const sliderImages = [
  '/img/conf/DSC_3545.jpg',
  '/img/conf/DSC_3560.jpg',
  '/img/conf/DSC_3570.jpg',
  '/img/conf/DSC_3571.jpg',
  '/img/conf/DSC_3579.jpg',
  '/img/conf/DSC_3584.jpg',
  '/img/conf/DSC_3601.jpg',
  '/img/conf/DSC_3612.jpg',
  '/img/conf/DSC_4085.jpg',
  '/img/conf/DSC_4116.jpg',
  // '/img/conf/my photos 2.jpg',
  // '/img/conf/my photos1.jpg'
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

        {/* Caption for the slider */}
        <div className="carousel-caption d-none d-md-block" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '5rem' }}>HABIT 2025</h1>
          <p style={{ fontSize: '3rem', color: 'white' }}>
            An International Conference On Health and Agricultural Biotechnology: Interdisciplinary Trends
            February 28- March 2, 2025
          </p>
          <a
            href="/about"
            className="btn btn-custom btn-lg page-scroll"
            style={{ backgroundColor: '#2c2d31', textDecoration: 'none', color: 'white' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
