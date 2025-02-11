import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center flex-wrap'>
        <div className="text-left p-5 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-lg md:text-xl font-semibold text-blue-800 mb-3">ABOUT US</h1>
          <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-relaxed mb-6 font-info">
            Dedicated Pediatric Care with Compassion and Expertise
          </p>
          <p className="text-base md:text-lg text-black text-justify mb-6 font-bodytext">
            At Vaarahi Hospital, we are devoted to providing exceptional, family-centered care for children of all ages.
            Our team of highly skilled pediatricians, nurses, and specialists work together to ensure the best possible treatment
            for young patients. With state-of-the-art facilities and a nurturing environment, we focus on every child's well-being,
            growth, and development. From preventive care to advanced medical treatments, we offer personalized care to meet the
            unique needs of every child and their family.
          </p>
          <Link href="/about">
            <button className="bg-[#262785] text-white text-base md:text-lg py-3 px-8 rounded-lg block ml-0 hover:bg-[#ee4c45] hover:translate-y-1 transition-all duration-300 ease-in-out font-info">
              More about Us
            </button>
          </Link>
        </div>

        <div className="w-full md:w-[700px] h-[400px] md:h-[700px]">
          <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="img1" x="0" y="0" width="1" height="1">
                <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" href="../assets/Home/team.jpg" />
              </pattern>
            </defs>
            <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div className="w-full flex">
        <svg className="w-full" viewBox="0 0 1425 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z" fill="#67B1F1"></path>
            <path d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z" fill="#67C6F2"></path>
            {/* <path d="M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z" fill="#56a6cb"></path> */}
          </g>
          <defs>
            <clipPath id="clip0"><rect width="1425" height="150" fill="white"></rect></clipPath>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default About
