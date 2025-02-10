'use client'

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";  
 
const services = [
  {
    name: "General Pediatric Care",
    image: "https://plus.unsplash.com/premium_photo-1661306540580-1e6e374ecf9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3UlMjBlbWVyZ2VuY3klMjBwZWRpYXRyaWNzfGVufDB8fDB8fHww", 
    glowColor: "from-blue-500 to-cyan-500"
  },
  {
    name: "Neonatal and Pediatric Intensive Care Unit (NICU)",
    image: "https://images.unsplash.com/photo-1542884923-7d83f5826a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
    glowColor: "from-purple-500 to-pink-500"
  }, 
  {
    name: "Child Development Services",
    image: "https://plus.unsplash.com/premium_photo-1726873277952-41ea5ebf9726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVkaWF0cmljJTIwZGV2ZWxvcGVtZW50JTIwYXNzZXNtZW50fGVufDB8fDB8fHww",  
    glowColor: "from-green-500 to-yellow-500"
  },
  {
    name: "24/7 Emergency Services",
    image: "https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    glowColor: "from-red-500 to-orange-500"
  }
];

function ServiceCard({ member }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[80%] sm:w-80 md:w-64 lg:w-72 h-80 sm:h-96 md:h-72 lg:h-80 flex-wrap-reverse rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? `0 0 30px rgba(0, 0, 0, 0.2)`
          : "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <div 
        className={`h-full bg-white rounded-2xl overflow-hidden transition-shadow duration-300 ${isHovered ? `shadow-${member.glowColor}` : ''}`}
      >
        <div className="h-full relative">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full " 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-800/50" /> {/* Dark overlay */}
          
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">
              {member.name}
            </h3>
            <button className="flex items-center text-sm font-medium text-blue-500">
              Know More <BsArrowRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-8 flex items-center justify-center overflow-hidden">
      <div className="container px-4">
        <h2 className="text-center text-4xl font-bold text-[#4d4d4d] mb-12">
          Explore our area of Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-8 pb-8">
          {services.map((member, index) => (
            <ServiceCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
