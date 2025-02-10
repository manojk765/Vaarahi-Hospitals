export default function DoctorsSection() {
  const doctors = [
    {
      id: 1,
      name: "Dr. V C Lokesh Kumar",
      qualifications:"MBBS, DCH(KMC),\n DNB Pediatrics(Rainbow Hyd) \n Fellowship in Pediatric Critical Care Medicine-IDPCCM(KIMS Hyd) \n Fellowship in Neonatal critical Care-FIAP",
      role: "Consultant pediatric intensivist and neonatologist",
      image: 'assets/AboutUs/Doctor1.jpg',
      achievements:["Board Certified in Pediatrics by the Indian Medical Council, Indian Academy of Pediatrics, DNB Board",
        "10+ years of specialized experience in pediatric care",
        "Published researcher in lung ultrasound in respiratory critical care",
        "Fellowship in Pediatric Critical Care Medicine-IDPCCM(KIMS Hyd)",
        "Fellowship in Neonatal critical Care-FIAP"
      ],
      description: [
        "Dr. V C Lokesh Kumar brings a unique perspective to pediatric care, combining traditional medical expertise with a deep understanding of developmental psychology. His innovative approach has helped countless children overcome developmental challenges and reach their full potential.",
        "As an expert in pediatric and nenonatal intensive care, he has developed groundbreaking programs for early intervention in respiratory distress syndrome in new born ny lung ultrasound. His work has been recognized internationally in European journal of pediatrics, and he frequently speaks at global medical conferences.",
        "Dr. V C Lokesh Kumar's patient-centered approach ensures that each child receives personalized care tailored to their specific needs. He works closely with families to create comprehensive treatment plans that address both immediate health concerns and long-term developmental goals.", 
      ]
        
    },
    { 
      id: 2,
      name: "Dr. T Sruthi",
      qualifications:"Neonatal Super Specialist,\n MBBS, DNB Pediatrics-Rainbow Hyd,DrNB(DM) \n Neonatology-Fernandez Hospital Hyd \n Developemental Pediatrics",
      role: "Pediatric Specialist & Development Expert",
      image: 'assets/AboutUs/Doctor2.jpg',
      achievements: [ "Board Certified in Pediatrics by the Indian Medical Council, Indian Academy of Pediatrics, DNB Board",
        "10+ years of specialized experience in pediatric care",
        "Specialized in neuro developemental follow up",
        "International speaker on pediatric care",
      ],
      description: [
          "Dr. T Sruthi leads our pediatric and neonatal department with unparalleled dedication and expertise. Her approach combines cutting-edge medical knowledge with a gentle, child-friendly demeanor that puts both young patients and their parents at ease.",
          "Throughout her distinguished career, she has pioneered several innovative treatment protocols and published several articles in international pediatric neurology. Her research work in neonatal hypoglycemia with EEG correlation with neuro developemental follow up for further prognosis has been published in numerous prestigious medical journals.",
          "Beyond her clinical work, Dr. T Sruthi is deeply committed to medical education and regularly mentors young pediatricians. She believes in a holistic approach to children's health, considering not just the physical symptoms but also the emotional and developmental aspects of each child's well-being.",
        ]
    },
  ];

  return (
    <section className="py-16 bg-white" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00235B] mb-4">Our Expert Pediatricians</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified pediatricians who are dedicated to providing the best possible care for
            your children.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-auto rounded-lg object-cover aspect-[3/4] mb-4"
                    />
                    <h3 className="text-2xl font-bold text-[#00235B] mb-2">{doctor.name}</h3>
                    <p className="text-[#0047CC] font-medium mb-4"
                      dangerouslySetInnerHTML={{
                        __html: doctor.qualifications.replace(/\n/g, "<br />"),
                      }}
                    ></p>
                    <p className="text-[#0047CC] font-medium mb-4">{doctor.role}</p>
                  </div>

                  <div className="md:w-2/3">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#00235B] mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {doctor.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#0047CC] mt-1">•</span>
                            <div className="text-[#0047CC] border-[#0047CC]">
                              {achievement}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#00235B] mb-3">About</h4>
                      <div className="space-y-4">
                        {doctor.description.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
