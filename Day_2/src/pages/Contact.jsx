import React from 'react';
import '../assets/css/Contact.css'; // Import your CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Reach out to us using the contact information below.

      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Type your message"></textarea>

        <button type="submit">Submit</button>
      </form>
      </p>
        <div>
          <h1>
            <p>
              ...........................
                 
            </p>
          </h1>
        </div>
      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p>info@chessacademy.com</p>
        </div>

        <div className="info-item">
          <h3>Mobile Number</h3>
          <p> 089391 71287</p>
        </div>

        
        
        
        
        
        <div className="info-item">
          <h3>Location</h3>
          <p>No 15, Vaidyaraman Street, T Nagar, Chennai - 600017 (Near Bjp Office))</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
