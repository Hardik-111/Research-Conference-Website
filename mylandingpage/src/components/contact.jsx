import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Footer } from './footer'
import { Navigation } from './navigation'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Navigation />
      <div style={{ marginBottom: "0" }}>
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <form name='sentMessage' validate onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6 br-10'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          style={{ borderRadius: '3px' }}
                          placeholder='Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          style={{ borderRadius: '3px' }}
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      style={{ borderRadius: '3px' }}
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className='col-md-3 col-md-offset-1 contact-info'>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address
                  </span>
                  Dr. Ashutosh Mani<br />
                  Convener, HABIT-2025<br />
                  Department of Biotechnology<br />
                  Motilal Nehru National Institute of Technology, Allahabad, Prayagraj-211004 (UP) India
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>
                  +91-532-2271239 (O)
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-mobile'></i> Mobile
                  </span>
                  +91 9455354251
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-fax'></i> Fax
                  </span>
                  +91-532-2545341
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>
                  <a href="mailto:2025habit@gmail.com"  style={{ color:'white' }}>2025habit@gmail.com</a>
                </p>
              </div>
            </div>

            {/* <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a href='/'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>  */}
          </div> 
        </div> 
      </div> 
      <Footer />
    </>
  )
}
