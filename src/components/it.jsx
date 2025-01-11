import React from "react";
import { motion } from "framer-motion";
//import itSolutions from "../assets/it-solutions.jpeg";
import { useState } from "react";
import tech from "../assets/tech1.png"
import { Link } from "react-router-dom";

const ITSolutions = () => {
  const [hoverX1, setHoverX1] = useState(0);
  const [hoverY1, setHoverY1] = useState(0);

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

  return (
    <section className="h-[700px] relative py-32 md:py-48 bg-gradient-to-r from-black to-gray-900 text-white transition-all duration-1000 ease-in-out mb-20">
      <div className="absolute container mx-auto px-8 flex flex-col md:flex-row items-center justify-between bottom-30">
        {/* Description Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          <div className="flex items-center text-7xl">
            <h1 className="poppins font-extrabold text-white">Tech</h1>
            <h3 className="qwitcher-grypen-regular mx-6 mt-4 text-yellow-400">
              Solutions
            </h3>
          </div>
          <p className="text-lg md:text-2xl font-medium text-gray-200 mb-8 mt-4 leading-relaxed">
            Unlock the power of technology with our expert IT solutions. From
            software development to cutting-edge innovations, we provide the
            tools and strategies to drive success for your business.
          </p>
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
            <Link to="/it">Explore</Link>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <img
    src={tech} // Replace with your IT solutions image URL
    alt="IT Solutions"
    className="object-cover w-4/6 h-full"
    style={{
      mixBlendMode: "normal", // Allows the light parts of the image to remain bright
      
    }}></img>

        </motion.div>
      </div>
    </section>
  );
};

export default ITSolutions;
