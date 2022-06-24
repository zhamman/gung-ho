import React from "react";
import "./Partners.scss";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="partner-container">
      <Link to="/partners" className="partners-headers">
        <h1>Partners</h1>
        <p>Some of Our Production Partners</p>
      </Link>
      <div className="logo-container">
        <div className="row">
          <div className="box">
            <img
              src={require("../../media/images/logos/art-partner.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/Anonymous-content.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/Believe-media-logo.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/missing+pieces+logo.png")}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img
              src={require("../../media/images/logos/partizanlogo.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/Pulse-films.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/tool-logo.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/radicalmedia.png")}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img
              src={require("../../media/images/logos/stink-logo.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/SMUGGLER_Logo.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/pretty-bird.png")}
              alt=""
            />
          </div>
          <div className="box">
            <img
              src={require("../../media/images/logos/Art+commerce.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
