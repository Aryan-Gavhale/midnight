import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 md:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="poppins text-white">Our</span> 
          <span className="qwitcher-grypen-regular text-yellow-400 ml-2 md:ml-4">Partners</span>
        </motion.h2>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-4 md:space-x-12">
            {[
              "Yashoda Enterprises",
              "Hotel Jagdamb",
              "AK Consultancy",
              "Brand 4",
              "Brand 5",
              "Brand 6",
              "Brand 7",
              "Brand 8",
              "Brand 9",
              "Brand 10"
            ].map((brand, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-36 md:w-48 text-lg md:text-2xl font-bold text-yellow-400 bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {brand}
              </motion.div>
            ))}
            {[
              "Yashoda Enterprises",
              "Hotel Jagdamb",
              "AK Consultancy",
              "Brand 4",
              "Brand 5",
              "Brand 6",
              "Brand 7",
              "Brand 8",
              "Brand 9",
              "Brand 10"
            ].map((brand, index) => (
              <motion.div
                key={index + 10}
                className="flex-shrink-0 w-36 md:w-48 text-lg md:text-2xl font-bold text-yellow-400 bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg transform transition-all hover:bg-yellow-400 hover:text-gray-800"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

