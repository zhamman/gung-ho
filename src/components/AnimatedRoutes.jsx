import React, { useEffect, useRef, useState } from "react";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";
import Partners from "../Pages/Home/Partners";
import Work2 from "../Pages/Home/Work2";
import WorkPage from "../Pages/Work/WorkPage";
import AboutPage from "../Pages/About/AboutPage";
import Contact from "../Pages/Contact/contact";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { VideoSlider } from "../media/videos/videoSlider";
import Video from "../Pages/Work/Video/Video";
import "./AnimatedRoutes.scss";
import PartnersPage from "../Pages/Partners/PartnersPage";
import locomotiveScroll from "locomotive-scroll";
import ScrollToTop from "./ScrollToTop";
// import WorkPage2 from "../Pages/Work/WIP/WorkPage2";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home slides={VideoSlider} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:id" element={<Video />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
