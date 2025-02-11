import { Brain, Puzzle, MessageSquare, Zap, Calendar, Clock, Phone } from "lucide-react"
import Link from "next/link"

export default function ChildDevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-sky-800">Child Development Services</h1>
            <p className="text-lg mb-8 text-gray-700">
              Comprehensive support for children with developmental delays, behavioral concerns, and special needs, fostering growth and unlocking potential.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-all">
                Schedule Evaluation
              </Link>
              {/* <button className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg hover:bg-sky-600 hover:text-white transition-all">
                Our Programs
              </button> */}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-photo/handsome-doctor-charming-nurse-take-600nw-721729879.jpg"
              alt="Child Development"
              fill="true"
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-sky-500" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Cognitive Development</h3>
            <p className="text-gray-600">Enhancing learning and problem-solving skills</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-sky-500" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Speech & Language</h3>
            <p className="text-gray-600">Improving communication abilities</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Puzzle className="w-12 h-12 mx-auto mb-4 text-sky-500" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Social Skills</h3>
            <p className="text-gray-600">Fostering positive interactions</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-sky-500" />
            <h3 className="text-xl font-semibold text-sky-700 mb-2">Motor Skills</h3>
            <p className="text-gray-600">Developing physical coordination</p>
          </div>
        </div>

        {/* Accordion Services */}
        <div className="bg-sky-100 rounded-lg p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-bold text-sky-800 mb-8">Our Services</h2>
          <div>
            <div className="mb-4">
              <button className="text-left w-full text-lg font-semibold text-sky-700">
                Developmental Assessments
              </button>
              <p className="text-gray-700">
                Comprehensive evaluations to identify developmental delays, learning disabilities, and behavioral issues. We create a complete profile of your child's strengths and areas for improvement.
              </p>
            </div>
            <div className="mb-4">
              <button className="text-left w-full text-lg font-semibold text-sky-700">
                Early Intervention Programs
              </button>
              <p className="text-gray-700">
                Tailored interventions for infants and toddlers addressing developmental concerns early. Focus on cognitive, social, and motor skills development.
              </p>
            </div>
            <div className="mb-4">
              <button className="text-left w-full text-lg font-semibold text-sky-700">
                Speech and Language Therapy
              </button>
              <p className="text-gray-700">
                Specialized therapy to improve communication skills including articulation, language comprehension, and social communication.
              </p>
            </div>
            <div>
              <button className="text-left w-full text-lg font-semibold text-sky-700">
                Behavioral Therapy
              </button>
              <p className="text-gray-700">
                Evidence-based interventions addressing challenging behaviors and promoting positive social interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-sky-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-6">Contact Child Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-sky-600" />
              <div>
                <h3 className="font-semibold text-sky-700 mb-1">Appointments</h3>
                <p>Schedule an evaluation</p>
                {/* <button className="text-sky-600 hover:underline">
                  Book Online
                </button> */}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-sky-600" />
              <div>
                <h3 className="font-semibold text-sky-700 mb-1">Hours</h3>
                <p>Mon-Sat: 10am-2pm/5am-8pm</p>
                <p>Sun: 10am-1pm (by appointment)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-sky-600" />
              <div>
                <h3 className="font-semibold text-sky-700 mb-1">Contact</h3>
                <p>Phone: 8142772466</p>
                <p>Email: vaarahi.childrenshospital@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
