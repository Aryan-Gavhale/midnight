import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="h-[500px] bg-gradient-to-r from-black to-gray-900 -mt-20 py-20">
      <div className="container mx-auto text-center">
      <motion.h2
  className="text-4xl font-bold mb-12"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <span className="poppins text-white text-7xl">Our</span> 
  <span className="qwitcher-grypen-regular text-yellow-400 text-7xl mx-4">Partners</span>
</motion.h2>


        {/* Continuous Loop of Brand Boxes */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12">
            {/* Brand Boxes */}
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Yashoda Enterprises
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hotel Jagdamb
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AK Consultancy
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 4
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 5
            </motion.div>
            {/* Repeat the same brand boxes to create a seamless scrolling effect */}
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 6
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 7
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 8
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 9
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-48 text-2xl font-bold text-yellow-400 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Brand 10
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
