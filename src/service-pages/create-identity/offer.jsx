import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./styles.css";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Custom Logos",
    description:
      "A logo is a company's trademark that defines and distinguishes a business from another. It conveys the basic idea about your service or product to your audience.",
    image: "logo.jpg",
  },
  {
    title: "Appealing Brochures",
    description:
      "The main purpose of a brochure is to introduce the company to potential clients and inform them about products and services being offered.",
    image: "brochure.jpg",
  },
  {
    title: "Stationery Design",
    description:
      "What better way to flaunt your corporate logo than getting a set of stationery designed? It adds a personal touch and creates a sense of belonging.",
    image: "stationery.jpg",
  },
  {
    title: "Social Media Design",
    description:
      "A logo is a company's trademark that defines and distinguishes a business from another. It conveys the basic idea about your service or product to your audience.",
    image: "socialmedia.jpg",
  },
  {
    title: "Infographics Design",
    description:
      "Infographics make it easier for consumers to understand the information and let them digest important information.",
    image: "infographics.jpg",
  },
  {
    title: "Promotional Design",
    description:
      "The main purpose of a brochure is to introduce the company to your potential clients and inform them about products and services.",
    image: "promotional.jpg",
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
          We offer satisfaction to its fullest. The work we do is the perfect example of how a digital agency should operate.
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
                <Paragraph>{service.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Offer;
