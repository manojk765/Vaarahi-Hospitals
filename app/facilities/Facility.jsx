'use client'

import FacilityCard from "./FacilityCard"
import { motion } from 'framer-motion';

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Family-Centered Care",
      description: "We understand the importance of family involvement in the healing process. Our facilities support families with:",
      features: [
        "Parent and Family Rooms for rest and overnight stays",
        "24/7 Visiting Hours for parents and close family",
        "Counseling and Support Services",
        "Educational Workshops for Parents",
      ],
      images: [
        { src: "https://5.imimg.com/data5/CX/GY/MY-9964393/simple-bed-500x500.jpg", alt: "Family Room" },
        { src: "https://5.imimg.com/data5/CX/GY/MY-9964393/simple-bed-500x500.jpg", alt: "Counseling Services" },
        { src: "https://5.imimg.com/data5/CX/GY/MY-9964393/simple-bed-500x500.jpg", alt: "Parent Workshop" },
      ]
    },
    {
      title: "Neonatal Intensive Care Unit (NICU)",
      description: "Our NICU is equipped with state-of-the-art technology to provide critical care to newborns in need of specialized medical attention.",
      features: [
        "24/7 Monitoring and Support",
        "Highly Trained Neonatal Specialists",
        "Advanced Ventilation and Life-Support",
        "Family-Centered Care Approach",
      ],
      images: [
        { src: "https://5.imimg.com/data5/CX/GY/MY-9964393/simple-bed-500x500.jpg", alt: "NICU Unit" },
        { src: "https://5.imimg.com/data5/CX/GY/MY-9964393/simple-bed-500x500.jpg", alt: "Specialized Equipment" },
      ]
    },
    // Add more facilities here
  ]

  return (
    <>
    
    <section className="container mx-auto px-4 py-4 bg-[#eaeff1]">
      
      
      {facilities.map((facility, index) => (

          <motion.div
          key={index}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-12 p-6 bg-[#eaeff1] transform hover:-translate-y-1 transition-transform duration-300`}
          >

          
          <FacilityCard
            key={index}
            title={facility.title}
            description={facility.description}
            features={facility.features}
            images={facility.images}
          />

          </motion.div>
      ))}
    </section>

    </>
  )
}
