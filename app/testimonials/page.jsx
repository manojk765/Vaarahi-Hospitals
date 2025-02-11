import { Star } from "lucide-react";

export default function TestimonialsPage() { 
  const testimonials = [
    {
      id: 1,
      name: "Sravanthi",
      rating: 5,
      content:
      "The only super specialty hospital in town, offering exceptional neonatal and pediatric care, led by the highly skilled Dr. Sruthi, a dedicated neonatologist, and Dr. Lokesh, an expert pediatrician. Both doctors provide compassionate and personalized care, ensuring the best outcomes for newborns and children. A trusted choice for families seeking top-tier medical attention for their little ones! Highly recommend for specialized children's care.  ",
      video: false,
      mediaUrl: "assets/Hospital_logo.png", // Link to the video
    },
    {
      id: 2,
      name: "Kranthi",
      rating: 5,
      content:
"Many of my friends suggested to me this is the best children's hospital. I went and met Dr.Lokesh and Dr.Sruthi for my kids treatment. The treatment was top-notch and the staff provided good supervision.The hospital was clean and hygienic,which made me feel safe and comfortable during my visit.I highly recommend this hospital for anyone in need of pediatric care.",
      video: false,
      mediaUrl: "assets/Hospital_logo.png", // Link to the image
    },
    {
      id: 3,
      name: "Rajesh Babu",
      rating: 5,
      content:
"Varahi Super Specialist hospital is one of the best hospital in nearby locations. I recently visited hospital for my kids sickness and doctor Sruthi & Lokesh are very well qualified and understand the problem patiently and addressed health issues. I definitely recommend them. ",
      video: false,
      mediaUrl: "assets/Hospital_logo.png", // Link to the video
    },
    {
      id: 4,
      name: "Durga Lakshmi",
      rating: 4,
      content:
"Vaarahi children's super speciality is one of the best hospital.it was a great experience.The supporting staff outstanding.Everything was crystal and clear from admitting the patients to discharge I will recommend to my friends and relatives .Docters are simple and patience and giving excellent treatment,fine facility at the hospital with good medical equipment and cleanliness.The surroundings are very peace full,clean tidy which is significant to the hospital",
      video: false,
      mediaUrl: "assets/Hospital_logo.png", // Link to the image
    },
    // {
    //   id: 5,
    //   name: "Lisa Anderson",
    //   rating: 5,
    //   content:
    //     "From the moment we walked in, we knew we were in good hands. The doctors are knowledgeable and the nurses are incredibly caring.",
    //   video: true,
    //   mediaUrl: "https://www.example.com/video3.mp4", // Link to the video
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[100px] md:h-[200px] lg:h-[300px] w-full bg-white bg-cover bg-center" 
            style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-atmospheric-medical-medical-symbol-gradient-poster-image_202320.jpg')" }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center w-full">
            Testimonials
            </h1>
        </div>
      </div>


      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 fill-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{testimonial.content}</p>

              {testimonial.video ? (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/placeholder.svg?height=200&width=350"
                  >
                    <source src={testimonial.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={testimonial.mediaUrl}
                    alt={`${testimonial.name}'s testimonial`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
