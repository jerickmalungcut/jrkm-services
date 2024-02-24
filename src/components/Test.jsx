import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    visible: {
      opacity: 1,
      x: 1000,
      transition: { duration: 2, type: "spring", stiffness: 200 },
    },
    hidden: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        variants={variants}
        animate={isOpen ? "visible" : "hidden"}
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
        //   animate="visible"

        //   transition={{ duration: 2, delay: 2 }}
        //   whileHover={{ opacity: 0 }}
        //   whileInView={{ opacity: 0 }}
        //This is to set when scroll   whileInView={}
      >
        <div className="w-52 h-52 bg-white"></div>
      </motion.div>

      <button onClick={() => setIsOpen((prev) => !prev)}>Click me</button>
    </>
  );
};

export default Test;
