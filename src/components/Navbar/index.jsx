import React from "react";
import { Link } from "react-router";
import './app.js'
import './styles.css';

const NavigationBar = () => {
  return (
<div className="header" data-header>
    <div className="container">
   <h1>markiting</h1>
      <nav className="navbar container" data-navbar>
        <ul className="navbar-list">
          <li>
            <Link to={'/'}  className="navbar-link" data-nav-link>Home</Link>
          </li>
          <li>
            <Link to={'/aboutus'}  className="navbar-link" data-nav-link>About Us</Link>
          </li>
          <li>
            <Link to={'/services'}  className="navbar-link" data-nav-link>Services</Link>
          </li>
          <li>
            <Link to={'/portfolio'}  className="navbar-link" data-nav-link>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contactus'}  className="navbar-link" data-nav-link>Contact Us</Link>
          </li>
          <li>
            <Link to={'/contactus'} className="btn btn-primary">Get Started</Link>
          </li>
        </ul>
      </nav>
      <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" className="open"></ion-icon>
        <ion-icon name="close-outline" className="close"></ion-icon>
      </button>
    </div>
  </div>
  );
};

export default NavigationBar;
