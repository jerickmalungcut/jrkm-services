import React, { useRef } from "react";
import { portfolioItems } from "../utils";
import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioItems = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div className="max-w-[1366px] mx-auto">
      {portfolioItems.map((item) => (
        <section
          key={item.id}
          className="flex justify-center items-center h-screen w-full overflow-hidden"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="h-1/2 w-auto bg-cover"
            ref={ref}
          />

          {/* Text Container */}
          <motion.div
            style={{ y: y }}
            className="flex flex-col gap-4 items-center justify-start px-6"
          >
            <h2 className="text-4xl font-bold text-left text-orange-500">
              {item.title}
            </h2>
            <p className="text-base">{item.desc}</p>
            <button className="py-2 px-6 bg-orange-500 text-slate-800 font-bold rounded-lg">
              See Demo
            </button>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default PortfolioItems;
