import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero1 = () => {
  const [isHero1InView, setIsHero1InView] = useState(true); // Initially Hero1 is in view (light mode)

  // Detect if Hero1 is in the viewport
  const handleScroll = () => {
    const hero1 = document.getElementById("hero1");
    const hero1Rect = hero1.getBoundingClientRect();

    // Check if Hero1 is in view
    const isHero1InView = hero1Rect.top <= window.innerHeight && hero1Rect.bottom >= 0;
    setIsHero1InView(isHero1InView);
  };

  useEffect(() => {
    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero1"
      className={`relative h-screen w-full flex transition-all duration-500 ${
        isHero1InView ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero1 Content */}
      <motion.div
        className="absolute bottom-20 left-10"
        initial={{ opacity: 0.5, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1
          className="text-6xl md:text-[140px] font-extrabold righteous-regular relative top-12 u-text-fill"
          data-title="hero1"
        >
          Hero1
        </h1>
      </motion.div>

      {/* Menu Options */}
      <motion.div
        className="absolute top-1/4 right-[120px] transform -translate-y-1/2 text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <ul className="space-y-6 text-2xl md:text-4xl font-medium text-gray-600">
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Services
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Contact Us
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            About Us
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Hero1;
