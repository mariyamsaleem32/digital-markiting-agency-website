import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="software-hero-container">
      <div className="hero-overlay">
        <Title id="head-style" level={2} className="hero-title">SOFTWARE <span className="highlight">DEVELOPMENT</span></Title>
        <Paragraph className="hero-subtitle" id="software-para">
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
