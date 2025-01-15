import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/navbarlogo.jpg"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-gray-300 py-12 -mt-20">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Tagline */}
        <motion.div
          className="mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
         <div className="flex items-center space-x-3">
  <img
    src={logo} // Replace with the actual path to your logo image
    alt="Logo"
    className="w-[100px] h-[100px] object-contain"
  />
</div>
<div className="flex flex-col mt-2">
  <h3 className="text-gray-400 text-center">
    Delivering excellence in web, app, and marketing solutions.
  </h3>
</div>


          
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>IT Solutions</li>
            <li>Digital Marketing</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="mb-8 md:mb-0 w-full md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Stay Updated
          </h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-yellow-400 px-4 py-2 text-black font-semibold rounded-md shadow-md"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#"
            className="text-yellow-400 text-2xl hover:text-gray-100 transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/mid.nightsolutions"
            className="text-yellow-400 text-2xl hover:text-gray-100 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-yellow-400 text-2xl hover:text-gray-100 transition-all duration-300"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm text-gray-500"
        >
          © 2025 midnightsolutions.in. All rights reserved +91 9172810750
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
