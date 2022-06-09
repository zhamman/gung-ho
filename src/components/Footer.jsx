import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-container">
        <div className="nav-section">
          <ul>
            <Link to="/work">Work</Link>
            <Link to="/">Partners</Link>
            <Link to="/about"> About </Link>
            <Link to="/">Contact</Link>
          </ul>
        </div>
        <div className="email-section">
          <p>Interested in working with us?</p>
          <a href="/" className="underline">
            Shoot us an email
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Gung-Ho Films 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
