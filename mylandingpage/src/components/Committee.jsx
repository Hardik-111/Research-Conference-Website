import React from 'react';

export const Committee = (props) => {
  return (
    <div id='committee' className='text-center'>
      <div className='container'>
        <div className='section-title' style={{ marginBottom: '6rem' }}>
          <h2>Organizing Committee</h2>
          <p><b>Patron:</b> Prof. Rama Shanker Verma, Director, MNNIT Allahabad</p>
          <p><b>Chairperson:</b> Dr. Manisha Sachan, Head, Department of Biotechnology</p>
          <p><b>Convener:</b> Dr. Ashutosh Mani</p>
          <p><b>Treasurer:</b> Dr. Joyabrata Mal</p>
        </div>

        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {/* Image tag for committee members */}
                  <img 
                    src={`/img/speakers/pic${i + 1}.jpg`} 
                    alt={`${d.name}`} 
                    className='img-fluid' 
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
                  />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    {/* Removed text */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      <a
        href='/committee'
        className='btn btn-custom btn-lg page-scroll'
        style={{ backgroundColor: '#2c2d31' }}
      >
       Explore More
      </a>
    </div>
  );
};
