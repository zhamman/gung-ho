import React, { useEffect, useState } from "react";
import "./WorkPage.scss";
import { FiArrowDownLeft } from "react-icons/fi";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import {
  workNavData,
  workVideoData,
  ImageSelect,
} from "../../data/WorkPageData";

const WorkPage = () => {
  const [render, setRender] = useState("allWork");
  const [videoPage, setVideoPage] = useState("");
  const [photoPage, setPhotoPage] = useState("");

  useEffect(() => {
    gsap.from(".block", {
      duration: 0.4,
      scale: 0,
      delay: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  }, [render]);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [videoPage, photoPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {videoPage !== "" && (
        <Video
          videoPage={videoPage}
          setVideoPage={setVideoPage}
          photoPage={photoPage}
          setPhotoPage={setPhotoPage}
        />
      )}
      {photoPage !== "" && (
        <PhotoShoot photoPage={photoPage} setPhotoPage={setPhotoPage} />
      )}
      <div className="workpage-container">
        <div className="heading">
          <h1>
            OUR WORKS <FiArrowDownLeft />
          </h1>
        </div>
        <div className="work-nav">
          <ul>
            {workNavData.map((navItem, i) => (
              <li
                key={navItem.text}
                onClick={() => {
                  setRender(navItem.category);
                }}
                style={{
                  color: render === navItem.category ? "white" : "",
                  backgroundColor: render === navItem.category ? "#000" : "",
                }}
              >
                {navItem.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="render-container">
          {workVideoData.map((vid, i) =>
            render === vid.category || render === "allWork" ? (
              <div className="work-col" key={vid.title}>
                <div
                  href=""
                  className="block"
                  onClick={() => {
                    if (vid.vidlink !== "") {
                      setVideoPage(vid.link);
                      setPhotoPage("");
                    } else if (vid.photoshoot !== "") {
                      setPhotoPage(vid.link);
                      setVideoPage("");
                    }
                  }}
                >
                  <img
                    src={require(`../../media/images/thumbnails/${vid.imgUrl}`)}
                    alt=""
                  />{" "}
                </div>
                <div className="text">
                  <h2>{vid.title}</h2>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default WorkPage;

const Video = ({ videoPage, setVideoPage }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className={`video-container ${videoPage !== "" ? "fullscreen" : ""}`}
      >
        <div className={`video-section`}>
          {workVideoData.map((video, i) => {
            return videoPage === video.link && videoPage !== "" ? (
              <div className="video-player" key={video.description1}>
                <video
                  controls
                  autoPlay
                  src={require(`../../media/videos/${video.vidlink}`)}
                ></video>
                <div className="text-section">
                  <h4>{video.title}</h4>
                  <p>{video.director}</p>
                  <div className="description">
                    <p className="prod">{video.description1}</p>
                    <p className="agency">{video.description2}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="next-selection"
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PhotoShoot = ({ photoPage, setPhotoPage }) => {
  const [slide, setSlide] = useState(0);
  const length = ImageSelect.length;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide - 1);
  };
  return (
    <div className="photo-work-page">
      {workVideoData.map((photo, i) => {
        return photoPage === photo.link &&
          photoPage !== "" &&
          photoPage !== "pirelli" ? (
          <div className="image-container">
            <div className="images">
              <img
                src={require(`../../media/images/thumbnails/${photo.imgUrl}`)}
                alt=""
              />
            </div>
            <h4>{photo.title}</h4>
            <p>{photo.director}</p>
            <div className="description">
              <p className="prod">{photo.description1}</p>
              <p className="agency">{photo.description2}</p>
            </div>
          </div>
        ) : (
          photoPage === "pirelli" && photoPage === photo.link && (
            <div className="slides-img-section">
              <div className="images">
                {ImageSelect.map((img, index) => {
                  return (
                    <div className={index === slide ? "img active" : "img"}>
                      {index === slide && (
                        <img
                          src={require(`../../media/images/pirelli-calendar/${img.src}`)}
                          alt=""
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="icon">
                <VscArrowSmallRight size="50px" onClick={nextSlide} />
              </div>
              <div className="icon2">
                <VscArrowSmallLeft size="50px" onClick={prevSlide} />
              </div>
              <h4>Pirelli Calendar 2008</h4>
              <p className="director">Patrick Demarchelier</p>
              <div className="description">
                <p className="prod">CJH Productions</p>
                <p className="agency">Pirelli Tyres</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
