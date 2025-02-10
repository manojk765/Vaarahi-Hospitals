import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link' 

const doctor = [
  {
    name: "Dr V C Lokesh Kumar",
    image: "assets/Home/Doctor1.jpg",
    experience: "8",
    specialty: "Pediatric and Neonatal Emergency Services",
    qualifications: `MBBS, DCH(KMC), DNB Pediatrics-Rainbow Hyd, Fellowship in NICU(FIAP), \n Fellowship in Pediatric Intensive Care-IDPCCM(KIMS Hyd)`,
    languages: ["English", "Hindi","Telugu"],
    description:
      "Doctor is an experienced Interventional based in Hyderabad. Doctor graduated from MBBS, MD ... Doctor's focus is on improving healthcare with over a decade of expertise.",
    location: "Proddatur, India",
  },
  {
    name: "Dr T Sruthi",
    image: "assets/Home/Doctor2.jpg",
    experience: "8",
    specialty: "Consultant neonotologist and developemental pediatrician",
    qualifications: "Neonatal Super Specialist, \n  MBBS, DNB Pediatrics-Rainbow Hyd,DrNB(DM) Neonatology-Fernandez Hospital Hyd \n Developemental Pediatrics",
    languages: ["English", "Hindi","Telugu"],
    description:
      "Doctor is a compassionate pediatrician with over 8 years of experience in treating children. Their dedication has been helping families with the best care for children.",
    location: "Proddatur, India",
  },
];

function Doctors() {
  return (
    <>
      <div className="bg-[#113a74] py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-12">
          Meet Our Doctors
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4 md:px-12">
          {doctor.map((doc, index) => (
            <div
              key={index}
              className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row w-full md:w-1/2 transform transition-transform duration-300 hover:translate-y-[-10px]"
            >
              <div className="w-56 h-56 flex-shrink-0">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {doc.name}
                </h2>

                <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {doc.experience} years, {doc.specialty}
                </div>

                {/* Handle qualifications with line breaks */}
                <div
                  className="text-gray-700 font-medium mb-2"
                  dangerouslySetInnerHTML={{
                    __html: doc.qualifications.replace(/\n/g, "<br />"),
                  }}
                ></div>

                <div className="text-gray-600 mb-2">
                  Language: {doc.languages.join(", ")}
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {doc.location}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {doc.description}
                </p>
                
                <Link href="/about">
                
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-medium transition-transform duration-200 hover:bg-blue-600 hover:shadow-md">
                  Know More
                </button>

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Doctors;
