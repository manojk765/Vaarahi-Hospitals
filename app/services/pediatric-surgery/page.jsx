import React from 'react';
import { ScissorsIcon , Heart, Eye, Bone, Calendar, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function PediatricSurgeryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-50 to-sky-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold mb-6 text-sky-700">
              Pediatric Surgery Center
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Compassionate, cutting-edge surgical care tailored specifically for children, 
              combining advanced medical techniques with gentle, supportive approach.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                Book Consultation
              </Link>
              {/* <button className="px-6 py-3 border-2 border-sky-500 text-sky-500 rounded-full hover:bg-sky-50 transition-colors">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="h-[400px]">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/053/127/698/small_2x/doctor-team-performing-operating-on-patient-in-operating-room-of-surgical-department-at-hospital-photo.jpg" 
              alt="Pediatric Surgery" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Surgical Specialties */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <ScissorsIcon />, title: 'General Surgery', description: 'Common pediatric procedures' },
            { icon: <Heart />, title: 'Cardiothoracic', description: 'Heart and lung surgeries' },
            { icon: <Eye />, title: 'Ophthalmology', description: 'Eye surgeries for children' },
            { icon: <Bone />, title: 'Orthopedics', description: 'Bone and joint procedures' }
          ].map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-sky-700">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </div>
          ))}
        </div>

        {/* Surgical Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center">
            Our Expert Surgical Team
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-28 ">
            {[
              { name: 'Dr. V C Lokesh Kumar', specialty: 'Pediatric and Neonatal Emergency Services', img: '/assets/Home/Doctor1.jpg' },
              { name: 'Dr. T Sruthi', specialty: ' Consultant neonotologist and developemental pediatrician', img: '/assets/Home/Doctor2.jpg' },
            ].map((doctor, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={doctor.img}
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-700">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Contact Section */}
        <div className="bg-sky-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Pediatric Surgery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p>Schedule your consultation</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Surgery Hours</h3>
              <p>Mon-Sat: 10am-2pm/5am-8pm</p>
              <p>Emergency: 24/7</p>
            </div>
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>8142772466</p>
              <p>9177348793</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
