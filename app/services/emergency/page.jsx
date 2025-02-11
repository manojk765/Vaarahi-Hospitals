import { Phone, Ambulance, Clock, AlertTriangle, Stethoscope, Users } from "lucide-react"
import Link from "next/link"

export default function EmergencyServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-blue-800">24/7 Emergency Services</h1>
            <p className="text-lg mb-8">
              We provide round-the-clock pediatric emergency care, ensuring your child receives immediate and expert 
              attention in critical situations at any hour.
            </p>
            <div className="flex gap-4">
              {/* <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Emergency Information
              </button> */}
              <Link href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1631201039086-1405a889c699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Emergency Services"
              fill="true"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { Icon: Clock, title: "24/7 Availability", description: "Always open for emergencies" },
            { Icon: Stethoscope, title: "Pediatric Specialists", description: "Expert care for children" },
            { Icon: Ambulance, title: "Rapid Response", description: "Swift action in critical situations" },
          ].map((service, index) => (
            <div key={index} className="bg-blue-50 p-6 text-center rounded-lg shadow-md hover:shadow-lg transition">
              <service.Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Emergency Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Immediate Care for:</h3>
              <ul className="space-y-3">
                {[
                  "Severe injuries and accidents",
                  "Acute illnesses and infections",
                  "Allergic reactions and asthma attacks",
                  "Severe pain or distress",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Facilities Include:</h3>
              <ul className="space-y-3">
                {[
                  "Pediatric trauma center",
                  "Advanced diagnostic imaging",
                  "Dedicated pediatric ICU",
                  "Child-friendly treatment rooms",
                ].map((facility, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/doctors-nurse-pushing-female-patient-stretcher-corridor-hospital_662251-3073.jpg?t=st=1739278185~exp=1739281785~hmac=7a4a5b5055c0e918d65b4a3c8b37ad16a5e5535998f30965e0c1b9936e443de8&w=996"
              alt="Emergency Team"
              fill="true"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Emergency Team</h2>
            <p className="text-lg mb-6">
              Our dedicated team of pediatric emergency specialists is always ready to provide expert care for your 
              child. With years of experience and specialized training, we ensure the best possible outcomes in critical
              situations.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Pediatric Emergency Physicians",
                  description: "Board-certified doctors specialized in emergency pediatric care",
                },
                {
                  title: "Pediatric Nurses",
                  description: "Experienced nurses trained in pediatric emergency procedures",
                },
                {
                  title: "Child Life Specialists",
                  description: "Professionals dedicated to easing anxiety and providing emotional support",
                },
              ].map((team, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">{team.title}</h3>
                    <p className="text-gray-600">{team.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Emergency Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Emergency Contact Number", number: "8142772466", description: "For emergency contact" },
              { title: "Contact", number: "9177348793", description: "For immediate contact" },
            ].map((contact, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-1 text-blue-800">{contact.title}</h3>
                  <p className="text-2xl font-bold text-gray-800">{contact.number}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Get Directions to ER
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
