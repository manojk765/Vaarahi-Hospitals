import React from 'react'
import About from './about'
import Motto from './motto'
import Team from './team'
import DoctorsSection from './doctors'
 
function page() {
  return (
    <>
      <div
            className="relative h-[100px] md:h-[200px] lg:h-[300px] w-full bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://t4.ftcdn.net/jpg/09/42/17/61/360_F_942176171_fUiWldZ7vuyHqW9ZUGlnJrtHIsa53641.jpg')",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center w-full">
                About Us
            </h1>
            </div>
        </div>

        <About/>
        <Motto/>
        <Team/>
        <DoctorsSection/>
        
    </>
  )
}

export default page
