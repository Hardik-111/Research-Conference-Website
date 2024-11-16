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
              <div className="col-md-8">
                <h3  style={{ color: '#FAFA3', fontSize:'25px' , fontWeight:'600', marginBottom:'2rem',  paddingBottom: '0px' }}>Contact Details</h3>
                <p style={{ color: 'white', marginTop:'1rem' }}>
                  <strong>Dr. Ashutosh Mani</strong>
                  <br />
                  <strong>Convener, HABIT-2025</strong>
                  <br />
                  Department of Biotechnology
                  <br />
                  Motilal Nehru National Institute of Technology, Allahabad, Prayagraj-211004 (UP) India
                </p>
              </div>

              {/* Contact Info Right Side (Phone, Mobile, Fax, Email) */}
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-item">
                    <p style={{ color: 'white' }}>
                      <span style={{ fontWeight: '700' }}>
                        <i className="fa fa-phone"></i> Phone
                      </span>
                      +91-532-2271239 (O)
                    </p>
                  </div>
                  <div className="contact-item">
                    <p style={{ color: 'white' }}>
                      <span style={{ fontWeight: '700' }}>
                        <i className="fa fa-mobile"></i> Mobile
                      </span>
                      +91 9455354251
                    </p>
                  </div>
                  <div className="contact-item">
                    <p style={{ color: 'white' }}>
                      <span style={{ fontWeight: '700' }}>
                        <i className="fa fa-fax"></i> Fax
                      </span>
                      +91-532-2545341
                    </p>
                  </div>
                  <div className="contact-item">
                    <p>
                      <span style={{ fontWeight: '700' }}>
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

            {/* Sponsorship Details Section */}
            <div className="row">
              <div className="col-md-8" >
                <div className="section-title">
                  <h3 style={{ color: 'yellow',fontSize:'25px' , fontWeight:'600',  marginTop:'8rem' ,  marginBottom:'0.25rem',  paddingBottom: '0px'}}>Sponsorship Details</h3>
                </div>
                <p style={{ color:'white', fontSize:'18px' , marginTop:'1rem' }}>
                  The <strong> HABIT 2025</strong> organizing committee is actively seeking generous sponsorship from our valuable partners to sponsor its various activities 
                  and events. The conference will provide an ideal platform for exhibitors of books, equipment, chemicals, software, pharmaceutical companies, etc., to 
                  showcase their latest products. All inquiries and requests regarding sponsorship may be addressed to the correspondence notified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
