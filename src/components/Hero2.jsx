import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  const [isInView, setIsInView] = useState(false);

  // Detect if Hero2 is in the viewport
  const handleScroll = () => {
    const hero2 = document.getElementById("hero2");
    const rect = hero2.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    setIsInView(isInView);
  };

  useEffect(() => {
    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero2"
      className={`relative h-screen w-full flex transition-all duration-500 ${
        isInView ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Content */}
      <motion.div
        className="absolute bottom-20 left-10"
        initial={{ opacity: 0.5, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1
          className="text-6xl md:text-[140px] font-extrabold righteous-regular relative top-12 u-text-fill"
          data-title="hero2"
        >
          Hero2
        </h1>
      </motion.div>

      {/* "Explore" Button */}
      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold">
          Explore
        </button>
      </motion.div>
    </section>
  );
};

export default Hero2;
