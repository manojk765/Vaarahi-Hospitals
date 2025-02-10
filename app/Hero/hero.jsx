import React from 'react'
import Carousel from './carousel.js'
import About from './about.jsx'
import Section2 from './expertise.jsx'
import Info from './WhyChooseUs.jsx'
import Services from './services.jsx'
import Doctors from './doctors.jsx'
import Testimonials from './testimonials.jsx'
import Emergency from './emergency.jsx'
 
function hero() {
  return (
    <div>
      <Carousel/>
      <About/>
      <Section2/>
      <Info/>
      <Services/>
      <Doctors/>
      <Testimonials/>
      <Emergency/>
    </div>
  )
}

export default hero
 