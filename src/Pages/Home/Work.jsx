import React from "react";
import "./Work.scss";
import { FiArrowDownLeft } from "react-icons/fi";

const Work = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1>
          Work <FiArrowDownLeft />
        </h1>
      </div>
      <div className="work-display">
        <div className="left-side">
          <div className="block">
            <img src={require("../../media/images/her-crop.jpg")} alt="" />
            <h3>"her"</h3>
            <p>Feature Film</p>
          </div>
          <div className="block">
            <img src={require("../../media/images/snowden.png")} alt="" />
            <h3>"Snowden"</h3>
            <p>Feature Film</p>
          </div>
        </div>
        <div className="right-side">
          <div className="block">
            <img src={require("../../media/images/vogue-crop.jpeg")} alt="" />
            <h3>"Vogue" - Mario Testino Special Edition</h3>
            <p>Photography</p>
          </div>
          <div className="block">
            <img src={require("../../media/images/adidas2-crop.jpeg")} alt="" />
            <h3>"Adidas"</h3>
            <p>TV Commercial</p>
          </div>
        </div>
        <div className="middle">
          <div className="block">
            <img src={require("../../media/images/vogue-crop.jpeg")} alt="" />
            <h3>"Vogue" - Mario Testino Special Edition</h3>
            <p>Photography</p>
          </div>
          <div className="block">
            <img src={require("../../media/images/adidas2-crop.jpeg")} alt="" />
            <h3>"Adidas"</h3>
            <p>TV Commercial</p>
          </div>
        </div>
      </div>
      <div className="view-more-btn">
        <p>View More</p>
      </div>
    </div>
  );
};

export default Work;
