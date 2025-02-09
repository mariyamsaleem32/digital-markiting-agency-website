import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./custom.css";
import E_commerce from '../../assets/Images/e-Commerce.jpeg';
import singlePage from '../../assets/Images/single-page.jpeg';
import CMSIMG from '../../assets/Images/CMS-website.jpg';
import B2B from '../../assets/Images/B2B.jpeg';
import Web from '../../assets/Images/web-dev.jpeg'
import Custom from '../../assets/Images/custom-dev.jpeg'

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "E-Commerce Website",
    description:
      "With minimal investment and resources, you can establish a global brand presence that enhances your product and generates a substantial return on investment. visualimagery offers a comprehensive suite of features and benefits to online retailers and merchants, catering to diverse industries and driving growth across the board.",
    image: E_commerce,
  },
  {
    title: "Single Page Applications",
    description:
      "With minimal investment and resources, you can cultivate a global brand identity that elevates your product and delivers a robust return on investment. visualimagery provides a wide array of features and advantages to online retailers and merchants, offering solutions that are beneficial across various industries.",
    image: singlePage,
  },
  {
    title: "CMS Website",
    description:
      "Our Content Management System empowers users to effortlessly control and manage their website's content, regardless of their technical expertise. visualimagery enhances this experience, enabling anyone to operate a site with minimal guidance.",
    image: CMSIMG,
  },
  {
    title: "B2B & B2C Portals",
    description:
      "We develop business portals that empower you to expand your market reach and attract a broader client base. Additionally, we ensure seamless connections with clients across various regions of the globe. At visualimagery, we craft tailored strategies that address every aspect of your business needs, ensuring your success on a global scale.",
    image:B2B,
  },
  {
    title: "Web Development",
    description:
      "The initial impression is often the most lasting, which is why we meticulously craft websites that captivate visitors from their first interaction, ensuring continuous engagement. Our design and development process is strategically tailored to help you effectively reach and engage your target audience, unlocking the full potential of your online presence.",
    image: Web,
  },
  {
    title: "Custom Development",
    description:
      "We provide bespoke website development services tailored to reflect your business's unique identity. This approach enables us to craft a solution that is perfectly aligned with your business needs, rather than forcing your project into a one-size-fits-all solution.",
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
        We deliver unparalleled satisfaction. Our work exemplifies the optimal functioning of a digital agency at its peak potential. Each service we provide is meticulously refined and tested over 100 times to ensure it exceeds our customers' expectations.
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
                <Paragraph className="text" >{service.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Offer;
