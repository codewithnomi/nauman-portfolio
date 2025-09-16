import React from 'react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/NaumanFarooq_SeniorFullStackDeveloper.pdf';
    link.download = 'NaumanFarooq_SeniorFullStackDeveloper.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show success message
    console.log('CV download initiated');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl animate-float"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400/30 rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent-400/40 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-primary-300/50 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-accent-300/30 rounded-full animate-float" style={{animationDelay: '0.5s', animationDuration: '6s'}}></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-success-400/40 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-primary-500/20 rounded-full animate-float" style={{animationDelay: '2.5s', animationDuration: '5.5s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-8 h-8 border-2 border-primary-400/20 rotate-45 animate-float" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 border-2 border-accent-400/30 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Profile Photo */}
          <div className="mb-8 animate-slide-up flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl animate-glow relative overflow-hidden border-4 border-gradient-to-br from-primary-400 to-accent-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-500/20 rounded-full animate-pulse"></div>
              <img
                src="/api/placeholder/300/300"
                alt="Nauman Farooq - Senior Full-Stack Developer"
                className="w-full h-full object-cover rounded-full relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-white text-xs font-medium">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-up flex flex-col items-center" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center">
              <span className="block animate-slide-in-left">Full-Stack</span>
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                Developer
              </span>
            </h1>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float">
              ReactJS
            </span>
            <span className="text-gray-400 text-xl animate-pulse">•</span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
              Node.js
            </span>
            <span className="text-gray-400 text-xl animate-pulse">•</span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
              MongoDB
            </span>
            <span className="text-gray-400 text-xl animate-pulse">•</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
              AI/ML
            </span>
          </div>

          {/* Description */}
          <div className="animate-slide-up flex justify-center w-full" style={{animationDelay: '0.8s'}}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-6xl xl:max-w-7xl text-center leading-relaxed px-4">
              Senior Full-Stack Developer with 8+ years of experience building scalable applications using the MERN stack.
              Recently expanded into <span className="text-primary-400 font-semibold">Data Science & AI</span>, focusing on
              Machine Learning, Deep Learning, and Generative AI to create smarter products with real business impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up w-full" style={{animationDelay: '1s'}}>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-pulse-slow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </button>

            <button
              onClick={handleDownloadCV}
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 animate-slide-up w-full" style={{animationDelay: '1.2s'}}>
            <a
              href="https://linkedin.com/in/nauman-farooq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://github.com/nauman-farooq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="mailto:nauman.farooq@example.com"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
