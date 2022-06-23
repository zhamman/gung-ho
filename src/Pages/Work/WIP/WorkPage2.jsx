import React from "react";
import "./WorkPage2.scss";
import { allVideo } from "../Video/categories/allVideo";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkPage2 = () => {
  const [videos, setVideos] = useState(allVideo);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  console.log(filtered);

  useEffect(() => {
    setVideos(allVideo);
    // setFiltered(allVideo);
  });

  return (
    <div className="workpage2-container">
      <Filter
        videos={videos}
        setFiltered={setFiltered}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      />
      <motion.div layout className="all-work">
        <AnimatePresence>
          {filtered.map((img, index) => {
            return (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className="block"
              >
                <h2>{img.name}</h2>
                <Link to={`${img.id}`}>
                  <img layout src={img.src} />
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WorkPage2;
