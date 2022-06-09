import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.scss";
import { VideoSlider } from "../../media/videos/videoSlider";
import About from "./About";
import Work2 from "./Work2";
import Partners from "./Partners";
import Footer from "../../components/Footer";

const Home = ({ slides }) => {
  const scrollToPosition = (top = 0) => {
    try {
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    } catch (_) {
      window.scrollTo(0, top);
    }
  };

  useEffect(() => {
    scrollToPosition();
  }, [useLocation().pathname]);

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    nextSlide();
  }, 11500);

  return (
    <div>
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
                    <div className="home-titles">
                      <p className="first">{video.name}</p>
                      <p className="second">{video.subhead}</p>
                      <p className="third">{video.director}</p>
                    </div>
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
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
