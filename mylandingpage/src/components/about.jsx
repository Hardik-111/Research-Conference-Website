export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img src='./img/building2.jpg' className='img-responsive' alt='' />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Welcome to HABIT-2025</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Thrust Areas of HABIT-2025</h3>
              <div className='list-style'>
                <div className='col-xs-12'>
                  <ul>
                    {props.data
                      ? [...props.data.Why, ...props.data.Why2].map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
            <a
              href='/about'
              className='btn btn-custom btn-lg page-scroll'
              style={{ marginTop:'6px' }}
            >
              Abstract Submission
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
