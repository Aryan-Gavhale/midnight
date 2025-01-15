import React, { useState } from "react";
import { motion } from "framer-motion";

import main from "../assets/Homepage.png";

const Hero = () => {
  const [hoverX1, setHoverX1] = useState(0);
  const [hoverY1, setHoverY1] = useState(0);
  const [hoverX2, setHoverX2] = useState(0);
  const [hoverY2, setHoverY2] = useState(0);

  const handleHover1 = (event) => {
    const { offsetX, offsetY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    setHoverX1((offsetX / width - 0.5) * 10);
    setHoverY1((offsetY / height - 0.5) * 10);
  };

  const resetHover1 = () => {
    setHoverX1(0);
    setHoverY1(0);
  };

  const handleHover2 = (event) => {
    const { offsetX, offsetY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    setHoverX2((offsetX / width - 0.5) * 10);
    setHoverY2((offsetY / height - 0.5) * 10);
  };

  const resetHover2 = () => {
    setHoverX2(0);
    setHoverY2(0);
  };

  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 order-2 md:order-1">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
           <div className="flex flex-col md:flex-row items-center md:items-start text-4xl md:text-6xl lg:text-7xl mb-4">
            <h1 className="poppins font-extrabold text-white">Midnight</h1>
            <h3 className="qwitcher-grypen-regular mt-2 md:mt-4 md:ml-4 text-yellow-400">Solutions</h3>
          </div>
          </motion.div>

          <motion.p
            className="text-base md:text-lg lg:text-2xl font-medium text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            Empowering your business with cutting-edge technology, innovative solutions, and world-class services.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              className="bg-[#FFD700] text-black text-base md:text-lg font-semibold rounded-lg px-6 py-3 shadow-lg relative overflow-hidden w-full sm:w-auto"
              onMouseMove={handleHover1}
              onMouseLeave={resetHover1}
              whileHover={{
                boxShadow: "0px 15px 30px rgba(255, 215, 0, 0.7)",
              }}
              style={{
                transform: `translate(${hoverX1}px, ${hoverY1}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] text-base md:text-lg font-semibold rounded-lg px-6 py-3 shadow-md relative overflow-hidden w-full sm:w-auto"
              onMouseMove={handleHover2}
              onMouseLeave={resetHover2}
              whileHover={{
                boxShadow: "0px 15px 30px rgba(255, 215, 0, 0.7)",
              }}
              style={{
                transform: `translate(${hoverX2}px, ${hoverY2}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 lg:mt md:mt-0 order-1 md:order-2 mb-20 md:mb-0">
          <motion.div
            className="relative h-[300px] md:h-[400px] lg:h-[480px] w-full md:w-[500px] lg:w-[600px] mx-auto transform transition-transform duration-700 hover:scale-105 hover:brightness-110"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={main || "/placeholder.svg"}
              alt="Hero Section"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

