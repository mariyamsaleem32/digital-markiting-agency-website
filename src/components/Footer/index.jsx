import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Space, Typography, Button } from 'antd';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AppQR from '../QRcode';
import './styles.css';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <>
      <div className="footer-container" style={{ backgroundColor: '#333', color: '#fff' }}>
        <div className="container">
          <Row gutter={[16, 16]} justify="space-between">
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: 'white' }}>Our Office</Title>
              <Text className="footer-text"><FaMapMarkerAlt /> Karachi, Pakistan</Text><br />
              <Text className="footer-text"><FaPhoneAlt /> 0320 7707187</Text><br />
              <Text className="footer-text"><FaEnvelope /> info.visualimagery@gmail.com</Text><br />
              <Space style={{marginTop:'10px'}}>
                <Button 
                  icon={<FaWhatsapp />} 
                  href="https://wa.me/923132403968" 
                  target="_blank" 
                  style={{ backgroundColor: '#25D366', color: 'white', borderRadius: '50%' }}
                />
                <Button 
                  icon={<FaFacebookF />} 
                  href="https://www.facebook.com/profile.php?id=100090462638801" 
                  target="_blank" 
                  style={{ backgroundColor: '#3b5998', color: 'white', borderRadius: '50%' }}
                />
                <Button 
                  icon={<FaInstagram />} 
                  href="https://www.instagram.com/visualimagery11?fbclid=IwY2xjawITOe1leHRuA2FlbQIxMAABHSRpTx8xSx6Z4DOuNJgOtPq5IWhxmp1qvJCG7cPeGPTwc-bqT04SMtFDJg_aem_xCAlOlMNtOgcizCRlBhLeA" 
                  target="_blank" 
                  style={{ backgroundColor: '#E4405F', color: 'white', borderRadius: '50%' }}
                />
              </Space>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: 'white' }}>Quick Links</Title>
              <Space direction="vertical">
                <Link to="/aboutus" style={{ color: 'white', textDecoration:'none' }}>About Us</Link>
                <Link to="/contactus" style={{ color: 'white', textDecoration:'none' }}>Contact Us</Link>
                <Link to="/services" style={{ color: 'white', textDecoration:'none' }}>Our Services</Link>
                <Link to="/faqs" style={{ color: 'white', textDecoration:'none' }}>Terms & Conditions</Link>
              </Space>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: 'white' }}>Our Services</Title>
              <Space direction="vertical">
                <Link to="/creative-identity" style={{ color: 'white',textDecoration:'none' }}>Creative Identity</Link>
                <Link to="/custom-website" style={{ color: 'white',textDecoration:'none' }}>Custom Website</Link>
                <Link to="/digital-marketing" style={{ color: 'white',textDecoration:'none' }}>Digital Marketing</Link>
                <Link to="/mobile-apps" style={{ color: 'white',textDecoration:'none' }}>Mobile Apps</Link>
                <Link to="/software-development" style={{ color: 'white',textDecoration:'none' }}>Software Development</Link>
                <Link to="/vedio-animation" style={{ color: 'white',textDecoration:'none' }}>Video Animation</Link>
              </Space>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <AppQR />
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-bottom" style={{ backgroundColor: '#2D3748', padding: '10px 0' }}>
        <Typography.Text style={{ color: 'white', textAlign: 'center', display: 'block' }}>
          @your site all rights reserved
        </Typography.Text>
      </div>
    </>
  );
}

export default Footer;
