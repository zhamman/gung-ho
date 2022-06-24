import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useState } from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-container">
        <div className="nav-section">
          <ul>
            <Link to="/work">Work</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/about"> About </Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <div className="email-section">
          <p>Interested in working with us?</p>
          <a href="mailto:zhamman14@gmail.com" className="underline">
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
