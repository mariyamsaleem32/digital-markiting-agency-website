import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "antd/dist/reset.css";
import "./styles.css";
import androidApps from '../../assets/Images/android-apps.jpeg';
import iosApps from '../../assets/Images/ios-apps.jpeg';
import mobileGames from '../../assets/Images/mobile-games.jpeg';
import crossPlateform from '../../assets/Images/cross-plateform.jpeg';
import realityApps from '../../assets/Images/reality-apps.jpeg';
import IOT from '../../assets/Images/IOT-dev.jpeg';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Android Apps",
    description:
      "Developing state-of-the-art Android Applications for startups, enterprises, and individuals. visualimagery is well-known for its android based apps around the globe. Our Android Applications have always been on top to deliver what the audience desir",
    image: androidApps,
  },
  {
    title: "ios Apps",
    description:
      "Providing clients with high-value iOS apps, delivering elite users' experience is what we promise. Our iPhone and iPad apps are hallmarks of quality that are used by all iOS users around the world. We make sure to deliver the best user experience to your audience",
    image: iosApps,
  },
  {
    title: "Cross Plateform",
    description:
      "Our cross-platform application provides enhanced users' experience. We design and build smooth apps that run flawlessly on multiple platforms, ensuring a pitch-perfect experience. The functionality and features of our hybrid applications deliver a native-like user experience.",
    image: crossPlateform,
  },
  {
    title: "Augmented Reality",
    description:
      "It is a big game-changer in today's world. We create these apps to help you lay pieces of the real world in the virtual world. We hire top-of-the-line AR app developers to make sure that our clients receive something unique and exciting.",
    image:realityApps,
  },
  {
    title: "Mobile Games",
    description:
      "Mobile Gaming has evolved a lot in the past few years and visualimagery has helped its clients to keep up with the evolving gaming technology. Either it’s Android, iOS, Windows, or cross-platform games, our team of expert developers knows how to make the best use of technology.",
    image: mobileGames,
  },
  {
    title: "IOT Development",
    description:
      "IoT connects objects with the internet to make data access easier. We ensure that our IoT apps improve the market value of your business. We aim to move the world and our IoT services will make sure that our customers are always updated.",
    image:IOT,
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
        We offer satisfaction at its fullest. The work we do is the perfect example of how a digital agency should operate when at its fullest. Our every service given to our customer is revised and experimented for more than a 100 time to make sure that they are satisfied
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
