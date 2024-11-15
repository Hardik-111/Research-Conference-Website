import { Footer } from './footer';
import { Navigation } from './navigation';

export const Contact = () => {
  return (
    <>
      <Navigation />
      <div style={{ marginBottom: '0' }}>
        <div id="contact">
          <div className="container">
            <div className="row">
              {/* Get In Touch Section */}
              <div className="col-md-8">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                 
                </div>
              </div>

              {/* Contact Info Section (Address) */}
              <div className="col-md-8" style={{ color:'white' }} >
                <h3>Contact Details</h3>
                <p>
                <strong style={{ color:'white' }}>Dr. Ashutosh Mani</strong>
                  <br />
                  <strong style={{ color:'white' }}> Convener, HABIT-2025 </strong>
                  <br />
                  Department of Biotechnology
                  <br />
                  Motilal Nehru National Institute of Technology, Allahabad, Prayagraj-211004 (UP) India
                </p>
              </div>

              {/* Contact Info Right Side (Phone, Mobile, Fax, Email) */}
              <div className="col-md-4" >
                <div className="contact-info" style={{ color:'white' }}>
                  <div className="contact-item" style={{ color:'white' }}>
                    <p>
                      <span style={{ fontWeight:'700'}}>
                        <i className="fa fa-phone" ></i> Phone
                      </span>
                      +91-532-2271239 (O)
                    </p>
                  </div>
                  <div className="contact-item" style={{ color:'white' }}>
                    <p>
                      <span style={{ fontWeight:'700'}}>
                        <i className="fa fa-mobile"></i> Mobile
                      </span>
                      +91 9455354251
                    </p>
                  </div>
                  <div className="contact-item" style={{ color:'white' }}>
                    <p>
                      <span style={{ fontWeight:'700'}}>
                        <i className="fa fa-fax"></i> Fax
                      </span>
                      +91-532-2545341
                    </p>
                  </div>
                  <div className="contact-item" style={{ color:'white' }}>
                    <p>
                      <span style={{ fontWeight:'700'}}>
                        <i className="fa fa-envelope-o"></i> Email
                      </span>
                      <a href="mailto:2025habit@gmail.com" style={{ color: 'white' }}>
                        2025habit@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
