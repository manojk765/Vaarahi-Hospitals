"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function About() {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const lastPlayPosition = useRef(0);
  const wasPlaying = useRef(false); 

  useEffect(() => {
    const videoElement = videoRef.current;
    const videoSection = videoSectionRef.current;
    
    if (!videoElement || !videoSection) return; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When video section enters viewport
          if (entry.isIntersecting) {
            // If it was playing before or hasn't been played yet, play it
            if (wasPlaying.current || videoElement.currentTime === 0) {
              videoElement.currentTime = lastPlayPosition.current;
              videoElement.play().catch(e => console.log("Autoplay prevented:", e));
            }
          } else {
            // When video section leaves viewport
            lastPlayPosition.current = videoElement.currentTime;
            wasPlaying.current = !videoElement.paused;
            if (!videoElement.paused) {
              videoElement.pause();
            }
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the video is visible
    );

    observer.observe(videoSection);

    // Add event listener to track user pausing
    videoElement.addEventListener('pause', () => {
      wasPlaying.current = false;
    });

    videoElement.addEventListener('play', () => {
      wasPlaying.current = true;
    });

    return () => {
      observer.disconnect();
      videoElement.removeEventListener('pause', () => {});
      videoElement.removeEventListener('play', () => {});
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center flex-wrap">
        <div className="text-left p-5 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-lg md:text-xl font-semibold text-blue-800 mb-3">ABOUT US</h1>
          <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-relaxed mb-6 font-info">
            Dedicated Pediatric Care with Compassion and Expertise
          </p>
          <p className="text-base md:text-lg text-black text-justify mb-6 font-bodytext">
            At Vaarahi Hospital, we are devoted to providing exceptional, family-centered care for children of all ages.
            Our team of highly skilled pediatricians, nurses, and specialists work together to ensure the best possible
            treatment for young patients. With state-of-the-art facilities and a nurturing environment, we focus on
            every child's well-being, growth, and development. From preventive care to advanced medical treatments, we
            offer personalized care to meet the unique needs of every child and their family.
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
                <image
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMaxYMax slice"
                  href="/assets/Home/team.jpg"
                />
              </pattern>
            </defs>
            <path
              fill="url(#img1)"
              d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Video Section */}
      <div 
        ref={videoSectionRef}
        className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-info">Watch Our Story</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-bodytext">
            Learn more about our mission, values, and the exceptional care we provide at Vaarahi Hospital.
          </p>
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover" 
            controls
            preload="metadata"
          >
            <source src="/vaarahi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 font-bodytext">
            Experience the Vaarahi difference through our comprehensive 2-minute overview
          </p>
        </div>
      </div>
 
      <div className="w-full flex">
        <svg className="w-full" viewBox="0 0 1425 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z"
              fill="#67B1F1"
            ></path>
            <path
              d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z"
              fill="#67C6F2"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="1425" height="150" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default About;