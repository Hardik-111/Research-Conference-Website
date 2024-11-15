import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Array of images for the slider
const sliderImages = [
  `/img/conf/pics${1}.jpg`,
  `/img/conf/pics${2}.jpg`,
  `/img/conf/pics${3}.jpg`,
  `/img/conf/pics${4}.JPG`,
  `/img/conf/pics${5}.JPG`,
  `/img/conf/pics${6}.JPG`,
  `/img/conf/pics${7}.JPG`,
  `/img/conf/pics${8}.JPG`,
  `/img/conf/pics${9}.JPG`,
  `/img/conf/pics${10}.JPG`,
  `/img/conf/pics${11}.JPG`,
  `/img/conf/pics${12}.JPG`,
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
    <header id="header" style={{ marginTop: '70px' }}> {/* Space from fixed nav bar */}
      <div className="intro">
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' , height:'80%'}}>
          {/* Display image as an <img> element */}
          <img
            src={sliderImages[sliderIndex]}
            className='img-responsive'
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
              height: '45%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(3px)',
              color: 'white',
            }}
          >
            {/* Caption Content */}
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4.35rem', fontWeight: 'bold', marginTop: '0.8rem'}}>HABIT-2025</h1>
              <h3 style={{ color: 'white' , fontSize: '2.85rem',fontWeight: '600', marginTop:'0.1rem' }}>International Conference on Health and Agricultural Biotechnology: Interdisciplinary Trends</h3>
              <h3 style={{ color: 'yellow', fontSize: '1.75rem', fontWeight: '600', marginTop: '1.2rem' }}>[February 28 - March 02, 2025]</h3>
              <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '300', marginTop: '1.8rem' }}>Organized by:</h3>
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: '500', marginTop: '0rem' }}>Department of Biotechnology</h3>
              <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: '500', marginTop: '0.1rem' }}>Motilal Nehru National Institute of Technology Allahabad, Prayagraj-211004, India</h3>
              {/* <p style={{ fontSize: '1.5rem', fontWeight: '300', marginTop: '0.1rem' }}></p> */}
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
