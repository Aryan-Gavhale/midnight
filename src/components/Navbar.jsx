import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbarlogo from "../assets/navbarlogo.jpg";
import { auth, googleProvider } from "../Firebase.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const servicesRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src={Navbarlogo}
            alt="Brand Logo"
            className="w-[110px] h-[50px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center text-lg font-medium">
          <Link to="/" className="hover:text-[#FFD700]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#FFD700]">
            About Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-[#FFD700] focus:outline-none">
              Services
            </button>
            {isServicesOpen && (
              <ul className="absolute bg-[#222222] mt-2 rounded-xl shadow-lg w-48">
                {["Real Estate", "IT", "Marketing", "Finance", "Consultant"].map(
                  (service) => (
                    <li
                      key={service}
                      className="px-6 py-3 hover:bg-[#444444] cursor-pointer"
                    >
                      {service}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          <Link to="/contact" className="hover:text-[#FFD700]">
            Contact Us
          </Link>
          <Link to="/blog" className="hover:text-[#FFD700]">
            Blog
          </Link>
        </div>

        {/* User Login/Logout Section */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "/default-avatar.jpg"}
                alt={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              />
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-[#222222] text-white rounded-xl shadow-lg">
                  <ul className="space-y-2 p-3">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-[#444444]"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-[#444444]"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-[#FFD700] text-black font-semibold rounded-xl px-4 py-2"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-xl px-4 py-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#FFD700] text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#222222] text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-[#FFD700]">
            Home
          </Link>
          <Link to="/about" className="block hover:text-[#FFD700]">
            About Us
          </Link>
          <button
            className="block hover:text-[#FFD700] w-full text-left"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services
          </button>
          {isServicesOpen && (
            <ul className="space-y-2 ml-4">
              {["Real Estate", "IT", "Marketing", "Finance", "Consultant"].map(
                (service) => (
                  <li
                    key={service}
                    className="px-2 py-1 hover:text-[#FFD700]"
                  >
                    {service}
                  </li>
                )
              )}
            </ul>
          )}
          <Link to="/contact" className="block hover:text-[#FFD700]">
            Contact Us
          </Link>
          <Link to="/blog" className="block hover:text-[#FFD700]">
            Blog
          </Link>
          {user ? (
            <>
              <Link
                to="/profile"
                className="block hover:text-[#FFD700]"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:text-[#FFD700]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-[#FFD700] text-black font-semibold rounded-xl px-4 py-2 w-full"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-xl px-4 py-2 w-full block text-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
