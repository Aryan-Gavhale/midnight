import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./Blogcard"
import { FaSearch } from "react-icons/fa";
import img1 from "../../assets/estate3.jpeg"
import img2 from "../../assets/tech3.jpg"; // Importing the image
import img3 from "../../assets/finance3.jpg"; // Importing the image
import img4 from "../../assets/market.jpg"; // Importing the image
import img5 from "../../assets/consulting2.jpg"; // Importing the image
import { useEffect } from "react";

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogCards = [
    {
      title: "Real Estate",
      description: "Innovative solutions for the real estate industry.",
      backgroundImage: img1,
    },
    {
      title: "IT",
      description: "Reliable IT services to empower businesses.",
      backgroundImage: img2,
    },
    {
      title: "Finance",
      description: "Smart financial services for better decision-making.",
      backgroundImage: img3,
    },
    {
      title: "Consultancy",
      description: "Expert consultancy to guide your business journey.",
      backgroundImage: img4,
    },
    {
      title: "Marketing",
      description: "Creative marketing strategies for maximum impact.",
      backgroundImage: img5,
    },
  ];

  const filteredCards = blogCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 mb-20">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Midnight{" "}
          <span className="qwitcher-grypen-regular text-5xl sm:text-6xl text-yellow-400 ml-2 mr-2">
            Solutions
          </span>{" "}
          Blog
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Explore our blog for the latest updates, insights, and solutions
          designed to transform industries and drive success.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-3 text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard
              title={card.title}
              description={card.description}
              backgroundImage={card.backgroundImage}
            />
          </motion.div>
        ))}
      </motion.div>
      {filteredCards.length === 0 && (
        <p className="text-center text-gray-400 mt-8">
          No results found. Try a different search term.
        </p>
      )}
    </section>
  );
};

export default BlogSection;

