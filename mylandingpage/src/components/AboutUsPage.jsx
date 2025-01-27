import React from 'react';
import './AboutUsPage.css'; // Import the CSS file
import { Footer } from './footer';
import { Navigation } from './navigation';

const AboutUsPage = () => {
    return (
        <>
        <Navigation/>
        <div className="about-container" style={{ marginTop:'8.5rem'}}>
        <p>
                <strong>
                    Submit Abstract at: <a href="https://forms.gle/nupHfwqcnciCd7U8A" target='_blank' rel="noreferrer">https://forms.gle/nupHfwqcnciCd7U8A</a>
                </strong>
            </p>
            <p>
                <strong>
                    Register at: <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN</a>
                </strong>
            </p>
            <div className='about-date' style={{ marginBottom:'4rem'}}>
            <h2>Important Dates to Remember</h2>
            <p>
                    <strong>Abstract Submission:</strong> 
                    <span style={{ color:'red', fontWeight:'500' }}> January 20, 2025 </span>
                    <span
                        style={{
                            marginLeft: '15px',
                            fontSize: '16px',
                            fontWeight:'500',
                            color: 'darkred',
                            animation: 'blink 1s linear infinite',
                            position: 'relative',
                            top: '0',
                        }}
                    >
                        *EXTENDED TILL JAN 20, 2025
                    </span>
                </p>
                <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
            {/* <p><strong>Abstract Submission:</strong> <span style={{ color:'red' , fontWeight:'500' }}>January 20, 2025 </span></p> */}
            <p><strong>Acceptance and Notification:</strong> <span style={{ color:'red' , fontWeight:'500' }}>January 20, 2025 </span></p>
            <p><strong>Early Bird Registration:</strong> <span style={{ color:'red' , fontWeight:'500' }}>January 25, 2025 </span></p>
            </div>

            <h2 style={{ fontSize:'24px'  }}>About the Conference</h2>
            <p>
                It gives us immense pleasure to invite you to join <strong>HABIT 2025</strong>, 
                "International Conference on Health and Agricultural Biotechnology: Innovations and Trends", 
                to be held at one of the most ancient and culturally rich cities of India "Kumbh Nagari", Prayagraj 
                from <strong> February 28 to March 02, 2025.</strong> The conference is being organized by the <strong>Department of 
                Biotechnology, Motilal Nehru National Institute of Technology (MNNIT) Allahabad</strong> with an aim to 
                promote excellence in scientific knowledge and innovation in biotechnology and related disciplines 
                to motivate young researchers. The conference also envisages providing a forum to researchers 
                around the globe to explore and discuss various aspects of recent advances in the field of food, 
                health, and environment that has dynamically opened up new avenues of research. It will provide 
                deep insights into innovations, challenges, and growth opportunities in diversified domains of 
                Biotechnology. The conference consists of various sessions including keynote, plenary, and 
                parallel sessions. Each session will be addressed by outstanding experts who will highlight recent 
                advances in various facets of biotechnology. It will also offer budding scientists an opportunity 
                to present their work in front of eminent experts of their field and compete for various awards 
                like <strong> HABIT Young Scientist Awards-2025.</strong>
            </p>

            <h2>Scope of HABIT-2025</h2>
            <p>
                The event will draw assemblage of scholars from different parts of the globe and diverse fields. 
                HABIT-2025 will also act as a single platform for sharing state-of-the-art updates from diverse fields 
                of biotechnology. The scope of this conference is multidisciplinary and invites original work to be 
                presented in various categories viz., young scientist, oral and poster presentation.
            </p>

            <h2>Thrust Areas of the Conference</h2>
            <ul>
                <li>Health and Medical Biotechnology</li>
                <li>Bioinformatics, Computational Biology & Chemistry</li>
                <li>Molecular Biology, Nanotechnology and Material Science</li>
                <li>Environmental and Industrial Biotechnology</li>
                <li>Interdisciplinary approaches in Health, Food, Agriculture, and Environment</li>
            </ul>

            <h2>About the Institute</h2>
            <img
            src="/img/admin.jpg"
            alt="MNNIT Institute"
            className="about-institute-img"
            style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px', // Reduces the height slightly, can be adjusted as needed
                objectFit: 'contain',  // Ensures the image covers the width without stretching
            }}
            />


            <p>
                Motilal Nehru National Institute of Technology (MNNIT) Allahabad is an institute with total 
                commitment to quality and excellence in academic pursuits. It was established as one of the 
                seventeen Regional Engineering Colleges of India in the year 1961 as a joint enterprise of 
                Government of India and Government of Uttar Pradesh. With more than 50 years of experience 
                and achievements in the field of technical education, having traversed a long way, on June 26, 2002 
                MNREC was transformed into National Institute of Technology fully funded by Government of India. 
                With the enactment of National Institutes of Technology Act-2007, the Institute has been granted 
                the status of institution of national importance w.e.f. 15.08.2007.
            </p>

            <h2>About the Department</h2>
            <p>
                Biotechnology at MNNIT Allahabad was established as a new academic unit under Applied Mechanics 
                in 2006, with the objective of integrating life sciences with engineering and to develop 
                cutting-edge technology through research, training, and technological innovation. An independent 
                Department of Biotechnology was established in April 2012. Since its inception, the department 
                has witnessed a consistent rise in the students' demand for the subject. Keeping a beat to the global 
                demands for researchers in this field, B.Tech, M.Tech, and PhD programmes are being run by the department. 
                The department has a team of young, enthusiastic, and well-qualified faculty actively involved in research 
                and training.
            </p>

            <h2>Paper Submission</h2>
            <p>
                Please submit the abstract (not exceeding <strong>250 words</strong>) online at <a href="https://forms.gle/nupHfwqcnciCd7U8A" target='_blank' rel="noreferrer">here</a>. 
                Candidates should register at <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN</a> and then 
                login to submit the abstract. The notification regarding the nature of the presentation (oral/poster) 
                will be communicated well in advance. The size of the poster will be <strong>90x90cm</strong> for all poster presentations. 
                It should state title, name, and address of the authors, short introduction, methods and materials, results, 
                and conclusions.
            </p>

            <h2>Registration Procedure</h2>
            <p>
                All participants are requested to register online at <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN </a>. 
                Participants should submit the printed filled registration form along with <strong>DD (offline mode)</strong> or <strong>electronic receipt 
                (online mode).</strong><br></br>
                Please mention <b>HABIT 2025</b> in transaction remarks.
            </p>


            <div className="guidelines">
                <h3>Guidelines for Abstract and Poster Submission</h3>
                <p>
                    All participants engaged in original work/projects related to various broad areas of the 
                    conference are welcome to submit the abstract (not exceeding 250 words) online through our 
                    website on or before January 20,2025. Candidates should register themselves and then login 
                    to submit the abstract. The organizing committee reserves the right for modification/correction/
                    revision and rights for accepting/rejecting the abstract. The abstract will only be included 
                    in proceedings if the registration fee is received. The notification regarding the nature of 
                    the presentation (oral/poster) will be communicated well in advance. The size of the poster 
                    will be 90x90 cm for all poster presentations. It should state the title, name, and address of 
                    the authors, short introduction, methods and materials, results, and conclusions. All the 
                    necessary material for poster display will be provided.
                </p>
            </div>

            <div className="publication-section">
                <h2>Publication of Conference Papers</h2>
                <p>
                    Selected papers from the HABIT 2025, after approval of <strong>Editor-in-Chief (EIC)</strong>, 
                    will be invited to contribute to special issues in reputed journals, including:
                </p>
                <ul>
                    <li><strong>Current Topics in Medicinal Chemistry (Bentham)</strong></li>
                    <li><strong>Plant Gene (Elsevier)</strong></li>
                </ul>
                <h3 style={{ fontSize:'20px'}}>Conference Proceedings</h3>
                <p>
                    Structured abstracts from the conference will be included in the <strong>Proceedings of HABIT 2025</strong>. 
                    The ISSN/ISBN indexed proceedings will be published in online/offline mode by a reputed publisher. 
                    The corresponding author will be contacted for further processing, including copyright and publication charges, if any.
                </p>
            </div>

        </div>
        <Footer/>
        </>
    );
};

export default AboutUsPage;
