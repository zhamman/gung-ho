import React, { useEffect, useRef } from "react";
import "./PartnersPage.scss";
import gsap from "gsap";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const PartnersPage = () => {
  let sub = useRef(null);

  const partnersData = [
    {
      name: "World Race Productions",
      key: "world-race-productions",
    },
    {
      name: "Tool of North America",
      key: "tool-of-north-america",
    },

    {
      name: "Anonymous Content",
      key: "anonymous-content",
    },
    {
      name: "Park Pictures",
      key: "park-pictures",
    },
    {
      name: "Prettybird",
      key: "prettybird",
    },
    {
      name: "Smuggler",
      key: "smuggler",
    },
    {
      name: "White Label Product",
      key: "white-label-product",
    },
    {
      name: "Imperial Woodpecker",
      key: "imperial-woodpecker",
    },
    {
      name: "Stink",
      key: "stink",
    },
    {
      name: "Buiscuit Filmworks",
      key: "buiscuit-filmworks",
    },
    {
      name: "Partizan",
      key: "partizan",
    },
    {
      name: "Epoch",
      key: "epoch",
    },
    {
      name: "Radical Media",
      key: "radical-media",
    },
    {
      name: "mjz",
      key: "mjz",
    },
    {
      name: "Missing Pieces",
      key: "missing-pieces",
    },
    {
      name: "Caviar Content",
      key: "caviar-content",
    },
    {
      name: "Pulse",
      key: "pulse",
    },
    {
      name: "Skunk",
      key: "skunk",
    },
    {
      name: "Believe Media",
      key: "believe-media",
    },
    {
      name: "Blink",
      key: "blink",
    },
    {
      name: "The Corner Shop",
      key: "the-corner-shop",
    },
    {
      name: "Art Partner",
      key: "art-partner",
    },
    {
      name: "Art & Commerce",
      key: "art-commerce",
    },
    {
      name: "Bunim Murray",
      key: "bunim-murray",
    },
    {
      name: "Supply & Demand",
      key: "supply-demand",
    },
  ];

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
        <div className="partner-title">
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
          {partnersData.map((partner, i) => (
            <div className="name" key={partner.key + 1}>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PartnersPage;
