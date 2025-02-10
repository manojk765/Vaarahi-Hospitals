import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import { FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { RiTelegram2Fill } from 'react-icons/ri';
import Logo from './Hospital_name.png';
import Image from 'next/image';

export const footerLinks = [
  { 
    title: 'Quick Links',
    links: [
      { name: 'Home', link: '/' },
      { name: 'About Us', link: '/about' },
      { name: 'Gallery', link: '/gallery' },
      { name: 'Testimonials', link: '/testimonials' },
      { name: 'Contact Us', link: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'General Pediatric Care', link: '/services/general-pediatric-care' },
      { name: 'Neonatal Intensive Care Unit (NICU)', link: '/services/nicu' },
      { name: 'Pediatric Emergency Care', link: '/services/nutrition-counselling' },
      { name: 'Pediatric Cardiology', link: '/services/new-born-care' },
      { name: 'Pediatric Neurology', link: '/services/pediatric-neurology' },
      { name: 'Pediatric Oncology', link: '/services/pediatric-surgery' },
      { name: 'Child Development Services', link: '/services/child-development-services' },
      { name: '24/7 Emergency Services', link: '/services/emergency' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { name: 'D no 5/18-4, Opp to B Mart, Posina Compound, ', link: '/contact' },
      { name: 'Proddatur, Kadapa, Andhra Pradesh, 516 360', link: '/contact'},
      { name: 'vaarahi.childrenshospital@gmail.com', link: 'mailto:vaarahi.childrenshospital@gmail.com' },
      { name: '+91 8142772466', link: 'tel:8142772466' },
      { name: '+91 9177348793', link: 'tel:9177348793' },
    ],
  },
]; 

export const socialMedia = [
  { icon: <RiTelegram2Fill />, link: 'https://t.me/+gzef6ogHhCUxNmU1' },
  { icon: <FaWhatsapp />, link: 'https://wa.me/1234567890' },
  { icon: <RiInstagramLine />, link: 'https://www.instagram.com/themarketable.in' },
  { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/marketable-in/' },
];

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3] p-8 md:p-12 relative z-[10] font-info">
      <div className="max-container mx-auto px-4 md:px-6 flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start text-center max-sm:text-left gap-5">
        
            <h3 className=' text-left text-3xl text-gray-800 font-semibold hover:text-[#1e3a5f]'>
              <Image
                    src={Logo}
                    alt="Company Logo"
                    className="h-20 w-64 mb-6" 
                  />
              <a href='/'>Vaarahi Hospitals</a>
            </h3>
            <div className='text-left text-gray-600 max-w-[30rem] text-md'>
            Our commitment is to deliver first-rate medical care with empathy and moral rectitude. 
            Our goal is to create a welcoming atmosphere where each patient feels heard and respected. 
            We work together to ensure that everyone has access to high-quality healthcare and to positively impact our community.
            </div>
          
          <div className="flex items-center flex-wrap gap-4 mt-5 justify-center max-sm:justify-start">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-5 gap-10 flex-wrap max-sm:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-800 font-montserrat text-xl md:text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul className="text-left max-sm:text-left">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-gray-900 font-montserrat text-base leading-normal hover:text-black cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto bg-[#113a74] text-white p-4 md:p-8 mt-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-start items-start text-center md:text-left gap-6">
          <div className="md:w-1/3">
            <p className="text-xl font-semibold">Opening Hours for OP</p>
          </div>

          <div className="flex flex-col md:w-1/3 space-y-2">
            <p className="text-lg">Morning: 10 AM to 2 PM</p>
            <p className="text-lg">Evening: 5 PM to 8 PM</p>
          </div>

          <div className="md:w-1/3 flex flex-col space-y-2">
            <p className="text-lg">We are available 24/7 for emergency services</p>
            <p className="text-lg">We are open on Sundays by prior appointment</p>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-300 mt-12 pt-6">
        <div className="flex justify-center text-black text-sm flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-4 text-center">
          <div className="flex items-center gap-2 justify-center">
            <FaRegCopyright width={20} height={20} className="text-black" />
            <p>Copyright. All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
