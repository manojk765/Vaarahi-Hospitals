import { Brain, Activity, Microscope, Stethoscope, Calendar, Clock, Phone, FileText } from "lucide-react";

export default function PediatricNeurologyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary">Pediatric Neurology</h1>
            <p className="text-xl mb-8">
              Providing specialized care for children with neurological disorders, using the latest diagnostic tools and
              personalized treatment plans to ensure the best outcomes.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">
                Request Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://sjc.microlink.io/crOXhfhd32jYe6Nnh0Ejw9X7gZU1mfZ-DS_olRXUFnq-KP1gkPK4CMdWWhPXjJNVugM85TxSuVK0EVGNhUuJ1w.jpeg"
              alt="Pediatric Neurology"
              fill="true"
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 text-center rounded-lg shadow-md">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Neurological Assessment</h3>
            <p className="text-gray-700">Comprehensive evaluation of brain function for accurate diagnosis.</p>
          </div>
          <div className="bg-blue-50 p-6 text-center rounded-lg shadow-md">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Treatment Plans</h3>
            <p className="text-gray-700">Personalized therapeutic approaches tailored to each child's needs.</p>
          </div>
          <div className="bg-blue-50 p-6 text-center rounded-lg shadow-md">
            <Microscope className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Advanced Diagnostics</h3>
            <p className="text-gray-700">State-of-the-art technology for early detection and treatment.</p>
          </div>
          <div className="bg-blue-50 p-6 text-center rounded-lg shadow-md">
            <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Ongoing Care</h3>
            <p className="text-gray-700">Continuous support and care for long-term neurological health.</p>
          </div>
        </div>

        {/* Conditions We Treat */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Conditions We Treat</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Epilepsy</h3>
                    <p className="text-sm text-gray-600">Comprehensive seizure management and monitoring.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Headaches</h3>
                    <p className="text-sm text-gray-600">Management of migraines and chronic headaches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">ADHD</h3>
                    <p className="text-sm text-gray-600">Treatment for attention deficit and hyperactivity disorders.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Movement Disorders</h3>
                    <p className="text-sm text-gray-600">Management of coordination and balance issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Developmental Delays</h3>
                    <p className="text-sm text-gray-600">Support for motor and cognitive development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Sleep Disorders</h3>
                    <p className="text-sm text-gray-600">Diagnosis and treatment for sleep-related issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://sjc.microlink.io/crOXhfhd32jYe6Nnh0Ejw9X7gZU1mfZ-DS_olRXUFnq-KP1gkPK4CMdWWhPXjJNVugM85TxSuVK0EVGNhUuJ1w.jpeg"
              alt="Neurological Treatment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="bg-blue-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diagnosis</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Comprehensive neurological exam
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Advanced imaging techniques
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Genetic screening
                </li>
              </ul>
            </div>
            <div>
              <Activity className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Treatment</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Medication and therapy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Rehabilitation services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Surgery if required
                </li>
              </ul>
            </div>
            <div>
              <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Ongoing Care</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Regular follow-up appointments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Comprehensive care plan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  Family-centered support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-700">Monday - Friday</p>
                <p className="font-semibold">9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-700">Weekends</p>
                <p className="font-semibold">10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-700">Contact Us</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
