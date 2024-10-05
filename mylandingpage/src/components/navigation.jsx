import React from 'react';
// Import your logo image
import logo from './../imgs/MNNIT_logo.jpg'; // Adjust the path as necessary

export const Navigation = (props) => {
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
          <a className='navbar-brand page-scroll' href='#page-top' style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo} // Use the imported logo
              alt='Logo'
              style={{ height: '30px', marginRight: '10px' }} // Adjust height and margin as needed
            />  
            <span className='title'>HABIT 2025</span>
          </a>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>Home</a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>About</a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>Register</a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>Contact</a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>Venue</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
