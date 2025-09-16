import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Super Star Award',
      organization: 'Digitify',
      year: '2023',
      description: 'Recognized for exceptional performance and outstanding contributions to multiple high-impact projects.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Top Contributor Award',
      organization: 'Digitify',
      year: '2022',
      description: 'Awarded for consistent high-quality code contributions and mentoring junior developers.',
      color: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Awards & <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl xl:max-w-5xl mx-auto">
            Professional achievements and certifications that demonstrate excellence and continuous learning
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{award.title}</h4>
                    <span className={`px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                      {award.year}
                    </span>
                  </div>
                  
                  <p className="text-primary-400 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-300 leading-relaxed">{award.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-sm text-gray-400">Excellence Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="animate-slide-up" style={{animationDelay: '0.5s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <p className="text-gray-300 max-w-3xl xl:max-w-4xl mx-auto">
              Continuous learning and skill development in cutting-edge technologies
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-bold text-white">Data Science & Artificial Intelligence</h4>
                  <span className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    2025
                  </span>
                </div>
                
                <p className="text-primary-400 font-medium mb-4">BIA (Business Intelligence Academy)</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Comprehensive certification covering Machine Learning, Deep Learning, Generative AI, Neural Networks, and Data Visualization.
                </p>
                
                {/* Skills Covered */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Deep Learning', 'Generative AI', 'Neural Networks', 'Data Visualization'].map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-500/10 border border-green-400/30 rounded-full text-sm font-medium text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-400">Certified Professional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-gray-400">Advanced Level</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
