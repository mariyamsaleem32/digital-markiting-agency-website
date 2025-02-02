import React from 'react';
import { Link } from 'react-router';
import { FaFacebookSquare, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './styles.css';

const Footer = () => {
    return (
        <>
          <div className="footer-area">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h1>your brand name</h1>
                  <p className="footer-col-1-h">MAKE SOMETHING</p>
                  <p className="footer-col-1-p">YOU LOVE</p>
                </div>
                <div className="col-md-3 services_col">
                  <div className="inner_col">
                    <p className="footer-h">services</p>
                    <ul>
                      <li><Link to="/creative-identity">Creative Identity</Link></li>
                      <li><Link to="/custom-website">Custom Website</Link></li>
                      <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                      <li><Link to="/video-animation">Video Animation</Link></li>
                      <li><Link to="/mobile-apps">Mobile Apps</Link></li>
                      <li><Link to="/software-development">Software Development</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 quickLinks_col">
                  <div className="inner_col">
                    <p className="footer-h">quick links</p>
                    <ul>
                      <li><Link to={"/aboutus"}>About</Link></li>
                      <li><Link to={"/contactus"}>Contact us</Link></li>
                      <li><Link to={'/faqs'}>FAQ</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <p className="footer-h">Social links</p>
                  <ul className="social_media_icons">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100090462638801" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="icon" /> <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/923101046562" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon" /> <span>WhatsApp</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/mariyam-saleem-a227052b7//" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" /> <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area">
            <p>© your Technologies. All Rights Reserved.</p>
          </div>
        </>
    );
}

export default Footer;
