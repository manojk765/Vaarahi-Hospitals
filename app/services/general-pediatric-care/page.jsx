import Link from "next/link";
import { Calendar, Clock, Phone, MapPin, Shield, Stethoscope, Baby, Activity } from "lucide-react";

export default function GeneralPediatricCarePage() {
  return (
    <div className="bg-gradient-to-b from-[#0D47A1] to-[#1976D2] text-white p-4">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">General Pediatric Care</h1>
            <p className="text-lg mb-6">
              Comprehensive healthcare for children from birth through adolescence. Our expert pediatricians are dedicated to ensuring your child's health, growth, and development in a nurturing environment.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#82B1FF] hover:bg-[#BBDEFB] text-darkBlue py-3 px-6 rounded-lg text-lg transition duration-300">
                Schedule Appointment
              </button>
              <button className="border-2 border-[#BBDEFB] hover:bg-[#BBDEFB] text-white py-3 px-6 rounded-lg text-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/routine-examination-little-girl-s-throat_329181-7675.jpg?t=st=1739189568~exp=1739193168~hmac=df918c35349e592c800f62d13dbd07d6641c63523e9ee7e199a5d71066f712b0&w=996"
              alt="General Pediatric Care"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white text-darkBlue p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Shield className="w-12 h-12 mb-4 text-[#0D47A1]" />
            <h3 className="text-2xl font-semibold mb-2">Preventive Care</h3>
            <p className="text-black">Regular check-ups and immunizations to keep your child healthy and thriving.</p>
          </div>
          <div className="bg-white text-darkBlue p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Stethoscope className="w-12 h-12 mb-4 text-[#0D47A1]" />
            <h3 className="text-2xl font-semibold mb-2">Illness Treatment</h3>
            <p className="text-black">Comprehensive care for both acute and chronic conditions with advanced treatments.</p>
          </div>
          <div className="bg-white text-darkBlue p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Baby className="w-12 h-12 mb-4 text-[#0D47A1]" />
            <h3 className="text-2xl font-semibold mb-2">Growth Monitoring</h3>
            <p className="text-black">Tracking your child's development with personalized care plans and support.</p>
          </div>
          <div className="bg-white text-darkBlue p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Activity className="w-12 h-12 mb-4 text-[#0D47A1]" />
            <h3 className="text-2xl font-semibold mb-2">Health Education</h3>
            <p className="text-black">Providing parents with valuable resources and guidance on child health and wellness.</p>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Our Pediatric Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Well-child visits and check-ups
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Immunizations and vaccinations
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                School and sports physicals
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Treatment of acute illnesses
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Management of chronic conditions
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Developmental screenings
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Behavioral health consultations
              </li>
              <li className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-[#82B1FF] rounded-full" />
                Nutritional counseling
              </li>
            </ul>
          </div>
        </div>

        {/* Visit Information */}
        <div className="mt-16 bg-[#0D47A1] rounded-lg p-8 shadow-md">
          <h2 className="text-4xl font-bold mb-8 text-white">Visit Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#BBDEFB]" />
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-gray-300">Mon-Fri: 8am-6pm</p>
                <p className="text-gray-300">Sat: 9am-1pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#BBDEFB]" />
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <p className="text-gray-300">123-456-7890</p>
                <p className="text-gray-300">Emergency: 911</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#BBDEFB]" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-300">123 Medical Center Dr.</p>
                <p className="text-gray-300">Suite 100</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-[#BBDEFB]" />
              <div>
                <h3 className="font-semibold mb-1">Appointments</h3>
                <Link href="#" className="text-[#82B1FF] hover:underline">
                  Schedule Online
                </Link>
                <p className="text-gray-300">or call us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
