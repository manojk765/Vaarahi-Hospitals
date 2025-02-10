import Image from "next/image"

export default function FacilityCard({ title, description, features, images }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">{description}</p>
          <ul className="list-disc list-inside mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
