import React, { useEffect, useState } from "react";
import "./WorkPage.scss";
import { FiArrowDownLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const WorkPage = () => {
  const [render, setRender] = useState("allWork");
  const location = useLocation().pathname;

  useEffect(() => {
    gsap.from(".block", {
      duration: 1,
      scale: 0,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.8,
      },
    });
  }, [render]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="workpage-container">
        {(location === "/work" || location === "/") && (
          <div className="heading">
            <h1>
              OUR WORKS <FiArrowDownLeft />
            </h1>
          </div>
        )}

        <div className="work-nav">
          <ul>
            <li
              onClick={() => {
                setRender("allWork");
              }}
              style={{
                color: render === "allWork" ? "#c31c28" : "",
              }}
            >
              All Work
            </li>
            <li
              onClick={() => {
                setRender("tvCommercial");
              }}
              style={{
                color: render === "tvCommercial" ? "#c31c28" : "",
              }}
            >
              TV Commercials
            </li>
            <li
              onClick={() => {
                setRender("television");
              }}
              style={{
                color: render === "television" ? "#c31c28" : "",
              }}
            >
              Television
            </li>
            <li
              onClick={() => {
                setRender("documentary");
              }}
              style={{
                color: render === "documentary" ? "#c31c28" : "",
              }}
            >
              Documentary
            </li>

            <li
              onClick={() => {
                setRender("featureFilm");
              }}
              style={{
                color: render === "featureFilm" ? "#c31c28" : "",
              }}
            >
              Feature Films
            </li>
            <li
              onClick={() => {
                setRender("photography");
              }}
              style={{
                color: render === "photography" ? "#c31c28" : "",
              }}
            >
              Photography
            </li>
          </ul>
        </div>
        <div className="mobile-title">
          <h1>
            OUR WORKS <FiArrowDownLeft />
          </h1>
        </div>
        <div className="render-container">
          {render === "featureFilm" && <FeatureFilm />}
          {render === "tvCommercial" && <TvCommercials />}
          {render === "documentary" && <Documentary />}
          {render === "photography" && <Photography />}
          {render === "television" && <Television />}
          {render === "allWork" && <AllWork />}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default WorkPage;

const FeatureFilm = () => {
  return (
    <div className="work-col">
      <Link to="/work/her" className="block">
        <div className="text">
          <h2>her</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img src={require("../../media/images/thumbnails/her.png")} alt="" />{" "}
        </div>
      </Link>
      <Link to="/work/snowden" className="block">
        <div className="text">
          <h2>Snowden</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/snowden.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
    </div>
  );
};

const TvCommercials = () => {
  return (
    <div className="work-col">
      <Link to="/work/adidas1" className="block">
        <div className="text">
          <h2>Adidas - Create the Answer</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/adidas.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/ipad" className="block">
        <div className="text">
          <h2>Ipad Air</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/ipad.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/samsung" className="block">
        <div className="text">
          <h2>Samsung</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/maxresdefault.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/adidas-original" className="block">
        <div className="text">
          <h2>Adidas - Originals</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/adidasoriginals.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/pandg" className="block">
        <div className="text">
          <h2>P&G Moms</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            // style={{ objectFit: "contain" }}
            src={require("../../media/images/thumbnails/png.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/xbox" className="block">
        <div className="text">
          <h2>Microsoft Xbox</h2>
        </div>
        <div className="image-hover-zoom">
          <img src={require("../../media/images/thumbnails/xbox.png")} alt="" />{" "}
        </div>
      </Link>
      <Link to="/work/adidas-billion" className="block">
        <div className="text">
          <h2>Adidas - One in a Billion</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            style={{ objectFit: "cover" }}
            src={require("../../media/images/thumbnails/adidas-onebilliion.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/vodafone" className="block">
        <div className="text">
          <h2>Vodafone</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/vodafone.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/citibank" className="block">
        <div className="text">
          <h2>Citibank</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/citi.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/lotto-red" className="block">
        <div className="text">
          <h2>Danish Lottery - Red Dragon</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            // style={{ objectFit: "contain" }}
            src={require("../../media/images/redlotto.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
    </div>
  );
};

const Documentary = () => {
  return (
    <div className="work-col">
      <Link to="/work/inconvenient-truth" className="block">
        <div className="text">
          <h2>An Inconvenient Truth</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/inconvenient.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
    </div>
  );
};

const Photography = () => {
  return (
    <div className="work-col">
      <Link to="/work/dior" className="block">
        <div className="text">
          <h2>Lady Dior</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/lady-dior.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/vogue" className="block">
        <div className="text">
          <h2>Vogue</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/vogue_1.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/annie" className="block">
        <div className="text">
          <h2>Annie Liebovitz - Women</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/annieLeb.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/pirelli" className="block">
        <div className="text">
          <h2>Pirelli Calendar 2008</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/pirelli-calendar/portrait.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
    </div>
  );
};

const Television = () => {
  return (
    <div className="work-col">
      <Link to="/work/better-late-than-never" className="block">
        <div className="text">
          <h2>Better Late Than Never</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/betterlate.jpeg")}
            alt=""
          />
        </div>
      </Link>
      <Link to="/work/amazing-race" className="block">
        <div className="text">
          <h2>Amazing Race</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/amazing_race.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/richkids" className="block">
        <div className="text">
          <h2>Rich Kids of Beverly Hills</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/richkids.jpg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/who-do-you-think-you-are" className="block">
        <div className="text">
          <h2>Who Do You Think You Are</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/whodoyou.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
    </div>
  );
};

const AllWork = () => {
  return (
    <div className="work-col">
      <Link to="/work/better-late-than-never" className="block">
        <div className="text">
          <h2>Better Late Than Never</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/betterlate.jpeg")}
            alt=""
          />
        </div>
      </Link>

      <Link to="/work/adidas1" className="block">
        <div className="text">
          <h2>Adidas</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/adidas.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/amazing-race" className="block">
        <div className="text">
          <h2>Amazing Race</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/amazing_race.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/her" className="block">
        <div className="text">
          <h2>her</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img src={require("../../media/images/thumbnails/her.png")} alt="" />{" "}
        </div>
      </Link>
      <Link to="/work/inconvenient-truth" className="block">
        <div className="text">
          <h2>An Inconvenient Truth</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/inconvenient.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/ipad" className="block">
        <div className="text">
          <h2>Ipad Air</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/ipad.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/dior" className="block">
        <div className="text">
          <h2>Lady Dior</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/lady-dior.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/samsung" className="block">
        <div className="text">
          <h2>Samsung</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/maxresdefault.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/richkids" className="block">
        <div className="text">
          <h2>Rich Kids of Beverly Hills</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/richkids.jpg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/snowden" className="block">
        <div className="text">
          <h2>Snowden</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/snowden.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/vogue" className="block">
        <div className="text">
          <h2>Vogue</h2>
          <p></p>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/vogue_1.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/who-do-you-think-you-are" className="block">
        <div className="text">
          <h2>Who Do You Think You Are</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/whodoyou.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/adidas-billion" className="block">
        <div className="text">
          <h2>Adidas - One in a Billion</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            style={{ objectFit: "cover" }}
            src={require("../../media/images/thumbnails/adidas-onebilliion.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/pandg" className="block">
        <div className="text">
          <h2>P&G Moms</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            // style={{ objectFit: "contain" }}
            src={require("../../media/images/thumbnails/png.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/annie" className="block">
        <div className="text">
          <h2>Annie Liebovitz - Women</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/annieLeb.jpeg")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/adidas-original" className="block">
        <div className="text">
          <h2>Adidas - Originals</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/adidasoriginals.png")}
            alt=""
          />{" "}
        </div>
      </Link>
      <Link to="/work/vodafone" className="block">
        <div className="text">
          <h2>Vodafone</h2>
        </div>
        <div className="image-hover-zoom">
          <img
            src={require("../../media/images/thumbnails/vodafone.png")}
            alt=""
          />{" "}
        </div>
      </Link>

      <Link to="/work/xbox" className="block">
        <div className="text">
          <h2>Microsoft Xbox</h2>
        </div>
        <div className="image-hover-zoom">
          <img src={require("../../media/images/thumbnails/xbox.png")} alt="" />{" "}
        </div>
      </Link>
    </div>
  );
};
