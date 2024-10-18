import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { CommitteePage } from './components/CommitteePage'; // Updated import
import { Payment } from './components/payment';
import { Testimonials } from './components/testimonials';
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

// Smooth scroll initialization
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="https://research-conference-website.vercel.app/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Testimonials data={landingPageData.Testimonials} />
                <Payment />
                <Committee data={landingPageData.Committee} /> {/* Updated component */}
                <Venue />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/committee" element={<CommitteePage data={landingPageData.Committee} />} /> {/* New route */}
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
