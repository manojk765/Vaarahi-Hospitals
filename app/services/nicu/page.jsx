"use client"

import { useState } from "react"
import { Heart, Baby, Shield, Activity, Clock, Phone } from "lucide-react"
import Link from "next/link"

export default function NICUCarePage() {
  const [tab, setTab] = useState("facilities")
 
  return (
    <div className="bg-white text-gray-900">
      
    <div className="relative h-[50vh]">
        <div className="absolute inset-0">
            <img
            src="https://media.istockphoto.com/id/956193216/photo/unrecognizable-nurse-caressing-a-newborn-baby-in-an-incubator-while-he-sleeps.jpg?s=612x612&w=0&k=20&c=iXWFS8reQTzBwIua-X0l9A0EF2W817509zJMwLv4W5o="
            alt="NICU Facility"
            className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/60 to-blue-600">
            <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Neonatal and Pediatric Intensive Care Unit (NICU)
                </h1>
                <p className="text-xl mb-8">
                State-of-the-art care for our tiniest patients, providing advanced medical support and nurturing
                environment for premature and critically ill newborns.
                </p>
                <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                  Contact Us
                </Link>
            </div>
            </div>
        </div>
    </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <Heart className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">24/7 Specialized Care</h3>
            <p className="text-gray-600">
              Round-the-clock monitoring and care by our expert team of neonatal specialists
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <Shield className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-gray-600">
              Latest medical equipment and monitoring systems for optimal care
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <Baby className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Family-Centered Care</h3>
            <p className="text-gray-600">
              Supporting families through education, counseling, and involvement in care
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-start px-4 space-x-4 mb-8">
          <button
            className={`py-2 px-4 font-semibold ${tab === "facilities" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
            onClick={() => setTab("facilities")}
          >
            Facilities
          </button>
          <button
            className={`py-2 px-4 font-semibold ${tab === "team" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
            onClick={() => setTab("team")}
          >
            Our Team
          </button>
          <button
            className={`py-2 px-4 font-semibold ${tab === "support" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
            onClick={() => setTab("support")}
          >
            Family Support
          </button>
        </div>

        {/* Facilities Content */}
        {tab === "facilities" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Equipment</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Advanced respiratory support systems
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Specialized incubators
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Continuous monitoring equipment
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Advanced imaging technology
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://t4.ftcdn.net/jpg/03/53/87/53/360_F_353875308_9g9NJYbl5F8Bs2MSlG9FCSSNPMuR1Pg0.jpg"
                alt="NICU Equipment"
                fill="true"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Team Content */}
        {tab === "team" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Medical Team</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Neonatologists</h4>
                  <p className="text-gray-600">Specialists in newborn intensive care</p>
                </li>
                <li>
                  <h4 className="font-semibold">NICU Nurses</h4>
                  <p className="text-gray-600">Experienced in critical care for newborns</p>
                </li>
                <li>
                  <h4 className="font-semibold">Respiratory Therapists</h4>
                  <p className="text-gray-600">Experts in breathing support</p>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/956193106/photo/concerned-team-of-nurses-in-the-intensive-neonatal-care-unit-looking-at-a-premature-newborn-in.jpg?s=612x612&w=0&k=20&c=RKz-9tfgOwjEJPUyphf4QESiU1NMwmNmvTILrpyGslE="
                alt="NICU Team"
                fill="true"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Support Content */}
        {tab === "support" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Family Support Services</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Parent Education</h4>
                  <p className="text-gray-600">Comprehensive training and resources</p>
                </li>
                <li>
                  <h4 className="font-semibold">Counseling Services</h4>
                  <p className="text-gray-600">Emotional support for families</p>
                </li>
                <li>
                  <h4 className="font-semibold">Support Groups</h4>
                  <p className="text-gray-600">Connect with other NICU families</p>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/956193188/photo/beautiful-newborn-in-the-neonatal-intensive-care-unit-sleeping.jpg?s=612x612&w=0&k=20&c=JJwzP7af6lDJq804gm2ia1eFD9kQLhcoYwd4w1aZg9M="
                alt="Family Support"
                fill="true"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-blue-600 text-white py-8 mt-16 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Need More Information?</h3>
          <p className="text-lg mb-6">Reach out to our NICU Department for any inquiries or concerns.</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91-8142772466</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
