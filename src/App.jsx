import React, { useEffect, useState } from "react";
import "./App.scss";
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

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  });

  return (
    <div>
      <div className="loader-container">
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
        <div className="app-scroll">
          <Router>
            <Header />
            <AnimatedRoutes />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
