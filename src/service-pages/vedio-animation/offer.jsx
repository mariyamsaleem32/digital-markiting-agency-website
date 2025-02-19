import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./styles.css";
import character from '../../assets/Images/charecter.jpeg';
import twoD from '../../assets/Images/2d.jpeg';
import threeD from '../../assets/Images/3d.jpeg';
import motion from '../../assets/Images/motion.jpeg';
import explain from '../../assets/Images/explain.jpeg';
import whiteboard from '../../assets/Images/whiteboard.jpeg';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Character Animation",
    description:
      "We utilize various characters' 3D and 2D features to explain your message in a video. Our team utilizes the idea of a real interface and puts in more impressive feels.",
    image: character,
  },
  {
    title: "2D Animation",
    description:
      "Our specialists craft the best 2D animatronics videos by utilizing the best objects and other fundamentals. These objects are skillfully animated to explain your message in a very illustrative manner.",
    image: twoD,
  },
  {
    title: "3D Animation",
    description:
      "Our Firm not only understands the requirement of designs but probe into clients’ mind & their hearts, know their dreams, expectations and put their years of expertise to visualize. Through 3D Walkthrough Animation as if the Client having tour into the real world of his dream Home.",
    image: threeD,
  },
  {
    title: "Motion Graphics",
    description:
      'We produce inspiring, inventive 2D and 3D infographic videos focused on your business goals treating every job with the same high level of care and attention whatever the budget.',
    image:motion,
  },
  {
    title: "Explainer Vedios",
    description:
      "We integrate live video footage with different elements that are tracked to the video. Our team brings the idea of real interaction and a more immersive feel for your video.",
    image: explain,
  },
  {
    title: "Whiteboard Animation",
    description:
      "We use different concepts and ideas to explain what you desire with our whiteboard animations. Our team brings the idea of real interaction and a more immersive feel for your video",
    image:whiteboard,
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
