import React, { useState } from "react";
import img1 from "../assets/Aryan.jpeg";
import img2 from "../assets/Aryan.jpeg";
import img4 from "../assets/Rupesh.jpeg";
import img5 from "../assets/Nihar.jpeg";
import { cn } from "../lib/utils.js";

const TeamMemberCard = React.memo(({ member, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-800 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={member.image}
      alt={member.name}
      fill
      className="object-cover absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col justify-end py-4 px-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium text-white">
        {member.name}
      </div>
      <div className="text-sm md:text-lg text-gray-300">{member.role}</div>
    </div>
  </div>
));

TeamMemberCard.displayName = "TeamMemberCard";

const TeamSection = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    {
      name: "Aryan Fulsunge",
      role: "Founder",
      image: img1,
    },
    {
      name: "Aryan Gavhale",
      role: "Co-Founder",
      image: img2,
    },
    {
      name: "Ayush Itkhede",
      role: "Chief Technology Officer",
      image: img1,
    },
    {
      name: "Rupesh Jahagirdar",
      role: "Marketing Head",
      image: img4,
    },
    {
      name: "Nihar Joshi",
      role: "Project Manager",
      image: img5,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-gray-100 py-16">
         <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
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
      </div>
      <div className="max-w-4xl mx-auto text-center mb-12">
  <h1 className="text-4xl font-extrabold mb-4 text-white">
    About Midnight <span className="qwitcher-grypen-regular text-6xl text-yellow-400 ml-3 mr-3">Solutions</span>
  </h1>
  <p className="text-lg text-gray-400 leading-relaxed">
    At Midnight Solutions, we are driven by innovation, passion, and a relentless commitment to excellence. 
    Founded with the vision of transforming ideas into reality, we specialize in crafting cutting-edge digital 
    solutions tailored to meet the unique needs of our clients. 
  </p>
  <p className="text-lg text-gray-400 leading-relaxed mt-4">
    Our journey is fueled by a team of creative minds, dedicated developers, and forward-thinking strategists 
    who believe in the power of technology to revolutionize the way businesses operate. Whether it's designing 
    intuitive user experiences, building scalable software, or implementing innovative strategies, we bring 
    your vision to life with precision and care.
  </p>
  <p className="text-lg text-gray-400 leading-relaxed mt-4">
    With a customer-centric approach, Midnight Solutions thrives on fostering long-term partnerships by delivering 
    unparalleled value, innovative ideas, and solutions that not only meet but exceed expectations. Together, we 
    pave the path for a brighter, more connected future.
  </p>
</div>


<div className="max-w-6xl mx-auto mb-16 text-center">
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-white">Our Motivation</h2>
    <p className="text-lg text-gray-400 leading-relaxed">
      Midnight Solutions was born from a passion for solving complex problems and a drive to revolutionize the technological 
      landscape. We envisioned a world where innovation and creativity seamlessly converge to address real-world challenges. 
      Our journey began with a belief that technology is more than just a tool—it is a powerful enabler that can transform 
      businesses, empower individuals, and improve lives.
    </p>
  </div>
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
    <p className="text-lg text-gray-400 leading-relaxed">
      At Midnight Solutions, our mission is to deliver reliable, scalable, and innovative tech solutions that empower businesses 
      to thrive in an ever-changing digital landscape. By combining technical expertise with a deep understanding of our clients' 
      needs, we transform visions into reality. We aim to push the boundaries of possibility and make technology accessible, 
      impactful, and sustainable for all.
    </p>
  </div>
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
    <p className="text-lg text-gray-400 leading-relaxed">
      We aspire to be a global leader in the technology space, recognized for inspiring progress and shaping the future through 
      groundbreaking innovations. Our vision is to create a world where technology is a force for good, driving meaningful change 
      and opening up new opportunities for growth, connection, and creativity.
    </p>
  </div>
</div>


     
    </section>
  );
};

export default TeamSection;
