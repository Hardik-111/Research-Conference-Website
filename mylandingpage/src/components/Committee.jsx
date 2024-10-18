import React from 'react';

export const Committee = (props) => {
  return (
    <div id='committee' className='text-center'>
      <div className='container'>
        <div className='section-title' style={{ marginBottom: '6rem' }}>
          <h2>Organizing Committee</h2>
          <p><b>Patron:</b> Prof. R.S. Verma, Director, MNNIT Allahabad</p>
          <p><b>Chairperson:</b> Dr. Sangeeta Negi, Head, Department of Biotechnology</p>
          <p><b>Convener:</b> Dr. Ashutosh Mani</p>
          <p><b>Treasurer:</b> Dr. Joyabrata Mal</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      <a
                  href='https://research-conference-website.vercel.app/committee'
                  className='btn btn-custom btn-lg page-scroll'
                  style={{ backgroundColor:'#2c2d31' }}
                >
                  Learn More
                </a>{' '}
    </div>
  );
};
