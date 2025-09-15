import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HealthSphere",
      description: "A full-stack AI-powered healthcare platform offering symptom-based disease predictions, medical image/X-ray analysis, appointment management, and intelligent patient-doctor-hospital interactions.",
      image: "/healthsphere.png", // Use the image from public folder
      technologies: ["React", "Node.js", "Flask", "MongoDB", "AI/ML"],
      category: "Full Stack + ML",
      color: "from-blue-500 to-teal-500",
      githubUrl: "https://github.com/jaishnaviinturi/HealthSphere_Full_Stack_Project",
      liveUrl: "https://health-sphere-frontend.vercel.app/"
    },
    {
      id: 2,
      title: "Smart Healthcare Mobile App",
      description: "Cross-platform mobile application for healthcare providers with AI diagnosis assistance, patient management, and telemedicine features.",
      image: "/career.png",
      technologies: ["React Native", "Python", "PyTorch", "Firebase"],
      category: "Mobile + AI",
      color: "from-teal-500 to-green-500",
      githubUrl: "https://github.com/neurvis/healthcare-app",
      liveUrl: "https://healthcare.neurvis.com"
    },
    {
      id: 3,
      title: "Career Catalyst",
      description: "A full-stack AI-powered career platform that connects students, institutions, and organizations to streamline recruitment, resume analysis, and career growth through intelligent job matching.",
      image: "/career.png", // or keep an external URL if you prefer
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Selenium", "Gemini API"],
      category: "Full Stack + AI",
      color: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/sriraghavi22/career-catalyst-project",
      liveUrl: "https://career-catalyst-six.vercel.app/"
    },
    {
      id: 4,
      title: "Farm2Fork",
      description: "A blockchain-enabled agri-supply chain platform that connects farmers, distributors, and retailers while ensuring transparency, traceability, and sustainability through IPFS-powered storage and QR-based verification.",
      image: "/farm.jpg", // place farm2fork.png inside /public for consistency
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "IPFS", "Pinata"],
      category: "Blockchain + Full Stack",
      color: "from-orange-500 to-red-500",
      githubUrl: "https://github.com/sriraghavi22/farm2fork",
      liveUrl: ""
    },
    {
      id: 5,
      title: "HoloQuest: Escape the Unseen",
      description: "A web-based 3D escape room game built with Three.js, featuring immersive puzzles, hand gesture + voice command controls, and adaptive AI-driven gameplay for future iterations.",
      image: "/holoquest.png", // place holoquest.png inside /public
      technologies: ["Three.js", "Node.js", "MongoDB", "Handtrack.js", "Web Speech API"],
      category: "Game Development + AI",
      color: "from-indigo-500 to-blue-500",
      githubUrl: "https://github.com/sriraghavi22/holoquest",
      liveUrl: "https://holoquest.vercel.app"
    },
    // {
    //   id: 6,
    //   title: "Natural Language Processing Tool",
    //   description: "Advanced NLP solution for document analysis, sentiment analysis, and automated content generation for enterprise clients.",
    //   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    //   technologies: ["Python", "Transformers", "FastAPI", "Redis"],
    //   category: "NLP + AI",
    //   color: "from-green-500 to-teal-500",
    //   githubUrl: "https://github.com/neurvis/nlp-tool",
    //   liveUrl: "https://nlp.neurvis.com"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            across various technologies and industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-110"
                      title="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors duration-200 transform hover:scale-110"
                      title="View Live Project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white mb-3`}>
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-medium text-sm">
                    Hover to view links
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-teal-600 transition-colors duration-200"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors duration-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;