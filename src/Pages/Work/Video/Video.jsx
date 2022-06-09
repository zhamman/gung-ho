import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import WorkPage from "../WorkPage";
import { useLocation } from "react-router-dom";
import "./Video.scss";
import { ImageSelect } from "./ImageSelect";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";

const Video = () => {
  //   let { id } = useParams();
  return (
    <div className="video-container ">
      <div className="video-section">
        {useLocation().pathname == "/work/adidas1" && <Adidas1 />}
        {useLocation().pathname == "/work/better-late-than-never" && (
          <BetterLate />
        )}
        {useLocation().pathname == "/work/amazing-race" && <AmazingRace />}
        {useLocation().pathname == "/work/her" && <Her />}
        {useLocation().pathname == "/work/inconvenient-truth" && (
          <InconvenientTruth />
        )}
        {useLocation().pathname == "/work/ipad" && <Ipad />}
        {useLocation().pathname == "/work/samsung" && <Samsung />}
        {useLocation().pathname == "/work/richkids" && <RichKids />}
        {useLocation().pathname == "/work/snowden" && <Snowden />}
        {useLocation().pathname == "/work/who-do-you-think-you-are" && (
          <WhoDoYou />
        )}
        {useLocation().pathname == "/work/cisco" && <Cisco />}
        {useLocation().pathname == "/work/citibank" && <CitiBank />}
        {useLocation().pathname == "/work/xbox" && <Xbox />}
        {useLocation().pathname == "/work/pandg" && <PandG />}
        {useLocation().pathname == "/work/adidas-billion" && <AdidasBillion />}
        {useLocation().pathname == "/work/adidas-original" && (
          <AdidasOriginals />
        )}
        {useLocation().pathname == "/work/vodafone" && <Vodafone />}
        {useLocation().pathname == "/work/lotto-red" && <LottoRed />}
        {useLocation().pathname == "/work/vogue" && <Vogue />}
        {useLocation().pathname == "/work/annie" && <AnnieLieb />}
        {useLocation().pathname == "/work/dior" && <LadyDior />}
        {useLocation().pathname == "/work/pirelli" && <Pirelli />}
      </div>
      <div className="next-selection">
        <WorkPage />
      </div>
    </div>
  );
};

export default Video;

const Adidas1 = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/create-the-answer.mp4")}
      ></video>
      <h4>Adidas - Create The Answer</h4>
      <p>Manu Cossu</p>
      <div className="description">
        <p className="prod">Iconoclast/Anonymous Content</p>
        <p className="agency">72 and Sunny</p>
      </div>
    </div>
  );
};
const BetterLate = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/betterLate.mp4")}
      ></video>
      <h4>Better Late Then Never</h4>
      <p>Troy Miller</p>
      <div className="description">
        <p className="prod">NBC Universal</p>
        <p className="agency">NBC</p>
      </div>
    </div>
  );
};
const AmazingRace = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/amazing_race.mp4")}
      ></video>
      <h4>Amazing Race</h4>
      <p>Bertram Van Munster</p>
      <div className="description">
        <p className="prod">World Race Productions</p>
        <p className="agency">CBS</p>
      </div>
    </div>
  );
};

const Her = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/her.mp4")}
      ></video>
      <h4>Her</h4>
      <p>Spike Jonze</p>
      <div className="description">
        <p className="prod">Annapurna Pictures</p>
        <p className="agency">Warner Brothers</p>
      </div>
    </div>
  );
};

const InconvenientTruth = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/inconvenientTruth.mp4")}
      ></video>
      <h4>An Inconvenient Truth</h4>
      <p>Davis Guggenheim</p>
      <div className="description">
        <p className="prod">Participant Media</p>
        <p className="agency">Starring Al Gore</p>
      </div>
    </div>
  );
};

const Ipad = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/ipadAir.mp4")}
      ></video>
      <h4>Apple Ipad Air</h4>
      <p>Julios Metoyer</p>
      <div className="description">
        <p className="prod">MAL</p>
        <p className="agency">Apple</p>
      </div>
    </div>
  );
};

const Samsung = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/GalaxyS9-JetLag.mp4")}
      ></video>
      <h4> Samsung Galaxy S9- Jet Lag</h4>
      <p>Isaiah Seret</p>
      <div className="description">
        <p className="prod">Buscuit Filmworks</p>
        <p className="agency">Wieden & Kennedy</p>
      </div>
    </div>
  );
};

const RichKids = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/richkids.mp4")}
      ></video>
      <h4>Rich Kids of Beverly Hills</h4>
      <p>Adam Sampson</p>
      <div className="description">
        <p className="prod">ITV Studios America</p>
        <p className="agency">E! Entertainment</p>
      </div>
    </div>
  );
};

const Snowden = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/snowden.mp4")}
      ></video>
      <h4>Snowden</h4>
      <p>Oliver Stone</p>
      <div className="description">
        <p>Open Road Films</p>
        <p>Wild Bunxh</p>
        <p className="prod">Endgame Entertainment</p>
        <p>TG Media</p>
        <p className="agency">Warner Brothers</p>
      </div>
    </div>
  );
};

const WhoDoYou = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/whoyouthink.mp4")}
      ></video>
      <h4>Who Do You Think You Are?</h4>
      <p>Jeremy Finn</p>
      <div className="description">
        <p className="prod">The Learning Channel</p>
        <p className="agency">Shed Media</p>
      </div>
    </div>
  );
};

const Cisco = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/cisco.mp4")}
      ></video>
      <h4>Cisco</h4>
      <p>Tarsem Singh</p>
      <div className="description">
        <p className="prod">Shanghai Production</p>
        <p className="agency">TV Commercial</p>
      </div>
    </div>
  );
};

const CitiBank = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/citibank.mp4")}
      ></video>
      <h4>CitiBank</h4>
      <p></p>
      <div className="description">
        <p className="prod"></p>
        <p className="agency"></p>
      </div>
    </div>
  );
};

const Xbox = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/xbox.mp4")}
      ></video>
      <h4>Microsoft Xbox</h4>
      <p>Rupert Sanders</p>
      <div className="description">
        <p className="prod">MJZ</p>
        <p className="agency">McCann Erickson</p>
      </div>
    </div>
  );
};

const PandG = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/pandg.mp4")}
      ></video>
      <h4>P&G Moms</h4>
      <p>Alejandro Gonzalez Iñárritu</p>
      <div className="description">
        <p className="prod">Anonymous Content</p>
        <p className="agency">Wieden & Kennedy</p>
      </div>
    </div>
  );
};

const AdidasBillion = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/adidasOneina.mp4")}
      ></video>
      <h4>Adidas - One in a Billion</h4>
      <p>Max Malkin</p>
      <div className="description">
        <p className="prod">PrettyBird</p>
        <p className="agency">72 and Sunny</p>
      </div>
    </div>
  );
};

const AdidasOriginals = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/adidasOriginals.mp4")}
      ></video>
      <h4>Adidas - Originals</h4>
      <p></p>
      <div className="description">
        <p className="prod"></p>
        <p className="agency"></p>
      </div>
    </div>
  );
};

const Vodafone = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/vodafone.mp4")}
      ></video>
      <h4>Vodafone</h4>
      <p>Sebastian Strasser</p>
      <div className="description">
        <p className="prod">Radical Media</p>
        <p className="agency">Jung Van Matt</p>
      </div>
    </div>
  );
};

const LottoRed = () => {
  return (
    <div className="video-player">
      <video
        controls
        autoPlay
        src={require("../../../media/videos/lotto-red-dragon.mp4")}
      ></video>
      <h4>Danish Lottery - Red Dragon</h4>
      <p>Axel Laubsher</p>
      <div className="description">
        <p className="prod">Social Club, Sweden </p>
        <p className="agency">Forstmann</p>
      </div>
    </div>
  );
};

const Vogue = () => {
  return (
    <div className="video-player">
      <div className="images">
        <img src={require("../../../media/images/thumbnails/vogue_1.jpeg")} />
      </div>
      <h4>Vogue - Mario Testino Special Edition</h4>
      <p>Mario Testino</p>
      <div className="description">
        <p className="prod">Art Partner</p>
        <p className="agency">Shu Qi and He Sui</p>
      </div>
    </div>
  );
};

const AnnieLieb = () => {
  return (
    <div className="video-player">
      <div className="images">
        <img src={require("../../../media/images/thumbnails/annieLeb.jpeg")} />
      </div>
      <h4>Annie Liebovitz - Women</h4>
      <p>Photo Exhibition</p>
      <div className="description">
        <p className="prod">June 2016</p>
        <p className="agency">Honk Kong</p>
      </div>
    </div>
  );
};

const LadyDior = () => {
  return (
    <div className="video-player">
      <div className="images">
        <img src={require("../../../media/images/thumbnails/lady-dior.png")} />
      </div>
      <h4>Lady Dior Phtotshoot</h4>
      <p>Steven Klein</p>
      <div className="description">
        <p className="prod">N6 London</p>
        <p className="agency">Marion Cottliard</p>
      </div>
    </div>
  );
};

const Pirelli = () => {
  const [slide, setSlide] = useState(0);
  const length = ImageSelect.length;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide - 1);
  };

  return (
    <div className="img-section">
      <div className="images">
        {ImageSelect.map((img, index) => {
          return (
            <div className={index === slide ? "img active" : "img"}>
              {index === slide && <img src={img.src} />}
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
  );
};
