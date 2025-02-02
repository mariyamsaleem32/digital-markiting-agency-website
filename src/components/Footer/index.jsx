import React from "react";
import "./style.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Aboutus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Price">Price</a></li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li><a href="/">Career</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/Contactus">Contact Us</a></li>
                <li><Link to='/faq'>FAQ</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>your addres</li>
                <li>your number</li>
                <li>xyz@gmail.com</li>
                <li>your next number</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
export default Footer;