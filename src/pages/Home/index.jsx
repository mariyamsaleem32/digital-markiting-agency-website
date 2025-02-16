import { useState } from "react";
import { HomePageText } from './data';  
import Slideshow from "../../components/Slideshow";
import "./style.css";
import  aboutus  from "../../assets/Images/about-us.jpg";
import  test  from "../../assets/Images/clients.jpeg";
import { FaPalette, FaLaptopCode, FaBullhorn, FaMobileAlt, FaCogs, FaVideo } from 'react-icons/fa';
import { Link } from "react-router";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <section>
        <Slideshow />
        {/* Header 2  about */}
        <div className="abouthome">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={aboutus} className="img-fluid mt-5 pt-5" alt="aboutus" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
      <div className="abouthome">
        <h6 className="mt-3">{HomePageText.about_subheader}</h6>
        <h4 className="mt-3">{HomePageText.about_header}</h4>
        <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
        <p className="text-justify">{HomePageText.about_des2}</p>
        {showMore && (
          <>
            <p className="text-justify">{HomePageText.about_des3}</p>
            <p className="text-justify">{HomePageText.about_des4}</p>
          </>
        )}
            <button style={{
                  background:'blue',
                  color:'white',
                  
                }} className="btn readmore mt-3" onClick={handleReadMore}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
            </div>
          </div>
        </div>

   {/* Header 3 services */}
<div className="serviceshome">
  <div className="container">
    <div className="servicesheader">
      <h6>{HomePageText.serviceshome_subheader}</h6>
      <h4>{HomePageText.serviceshome_header}</h4>
      <p>{HomePageText.serviceshome_subheader1}</p>
    </div>
    <div className="row">
      {/* Creative Identity */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaPalette className="icon1" />
          <h4>{HomePageText.services_box_title1}</h4>
          <p>{HomePageText.services_box_des1}</p>
          <button className="btn learn-more-btn"><Link to={'/creative-identity'}>Learn More</Link></button>
        </div>
      </div>

      {/* Custom Website */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaLaptopCode className="icon2" />
          <h4>{HomePageText.services_box_title2}</h4>
          <p>{HomePageText.services_box_des2}</p>
          <button className="btn learn-more-btn"><Link to={'/custom-website'}>Learn More</Link></button>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaBullhorn className="icon3" />
          <h4>{HomePageText.services_box_title3}</h4>
          <p>{HomePageText.services_box_des3}</p>
          <button className="btn learn-more-btn"><Link to={'/digital-marketing'}>Learn More</Link></button>
        </div>
      </div>

      {/* Mobile Apps */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaMobileAlt className="icon3" />
          <h4>{HomePageText.services_box_title4}</h4>
          <p>{HomePageText.services_box_des4}</p>
          <button className="btn learn-more-btn"><Link to={'/mobile-apps'}>Learn More</Link></button>
        </div>
      </div>

      {/* Software Development */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaCogs className="icon2" />
          <h4>{HomePageText.services_box_title5}</h4>
          <p>{HomePageText.services_box_des5}</p>
          <button className="btn learn-more-btn"><Link to={'/software-development'}>Learn More</Link></button>
        </div>
      </div>

      {/* Video Animation */}
      <div className="col-lg-4 col-md-4 col-6">
        <div className="services-box-home m-3">
          <FaVideo className="icon1" />
          <h4>{HomePageText.services_box_title6}</h4>
          <p>{HomePageText.services_box_des6}</p>
          <button className="btn learn-more-btn"><Link to={'/vedio-animation'} >Learn More</Link></button>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Header 4 test */}
        <div className="home-test">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div>
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                  Our clients consistently praise us for delivering outstanding digital marketing solutions. Here’s a glimpse of their feedback:

"The team transformed our online presence and boosted our growth with innovative strategies and exceptional quality of work."

"We’re thrilled with the responsive design and market-savvy approach. Their work is top-notch and results-driven."

"A game-changer for our business. Their tailored strategies have delivered remarkable ROI and surpassed our expectations."

"From SEO to social media campaigns, their expertise is unmatched. We trust them to consistently deliver quality results."

At visualimaginary, we’re dedicated to providing high-quality, results-oriented solutions that help our clients succeed.

                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="team" style={{
                  width:'100%',
                  height:'100%'
                }} />
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
  );
}

export default Home;
