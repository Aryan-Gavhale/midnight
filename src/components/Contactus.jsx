import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the form data to Firebase or an API)
    alert('Form Submitted');
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mb-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-4xl"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center mb-10">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl text-white font-semibold">Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              We're here to assist you with any questions or concerns. Feel free to reach out to us, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<FaPhone />} text="+91 9172810750" />
              <ContactInfo icon={<FaEnvelope />} text="midnightsolutions@gmail.com" />
              <ContactInfo icon={<FaMapMarkerAlt />} text="Dhankawadi, Pune, Maharashtra 411043" />
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-2xl text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <SocialIcon href="#" icon={<FaFacebookF />} />
                <SocialIcon href="#" icon={<FaTwitter />} />
                <SocialIcon href="https://www.instagram.com/mid.nightsolutions" icon={<FaInstagram />} />
                <SocialIcon href="#" icon={<FaLinkedinIn />} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl text-white font-semibold mb-6">Leave a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                label="Email Address"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div>
                <label htmlFor="message" className="text-gray-300 text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 p-4 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 resize-none"
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-lg font-semibold rounded-xl px-8 py-4 hover:from-yellow-500 hover:to-yellow-700 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-4">
    <div className="text-yellow-400 text-2xl">{icon}</div>
    <p className="text-gray-300 text-lg">{text}</p>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    className="text-yellow-400 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const InputField = ({ label, type, id, name, value, onChange }) => (
  <div>
    <label htmlFor={id} className="text-gray-300 text-lg">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-2 p-4 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
      required
    />
  </div>
);

export default ContactUsPage;

