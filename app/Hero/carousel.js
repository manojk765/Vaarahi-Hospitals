"use client"

import { useState, useEffect, useCallback } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Link from "next/link"
import { usePathname } from "next/navigation"

const slides = [
  { 
    background: "https://plus.unsplash.com/premium_photo-1661607095917-e5a91a6c1afc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading:"Welcome to Vaarahi Hospital where your child can get",
    title: "Expert Pediatric Care",
    description:
      "Welcome to our superspeciality childcare hospital, where every child's journey to health begins with a smile. Our caring team is here to sprinkle a little love and expertise into every checkup, making sure your little ones shine bright. Together, let's nurture a brighter future for our children, one healthy step at a time!",
    buttonText: "Contact Us",
  },
  {
    background: "https://plus.unsplash.com/premium_photo-1661753445960-3524fce83895?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Creating a Healing Environment",
    title: "A Place to Play and Heal",
    description:
      "Our vibrant playroom is designed to be a joyful and relaxing space for children. We understand the importance of creating a fun and stress-free environment that supports both healing and happiness.",
    buttonText: "Contact Us",
  },
  {
    background:  'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // background: 'assets/Hospital_logo.png',
    subheading: "Comfort and Care Together",
    title: "Advanced Care, Comfortably Delivered",
    description:
      "Our modern rooms offer state-of-the-art medical care in a cozy, child-friendly setting. With bright decor and personal touches, we provide a healing space where your child can feel safe and secure.",
    buttonText: "Contact Us",
  },
  {
    background: "https://images.unsplash.com/photo-1631201039086-1405a889c699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Always Here for You",
    title: "24/7 Emergency Services",
    description:
      "Our hospital is equipped with round-the-clock emergency services to address any critical health concerns. Our expert medical staff is always available to provide immediate, compassionate care.",
    buttonText: "Get Help Now",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(false)
  const pathname = usePathname()  

  const nextSlide = useCallback(() => {
    setFade(true)
    setTimeout(() => {
      setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
      setFade(false)
    }, 0)
  }, [])

  const previousSlide = useCallback(() => {
    setFade(true)
    setTimeout(() => {
      setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
      setFade(false)
    }, 0) 
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 10000)

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-blue-50 font-info">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === current ? (fade ? "opacity-0" : "opacity-100") : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out transform scale-105"
            style={{
              backgroundImage: `url(${slide.background})`,
              transform: fade ? "scale(1.05)" : "scale(1)",
            }}
          >
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
              {/* Subheading */}
              <h2
                className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-center transition-all duration-500 transform"
                style={{
                  opacity: fade ? 0 : 1,
                  transform: fade ? "translateY(20px)" : "translateY(0)",
                }}
              >
                {slide.subheading}
              </h2>
              {/* Title */}
              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center transition-all duration-500 transform"
                style={{
                  opacity: fade ? 0 : 1,
                  transform: fade ? "translateY(20px)" : "translateY(0)",
                }}
              >
                {slide.title}
              </h1>
              {/* Description */}
              <p
                className="text-white text-sm sm:text-base md:text-lg mb-6 text-center max-w-3xl transition-all duration-500 transform"
                style={{
                  opacity: fade ? 0 : 1,
                  transform: fade ? "translateY(20px)" : "translateY(0)",
                }}
              >
                {slide.description}
              </p>
              <Link href="/contact">
                <button className="bg-[#ee4c45] text-gray-100 font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition text-blue-900 z-10"
      >
        <BsChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition text-blue-900 z-10"
      >
        <BsChevronRight size={24} />
      </button>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(true)
              setTimeout(() => {
                setCurrent(i)
                setFade(false)
              }, 500)
            }}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-[#ee4c45] scale-125" : "bg-white"}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <div className="w-full">
      <HeroCarousel />
    </div>
  )
}
