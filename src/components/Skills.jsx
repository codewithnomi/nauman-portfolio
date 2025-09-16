import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'Django', 'Flask', 'RESTful APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Database & Storage',
      color: 'from-purple-500 to-violet-500',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'AWS S3', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux', 'Server Management', 'Load Balancing']
    },
    {
      title: 'AI & Data Science',
      color: 'from-pink-500 to-rose-500',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Data Visualization', 'PowerBI']
    },
    {
      title: 'Tools & Technologies',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jira', 'Slack', 'Agile', 'Scrum', 'Project Management']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl xl:max-w-5xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable, efficient solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${0.2 + categoryIndex * 0.1}s`}}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-white/5 text-white border border-white/10 rounded-lg text-sm font-medium hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${0.3 + categoryIndex * 0.1 + skillIndex * 0.05}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill Count */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Skills</span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="glass-card p-8 max-w-5xl xl:max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">8+</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Years Experience</h4>
                <p className="text-gray-300 text-sm">Full-stack development with MERN stack expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Projects Completed</h4>
                <p className="text-gray-300 text-sm">Successful delivery across various industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                <p className="text-gray-300 text-sm">Modern frameworks and cutting-edge tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
