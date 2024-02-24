import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div className="flex flex-col justify-between p-4 border border-slate-500 hover:bg-white text-white hover:text-slate-800">
      <h2 className="text-xl">Branding</h2>
      <p className="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio id
        vero culpa sit, beatae autem molestiae temporibus voluptatum provident
        quaerat.
      </p>
      <button className="p-3 bg-orange-500">Go</button>
    </motion.div>
  );
};

export default Card;
