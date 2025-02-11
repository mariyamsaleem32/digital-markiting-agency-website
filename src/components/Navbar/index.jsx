import React, { useState } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  // State for toggling the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Layout>
      <Header style={{ background: '#333' }}>
        <div className="logo" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Mobile menu button */}
          <div className="mobile-menu">
            <button
              onClick={toggleMobileMenu}
              style={{ background: 'transparent', border: 'none', color: '#fff' }}
            >
              {isMobileMenuOpen ? (
                <CloseOutlined style={{ fontSize: 24, color: 'white' }} />
              ) : (
                <MenuOutlined style={{ fontSize: 24, color: 'white' }} />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <Menu theme="dark" mode="horizontal" style={{ flexGrow: 1, justifyContent: 'center' }}>
            <Menu.Item key="1">
              <Link to="/" style={{ color: 'white' }}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/aboutus" style={{ color: 'white' }}>About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/services" style={{ color: 'white' }}>Services</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/team" style={{ color: 'white' }}>Team</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/contactus" style={{ color: 'white' }}>Contact</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>

      {/* Mobile menu (Drawer) */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={toggleMobileMenu}
        visible={isMobileMenuOpen}
        width={250}
        style={{ backgroundColor: '#333' }}
      >
        <Menu mode="vertical" theme="dark">
          <Menu.Item key="1">
            <Link to="/" style={{ color: 'white' }}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/aboutus" style={{ color: 'white' }}>About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/services" style={{ color: 'white' }}>Services</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/team" style={{ color: 'white' }}>Team</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contactus" style={{ color: 'white' }}>Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
