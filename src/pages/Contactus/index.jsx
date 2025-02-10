import React, { useState } from "react";
import "./style.css";
import contactimg from '../../assets/Images/cntact-img.jpg';
import { AiOutlineAim, AiOutlineComment, AiOutlineFieldTime } from "react-icons/ai";
import emailjs from 'emailjs-com';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled out before sending
    if (!formData.name || !formData.email || !formData.number || !formData.subject || !formData.message) {
      alert("Please fill in all the fields.");
      return;
    }
  
    emailjs
      .sendForm(
        'service_r2woz0o', // Your Service ID
        'template_evdou6n', // Your Template ID
        e.target,           // The form element (e.target will contain form data)
        'mTqm4hTXowGZysipF' // Your User ID
      )
      .then(
        (result) => {
          console.log('Message sent: ', result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log('Error: ', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  
  

  return (
    <div className="contact">
      <div className="page-title-area">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                <AiOutlineAim />
              </div>
              <h3>Our Address</h3>
              <p>xyz Karachi <br /> Pakistan</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                <AiOutlineComment />
              </div>
              <h3>Contact</h3>
              <p>03207707187<br /> +923132403968</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon">
                <AiOutlineFieldTime />
              </div>
              <h3>Hours of Operation</h3>
              <p>Monday - Friday: 10:00 - 19:00 <br /> Sunday & Saturday: 10:30 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="contact-header">
          <h6>GET IN TOUCH</h6>
          <h4>Ready to Get Started?</h4>
          <p>Our renowned corporation is defined by our people. Our sales executive are highly experienced to cater all the needs and want of our customers. We are always available for our customers and never fail to identify what they desire.</p>
        </div>

        <div className="row mt-2 pt-2">
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <img src={contactimg} className="img-fluid" alt="contact" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-form">
              <form id="contactForm" onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <br />
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <br />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <br />
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <br />
                    <button type="submit" className="btn-submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675417118!2d80.06892448836716!3d13.047487785642284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1618387834124!5m2!1sen!2sin"
            width="100%"
            height="550"
            loading="lazy"
            className="map-style p-0 m-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
