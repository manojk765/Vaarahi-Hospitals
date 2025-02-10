import { Star } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      rating: 5,
      content:
        "The care our daughter received was exceptional. The staff made her feel comfortable and safe throughout the entire process.",
      video: true,
      mediaUrl: "https://www.example.com/video1.mp4", // Link to the video
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      rating: 5,
      content:
        "We couldn't be happier with the treatment and attention our son received. The doctors were patient and thorough in explaining everything.",
      video: false,
      mediaUrl: "https://via.placeholder.com/350x200", // Link to the image
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 5,
      content:
        "The pediatric team went above and beyond in caring for our twins. Their expertise and compassion made a difficult time much easier.",
      video: true,
      mediaUrl: "https://www.example.com/video2.mp4", // Link to the video
    },
    {
      id: 4,
      name: "David Williams",
      rating: 4,
      content:
        "Outstanding care and attention to detail. The facility is child-friendly and the staff knows exactly how to make kids feel at ease.",
      video: false,
      mediaUrl: "https://via.placeholder.com/350x200", // Link to the image
    },
    {
      id: 5,
      name: "Lisa Anderson",
      rating: 5,
      content:
        "From the moment we walked in, we knew we were in good hands. The doctors are knowledgeable and the nurses are incredibly caring.",
      video: true,
      mediaUrl: "https://www.example.com/video3.mp4", // Link to the video
    },
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
