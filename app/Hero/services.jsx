import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "General Pediatric Care",
    image: "https://img.freepik.com/free-photo/routine-examination-little-girl-s-throat_329181-7675.jpg?t=st=1739273716~exp=1739277316~hmac=78c8a77aff1bf9c01a5b16273fa0f178395457eef09c81d45549f9fbcad56c25&w=996",
    description:
      "Our expert pediatricians provide comprehensive healthcare for children, including routine check-ups, immunizations, and managing childhood illnesses to promote healthy growth and development.",
    link: "/services/general-pediatric-care",
  },
  {
    title: "Neonatal and Pediatric Intensive Care Unit (NICU)",
    image: "https://img.freepik.com/free-photo/father-holds-hand-newly-born-babe-diapers_140725-300.jpg?t=st=1739273846~exp=1739277446~hmac=8844289b797d83fcd5f36fea9bdc2bc491e8b28b4d7f0bae25355ee022de0f73&w=996",
    description:
      "Our state-of-the-art NICU provides specialized care for premature babies and critically ill newborns, ensuring they receive the best medical attention and life-saving treatments.",
    link: "/services/nicu",
  },
  {
    title: "Nutrition Counselling",
    image: "https://img.freepik.com/free-photo/baby-boy-joining-family-dinner_1098-17653.jpg?t=st=1739273943~exp=1739277543~hmac=cf592b805af34497d95de143a50d06fd41593401be87c418213c7ea8c2171e41&w=996",
    description:
      "Our nutrition experts offer personalized counseling to help ensure your child receives proper nutrition for growth, development, and overall well-being, addressing dietary concerns and creating healthy eating plans.",
    link: "/services/nutrition-counselling",
  },
  {
    title: "New Born Care",
    image: "https://img.freepik.com/free-photo/portrait-sleeping-newborn-hold-hands_1163-1828.jpg?t=st=1739274014~exp=1739277614~hmac=d14dc67dbdc076a84743bec9bca7c16f4a35dd0e5e02231d85f68363895cc0be&w=740",
    description:
      "We provide specialized care for newborns, including routine newborn check-ups, early diagnosis, and support for parents, ensuring the health and development of your baby from the start.",
    link: "/services/new-born-care",
  },
  {
    title: "Pediatric Neurology",
    image: "https://img.freepik.com/free-photo/close-up-examination-with-stethoscope_23-2148231365.jpg?t=st=1739274129~exp=1739277729~hmac=77db47c1ab6e9386936db7d7c2fabf90478a99b634f27ff9db24fb3d8ff492a5&w=996",
    description:
      "Our pediatric neurologists specialize in diagnosing and treating neurological conditions such as epilepsy, migraines, and developmental disorders, offering comprehensive care and treatment plans.",
    link: "/services/pediatric-neurology",
  },
  {
    title: "Pediatric Surgery",
    image: "https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?t=st=1739274212~exp=1739277812~hmac=053df16244e374d0026535bcfbe4fbaf7e123223bc668583c9b97c2f57957a99&w=996",
    description:
      "Our pediatric surgeons are highly skilled in performing a wide range of surgeries for children, from routine procedures to complex operations, ensuring the best possible surgical care and recovery.",
    link: "/services/pediatric-surgery",
  },  
  {
    title: "Child Development Services",
    image: "https://img.freepik.com/free-photo/small-caucasian-boy-playing-with-colored-plasticine-making-figures-white-table-happy-child-idea_1268-16984.jpg?t=st=1739274280~exp=1739277880~hmac=aa8555b93cd5c0780fd23e981a475c95ca6e5ee0c82719714b099fb72b1ac22e&w=996",
    description:
      "Our Child Development Center offers specialized evaluations and therapies to support children with developmental delays, speech and language issues, and behavioral concerns, fostering their full potential.",
    link: "/services/child-development-services",
  },
  {
    title: "24/7 Emergency Services",
    image: "https://img.freepik.com/free-photo/little-girl-having-annual-medical-check-up-doctor-using-stethoscope-healthcare-practitioner-physician-specialist-medicine-providing-health-care-services-consultation-treatment-hospital_482257-14549.jpg?t=st=1739274334~exp=1739277934~hmac=aa12f837bed86b3be94031246a11e53d5c27a922ec7a3a7182c2912c5fa1b1ad&w=1380",
    description:
      "Our 24/7 Pediatric Emergency Department is equipped to handle all types of pediatric emergencies, providing immediate care and life-saving treatments for urgent medical situations.",
    link: "/services/emergency",
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
