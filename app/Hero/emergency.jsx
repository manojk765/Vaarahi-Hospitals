"use client"

import { Phone, AlertCircle, MapPin, Clock, Youtube, Mail } from "lucide-react"

export default function EmergencySection() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-white pt-4">
      {/* Top Part */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-[#dbe9f7] text-[#1e3a5f] px-4 py-2 rounded-full mb-4">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">Emergency Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">24/7 Emergency Care Available</h2>
          <p className="text-gray-900 max-w-3xl mx-auto">
            We understand how critical time is during emergencies, especially when it comes to your child's health. 
            Our hospital is equipped with a state-of-the-art emergency department designed specifically for pediatric care.
            Our emergency department is equipped to handle all medical emergencies. We provide immediate care with
            experienced medical professionals available round the clock.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-[#eaf3fd] shadow-lg">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Emergency Guidelines</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Emergency Hotline</h4>
                  <p className="text-2xl font-bold text-[#1e3a5f] mb-1">9177348793</p>
                  <p className="text-sm text-gray-600">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What to Expect</h4>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Immediate triage assessment</li>
                    <li>Priority based on medical condition</li>
                    <li>Experienced emergency care team</li>
                    <li>Advanced medical equipment</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Emergency Department Location</h4>
                  <p className="text-gray-800">
                    Vaarahi Children's Hospital, D no 5/18-4, Opp to B Mart,Posina Compound, Proddatur ,Andhra Pradesh 516360
                  </p>
                  <p className="text-gray-600 mb-1">
                    Our emergency entrance is easily accessible from the main road and is located on the north side of the hospital. 
                    Look for the “Emergency” signs to guide you. Upon arrival, our emergency care team will be ready to assist.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-transparent p-8 rounded-2xl">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/w6uX9jamcwQ"
                title="Emergency Response Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Watch this informative video to learn about proper emergency response procedures available at our hospital.
            </p>
          </div>
        </div>

        <div className="bg-[#dbe9f7] border border-blue-300 rounded-lg p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-[#1e3a5f]" />
              <div>
                <h4 className="font-semibold text-gray-900">Need Emergency Help? Call Us!</h4>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-5 w-5" />
                <span>8142772466</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-5 w-5" />
                <span>(+91) 9177348793</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-5 w-5" />
                <span>vaarahi.childrenshospital@gmail.com</span>
              </div>
            </div>
          </div>
        </div>  
      </div>

      {/* Bottom Part */}
      <div className="bg-[#1e3a5f] text-white  p-6 mt-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Best Super-Speciality Hospital in Proddatur</h3>
            <h4 className="text-xl font-semibold mb-4">VAARAHI HOSPITALS</h4>
            <p className="mb-4">
              To stay updated on the latest medical advancements, health tips, and success stories from VAARAHI Hospitals,
              subscribe to our YouTube channel: CHANNEL NAME. Here, you'll find informative videos that will
              empower you with knowledge about various health topics and the exceptional care we provide.
            </p>
            <a
              href="https://www.youtube.com/channel/Dr_PALLAHospitals1031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-blue-300"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe to our YouTube Channel
            </a>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
            <iframe
              src="https://www.youtube.com/embed/w6uX9jamcwQ"
              title="PALLA Hospitals Info"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
