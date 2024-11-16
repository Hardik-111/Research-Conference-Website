import React from 'react';
import { Navigation } from './navigation';  // Import the existing Navigation component
import { Footer } from './footer';  // Import the existing Footer component
import "./VenuePage.css"

export const VenuePage = () => {
  return (
    <div>
      {/* Add the Navigation bar */}
      <Navigation />

      <div id="venue-details" className="text-center" style={{ marginTop: '8.5rem' }}>
        <div className="container">
          {/* Accommodation Section */}
          <div className="section-title">
            <h2>Accommodation</h2>
          </div>
          <p>
            Accommodation will be provided in the Institute on a paid basis, as per availability. 
            Please contact the organizers for more details.
          </p>

          <div className="section-title" style={{ marginTop: '5rem' }}>
            <h2>How to Reach</h2>
          </div>

          <div className="row">
            <div className="col-md-14">
              <h3>Prayagraj By Air</h3>
              <p>
                Prayagraj has its own domestic airport which is 15 km away from the heart of the city. The airport is connected to metros like Delhi, Kolkata, and Lucknow. The taxi charge from the airport to the city is around ₹650. International travelers can get connecting flights from Delhi, Bengaluru, or Mumbai.
              </p>

              <h3>Prayagraj By Train</h3>
              <p>
                Prayagraj Junction is a major railway station in North India, situated in the heart of the city, and is well-connected to all major cities in India.
              </p>

              <h3>By Bus</h3>
              <p>
                Prayagraj has excellent road transport services. UPSRTC buses operate to many cities in Uttar Pradesh. From Prayagraj, bus services are available to Lucknow (200 km), Kanpur (200 km), Delhi (650 km), Kolkata (800 km), and more.
              </p>
              
              <div className="section-title" style={{ marginTop: '5rem' }}>
                <h2>About the City</h2>
              </div>
              <p>
                Prayagraj is a significant cultural, religious, and educational hub. The city is defined by the confluence of three rivers—Ganga, Yamuna, and the mythical Saraswati. It is also famous for producing 7 out of 15 Indian Prime Ministers and housing important administrative, military, and research headquarters.
              </p>

              <h3>Climate</h3>
              <p>October: Moderately cold, with temperatures ranging from 15℃ to 35℃.</p>

              <h3>Languages Spoken</h3>
              <p>Hindi, Urdu, and English</p>

              <h3>Tourist Attractions</h3>
              <p>
                Sangam (the confluence of three rivers), All Saints Cathedral, Alfred Park, Khusro Bagh, Yamuna Bridge, Public Library, Allahabad University, etc.
              </p>

              <p>
                For more information, visit the <a href="https://uptourism.gov.in/" target="_blank" rel="noopener noreferrer">Uttar Pradesh Tourism</a> website.
              </p>

              {/* Added content begins here */}
              <div className="section-title" style={{ marginTop: '5rem', marginBottom:'2rem' }}>
                <h2>The Sangam City</h2>
              </div>
              <img src='./img/bridge.jpg' className='img-responsive' style={{ width:'100%' , height:'50rem' , marginBottom:'4rem'}} alt='' />{' '}
              <p>
                Prayagraj is the sacred city where three greatest rivers of India meet, and continue their journey 
                further. The city's original name Prayaga or "place of sacrifice" comes from its location at the 
                sacred union (Sangam) of these three rivers. Sangam is the Sanskrit word for confluence. 
                Triveni Sangam, in Allahabad, is the confluence of two physical rivers, Ganga and Yamuna, and 
                the invisible or mythical river Saraswati. The point of confluence is a sacred place for Hindus. 
                A bath here is said to wash away all of one's sins and free one from the cycle of rebirth. 
                Allahabad is supposed to be the second-oldest city in India, and it finds its place in many holy 
                Hindu scriptures.
              </p>

              <h3>Weather</h3>
              <p>
                The month of March marks the onset of summers in North India. The average temperature in Allahabad 
                in March is fairly hot at 24.5°C with a minimum of 16°C and a maximum around 30°C.
              </p>

              <h3>Tourist Attractions</h3>
              <p>
                The "Kumbh Nagari" Allahabad is a major tourist attraction in India, drawing visitors from all over the world. 
                The major tourist attractions in the city are:
              </p>
              <ul style={{ color:'black' }}>
                <li><strong>Allahabad Fort:</strong> Situated on the bank of the Yamuna, near Sangam, this magnificent fort was built by Akbar in 1583.</li>
                <li><strong>Ashoka Pillar:</strong> Stands tall inside the Allahabad Fort; it is a polished sandstone pillar built by Ashoka.</li>
                <li><strong>Swaraj Bhawan and Anand Bhawan:</strong> Legacies of Motilal Nehru, a freedom fighter and father of Jawaharlal Nehru, dedicated to the nation by them.</li>
                <li><strong>Allahabad Museum:</strong> Near Chandra Shekhar Azad Park, preserves the paintings of Nicholas Roerich, terracotta figurines, Rajasthani miniatures, coins, and stone sculptures from the 2nd century BC till date.</li>
                <li><strong>Varanasi:</strong> An ancient, religious, and culturally rich city on the banks of the Ganges, located 120 km from Allahabad.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
