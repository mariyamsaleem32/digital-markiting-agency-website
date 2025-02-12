import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="vedio-hero-container">
      <div className="hero-overlay">
        <Title id='mobile-head' level={2} className="hero-title">VEDIO <span className="highlight">ANIMATION</span></Title>
        <Paragraph className="hero-subtitle" style={{fontSize:'28px',fontWeight:'bold',color:'white',fontFamily:'monospace'}}>
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
