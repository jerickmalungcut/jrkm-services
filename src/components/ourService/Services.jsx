import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import People from "../../assets/people.webp";
import Card from "../common/card/Card";

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-500px" });

  const variants = {
    initial: {
      x: -500,
      // y: 100,
      opacity: 0,
    },

    animate: {
      x: 0,
      // y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      variants={variants}
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
      initial="initial"
      className="min-h-screen bg-gradient-primary flex flex-col justify-between"
    >
      <motion.div
        variants={variants}
        className="text-container self-end flex items-center gap-4 mt-6"
      >
        <p className="text-slate-500 text-sm text-right">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[500px]  border-t-1 border-slate-500" />
      </motion.div>
      <motion.div
        variants={variants}
        className="title-container flex-1 flex flex-col items-center gap-4"
      >
        <div className="title flex items-center gap-5">
          <img
            src={People}
            alt="people"
            className="w-[300px] h-[100px] rounded-full object-cover"
          />
          <h1 className="text-7xl">
            <b className="hover:text-orange-500">Unique</b> Ideas
          </h1>
        </div>
        <div className="title flex items-center gap-5">
          <h1 className="text-7xl">
            <b className="hover:text-orange-500">For Your</b> Business
          </h1>
          <button className="bg-orange-500 w-[300px] h-[100px] rounded-full text-lg uppercase font-bold text-slate-900">
            What We Do?
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="list-container flex-1 flex max-w-[1366px] mx-auto"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </motion.section>
  );
};

export default Services;
