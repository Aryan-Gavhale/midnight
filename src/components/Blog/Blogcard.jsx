import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ title, description, backgroundImage }) => (
  <motion.div
    className="group/card relative overflow-hidden rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={backgroundImage || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover/card:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-90"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h2 className="font-bold text-xl md:text-2xl text-white mb-2">{title}</h2>
      <p className="text-gray-300 text-sm mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0">
        {description}
      </p>
      <motion.button
        className="py-2 px-4 bg-yellow-400 text-black font-semibold text-sm rounded-full shadow hover:bg-yellow-500 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.button>
    </div>
  </motion.div>
);

export default BlogCard;

