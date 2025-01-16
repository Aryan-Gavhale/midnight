import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RealEstate from "./components/RealEstate";
import ITSolutions from "./components/it";
import Marketing from "./components/Marketing";
import Finance from "./components/Finance";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/Aboutus";
import UserProfile from "./components/UserProfile";
import ContactUsPage from "./components/Contactus";
import PropertyListing from "./components/Properties/property-listing";
import BlogSection from "./components/Blog/Blogpage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure scrolling resets on route change */}
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <RealEstate />
                  <ITSolutions />
                  <Marketing />
                  <Finance />
                  <Partners />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/realestate" element={<PropertyListing />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
