import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Sun from "../../assets/sun.png";
import Planets from "../../assets/planets.png";

const Parallax1 = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="Services"
      className="parallax min-h-screen w-full relative flex items-center justify-center"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-3xl md:text-7xl">
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div style={{ y: yBg }} className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? Sun : Planets})`,
        }}
      ></motion.div>

      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </section>
  );
};

Parallax1.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Parallax1;
