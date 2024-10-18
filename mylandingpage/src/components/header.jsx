import React from 'react';
// Import your background image
// import backgroundImage from './../imgs/Home1.jpg'; // Adjust the path as necessary

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro' style={{ backgroundImage: `url('/img/Home1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat:'no-repeat' , height: '10vh' }}>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='/about'
                  className='btn btn-custom btn-lg page-scroll'
                  style={{ backgroundColor:'#2c2d31' }}
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
