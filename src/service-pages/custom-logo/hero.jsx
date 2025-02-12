import React from "react";
import { Typography } from "antd";
import "./custom.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="custom-hero-container">
      <div className="custom-hero-overlay">
        <Title  id="style" level={2} className="hero-title">CUSTOM <span className="highlight">WEBSITES</span></Title>
        <Paragraph className="hero-subtitle" id="pera-style">
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
