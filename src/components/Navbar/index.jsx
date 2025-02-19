import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './styles.css';

const { Header } = Layout;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 528);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 528);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Show Drawer Menu Icon for small screens */}
        {isMobile ? (
          <button onClick={toggleMobileMenu} style={{ background: 'transparent', border: 'none', color: '#fff' }}>
            {isMobileMenuOpen ? <CloseOutlined style={{ fontSize: 24, color: 'white' }} /> : <MenuOutlined style={{ fontSize: 24, color: 'white' }} />}
          </button>
        ) : (
          // Desktop Menu
          <Menu theme="dark" mode="horizontal" style={{ flexGrow: 1, justifyContent: 'center' }}>
            <Menu.Item key="1">
              <Link to="/" className="nav-link">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/aboutus" className="nav-link">About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/services" className="nav-link">Services</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/contactus" className="nav-link">Contact</Link>
            </Menu.Item>
          </Menu>
        )}
      </Header>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={toggleMobileMenu}
        open={isMobileMenuOpen}
        width={250}
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <Menu mode="vertical" theme="dark">
          <Menu.Item key="1">
            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/aboutus" className="nav-link" onClick={toggleMobileMenu}>About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/services" className="nav-link" onClick={toggleMobileMenu}>Services</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contactus" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
