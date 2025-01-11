import React, { useState } from "react";
import { motion } from "framer-motion";
import im1 from '../assets/im1.jpeg';
import main from "../assets/main.png"


const Hero = () => {
  const [hoverX1, setHoverX1] = useState(0);
  const [hoverY1, setHoverY1] = useState(0);
  const [hoverX2, setHoverX2] = useState(0);
  const [hoverY2, setHoverY2] = useState(0);

  const handleHover1 = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { width, height } = target.getBoundingClientRect();
    setHoverX1((offsetX / width - 0.5) * 10);
    setHoverY1((offsetY / height - 0.5) * 10);
  };

  const resetHover1 = () => {
    setHoverX1(0);
    setHoverY1(0);
  };

  const handleHover2 = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { width, height } = target.getBoundingClientRect();
    setHoverX2((offsetX / width - 0.5) * 10);
    setHoverY2((offsetY / height - 0.5) * 10);
  };

  const resetHover2 = () => {
    setHoverX2(0);
    setHoverY2(0);
  };

  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-32 md:py-48">
      <div className="absolute right-10 top-20 h-[480px] w-[600px] transform transition-transform duration-700 hover:scale-105 hover:brightness-110">
        <motion.img
          src={main} // Image source
          alt="Hero Section"
          className="object-cover h-full w-full "
         
         
        />
      </div>

      <div className="container mx-auto px-8 relative z-10 text-center md:text-left flex items-center justify-between h-full">
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-gradient-to-r from-[#FFD700] to-[#FFB800] leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex items-center">
  <h1 className="poppins">Midnight</h1>
  <h3 className="qwitcher-grypen-regular mx-6 mt-4 text-yellow-400">Solutions</h3>
</div>

             
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl font-medium text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            Empowering your business with cutting-edge technology, innovative solutions, and world-class services.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            {/* Get Started Button */}
            <motion.button
              className="bg-[#FFD700] text-black text-lg font-semibold rounded-lg px-6 py-3 shadow-lg relative overflow-hidden"
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

            {/* Learn More Button */}
            <motion.button
              className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] text-lg font-semibold rounded-lg px-6 py-3 shadow-md relative overflow-hidden"
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
      </div>
    </section>
  );
};

export default Hero;
