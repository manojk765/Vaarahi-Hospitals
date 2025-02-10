import React from 'react'

function page() {
  return (
    <>
        <div
            className="relative h-[200px] w-full bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://st2.depositphotos.com/36924814/46071/i/450/depositphotos_460713580-stock-photo-medical-health-blue-cross-neon.jpg')",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center w-full">
                Gallery
            </h1>
            </div>
        </div>

    </>
  )
}

export default page
