import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <Title id='style' level={2} className="hero-title">CREATIVE <span className="highlight">IDENTITY</span></Title>
        <Paragraph id="pera-style"  className="hero-subtitle">
        The World’s Premier Digital Marketing Agency
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
