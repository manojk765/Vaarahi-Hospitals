"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sravanthi ",
    comment:
      "The only super specialty hospital in town, offering exceptional neonatal and pediatric care, led by the highly skilled Dr. Sruthi, a dedicated neonatologist, and Dr. Lokesh, an expert pediatrician. Both doctors provide compassionate and personalized care, ensuring the best outcomes for newborns and children. A trusted choice for families seeking top-tier medical attention for their little ones! Highly recommend for specialized children's care.  ",
    rating: 5,
    image: "assets/Hospital_logo.png",
  },
  {
    id: 2,
    name: "Kranthi",
    comment:
"Many of my friends suggested to me this is the best children's hospital. I went and met Dr.Lokesh and Dr.Sruthi for my kids treatment. The treatment was top-notch and the staff provided good supervision.The hospital was clean and hygienic,which made me feel safe and comfortable during my visit.I highly recommend this hospital for anyone in need of pediatric care.",
    rating: 5,
    image: "assets/Hospital_logo.png",  },
  {
    id: 3,
    name: "Rajesh Babu",
    comment:
"Varahi Super Specialist hospital is one of the best hospital in nearby locations. I recently visited hospital for my kids sickness and doctor Sruthi & Lokesh are very well qualified and understand the problem patiently and addressed health issues. I definitely recommend them. ",
    rating: 5,
    image: "assets/Hospital_logo.png",  },
  {
    id: 4,
    name: "Durga Lakshmi",
    comment:
"Vaarahi children's super speciality is one of the best hospital.it was a great experience.The supporting staff outstanding.Everything was crystal and clear from admitting the patients to discharge I will recommend to my friends and relatives .Docters are simple and patience and giving excellent treatment,fine facility at the hospital with good medical equipment and cleanliness.The surroundings are very peace full,clean tidy which is significant to the hospital",
    rating: 5,
    image: "assets/Hospital_logo.png",  },
  {
    id: 5,
    name: "Siva Prasad",
    comment:
"My baby was admitted with problem of infection of knee . It was treated with surgery. Within one week my baby was cured major problem was treated very quickly .we are feared about my baby condition.so many hospitals was consult but no use at last we find vaarahi childrens hospital.we consult dr.sruti mam,Dr lokesh kumar was very cool and clear explanation about my baby condition.varahi hospital is one of the best hospital .I recommend my family my friends and all to visit .Tnq so much Dr Sruthi mam and Dr lokesh kumar for my baby fastly recovery",
    rating: 5,
    image: "assets/Hospital_logo.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setFade(false)
      }, 1000)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4d4d4d] mb-4">Patient Testimonials</h2>
          <p className="text-xl text-black">
            Happy patients with their valuable feedback and great experience at our Hospital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`transition-all duration-10000 transform ${
              fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="bg-transparent backdrop-blur-sm p-8 rounded-2xl border border-blue-800">
              <div className="mb-6">
                <span className="text-6xl text-blue-900 font-serif">"</span>
                <p className="text-xl text-black mt-2">{testimonials[currentIndex].comment}</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-blue-900 text-blue-900" />
                ))}
              </div>

              <div className="font-semibold text-blue">{testimonials[currentIndex].name}</div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 transform ${fade ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={`Testimonial from ${testimonials[currentIndex].name}`}
                className="w-full h-full "
              />
              <div className="absolute inset-0 bg-blue-950/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

