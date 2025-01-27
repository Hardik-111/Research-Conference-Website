import React from 'react';

export const Committee = (props) => {
  return (
    <div id='committee' className='text-center'>
      <div className='container'>
        <div className='section-title' style={{ marginBottom: '6rem' ,color:'white'}}>
          <h2 >Organizing Committee</h2>
          <p style={{ color:'white' }}><b>Patron:</b> Prof. Rama Shanker Verma, Director, MNNIT Allahabad</p>
          <p style={{ color:'white' }}><b>Chairperson:</b> Dr. Manisha Sachan, Head, Department of Biotechnology</p>
          <p style={{ color:'white' }}><b>Convener:</b> Dr. Ashutosh Mani</p>
          <p style={{ color:'white' }}><b>Treasurer:</b> Dr. Joyabrata Mal</p>
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
                    <h3 style={{ marginBottom:'0.1rem' }}>{d.name}</h3>
                    <h3 style={{ marginTop:'0.1rem' , color:'yellow' }}>({d.post})</h3>
                    
                    {/* Removed text */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      <a
        href='/committee'
        className='btn btn-lg page-scroll'
        style={{ color:'#fff', backgroundColor:'#343434' , borderRadius: '25px' ,marginTop: '20px', padding:'12px 24px' }}
        >
       OUR SPEAKERS
      </a>
    </div>
  );
};
