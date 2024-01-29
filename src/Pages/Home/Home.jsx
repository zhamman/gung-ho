import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { VideoSlider } from "../../data/videoSlider";
import { motion } from "framer-motion";
import { FiArrowDownLeft } from "react-icons/fi";
import { homeWorkData, homePartnersData } from "../../data/homeData";
import Contact from "../Contact/contactPage";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    nextSlide();
  }, 9000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="background-container">
        <div className="home-container">
          {VideoSlider.map((video, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={video.key}
              >
                {index === current && (
                  <div>
                    <video
                      autoPlay
                      playsInline
                      muted
                      loop
                      src={require(`../../media/videos-compressed/${video.src}`)}
                    />
                    <div to="work" className="home-titles">
                      <p className="first">{video.name}</p>
                      <p className="second">{video.subhead}</p>
                      <p className="third">{video.director}</p>
                    </div>
                  </div>
                )}
                <div className="mobile-render-home">
                  <h1>Gung-Ho Films</h1>
                  <img
                    src={require(`../../media/images/nightlyf-bg.jpg`)}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <About />
      <Work2 />
      <Partners />
      <Contact />
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-flex">
          <img src={require(`../../media/images/fun/film.png`)} alt="" />
          <div className="about-desciption">
            <p className="large-text">
              <span className="red">We are Gung-ho Films,</span> the leading
              production services company in China and Hong Kong. Founded in
              2001, Gung-Ho Films has consistently provided high-quality support
              to top film and TV production companies from around the world.
              With a smart and dedicated bilingual staff, Gung-Ho provides
              world-class support to all types and sizes of international
              productions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work2 = () => {
  return (
    <div className="work-container">
      <Link to="/work" className="heading">
        <h1>
          WORK
          <FiArrowDownLeft />
        </h1>
        <p>Click to see all our work</p>
      </Link>
      <div className="work-col">
        {homeWorkData.map((work, i) => (
          <Link to="/work" className="block" key={work.key + i}>
            <div className="image-hover-zoom">
              <video
                autoPlay
                playsInline
                muted
                loop
                src={require(`../../media/videos-compressed/${work.videoUrl}`)}
              />
              <img
                className="mobile-media"
                src={require(`../../media/images/thumbnails/${work.url}`)}
                alt=""
              />
            </div>
            <div className="text">
              <h2>{work.text1}</h2>
            </div>{" "}
          </Link>
        ))}
      </div>
      <div className="all">
        <Link to="/work">
          All <div /> Work
        </Link>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="partner-container">
      <Link to="/partners" className="partners-headers">
        <h1>Our Partners</h1>
        <p>Some of Our Production Partners</p>
      </Link>
      <div className="logo-container">
        {homePartnersData.map((partner, i) => (
          <div className="box" key={partner.key}>
            <img
              src={require(`../../media/images/logos/${partner.link}`)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
