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
        <Title level={3} className="hero-heading">
          Website Design & Development Services
        </Title>
        <Paragraph className="hero-description">
          Our designed and developed websites look beautiful across multiple devices. Web design and development are the services that move the web forward with innovation, creativity, and a focus on users of the web. We work together with our clients – creating long-lasting partnerships – to build solutions that truly engage and inspire.
        </Paragraph>
      </div>
    </div>
  );
};

export default HeroSection;
