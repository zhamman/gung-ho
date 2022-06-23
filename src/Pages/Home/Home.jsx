import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Home.scss";
import { VideoSlider } from "../../media/videos/videoSlider";
import About from "./About";
import Work2 from "./Work2";
import Partners from "./Partners";
import locomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../components/Footer";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    nextSlide();
  }, 11500);

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
                key={index}
              >
                {index == current && (
                  <div>
                    <video autoPlay muted loop src={video.src} />
                    <Link to={video.link} className="home-titles">
                      <p className="first">{video.name}</p>
                      <p className="second">{video.subhead}</p>
                      <p className="third">{video.director}</p>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <About />
      <Work2 />
      <Partners />
      <Footer />
    </motion.div>
  );
};

export default Home;
