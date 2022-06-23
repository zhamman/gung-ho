import React, { useEffect } from "react";
import "./AboutPage.scss";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const AboutPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [useLocation().pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        // transition={{ delay: 0.1 }}
        className="aboutPage-container"
      >
        <div className="about-header">Hi we're Gung-Ho Films,</div>
        <div className="about-description">
          <p className="large-text">
            Gung-Ho Films is the leading production services company in China
            and Hong Kong. Founded in 2001, Gung-Ho Films has consistently
            provided high-quality support to top film and TV production
            companies from around the world.
          </p>
          <div className="sub-text">
            <p className="p2">
              Gung-Ho Films is extremely privileged to have worked with many
              award-winning directors, cinematographers, and photographers,
              including Alejandro Iñárritu, Spike Jonze, Oliver Stone, Davis
              Guggenheim, Rupert Sanders, Lance Acord, Louis CK, Emmanuel
              Lebeski, Wally Pfister, Claudio Miranda, Mario Testino, Annie
              Liebovitz, Patrick Demarchelier, etc.
            </p>
            <p>
              With a smart and dedicated bilingual staff, Gung-Ho provides
              world-class support to all types and sizes of international
              productions.
            </p>
          </div>
        </div>
        <div className="about-images">
          <div className="about-box">
            <img
              src={require("../../media/images/abt-img/AmandaBi.png")}
              alt=""
            />
            <p>Amanda Bi</p>
            <p className="sub-name">Founder</p>
          </div>
          <div className="about-box">
            <img
              src={require("../../media/images/abt-img/LucyLu.png")}
              alt=""
            />
            <p>Amanda Lu</p>
            <p className="sub-name">Exec Producer</p>
          </div>
          <div className="about-box">
            <img
              src={require("../../media/images/abt-img/MichaelMcDermott.png")}
              alt=""
            />
            <p>Michael Mcdermott</p>
            <p className="sub-name">Exec Producer</p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
