import React, { useEffect } from "react";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";
import Partners from "../Pages/Home/Partners";
import Work from "../Pages/Home/Work";
import Work2 from "../Pages/Home/Work2";
import WorkPage from "../Pages/Work/WorkPage";
import AboutPage from "../Pages/About/AboutPage";

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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home slides={VideoSlider} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:id" element={<Video />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
