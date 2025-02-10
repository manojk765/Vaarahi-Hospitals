import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "General Pediatric Care",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our expert pediatricians provide comprehensive healthcare for children, including routine check-ups, immunizations, and managing childhood illnesses to promote healthy growth and development.",
    link: "/services/general-pediatric-care",
  },
  {
    title: "Neonatal and Pediatric Intensive Care Unit (NICU)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our state-of-the-art NICU provides specialized care for premature babies and critically ill newborns, ensuring they receive the best medical attention and life-saving treatments.",
    link: "/services/nicu-care",
  },
  {
    title: "Nutrition Counselling",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our nutrition experts offer personalized counseling to help ensure your child receives proper nutrition for growth, development, and overall well-being, addressing dietary concerns and creating healthy eating plans.",
    link: "/services/nutrition-counselling",
  },
  {
    title: "New Born Care",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "We provide specialized care for newborns, including routine newborn check-ups, early diagnosis, and support for parents, ensuring the health and development of your baby from the start.",
    link: "/services/new-born-care",
  },
  {
    title: "Pediatric Neurology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our pediatric neurologists specialize in diagnosing and treating neurological conditions such as epilepsy, migraines, and developmental disorders, offering comprehensive care and treatment plans.",
    link: "/services/pediatric-neurology",
  },
  {
    title: "Pediatric Surgery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our pediatric surgeons are highly skilled in performing a wide range of surgeries for children, from routine procedures to complex operations, ensuring the best possible surgical care and recovery.",
    link: "/services/pediatric-surgery",
  },  
  {
    title: "Child Development Services",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our Child Development Center offers specialized evaluations and therapies to support children with developmental delays, speech and language issues, and behavioral concerns, fostering their full potential.",
    link: "/services/child-development-services",
  },
  {
    title: "24/7 Emergency Services",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpUetYXkEVj_6GyndZkDbFyGPWu3w2x_ZaQ&s",
    description:
      "Our 24/7 Pediatric Emergency Department is equipped to handle all types of pediatric emergencies, providing immediate care and life-saving treatments for urgent medical situations.",
    link: "/services/emergency-services",
  },
];



export default function ServicesSection() {
  return (
    <section className="py-8 px-4 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:translate-y-[-10px]"
            >
              <div className="relative h-48 w-full">
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="object-cover w-full h-full" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  )
}
