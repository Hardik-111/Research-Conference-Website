import React from 'react';
import './AboutUsPage.css'; // Import the CSS file
import { Footer } from './footer';
import { Navigation } from './navigation';

const AboutUsPage = () => {
    return (
        <>
        <Navigation/>
        <div className="about-container" style={{ marginTop:'6rem'}}>
            <h1>About the Conference</h1>
            <p>
                It gives us immense pleasure to invite you to join HABIT 2025, 
                "International Conference on Health and Agricultural Biotechnology: Innovations and Trends", 
                to be held at one of the most ancient and culturally rich cities of India "Kumbh Nagari", Prayagraj 
                from February 28 to March 2, 2025. The conference is being organized by the Department of 
                Biotechnology, Motilal Nehru National Institute of Technology (MNNIT) Allahabad with an aim to 
                promote excellence in scientific knowledge and innovation in biotechnology and related disciplines 
                to motivate young researchers. The conference also envisages providing a forum to researchers 
                around the globe to explore and discuss various aspects of recent advances in the field of food, 
                health, and environment that has dynamically opened up new avenues of research. It will provide 
                deep insights into innovations, challenges, and growth opportunities in diversified domains of 
                Biotechnology. The conference consists of various sessions including keynote, plenary, and 
                parallel sessions. Each session will be addressed by outstanding experts who will highlight recent 
                advances in various facets of biotechnology. It will also offer budding scientists an opportunity 
                to present their work in front of eminent experts of their field and compete for various awards 
                like HABIT Young Scientist Awards-2025.
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
                <li>Interdisciplinary approaches in health, food, agriculture, and environment</li>
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

            <h3>Paper Submission</h3>
            <p>
                Please submit the abstract (not exceeding 250 words) online at <a href="https://forms.gle/nupHfwqcnciCd7U8A" target='_blank' rel="noreferrer">here</a>. 
                Candidates should register at <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN</a> and then 
                login to submit the abstract. The notification regarding the nature of the presentation (oral/poster) 
                will be communicated well in advance. The size of the poster will be 90x90cm for all poster presentations. 
                It should state title, name, and address of the authors, short introduction, methods and materials, results, 
                and conclusions.
            </p>

            <h3>Registration Procedure</h3>
            <p>
                All participants are requested to register online at <a href="https://shorturl.at/PW4YN" target='_blank' rel="noreferrer">https://shorturl.at/PW4YN </a>. 
                Participants should submit the printed filled registration form along with DD (offline mode) or electronic receipt 
                (online mode).<br></br>
                Please mention <b>HABIT 2025</b> in transaction remarks.
            </p>

            <h2>Important Dates to Remember</h2>
            <p><strong>Abstract Submission:</strong> December 30, 2024</p>
            <p><strong>Acceptance and Notification:</strong> January 15, 2025</p>
            <p><strong>Early Bird Registration:</strong> January 20, 2025</p>

            <div className="guidelines">
                <h3>Guidelines for Abstract and Poster Submission</h3>
                <p>
                    All participants engaged in original work/projects related to various broad areas of the 
                    conference are welcome to submit the abstract (not exceeding 250 words) online through our 
                    website on or before December 30, 2024. Candidates should register themselves and then login 
                    to submit the abstract. The organizing committee reserves the right for modification/correction/
                    revision and rights for accepting/rejecting the abstract. The abstract will only be included 
                    in proceedings if the registration fee is received. The notification regarding the nature of 
                    the presentation (oral/poster) will be communicated well in advance. The size of the poster 
                    will be 90x90 cm for all poster presentations. It should state the title, name, and address of 
                    the authors, short introduction, methods and materials, results, and conclusions. All the 
                    necessary material for poster display will be provided.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUsPage;
