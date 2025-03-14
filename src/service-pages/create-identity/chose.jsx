import React from "react";
import { Typography, Row, Col } from "antd";
import "./styles.css";
import { BulbOutlined, ExperimentOutlined, ReloadOutlined, SyncOutlined, RocketOutlined, ThunderboltOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const features = [
    {
      icon: <BulbOutlined className="feature-icon" />,
      title: "IDEA Generation",
      description: "We cultivate the most groundbreaking and distinct ideas, ensuring that creativity and innovation remain at the forefront of the industry.",
    },
    {
      icon: <ExperimentOutlined className="feature-icon" />,
      title: "COUNTLESS Experiments",
      description: "Prior to launch, our services undergo a limitless series of tests to guarantee safety, originality, and optimal user experience.",
    },
    {
      icon: <ReloadOutlined className="feature-icon" />,
      title: "UNLIMITED Revisions",
      description: "Prototyping plays a pivotal role in our success. Our services are never launched until they have been rigorously tested and refined numerous times.",
    },
    {
      icon: <SyncOutlined className="feature-icon" />,
      title: "STREAMLINED Process",
      description: "We adhere to a seamless process of design, development, and delivery, ensuring a 100% satisfaction guarantee at every step.",
    },
    {
      icon: <RocketOutlined className="feature-icon" />,
      title: "PRE-LAUNCH Marketing",
      description: "Our pre-launch strategy ensures the right message reaches the target audience, creating anticipation before market entry.",
    },
    {
      icon: <ThunderboltOutlined className="feature-icon" />,
      title: "POST-LAUNCH Marketing",
      description: "Our post-launch services connect you with your audience, amplifying your market presence and driving the success of your launch.",
    },
  ];
  

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <Title level={2} className="choose-us-heading">Why <span className="highlight">CHOOSE US</span></Title>
      <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
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
