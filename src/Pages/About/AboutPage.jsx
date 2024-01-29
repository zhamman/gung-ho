import "./AboutPage.scss";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const AboutPage = () => {
  const aboutPageData = [
    {
      imgUrl: "AmandaBi.png",
      name: "Amanda Bi",
      position: "Founder",
    },
    {
      imgUrl: "LucyLu.png",
      name: "Lucy Lu",
      position: "Exec Producer",
    },
    {
      imgUrl: "MichaelMcDermott.png",
      name: "Michael Mcdermott",
      position: "Exec Producer",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="aboutPage-container">
        <div className="about-header">We are Gung-Ho Films,</div>
        <div className="about-description">
          <p className="large-text">
            Gung-Ho Films is the leading production services company in China
            and Hong Kong. Founded in 2001, Gung-Ho Films has consistently
            provided high-quality support to top film and TV production
            companies from around the world. Gung-Ho Films is extremely
            privileged to have worked with many award-winning directors,
            cinematographers,
          </p>
          <p className="sub-text">
            and photographers, including Alejandro Iñárritu, Spike Jonze, Oliver
            Stone, Davis Guggenheim Rupert Sanders, Lance Acord, Louis CK,
            Emmanuel Lebeski, Wally Pfister, Claudio Miranda, Mario Testino,
            Annie Liebovitz, Patrick Demarchelier, etc. With a smart and
            dedicated bilingual staff, Gung-Ho provides world-class support to
            all types and sizes of international productions.
          </p>
        </div>
        <div className="about-images">
          {aboutPageData.map((person, i) => (
            <div className="about-box">
              <img
                src={require(`../../media/images/abt-img/${person.imgUrl}`)}
                alt=""
              />
              <p>{person.name}</p>
              <p className="sub-name">{person.position}</p>
              <a href="mailto: abcd@xyz.com">Contact</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
