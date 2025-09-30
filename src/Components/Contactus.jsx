import React from 'react'
import '../CSS/Contactus.css'
import contactbanner from '../assets/contactbanner.png'
import { Link } from 'react-router-dom'

function Contactus() {
  return (
    <>

      <div className="banner-section">
        <div className="banner">
          <img src={contactbanner} alt="bannerimage" />
          <h2 className='banner-middle'><Link to="/">Home</Link> | <Link to="#">Contactus</Link></h2>
          <h3 className='banner-top'>+91-9840014721</h3>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <h2 className="form-title">Enquiry Us</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mobile No</label>
                <input type="text" placeholder="Enter mobile number" />
              </div>
              <div className="form-group">
                <label>Services</label>
                <select>
                  <option>Choose Service</option>
                  <option>Pre-Bid Service</option>
                  <option>Contract Execution Services</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="3" placeholder="Enter your message"></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2937363579513!2d80.20186902484332!3d13.080561187244953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265befc6085cd%3A0x88d7fbc9a8cccda3!2sSanthosh%20Apartments%2C%20AL%20block%2C%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1758998165868!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


    </>
  )
}

export default Contactus