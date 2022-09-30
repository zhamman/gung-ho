import React, { useEffect, useRef } from "react";
import "./PartnersPage.scss";
import gsap from "gsap";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const PartnersPage = () => {
  let head = useRef(null);
  let sub = useRef(null);

  const scrollToPosition = (top = 0) => {
    try {
      window.scroll({
        top: top,
        left: 0,
      });
    } catch (_) {
      window.scrollTo(0, top);
    }
  };

  useEffect(() => {
    gsap.from(sub, {
      duration: 0.6,
      opacity: 1,
      scale: 0,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from(".name", {
      duration: 1.3,
      opacity: 0,
      scale: 0,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.7,
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="partnerPage-container">
        <div className="partner-title" ref={el => (head = el)}>
          <h1>Production Partners</h1>
        </div>
        <div className="partner-description" ref={el => (sub = el)}>
          <p>
            Nothing proves that Gung-Ho Films provides consistently excellent
            production support better than the fact that many of the world’s
            best production companies keep coming back to work with us, again
            and again! Here is a partial list:
          </p>
        </div>
        <div className="partners">
          <div className="col1">
            <p className="name">World Race Productions</p>
            <p className="name">mjz</p>
            <p className="name">Anonymous Content</p>
            <p className="name">Park Pictures</p>
            <p className="name">Prettybird</p>
            <p className="name">Smuggler</p>
            <p className="name">Partizan</p>
            <p className="name">White Label Product</p>
            <p className="name">Epoch</p>
            <p className="name">Imperial Woodpecker</p>
            <p className="name">Radical Media</p>
            <p className="name">Stink</p>
            <p className="name">Buiscuit Filmworks</p>
          </div>
          <div className="col2">
            <p className="name">Tool of North America</p>

            <p className="name">Missing Pieces</p>
            <p className="name">Caviar Content</p>
            <p className="name">Pulse</p>
            <p className="name">Skunk</p>
            <p className="name">Believe Media</p>
            <p className="name">Blink</p>

            <p className="name">The Corner Shop</p>
            <p className="name">Art Partner</p>
            <p className="name">Art & Commerce</p>
            <p className="name">Bunim Murray</p>
            <p className="name">Supply & Demand</p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PartnersPage;
