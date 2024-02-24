import React from "react";
import { navLinks } from "../../utils";
import { motion } from "framer-motion";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },

    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },

    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.ul
      variants={variants}
      className="absolute h-full w-full flex flex-col justify-center items-center gap-6"
    >
      {navLinks.map((item, index) => (
        <li key={index}>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`#${item}`}
            className="text-2xl text-primary hover:text-blue-500"
          >
            {item}
          </motion.a>
        </li>
      ))}
    </motion.ul>
  );
};

export default Links;
