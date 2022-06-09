import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useRef } from "react";
import gsap from "gsap";

const App = () => {
  const [preloader, setPreloader] = useState(true);
  let word1 = useRef(null);
  let word2 = useRef(null);
  let sub = useRef(null);
  let preload = useRef(null);

  useEffect(() => {
    if (preloader === true) {
      gsap.to(preload, {
        duration: 0,
        css: { display: "flex" },
      });
      reveal(word1, word2);
      slideIn(sub);
    } else if (preloader === false) {
      gsap.to(preload, {
        duration: 1,
        opacity: 0,
        // height: 0,
        ease: "power3.inOut",
      });
      gsap.to(preload, {
        duration: 0.8,
        css: { display: "none" },
      });
      gsap.to([word1, word2, sub], {
        duration: 0.4,
        opacity: 0,
      });
      // slideUp(word1);
    }
  });

  const slideIn = el1 => {
    gsap.from([el1], {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 1.5,
    });
  };

  const reveal = (el1, el2, el3) => {
    gsap.from([el1, el2, el3], {
      delay: 0.5,
      opacity: 0,
      height: 0,
      stagger: 0.4,
      duration: 1.5,
    });
  };

  const slideUp = el1 => {
    gsap.from(el1, {
      opacity: 0,
      y: -1000,
      stagger: 0.2,
      duration: 0.3,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  });

  return (
    <>
      <div className="loader-container" ref={el => (loadScreen = el)}>
        <div className="loader-wrapper absolute" ref={el => (preload = el)}>
          <h1>
            {" "}
            <span ref={el => (word1 = el)}>Gung</span>
            <span ref={el => (word2 = el)}>-Ho</span>{" "}
          </h1>
          <h4 ref={el => (sub = el)}>Films</h4>
        </div>
      </div>

      <div className="app-container">
        <Router>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
