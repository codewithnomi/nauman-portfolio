import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior MERN Stack Developer',
      company: 'Digitify',
      period: '2020 – Present',
      location: 'Remote',
      description: [
        'Led development of a Customer Information Management (CIM) system for a UK client using React, Redux, Express, MySQL',
        'Optimized modular components for performance and scalability',
        'Actively collaborated with clients in Agile sprints, ensuring business requirements were met',
        'Contributed to both frontend UI/UX and backend API development'
      ],
      technologies: ['React', 'Redux', 'Express', 'MySQL', 'Node.js', 'Agile'],
      color: 'primary',
    },
    {
      title: 'React & Laravel Developer',
      company: 'TUF Solutions',
      period: '2019 – 2020',
      location: 'On-site',
      description: [
        'Built a student portal web app using Laravel and ReactJS with emphasis on performance and user experience',
        'Implemented responsive design and optimized application performance',
        'Collaborated with design team to create intuitive user interfaces'
      ],
      technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      color: 'accent',
    },
    {
      title: 'Backend Developer',
      company: 'Zepto Systems',
      period: '2017 – 2019',
      location: 'On-site',
      description: [
        'Developed backend APIs and database architecture for web applications',
        'Implemented secure authentication and authorization systems',
        'Optimized database queries and improved application performance'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'],
      color: 'success',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl xl:max-w-5xl mx-auto">
            8+ years of building scalable applications and leading development teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:scale-[1.02] transition-all duration-300 animate-slide-up`}
              style={{animationDelay: `${0.2 + index * 0.2}s`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      exp.color === 'primary' ? 'bg-primary-400' :
                      exp.color === 'accent' ? 'bg-accent-400' : 'bg-success-400'
                    } animate-pulse`}></div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                      </svg>
                      <span className="text-primary-400 font-semibold text-lg">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        exp.color === 'primary' ? 'bg-primary-400' :
                        exp.color === 'accent' ? 'bg-accent-400' : 'bg-success-400'
                      }`}></div>
                      <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                      exp.color === 'primary' 
                        ? 'bg-primary-500/10 text-primary-400 border-primary-400/30 hover:bg-primary-500/20' :
                      exp.color === 'accent'
                        ? 'bg-accent-500/10 text-accent-400 border-accent-400/30 hover:bg-accent-500/20' :
                        'bg-success-500/10 text-success-400 border-success-400/30 hover:bg-success-500/20'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
