import React from 'react';
import { ServicesText } from "./data";
import { FaPalette, FaLaptopCode, FaBullhorn, FaMobileAlt, FaCogs, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router';
import './styles.css'

const Services = () =>{
  return (
    <div>
      <div className="serviceshome">
        <div className="page-title-area">
          <h1>Our Services</h1>
        </div>
        <div className="container">
          <div className="servicesheader">
            <h6>{ServicesText.serviceshome_subheader}</h6>
            <h4>{ServicesText.serviceshome_header}</h4>
            <p>{ServicesText.serviceshome_subheader1}</p>
          </div>
          <div className="row">
            {/* Creative Identity */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaPalette className="icon1" />
                <h4>{ServicesText.services_box_title1}</h4>
                <p>{ServicesText.services_box_des1}</p>
                <button className="btn learn-more-btn"><Link to={'/creative-identity'}>Learn More</Link></button>
              </div>
            </div>

            {/* Custom Website */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaLaptopCode className="icon2" />
                <h4>{ServicesText.services_box_title2}</h4>
                <p>{ServicesText.services_box_des2}</p>
                <button className="btn learn-more-btn"><Link to={'/custom-website'}>Learn More</Link></button>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaBullhorn className="icon3" />
                <h4>{ServicesText.services_box_title3}</h4>
                <p>{ServicesText.services_box_des3}</p>
                <button className="btn learn-more-btn"><Link to={'/digital-marketing'}>Learn More</Link></button>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaMobileAlt className="icon3" />
                <h4>{ServicesText.services_box_title4}</h4>
                <p>{ServicesText.services_box_des4}</p>
                <button className="btn learn-more-btn"><Link to={'/mobile-apps'}>Learn More</Link></button>
              </div>
            </div>

            {/* Software Development */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaCogs className="icon2" />
                <h4>{ServicesText.services_box_title5}</h4>
                <p>{ServicesText.services_box_des5}</p>
                <button className="btn learn-more-btn"><Link to={'/software-development'}>Learn More</Link></button>
              </div>
            </div>

            {/* Video Animation */}
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box-home m-3">
                <FaVideo className="icon1" />
                <h4>{ServicesText.services_box_title6}</h4>
                <p>{ServicesText.services_box_des6}</p>
                <button className="btn learn-more-btn"><Link to={'/vedio-animation'}>Learn More</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
