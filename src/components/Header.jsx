import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { motion } from "framer-motion";
import gsap from "gsap";

const Header = () => {
  const [color, setColor] = useState(false);
  const [active, setActive] = useState({ initial: false, clicked: false });
  const [disabled, setDisabled] = useState(false);

  let tran1 = useRef(null);
  let tran2 = useRef(null);
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  const scrollToPosition = (top = 0) => {
    try {
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    } catch (_) {
      window.scrollTo(0, top);
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 750) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  //   const SubList = () => {};
  useEffect(() => {
    // changeLogo();
    window.addEventListener("scroll", changeColor);
  });

  useEffect(() => {
    disableMenu();
    if (active.clicked === false) {
      //close menu
      gsap.to(revealMenu, {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });

      gsap.to([line1, line2, line3, line4], {
        opacity: 0,
      });
    } else if (
      active.clicked === true ||
      (active.clicked === true && active.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to(revealMenu, {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      gsap.to([line1, line2, line3, line4], {
        opacity: 1,
      });
      staggerReaveal(revealMenu);
      staggerText(line1, line2, line3, line4);
    }
  }, [active]);

  useEffect(() => {
    if (active.clicked === false && active.initial != null) {
      gsap.to(revealMenu, {
        duration: 0,
        height: 0,
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    }
  }, []);

  const handleMenu = () => {
    // disableMenu();
    if (active.initial === false) {
      setActive({
        initial: null,
        clicked: true,
      });
    } else if (active.clicked === true) {
      setActive({
        clicked: !active.clicked,
      });
    } else if (active.clicked === false) {
      setActive({
        clicked: !active.clicked,
      });
    }
  };

  const staggerReaveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.4,
      height: 0,
      transformOrigin: "right top",
      // skewY: 4,
      ease: "power3.inOut",
    });
  };
  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.6,
      x: -10000,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      duration: 0.2,
      scale: 1.12,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      duration: 0.2,
      scale: 1,
    });
  };

  return (
    <header>
      <div
        className="header"
        style={{
          color:
            useLocation().pathname !== "/" || active.clicked || color
              ? "black"
              : "white",
        }}
      >
        <div className="header-container">
          <Link
            to="/"
            className="contact"
            style={{
              color:
                useLocation().pathname !== "/" || active.clicked || color
                  ? "black"
                  : "white",
            }}
            onClick={() => {
              {
                setActive({ clicked: false });
                scrollToPosition();
              }
            }}
          >
            Gung-ho films
          </Link>
          <Link
            className="logo"
            to="/"
            onClick={() => {
              setActive({ clicked: false });
              scrollToPosition();
            }}
          >
            <img src={require("../media/images/gung-ho-logo.png")} alt="" />{" "}
          </Link>
          <div className="menu">
            <button
              style={{
                color:
                  useLocation().pathname !== "/" || active.clicked || color
                    ? "black"
                    : "white",
              }}
              onClick={handleMenu}
              disabled={disabled}
            >
              {active.clicked ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </div>
      <div ref={el => (menu = el)} className="menu-active">
        <div ref={el => (revealMenu = el)} className="menu-layer">
          <div className="links-container">
            <div className="prod-section">
              <Link
                to="/partners"
                onClick={() => setActive({ clicked: false })}
                ref={el => (line1 = el)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                Partners
              </Link>
            </div>
            <div className="work-section">
              <Link
                to="/work"
                onClick={() => {
                  setActive({ clicked: false });
                }}
                ref={el => (line2 = el)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                Work
              </Link>
            </div>
            <div className="company-section">
              <Link
                to="/about"
                onClick={() => setActive({ clicked: false })}
                ref={el => (line3 = el)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setActive({ clicked: false })}
                ref={el => (line4 = el)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
