'use client'

import React from 'react';
import { FaHospitalUser } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaHospital } from "react-icons/fa6";
import { Activity, Clock, FlaskRoundIcon as Flask, Star, Pill, Radio } from "lucide-react"

const images = [
    <FaHospitalUser key="hospital-user" />,
    <FaHandHoldingHeart key="hand-holding-heart" />,
    <GiLifeSupport key="life-support" />,
    <FaHospital key="hospital" />
];

const headings = [
    "Trusted Care",
    "Personal Attention",
    "Ongoing Support",
    "Innovative Solutions" 
];

const explanation = [
    "Families rely on our consistent, compassionate care, knowing their children are in expert hands.",
    "Every child receives individualized care that’s tailored to their specific needs and medical journey.",
    "From diagnosis to recovery, we offer continuous guidance and resources for families at every step.",
    "We stay ahead by utilizing the latest advancements in pediatric medicine and technology."
];

const services = [
  {
    icon: <Activity className="w-12 h-12 text-white" />,
    title: "10+",
    description: "NICU and PICU with ventilator, CPAP, HHHFNC",
  },
  {
    icon: <Clock className="w-12 h-12 text-white" />,
    title: "24X7",
    description: "Availability Of ICU & Ambulances",
  },
  {
    icon: <Flask className="w-12 h-12 text-white" />,
    title: "Laboratory",
    description: "Blood-ABG analysis, ECG, NSG, 2 D echo, Ultrasound, Portable X ray",
  },
  {
    icon: <Star className="w-12 h-12 text-white" />,
    title: "4.9+",
    description: "Ratings On Google & Other Social Sites",
  },
  {
    icon: <Pill className="w-12 h-12 text-white" />,
    title: "Pharmacy",
    description: "24/7 avaliability for all emergency medication",
  },
  {
    icon: <Radio className="w-12 h-12 text-white" />,
    title: "Radiology",
    description: "X-RAY And Ultrasound",
  },
]

function Info() {
  
  const handlePhoneClick = () => {
    window.open('tel:8142772466');
  };

  return ( 
    <>
    <div className='mt-6'>
      <div className='flex items-center justify-center flex-col h-auto bg-[#fafafa] p-6'>
        <div className='flex items-center flex-col'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202020] font-info'>Why Choose Us</h1>
          <div className="h-1 w-32 bg-[#3f51b5] mt-4"></div>
          <p className='m-5 max-w-[67%] text-2xl text-center font-light'>
            Choose us for trusted, personalized care where every child receives focused attention from expert pediatricians. 
            We are committed to innovation and holistic healing, ensuring the best medical outcomes. 
            With a compassionate approach, we support families every step of the way.
          </p>
        </div> 

        <div className='flex flex-row justify-center items-center bg-[#fafafa] flex-wrap mt-12'>
          {images.map((image, index) => (
            <div key={index} className='m-4 p-6 w-[100%] h-auto sm:w-72 sm:h-72 flex flex-col items-center bg-white shadow-lg rounded-lg transform transition duration-500 hover:shadow-xl hover:-translate-y-2'>
              <div className='text-5xl text-[#3f51b5] mb-4'>{image}</div>
              <h2 className='text-xl font-semibold'>{headings[index]}</h2>
              <p className='text-center max-w-[80%] text-lg font-light'>{explanation[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    
    <div className="">
      <div
        className="h-auto w-full rounded shadow-2xl p-4 py-6 bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 "
        // style={{
        //   backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAB/CAYAAADfGjHwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANXSURBVHhe7d3NihxVHMbhU+ZTcSEqJAZEEHRhNgYDcSd4E+ImEPAyssiFeDFu3ehKEF0FF36AHwsxcWZi6Z+qpkHoPm9PicNMPQ8U01Od5qSb3xRT3afODHcfjGODwHPzV3Y4eTZtwzDvWDGx7FCBlHu3x/bGzdaOT6bv10wse1y+1Nprrwzt+tXWjo7nnSsmlo4nf843EAs5sRATCzGxEBMLMbEQEwsxsRATCzGxEBMLMbEQEwsxsXQ8f22+gVh2qbksNQHqy29a+/GX1q5eme9YMbF0fPtda7/93tqVy/OOFRNLxwvXp6OMae1i4QBiISYWYmIhJhZiYiEmFmJiISYWYmIhJpYOS25siaWjPkCszWdDYtlpczT58L3Wbr3a2h9P5ztWTCx7XPrn1anJT7U+C2Lpsj7LlliIiYWYWIiJhZhYiImFmFiIiYWYWIiJhZhYiImFmFiIiYWYWHbYrM/y+VetPf7B+ixFLB0//dra0yPrsxSxdFifZUssxMRCTCzExEJseOfjcazTwkMvpKpraurf/xfX0xj/fIw/fPRwHGud11q+s37rT9V7EDVAXYC19Lqa8zz+m7fmHQvU+zh1en7o+PW86w+UL5WOPzz6dBxrYeBa77VOE1Ob/+wHd6YLsZZcX/P147Mbvx772RfT+ynndfwlDhl/eP+TcTy06n9b8thy1uPXC785rJ/GWY5fj6srJ0/r2V/5uMO798dxyZOtJ7qU8ecbp/B/jj/cfXDanyfWxqlzR/3k1laH+7UTS8dLL06/SB6fzDtWTCw7bI4m925Pp6dHx/MdKyaWPZacZVxEXg5iYiEmFmJiISYWYmIhJhZiYiEmFmJiISYWYmIhJhZiYumoCc1MxLJHTWauWfs1oRxzcLs20ym9So4sXTWdsjZzcMXSVZdJ1ObIIhYOIBZiYiEmFmJiISYWYmIhJhZiYiEmFmJi6ajVIK3PMhFLx1uvT2u0WJ9FLDvV0aQ+QLzzdms3XrY+SxFLx5IlWy8asRATCzGxEBMLMbEQEwsxsRATCzGxEBMLMbEQEwsxsRATS4f1WbbEskfNafn+59H6LDPrs3RUMOXQP9J9ETmydFhyY0ssxMRCTCzExEJMLMTEQkwsxMRCTCzExEKotb8BdybrKrCmfYYAAAAASUVORK5CYII=')",
        //   // opacity: 0.5
        // }}
      >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-white text-lg font-medium">Vaarahi Children's Hospital: Caring for Your Little Ones with Excellence!</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Here&apos;s The Reason 
                <br />
                Why Choose Us?
              </h2>
            </div>

            <p className="text-blue-100 text-lg leading-relaxed">
            At Vaarahi Children's Hospital, we specialize in providing exceptional pediatric care with a compassionate touch. 
            Our dedicated team of pediatric specialist, ensures the highest standard of care for your child. 
            Equipped with advanced medical technology, we offer comprehensive services, including neonatal care, pediatric surgery, and 24/7 emergency support. 
            Our child-friendly environment features modern recovery areas, play zones, and state-of-the-art operating rooms designed to put your child at ease. 
            We prioritize your child's health and comfort every step of the way!
            </p>

            <button size="lg" className="bg-red-600 hover:bg-red-700 px-6 py-4 text-white rounded-md"  onClick={handlePhoneClick}>
              Call Us 24x7
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service, index) => (
                <div
                key={index}
                className="w-[100%] h-auto sm:w-auto flex flex-col space-y-4 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
                >

                <div className="flex items-center space-x-3">
                    <div className="text-white">
                    {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {service.title}
                    </h3>
                </div>

                <p className="text-blue-100 text-left md:text-center text-lg leading-relaxed">
                    {service.description}
                </p>
                </div>
            ))}

            </div>


        </div>
      </div>
        
      </div>
    </div>


    </>
  );
}

export default Info;
