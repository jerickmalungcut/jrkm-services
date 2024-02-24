import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/hero.png";
import "./hero.scss";
import Button from "../common/button/Button";
import { SlMouse } from "react-icons/sl";

const Hero = () => {
  // textVariant
  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariant = {
    initial: {
      x: 0,
    },

    animate: {
      x: "-300%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <section className="hero overflow-hidden">
      <div className="wrapper max-w-[1366px] h-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Header */}
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="flex-1 w-full h-full flex flex-col justify-center items-start gap-4 relative z-10"
        >
          <motion.h2
            variants={textVariant}
            className="text-2xl font-bold text-blue-400"
          >
            JERICK MALUNGCUT
          </motion.h2>
          <motion.h1 variants={textVariant} className="text-6xl">
            Web Developer & UI/UX Designer
          </motion.h1>
          {/* Button */}
          <motion.div
            variants={textVariant}
            className="flex flex-col md:flex-row gap-4 mt-6"
          >
            <Button btnDesc="See Latest Projects" />
            <Button btnDesc="Contat Me" />
          </motion.div>
          {/* Mouse Image */}
          <motion.div
            variants={textVariant}
            animate="scrollButton"
            className="mt-8"
          >
            <SlMouse size={45} />
          </motion.div>
        </motion.div>

        {/* Sliding Text */}
        <motion.div
          variants={sliderVariant}
          initial="initial"
          animate="animate"
          className="slidingTextContainer absolute text-[30vh] -bottom-28 z-0 whitespace-nowrap opacity-[0.1] font-bold w-[80%]"
        >
          Web Developer | UI/UX Designer | IT Support
        </motion.div>
        {/* Hero Image */}
        <div className="h-full flex-1 relative top-28 z-10">
          <img src={HeroImg} alt="hero image" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
