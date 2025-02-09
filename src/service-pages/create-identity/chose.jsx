import React from "react";
import { Typography, Row, Col } from "antd";
import "./styles.css";
import { BulbOutlined, ExperimentOutlined, ReloadOutlined, SyncOutlined, RocketOutlined, ThunderboltOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <BulbOutlined className="feature-icon" />,
    title: "IDEA Generation",
    description: "We generate the most iconic and unique ideas to ensure creativity and innovation never fade away from the industry.",
  },
  {
    icon: <ExperimentOutlined className="feature-icon" />,
    title: "COUNTLESS Experiments",
    description: "Before launching, our services are experimented with unlimited times to ensure safety, uniqueness, and user-friendliness.",
  },
  {
    icon: <ReloadOutlined className="feature-icon" />,
    title: "UNLIMITED Revisions",
    description: "Prototyping is key to our success. Our service is never launched until it has been experimented with countless times.",
  },
  {
    icon: <SyncOutlined className="feature-icon" />,
    title: "STREAMLINE Process",
    description: "We follow a streamlined process of designing, development, and delivery to guarantee 100% satisfaction.",
  },
  {
    icon: <RocketOutlined className="feature-icon" />,
    title: "PRE-LAUNCH Marketing",
    description: "Our Pre-Launch service ensures the right message reaches the target audience before market entry.",
  },
  {
    icon: <ThunderboltOutlined className="feature-icon" />,
    title: "POST-LAUNCH Marketing",
    description: "Our post-launch services connect you with your targeted audience to help market your success.",
  },
];

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <Title level={2} className="choose-us-heading">Why <span className="highlight">CHOOSE US</span></Title>
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div className="feature-card">
              {feature.icon}
              <Title level={4}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChooseUs;
