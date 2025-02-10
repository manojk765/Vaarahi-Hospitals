import React from 'react'
import Facilities from './Facility'

function page() {
  return (
    <>  
      <div
            className="relative h-[100px] md:h-[200px] lg:h-[300px] w-full bg-cover bg-center "
            style={{
            backgroundImage:
                "url('https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9zaW1wbGVfM2RfaWxsdXN0cmF0aW9uX29mX2FfcmVjb3Zlcnlfcm9vbV93aV80ZjhkNDIwNC02N2I4LTQwMDQtYTBlNy05YjljMjIyMzE2ZGVfMS5qcGc.jpg')",
            }}
        > 
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center w-full">
                  Our Facilities
              </h1>
            </div>    
      </div>

      <section className="text-center p-4 bg-[#eaeff1]">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Vaarahi Pediatric Care</h2>
        <p className="text-lg">
          At Vaarahi Pediatric Care, we are committed to providing exceptional healthcare for children with a
          family-centered approach, modern facilities, and highly specialized pediatric care. Our state-of-the-art
          hospital is designed to ensure the comfort, safety, and well-being of our young patients and their families.
        </p>
      </section>
                  
        <Facilities/>
    </>   
      
    )
}

export default page
 