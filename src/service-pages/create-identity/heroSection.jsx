import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <Title level={2} className="hero-title">CREATIVE <span className="highlight">IDENTITY</span></Title>
        <Paragraph className="hero-subtitle">
          World’s Iconic Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
