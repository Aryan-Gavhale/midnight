import React, { useState } from "react";
import { motion } from "framer-motion";
import realestate from "../assets/estate2.png";
import { Link } from "react-router-dom";

const RealEstate = () => {
  const [hoverX1, setHoverX1] = useState(0);
  const [hoverY1, setHoverY1] = useState(0);

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

  return (
    <section className="py-16 md:py-25 bg-gradient-to-r from-black to-gray-900 text-white transition-all duration-1000 ease-in-out">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <img
            src={realestate}
            alt="Real Estate"
            className="object-cover w-full max-w-md transform transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start text-4xl md:text-6xl lg:text-7xl mb-4">
            <h1 className="poppins font-extrabold text-white">Real Estate</h1>
            <h3 className="qwitcher-grypen-regular mt-2 md:mt-4 md:ml-4 text-yellow-400">Solutions</h3>
          </div>
          <p className="text-base md:text-lg lg:text-2xl font-medium text-gray-200 mb-8 leading-relaxed">
            Looking for properties? We've got you covered! Whether you're buying, selling, or renting, 
            we offer expert guidance and cutting-edge tools to make the process seamless and stress-free.
          </p>
          <motion.button
            className="bg-[#FFD700] text-black text-base md:text-lg font-semibold rounded-lg px-6 py-3 shadow-lg relative overflow-hidden"
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
            <Link to="/realestate" className="block w-full h-full">Explore</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstate;

