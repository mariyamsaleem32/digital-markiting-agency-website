import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./styles.css";
import Automation from '../../assets/Images/automation.jpeg';
import enterprise from '../../assets/Images/portal.jpeg';
import ERP from '../../assets/Images/erp.jpeg';
import ESolutions from '../../assets/Images/e-com.png';
import CRM from '../../assets/Images/crm.png';
import Custom from '../../assets/Images/custom.jpeg';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Business Automation System",
    description:
      "We are the source of generating the most iconic and unique ideas to make sure that creativity and innovation never fade away from the industry. Our work is based on the imagination and decision-making of industry specialists.",
    image: Automation,
  },
  {
    title: "Enterprise Portals",
    description:
      "We develop unique and superior quality enterprise portals to improve the quality of communication within the organizations of any company. Our enterprise portals allow organizations to integrate information, employees, and all major process across the organizational boundaries.",
    image: enterprise,
  },
  {
    title: "ERP Solutions",
    description:
      "Enterprise resource planning simplifies your business processes. Our ERP management information system integrates areas such as planning, purchasing, inventory, sales, marketing, finance, and human resources. From implementation to consulting and support we offer all the services related to ERP systems.",
    image: ERP,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "E-commerce is the best and easiest way of business expansion. Whether you’re a business to business or business to consumer we offer full-fledged e-commerce solutions. Our customized advice and consultation help you in getting maximum results from internet business.",
    image:ESolutions,
  },
  {
    title: "CRM Solutions",
    description:
      "With CRM systems you can identify, understand, and assist your clients. Our CRM system enables you to effectively complete the following business processes: collecting and maintaining customer data, customer interaction, access business information, automate sales. Our system focuses on consistent interaction with current and potential customers.",
    image: CRM,
  },
  {
    title: "Custom Development",
    description:
      "We offer a full range of custom software development services for a wide variety of verticals and business domains. No matter if you’re an enterprise or a start-up, we provide software development solutions on all scales. We understand your industry and company processes before starting any development work.",
    image:Custom,
  },
];

const Offer = () => {
  return (
    <>
      <div className="container">
        <Title level={2} className="heading">
          What Do <span className="highlight">WE OFFER</span>
        </Title>
        <Paragraph className="subheading">
        We offer satisfaction at its fullest. The work we do is the perfect example of how a digital agency should operate when at its fullest. Our every service given to our customer is revised and experimented for more than a 100 time to make sure that they are satisfied.
        </Paragraph>
      <Row gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
                  {services.map((service, index) => (
                   <Col xs={24} sm={12} md={12} lg={8} key={index} style={{ display: "flex" }}>
                  <Card
                   hoverable
                   cover={<img alt={service.title} src={service.image} className="card-image" />}
                   className="custom-card"
                 >
                   <Title id="head" level={4}>{service.title}</Title>
                   <Paragraph className="text">{service.description}</Paragraph>
                 </Card>
                </Col>
                  ))}
                 </Row>
      </div>
    </>
  );
};

export default Offer;
