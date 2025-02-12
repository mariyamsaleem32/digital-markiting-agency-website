import React, {useState} from "react";
import aboutus from "../../assets/Images/about-us.jpg";
import { AboutPageText } from "./data";
import './styles.css';

export default function Aboutus() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="about-home">
      <div className="page-title-area">
        <h1>About Us</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 pt-5">
            <img src={aboutus} className="img-fluid mt-5 pt-5" alt="aboutus" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="abouthome">
              <h6 className="mt-3">{AboutPageText.about_subheader}</h6>
              <h4 className="mt-3">{AboutPageText.about_header}</h4>
              <p className="mt-3 text-justify">{AboutPageText.about_des1}</p>
              <p className="text-justify">{AboutPageText.about_des2}</p>
                 {showMore && (
                        <>
                          <p className="text-justify">{AboutPageText.about_des3}</p>
                          <p className="text-justify">{AboutPageText.about_des4}</p>
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
  );
}
