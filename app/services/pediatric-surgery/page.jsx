import React from 'react';

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
              <button className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                Book Consultation
              </button>
              <button className="px-6 py-3 border-2 border-sky-500 text-sky-500 rounded-full hover:bg-sky-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Pediatric Surgery" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Surgical Specialties */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: '🔪', title: 'General Surgery', description: 'Common pediatric procedures' },
            { icon: '❤️', title: 'Cardiothoracic', description: 'Heart and lung surgeries' },
            { icon: '👁️', title: 'Ophthalmology', description: 'Eye surgeries for children' },
            { icon: '🦴', title: 'Orthopedics', description: 'Bone and joint procedures' }
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Emily Smith', specialty: 'Pediatric General Surgeon' },
              { name: 'Dr. Michael Johnson', specialty: 'Pediatric Cardiothoracic Surgeon' },
              { name: 'Dr. Sarah Lee', specialty: 'Pediatric Orthopedic Surgeon' }
            ].map((doctor, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618498082410-b4e5c1cc21a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
              </svg>
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p>Schedule your consultation</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold mb-2">Surgery Hours</h3>
              <p>Mon-Fri: 7am-6pm</p>
              <p>Emergency: 24/7</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>Department: 123-456-7890</p>
              <p>Emergency: 911</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}