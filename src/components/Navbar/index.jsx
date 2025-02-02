import React from "react";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa"; 
import './styles.css';
import { Button, Navbar, Nav, Container } from "react-bootstrap";  
// import "antd/dist/antd.css"; 

const Navbar = () => {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="nav-bg p-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MyBrand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FaBars style={{ fontSize: "24px" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/price">Price</Nav.Link>
              <Nav.Link as={Link} to="/team">Our Team</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary" className="ms-3">
            Get Started
          </Button>
        </Container>
      </Navbar>
      </>
    );
};

export default Navbar;
