import React from "react";
import { motion } from "framer-motion";
//import realestate from "../assets/realestate.jpeg"
import { useState } from "react";
import marketing from "../assets/marketing.png"
import { Link } from "react-router-dom";

const Marketing = () => {

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
    
<section className="h-[700px] relative -mt-36 py-32 md:py-48 bg-gradient-to-r from-black to-gray-900 text-white transition-all duration-1000 ease-in-out mb-20">
{/* Your content goes here */}
  {/* Your content here */}



      <div className="absolute container mx-auto px-8 flex flex-col md:flex-row items-center justify-between bottom-[100px]">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <img
            src={marketing} // Replace with your image URL
            alt="Real Estate"
            className="object-cover  transform  transition-transform duration-500 ease-in-out h-4/5 w-4/5"
            style={{
              mixBlendMode: "lighten", // Allows the light parts of the image to remain bright
              
            }}
          />
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
           <div className="flex items-center text-7xl">
            <h1 className="poppins font-extrabold text-white">Marketing</h1>
            <h3 className="qwitcher-grypen-regular mx-6 mt-4 text-yellow-400">Solutions</h3>
</div>
          <p className="text-lg md:text-2xl font-medium text-gray-200 mb-8 mt-4 leading-relaxed">
            Looking for properties? We've got you covered! Whether you're buying, selling, or renting, 
            we offer expert guidance and cutting-edge tools to make the process seamless and stress-free.
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
              <Link to="/marketing">Explore</Link>
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
