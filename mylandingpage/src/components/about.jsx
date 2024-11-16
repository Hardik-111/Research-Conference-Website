import React, { useState, useEffect } from 'react';
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

export const About = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNext = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setSliderIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* Slider for About Section */}
            <Box sx={{ position: 'relative', width: '100%', height: '400px' }}>
              <img
                src={sliderImages[sliderIndex]}
                className="img-responsive"
                alt={`Slide ${sliderIndex + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Navigation Controls */}
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
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Welcome to HABIT-2025</h2>
              <p style={{ color: 'black' }}>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Thrust Areas of HABIT-2025</h3>
              <div className="list-style">
                <div className="col-xs-12" style={{ color: 'black' }}>
                  <ul>
                    {props.data
                      ? [...props.data.Why, ...props.data.Why2].map((d, i) => <li key={`${d}-${i}`}>{d} </li>)
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
            <a
              href="/about"
              className="btn btn-custom btn-lg page-scroll"
              style={{ marginTop: '6px' }}
            >
              Abstract Submission
            </a>
            <div className='about-date' >
            <h3 style={{ marginTop:'3rem', marginBottom:'0.5rem' }}>Important Dates to Remember</h3>
            <p style={{ margin:'0',marginTop:'1.5rem', marginBottom:'0.5rem' }}><strong>Abstract Submission:</strong> <span style={{ color:'red' , fontWeight:'500' }}>December 30, 2024 </span></p>
            <p style={{ margin:'0',marginBottom:'0.5rem' }}><strong>Acceptance and Notification:</strong> <span style={{ color:'red' , fontWeight:'500' }}>January 15, 2025 </span></p>
            <p style={{ margin:'0', marginBottom:'0.5rem' }}><strong>Early Bird Registration:</strong> <span style={{ color:'red' , fontWeight:'500' }}>January 20, 2025 </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
