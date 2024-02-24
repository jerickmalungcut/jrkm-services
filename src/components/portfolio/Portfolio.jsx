import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      <PortfolioItems />
    </div>
  );
};

export default Portfolio;
