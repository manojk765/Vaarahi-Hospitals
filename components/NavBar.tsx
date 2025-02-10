"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from 'lucide-react'
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import Logo from './Hospital_name.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setDropdownOpen(false)
  }

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen)
  }

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false)
      setDropdownOpen(false)
    }
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ]

  const serviceItems = [
    { href: "/services/general-pediatric-care", label: "General Pediatric Care" },
    { href: "/services/nicu", label: "NICU" },
    { href: "/services/nutrition-counselling", label: "Nutrition Counselling" },
    { href: "/services/new-born-care", label: "New Born Care" },
    { href: "/services/pediatric-neurology", label: "Pediatric Neurology" },
    { href: "/services/pediatric-surgery", label: "Pediatric Surgery" },
    { href: "/services/child-development-services", label: "Child Development Services" },
    { href: "/services/emergency", label: "24/7 Emergency Services" },
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-info bg-white">
      <div className="bg-[#0047CC] text-white py-2">
        <div className="w-[95%] mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="h-4 w-4" />
              <span>+91 9177348793</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="h-4 w-4" />
              <span>+91 8142772466</span>
            </div>
            <div className="flex items-center space-x-1">
              <CiMail className="h-4 w-4" />
              <span>vaarahi.childrenshospital@gmail.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <FaMapMarkerAlt className="h-4 w-4" />
              <span>D no 5/18-4, Opp to B Mart, Posina Compound, Proddatur, Kadapa, Andhra Pradesh 516360</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com" className="hover:opacity-80" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" className="hover:opacity-80" aria-label="Facebook">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" className="hover:opacity-80" aria-label="YouTube">
              <FaYoutube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Prime Hospitals Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#0047CC] relative group ${
                    isActive(item.href) ? "text-[#0047CC]" : "text-gray-800"
                  }`}
                >
                  {item.label}
                  <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#0047CC] transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}></span>
                </Link>
              ))}

              <div className="relative group" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center hover:text-[#0047CC] ${
                    isActive("/services") ? "text-[#0047CC]" : "text-gray-800"
                  }`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 overflow-hidden transition-all duration-300 ${
                  dropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2 hover:bg-gray-200 ${
                        isActive(service.href) ? "text-[#0047CC] bg-gray-100" : "text-gray-800"
                      }`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Link
                href="/book-appointment"
                className="bg-[#0047CC] text-white px-6 py-2 rounded hover:bg-[#0037A1] transition duration-300"
              >
                Book Appointment
              </Link>
            </div>

            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-[#0047CC] focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-base ${
                  isActive(item.href) ? "text-[#0047CC] bg-gray-100" : "text-gray-800"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`w-full text-left flex items-center justify-between px-3 py-2 ${
                  isActive("/services") ? "text-[#0047CC] bg-gray-100" : "text-gray-800"
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 bg-white shadow-inner transition-all duration-300 ${
                dropdownOpen ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-2 text-sm ${
                      isActive(service.href) ? "text-[#0047CC] bg-gray-100" : "text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={toggleMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/book-appointment"
              className="block px-3 py-2 text-base bg-[#0047CC] text-white rounded hover:bg-[#0037A1] transition duration-300"
              onClick={toggleMenu}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
