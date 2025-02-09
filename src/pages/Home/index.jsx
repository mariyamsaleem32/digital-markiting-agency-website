import { useState } from "react";
import { HomePageText } from './data';  
import Slideshow from "../../components/Slideshow";
import "./style.css";
import  team1  from "../../assets/Images/team-1.jpeg";
import  team2  from "../../assets/Images/team-2.jpeg";
import  team3  from "../../assets/Images/team-3.jpeg";
import  team4  from "../../assets/Images/team-4.jpeg";
import  team5  from "../../assets/Images/team-5.jpeg";
import  team6  from "../../assets/Images/team-6.jpeg";
import  aboutus  from "../../assets/Images/about-us.jpg";
import  test  from "../../assets/Images/test.jpg";
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
        <button className="btn readmore mt-3" onClick={handleReadMore}>
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
          <button className="btn learn-more-btn"><Link to={'/vedio-animation'}>Learn More</Link></button>
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
                <div className="">
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div>
            </div>
          </div>
        </div>

        {/* Header 5 team */}
        <div className="hometeam">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                  At visualimagery, our team is the heart of everything we do. We are a diverse group of digital marketing experts, creative thinkers, and problem solvers, all united by a passion for helping businesses grow. From strategists and designers to content creators and data analysts, each team member brings their unique skills and insights to the table, ensuring that your brand gets the attention it deserves. Together, we work collaboratively to deliver innovative solutions and outstanding results for every client we serve.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={team1} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">MARTIN SMITH</h3>
                      <span class="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team2} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Olivia</h3>
                      <span class="post">Marketing Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team3} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">FRANKLIN HARBET</h3>
                      <span class="post">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team4} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Miranda joy</h3>
                      <span class="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team5} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">LINDA ANDERSON</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team6} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">KRISTIANA</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </section>
      </>
  );
}

export default Home;
