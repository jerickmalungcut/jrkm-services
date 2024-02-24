import React from "react";
import "./navbar.scss";
import { socialIcons } from "../utils";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <nav className="navbar h-[100px]">
      {/* Sidebar */}
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mx-auto max-w-[1366px] flex justify-between items-center h-full"
      >
        <span className="font-bold text-3xl text-blue-400">JRKM</span>
        <div className="social flex gap-4">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.link}>
              <img
                key={item.id}
                src={item.imgUrl}
                alt={item.name}
                className="object-contain w-9 h-9"
              />
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
