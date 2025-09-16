import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        {/* Main Content - Center Aligned */}
        <div className="flex justify-center mb-16">
          <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
            <div className="glass-card p-8 text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-semibold text-primary-400 mb-6">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Nauman Farooq, a Senior Full-Stack Developer with over 8 years of experience
                building scalable applications using the MERN stack. My journey began with a
                passion for creating digital solutions that solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Recently, I've expanded my expertise into Data Science and Artificial Intelligence,
                focusing on Machine Learning, Deep Learning, and Generative AI. This transition
                allows me to create smarter, more intelligent applications that provide real
                business value.
              </p>
              <div className="border-t border-white/10 pt-6 mt-6">
                <h4 className="text-2xl font-semibold text-primary-400 mb-4">What Drives Me</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I believe in the power of technology to transform businesses and improve lives.
                  My approach combines technical excellence with creative problem-solving to
                  deliver solutions that exceed expectations.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends,
                  experimenting with AI models, or traveling to discover new cultures and
                  perspectives that inspire my work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights - Center Aligned */}
        <div className="mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Highlights</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl xl:max-w-none w-full">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: '8+ Years Experience',
                description: 'Full-stack development with MERN stack expertise'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'AI & Data Science',
                description: 'Machine Learning, Deep Learning, and Generative AI'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Award Winner',
                description: 'Super Star Award and Top Contributor recognition'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Continuous Learning',
                description: 'Currently pursuing Data Science & AI certification'
              }
            ].map((highlight, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-primary-400 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Interests - Center Aligned */}
        <div className="text-center animate-slide-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold text-white mb-8">Interests & Passions</h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl xl:max-w-6xl w-full">
            {[
              'Technology Innovations',
              'Fashion & Design',
              'Travel & Culture',
              'Machine Learning',
              'Web3 & Blockchain',
              'UI/UX Design'
            ].map((interest, index) => (
              <span
                key={interest}
                className="bg-primary-500/10 text-primary-400 border border-primary-400/30 px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-500/20 hover:scale-105 transition-all duration-300 animate-float"
                style={{animationDelay: `${1 + index * 0.1}s`}}
              >
                {interest}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
