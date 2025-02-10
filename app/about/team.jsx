import { Users, Clock, Heart, Shield } from "lucide-react"
import TeamImage from './team.jpg' 
import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="py-12 bg-[#f3f3f3] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden p-4 border-8 border-[#38789a] ">
            <Image
              src={TeamImage}
              alt="Medical Team"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            
            {/* 24 Hour Service Section */}
            <div className="bg-transparent rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">24 HOUR SERVICE</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mt-2">HIGHEST QUALITY CARE</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    We take great pride in offering 24/7 service, delivering the highest level of care. Our dedicated
                    team remains available to assist you, whether it's an emergency or routine medical requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Compassionate Pediatric Care Section */}
            <div className="bg-transparent rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">COMPASSIONATE PEDIATRIC CARE</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mt-2">DEDICATED TO YOUR CHILD'S WELL-BEING</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Our team of specialized pediatricians is committed to providing gentle, compassionate care. We prioritize
                    your child's health and ensure a nurturing environment for their comfort and recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Child-Friendly Facilities Section */}
            <div className="bg-transparent rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">CHILD-FRIENDLY FACILITIES</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mt-2">CREATING A SAFE AND WELCOMING SPACE</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    We offer state-of-the-art, child-friendly facilities designed to make children feel safe and at ease. Our
                    hospital environment is built to foster healing and promote a stress-free experience for both children and
                    their families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
