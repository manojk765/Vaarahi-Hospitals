import { Apple, Brain, Heart, Scale, Calendar } from "lucide-react"

export default function NutritionCounsellingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-blue-700">Pediatric Nutrition Counselling</h1>
          <p className="text-xl mb-8 text-gray-600">
            Expert guidance for your child's nutritional needs, promoting healthy growth and development through
            personalized dietary plans and education.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">
            Schedule a Consultation
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Apple className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Dietary Planning</h3>
            <p className="text-gray-500">Personalized nutrition plans for optimal growth</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Development Support</h3>
            <p className="text-gray-500">Nutrition for cognitive development</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Health Management</h3>
            <p className="text-gray-500">Dietary support for medical conditions</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Scale className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Growth Monitoring</h3>
            <p className="text-gray-500">Regular assessment of progress</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/645821998/photo/female-doctor-showing-apple-to-a-child.jpg?s=612x612&w=0&k=20&c=1fcuq_e8zbyTU3NjhKuqvy3f5OCPpI9BeQyCw2ZFnTM="
              alt="Nutrition Counselling"
              fill="true"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Approach to Nutrition</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold">Initial Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your child's current diet, medical history, and nutritional needs to create a personalized plan.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold">Customized Meal Planning</h3>
                <p className="text-gray-600">
                  Development of age-appropriate meal plans that consider your child's preferences and nutritional requirements.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular follow-up appointments to monitor progress and adjust plans as needed, ensuring optimal results.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold">Family Education</h3>
                <p className="text-gray-600">
                  Teaching parents and caregivers about healthy food choices, portion sizes, and meal preparation techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Specialized Nutrition Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-700">Food Allergies & Intolerances</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Allergy identification</li>
                <li>Alternative meal planning</li>
                <li>Cross-contamination education</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-700">Medical Nutrition Therapy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Diabetes management</li>
                <li>Celiac disease support</li>
                <li>Weight management</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-700">Developmental Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Growth monitoring</li>
                <li>Brain development</li>
                <li>Sports nutrition</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">Ready to Get Started?</h2>
          <div className="max-w-xl mx-auto">
            <p className="mb-6 text-gray-600">
              Schedule a consultation with our pediatric nutrition experts to begin your child's journey to optimal
              health through proper nutrition.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">
                <Calendar className="w-4 h-4 mr-2 inline " />
                Book Appointment
              </button>
              <button className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg text-lg hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
