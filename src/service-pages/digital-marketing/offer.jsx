import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./styles.css";
import Repo_menegement from '../../assets/Images/reputation-management.jpeg';
import PPC from '../../assets/Images/PPC.jpeg';
import SEO from '../../assets/Images/SEO.jpeg';
import Social from '../../assets/Images/Social.png';
import App from '../../assets/Images/App-marketing.jpeg';
import Email from '../../assets/Images/email-marketing.jpeg';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Reputation Management",
    description:
      "A logo is a company's trademark that defines and distinguishes a business from another. It conveys the basic idea about your service or product to your audience.",
    image: Repo_menegement,
  },
  {
    title: "Pay Per Click",
    description:
      "The main purpose of a brochure is to introduce the company to potential clients and inform them about products and services being offered.",
    image: PPC,
  },
  {
    title: "Search Engine Optimization",
    description:
      "What better way to flaunt your corporate logo than getting a set of stationery designed? It adds a personal touch and creates a sense of belonging.",
    image: SEO,
  },
  {
    title: "Social Media Marketing",
    description:
      "A logo is a company's trademark that defines and distinguishes a business from another. It conveys the basic idea about your service or product to your audience.",
    image:Social,
  },
  {
    title: "App Marketing",
    description:
      "Infographics make it easier for consumers to understand the information and let them digest important information.",
    image: App,
  },
  {
    title: "Email Marketing",
    description:
      "The main purpose of a brochure is to introduce the company to your potential clients and inform them about products and services.",
    image:Email,
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
        We offer satisfaction to its fullest. The work we do is the perfect example of how a digital agency should operate when at its fullest. Our every service given to our customer is revised and experimented with more than 100 times to make sure that they are satisfied.
        </Paragraph>
        <Row gutter={[16, 16]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={12} lg={8} key={index}>
              <Card
                hoverable
                cover={<img alt={service.title} src={service.image} className="card-image" />}
                className="custom-card"
              >
                <Title level={4}>{service.title}</Title>
                <Paragraph className='text'>{service.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Offer;
