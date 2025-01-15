import React from "react";
import img1 from "../assets/estate3.jpeg"; // Importing the image
import img2 from "../assets/tech3.jpg"; // Importing the image
import img3 from "../assets/finance3.jpg"; // Importing the image
import img4 from "../assets/market.jpg"; // Importing the image
import img5 from "../assets/consulting2.jpg"; // Importing the image

// BlogCard Component
const BlogCard = ({ title, description, info, backgroundImage }) => (
    <div className="max-w-xs w-full group/card">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-lg shadow-lg max-w-sm mx-auto flex flex-col justify-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-60 transition-opacity duration-300"></div>
  
        {/* Content */}
        <div className="relative z-10 p-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-300 my-2">{description}</p>
          <p className="font-light text-xs text-gray-400 italic">{info}</p>
  
          {/* Read More Button */}
          <button className="mt-4 py-2 px-4 bg-gray-50 text-gray-900 font-semibold text-sm rounded-full shadow hover:bg-gray-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
  

// BlogSection Component
const BlogSection = () => {
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

  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-gray-100 py-16 mb-20">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4">Midnight <span className="qwitcher-grypen-regular text-6xl text-yellow-400 ml-3 mr-3">Solutions</span> Blog</h1>
        <p className="text-lg text-gray-400">
          Explore our blog for the latest updates, insights, and solutions
          designed to transform industries and drive success.
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full md:w-1/2 px-4 py-2 text-gray-900 rounded-md focus:outline-none"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-28">
        {blogCards.map((card) => (
          <BlogCard
            key={card.title}
            title={card.title}
            description={card.description}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;



