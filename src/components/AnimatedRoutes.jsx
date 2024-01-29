import Home from "../Pages/Home/Home";
import WorkPage from "../Pages/Work/WorkPage";
import AboutPage from "../Pages/About/AboutPage";
import Contact from "../Pages/Contact/contactPage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { VideoSlider } from "../data/videoSlider";
import "./AnimatedRoutes.scss";
import PartnersPage from "../Pages/Partners/PartnersPage";
import ScrollToTop from "./ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home slides={VideoSlider} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
