import React from "react";
import { Typography } from "antd";
import "./custom.css";

const { Title, Paragraph } = Typography;

const SubHero = () => {
    return (
        <div>
            <Title level={3} className="hero-heading">
          Website Design & Development Services
        </Title>
        <Paragraph className="hero-description">
        Our meticulously crafted and developed websites offer a visually stunning experience across a wide range of devices. Web design and development are integral services that propel the digital landscape forward through innovation, creativity, and a user-centric approach. We collaborate closely with our clients, fostering enduring partnerships, to create solutions that genuinely captivate and inspire.
        </Paragraph>
        </div>
    );
}

export default SubHero;
