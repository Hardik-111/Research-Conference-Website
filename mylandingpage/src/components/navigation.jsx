import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for dynamic navigation
import logo from './../imgs/MNNIT_logo.jpg'; // Adjust the path as necessary

export const Navigation = (props) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>

          {/* Add logo and title here */}
          <Link className='navbar-brand page-scroll' to='/' style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt='Logo'
              style={{ height: '58px', marginRight: '10px' }} // Adjust height and margin as needed
            />
            <span className='title'>HABIT 2025</span>
          </Link>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            {/* For the landing page, use smooth scroll to sections; for other pages, use regular routes */}
            <li>
              {isLandingPage ? (
                <a href='#features' className='page-scroll'>Home</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/'>Home</Link>
              )}
            </li>
            <li>
              {isLandingPage ? (
                <a href='#about' className='page-scroll'>About</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/about'>About</Link>
              )}
            </li>
            <li>
              {isLandingPage ? (
                <a href='#payment' className='page-scroll'>Payment</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/payment-page'>Payment</Link>
              )}
            </li>
            <li>
              {isLandingPage ? (
                <a href='#committee' className='page-scroll'>Committee</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/committee'>Committee</Link> 
              )}
            </li>
            <li>
              {isLandingPage ? (
                <a href='#venue' className='page-scroll'>Venue</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/venue'>Venue</Link>
              )}
            </li>
            <li>
              {isLandingPage ? (
                <a href='#contact' className='page-scroll'>Contact</a>
              ) : (
                <Link to='https://research-conference-website.vercel.app/contact'>Contact</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
