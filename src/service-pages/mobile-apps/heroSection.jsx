import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="mobile-hero-container">
      <div className="hero-overlay">
        <Title  style={{fontSize:'50px',fontWeight:'bold'}} level={2} className="hero-title">MOBILE <span className="highlight">APPS</span></Title>
        <Paragraph className="hero-subtitle" style={{fontSize:'28px',fontWeight:'bold',color:'white',fontFamily:'monospace'}}>
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
