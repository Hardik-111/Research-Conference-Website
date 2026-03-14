import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import Header from './components/header';
import { About } from './components/about';
import { CommitteePage } from './components/CommitteePage';
import { Payment } from './components/payment';
import { Footer } from './components/footer';
import { Venue } from './components/venue';
import { VenuePage } from './components/VenuePage';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsPage from './components/AboutUsPage';
import PaymentPage from './components/PaymentPage';
import { Contact } from './components/contact';
import { Committee } from './components/Committee';
import { Sponsors } from './components/Sponsors';
import { SponsorPage } from './components/SponsorPage';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const MAINTENANCE_MODE = true;

  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  if (MAINTENANCE_MODE) {
    return (
      <div style={{ textAlign: "center", marginTop: "120px", fontFamily: "Arial" }}>
        <h1>Site Under Maintenance</h1>
        <p>Please check back later.</p>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                <Payment />
                <Committee data={landingPageData.Committee} />
                <Venue />
                <Sponsors />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/committee" element={<CommitteePage data={landingPageData.Committee} />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<SponsorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
