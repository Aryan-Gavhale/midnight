import React, { useState } from 'react';

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
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex flex-col items-center py-12 mb-20">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-[#FFD700] text-center mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl text-white font-semibold">Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              We're here to assist you with any questions or concerns. Feel free to reach out to us, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <i className="fas fa-phone-alt text-[#FFD700] text-3xl"></i>
                <p className="text-gray-300 text-lg">+1 (123) 456-7890</p>
              </div>

              <div className="flex items-center space-x-6">
                <i className="fas fa-envelope text-[#FFD700] text-3xl"></i>
                <p className="text-gray-300 text-lg">contact@yourwebsite.com</p>
              </div>

              <div className="flex items-center space-x-6">
                <i className="fas fa-map-marker-alt text-[#FFD700] text-3xl"></i>
                <p className="text-gray-300 text-lg">123 Street Name, City, Country</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-2xl text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-8">
                <a href="#" className="text-[#FFD700] hover:text-[#FFB400] text-4xl transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-[#FFD700] hover:text-[#FFB400] text-4xl transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#FFD700] hover:text-[#FFB400] text-4xl transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-[#FFD700] hover:text-[#FFB400] text-4xl transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              {/* Social Handles */}
              <div className="mt-4 text-gray-300">
                <p className="text-xl">Facebook: @YourCompany</p>
                <p className="text-xl">Twitter: @YourCompany</p>
                <p className="text-xl">Instagram: @YourCompany</p>
                <p className="text-xl">LinkedIn: @YourCompany</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl text-white font-semibold mb-4">Leave a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-gray-300 text-lg">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 p-4 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-300 text-lg">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 p-4 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-300 text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 p-4 w-full bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD700] text-black text-lg font-semibold rounded-xl px-8 py-4 hover:bg-[#FFB400] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
