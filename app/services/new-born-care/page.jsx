import { Baby, Heart, Shield, Clock, Calendar, Phone, Stethoscope } from "lucide-react"

export default function NewBornCarePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-blue-600">New Born Care</h1>
            <p className="text-lg mb-8">
              Specialized care for your newborn, ensuring a healthy start to life with comprehensive medical attention and support during the crucial early stages of development.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                Schedule Check-up
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
                Emergency Care
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://sjc.microlink.io/crOXhfhd32jYe6Nnh0Ejw9X7gZU1mfZ-DS_olRXUFnq-KP1gkPK4CMdWWhPXjJNVugM85TxSuVK0EVGNhUuJ1w.jpeg"
              alt="Newborn Care"
              fill="true"
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <Baby className="w-12 h-12 mb-4 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Initial Assessment</h3>
            <p className="text-gray-700">Comprehensive evaluation of your newborn's health status.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <Heart className="w-12 h-12 mb-4 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Monitoring</h3>
            <p className="text-gray-700">Regular check-ups to ensure proper growth and development.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 mb-4 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Preventive Care</h3>
            <p className="text-gray-700">Vaccinations and preventive measures for optimal health.</p>
          </div>
        </div>

        {/* Newborn Care Services */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Newborn Care Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Initial Care</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Complete physical examination
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  APGAR scoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Vital signs monitoring
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Ongoing Care</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Growth monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Feeding support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Development tracking
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Preventive Care</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Immunizations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Screening tests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Health education
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parent Education & Support */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://sjc.microlink.io/crOXhfhd32jYe6Nnh0Ejw9X7gZU1mfZ-DS_olRXUFnq-KP1gkPK4CMdWWhPXjJNVugM85TxSuVK0EVGNhUuJ1w.jpeg"
              alt="Parent Education"
              fill="true"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Parent Education & Support</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Stethoscope className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-2">Feeding Guidance</h3>
                  <p className="text-gray-700">Expert support for breastfeeding and bottle feeding.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-2">Sleep Patterns</h3>
                  <p className="text-gray-700">Understanding and managing newborn sleep schedules.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold mb-2">Safety Education</h3>
                  <p className="text-gray-700">Guidelines for newborn safety and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-600 rounded-lg p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6" />
              <div>
                <h3 className="font-semibold mb-1">Appointments</h3>
                <p>Schedule online or call</p>
                <button className="underline">Book Now</button>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6" />
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <p>Phone: +1-800-555-1234</p>
                <p>Email: info@hospital.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
