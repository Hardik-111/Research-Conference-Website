import React from 'react'

export const Venue = () => {
  return (
    <div id="venue" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Location</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3844953177157!2d81.85814557500693!3d25.493048126982088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acc204f1e8b89%3A0x54b6bb6baf00c8d1!2sMotilal%20Nehru%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1696493945671!5m2!1sen!2sin"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
              <a href="/venue" className="btn btn-custom btn-lg">About Accommodation and Travel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
