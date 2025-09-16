import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Customer Information Management (CIM)',
      category: 'Full-Stack Web Application',
      description: 'A comprehensive customer management system built for UK clients with advanced subscription management and billing features.',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MySQL', 'Material-UI'],
      features: [
        'Customer subscription management with automated billing',
        'Real-time dashboard with analytics and reporting',
        'Multi-tenant architecture supporting multiple clients',
        'Advanced search and filtering capabilities',
        'Role-based access control and permissions',
        'Integration with third-party payment gateways'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Self-Service Portal',
      category: 'User Management Platform',
      description: 'A modern self-service portal enabling users to manage their accounts, subscriptions, and preferences independently.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      features: [
        'User authentication and profile management',
        'Subscription management and billing history',
        'Support ticket system with real-time chat',
        'Document upload and management',
        'Mobile-responsive design',
        'Email notifications and alerts'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Web Sales Platform',
      category: 'E-commerce Solution',
      description: 'Enterprise-level sales platform with advanced inventory management and multi-channel integration.',
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      features: [
        'Advanced product catalog with variants',
        'Real-time inventory tracking',
        'Multi-channel sales integration',
        'Automated order processing workflow',
        'Analytics dashboard with sales insights',
        'Customer relationship management (CRM)'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Student Portal System',
      category: 'Educational Platform',
      description: 'Comprehensive student management system with course enrollment, grade tracking, and communication features.',
      technologies: ['Laravel', 'React', 'MySQL', 'Bootstrap', 'PHP', 'jQuery'],
      features: [
        'Student enrollment and course management',
        'Grade tracking and progress reports',
        'Assignment submission system',
        'Teacher-student communication portal',
        'Attendance tracking and reporting',
        'Parent portal for progress monitoring'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'API Management System',
      category: 'Backend Infrastructure',
      description: 'Scalable API management platform with authentication, rate limiting, and comprehensive monitoring.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'Nginx'],
      features: [
        'RESTful API design and implementation',
        'JWT-based authentication system',
        'Rate limiting and throttling',
        'API documentation with Swagger',
        'Real-time monitoring and logging',
        'Microservices architecture'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      category: 'Business Intelligence',
      description: 'Interactive dashboard for business analytics with real-time data visualization and reporting capabilities.',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL', 'Chart.js'],
      features: [
        'Interactive data visualizations',
        'Real-time analytics and KPI tracking',
        'Custom report generation',
        'Data export in multiple formats',
        'User role-based dashboard views',
        'Automated email reports'
      ],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
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
            Featured <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl xl:max-w-5xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                    </svg>
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 border border-primary-400/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/10 text-gray-400 border border-gray-400/30 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>
                  <button className="p-2 border border-gray-600 hover:border-primary-400 text-gray-400 hover:text-primary-400 rounded-lg transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-5xl xl:max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-primary-400 font-medium">{selectedProject.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Image */}
              <div className={`h-64 bg-gradient-to-br ${selectedProject.color} rounded-lg mb-6 flex items-center justify-center`}>
                <div className="text-white text-center">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                  <p className="text-lg font-medium">{selectedProject.category}</p>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Project Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-400/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </button>
                <button className="flex-1 border border-gray-600 hover:border-primary-400 text-gray-300 hover:text-primary-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
