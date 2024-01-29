import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={require("../media/images/gung-ho-logo.png")} alt="" />
          Gung-Ho <br /> Films
        </div>
        <div className="camera-png">
          <img src={require("../media/images/fun/camera.png")} alt="" />
        </div>
        <div className="camera-png2">
          <img src={require("../media/images/fun/camera.png")} alt="" />
        </div>
        <div className="nav-section">
          <div className="nav-map-header">Quick Links</div>
          <ul>
            <Link to="/work">Work</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/about"> About </Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <div className="email-section">
          <a href="mailto:abx@cyz.com" className="underline">
            Contact Us
          </a>
        </div>
      </div>
      <p className="copyright-footer">&copy; Gung-Ho Films 2024</p>
    </div>
  );
};

export default Footer;
