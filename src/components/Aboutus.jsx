import React, { useState } from "react";
import img1 from "../assets/Fullu.jpeg";
import img2 from "../assets/Aryan.jpeg";
import img3 from "../assets/Ayush.jpeg";
import img4 from "../assets/Rupesh.jpeg";
import img5 from "../assets/Nihar.jpeg";
import { cn } from "../lib/utils.js";
import { motion } from "framer-motion";



const TeamMemberCard = React.memo(({ member, index, hovered, setHovered }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-xl relative overflow-hidden h-80 sm:h-96 w-full transition-all duration-300 ease-out shadow-lg",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-75"
    )}
  >
    <img
      src={member.image}
      alt={member.name}
      layout="fill"
      objectFit="cover"
      objectPosition="center top"
      className="transition-transform duration-300 ease-out transform hover:scale-110"
    />
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end py-4 px-4 sm:py-6 sm:px-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">{member.role}</p>
      </motion.div>
    </div>
  </motion.div>
));

TeamMemberCard.displayName = "TeamMemberCard";

const TeamSection = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    { name: "Aryan Fulsunge", role: "Founder", image: img1 },
    { name: "Aryan Gavhale", role: "Co-Founder", image: img2 },
    { name: "Ayush Itkhede", role: "Chief Technology Officer", image: img3 },
    { name: "Rupesh Jahagirdar", role: "Marketing Head", image: img4 },
    { name: "Nihar Joshi", role: "Project Manager", image: img5 },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-gray-100 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMTMxMzEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            The brilliant minds behind Midnight Solutions, working tirelessly to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto mb-16 sm:mb-24">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            About Midnight{" "}
            <span className="qwitcher-grypen-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 ml-2 mr-2">
              Solutions
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            At Midnight Solutions, we are driven by innovation, passion, and a relentless commitment to excellence. 
            Founded with the vision of transforming ideas into reality, we specialize in crafting cutting-edge digital 
            solutions tailored to meet the unique needs of our clients.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Our journey is fueled by a team of creative minds, dedicated developers, and forward-thinking strategists 
            who believe in the power of technology to revolutionize the way businesses operate.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            With a customer-centric approach, Midnight Solutions thrives on fostering long-term partnerships by delivering 
            unparalleled value, innovative ideas, and solutions that not only meet but exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-16 md:mb-24 px-4">
          {["Our Motivation", "Our Mission", "Our Vision"].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-xl p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">{title}</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {title === "Our Motivation" && "Midnight Solutions was born from a passion for solving complex problems and a drive to revolutionize the technological landscape."}
                {title === "Our Mission" && "At Midnight Solutions, our mission is to deliver reliable, scalable, and innovative tech solutions that empower businesses to thrive in an ever-changing digital landscape."}
                {title === "Our Vision" && "We aspire to be a global leader in the technology space, recognized for inspiring progress and shaping the future through groundbreaking innovations."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

