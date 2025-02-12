import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="mobile-hero-container">
      <div className="hero-overlay">
        <Title id="mobile-style" level={2} className="hero-title">MOBILE <span className="highlight">APPS</span></Title>
        <Paragraph id='app-para-style' className="hero-subtitle">
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
