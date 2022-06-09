import React from "react";
import "./Work2.scss";
import { FiArrowDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Work2 = () => {
  return (
    <div className="work-container">
      <div className="heading">
        <h1>
          OUR WORK <FiArrowDownLeft />
        </h1>
      </div>
      <div className="work-col">
        <Link to="/work/samsung" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/maxresdefault.jpeg")}
              alt=""
            />
          </div>
          <div className="text">
            <h2>Samsung</h2>
            <p>TV commercial</p>
          </div>{" "}
        </Link>
        <Link to="/work/adidas1" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/adidas.jpeg")}
              alt=""
            />
          </div>
          <div className="text">
            <h2>Adidas</h2>
            <p>TV commercial</p>
          </div>{" "}
        </Link>
        <Link to="/work/amazing-race" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/amazing_race.jpeg")}
              alt=""
            />
          </div>
          <div className="text">
            <h2>Amazing Race</h2>
            <p>Television</p>
          </div>{" "}
        </Link>
        <Link to="/work/her" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/her.png")}
              alt=""
            />{" "}
          </div>
          <div className="text">
            <h2>her</h2>
            <p>Feature Film</p>
          </div>
        </Link>
        <Link to="/work/ipad" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/ipad.jpeg")}
              alt=""
            />
          </div>
          <div className="text">
            <h2>Ipad Air</h2>
            <p>TV commercial</p>
          </div>{" "}
        </Link>

        <Link to="/work/better-late-than-never" className="block">
          <div className="image-hover-zoom">
            <img
              src={require("../../media/images/thumbnails/betterlate.jpeg")}
              alt=""
            />
          </div>
          <div className="text">
            <h2>Better Late Than Never</h2>
            <p>Television</p>
          </div>
        </Link>
      </div>
      <div className="all">
        <Link to="/work">
          All <div /> Work
        </Link>
      </div>
    </div>
  );
};

export default Work2;
