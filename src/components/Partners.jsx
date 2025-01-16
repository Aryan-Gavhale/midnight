import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  "Yashoda Enterprises",
  "Hotel Jagdamb",
  "AK Consultancy",
  "The Waffle House",
  "Tails and Tails",
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-yellow-400 qwitcher-grypen-regular">Partners</span>
        </motion.h2>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full flex items-center justify-center"
                >
                  <div className="w-[280px] h-[120px] flex items-center justify-center text-lg font-semibold text-white bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-yellow-400  transition-transform duration-500">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                      {partner}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            aria-label="Previous partner"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            aria-label="Next partner"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-6 flex justify-center space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-yellow-400" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
