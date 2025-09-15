import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Jaishnavi Inturi",
      role: "ML & DL | Full Stack Developer | App Developer",
      image: "/jaishnavi.jpg", // LinkedIn profile image
      bio: "CSE (Data Science) undergrad at BVRIT with strong expertise in Java, Python, Data Science & ML. Passionate about building scalable solutions in AI, Web, and Game Development. 9.38 CGPA achiever with hackathon wins.",
      skills: ["Java", "Python", "React.js", "Data Science", "Machine Learning"],
      social: {
        linkedin: "https://www.linkedin.com/in/jaishnavi-inturi",
        github: "https://github.com/jaishnaviinturi",
        twitter: "#"
      }
    },
    {
      name: "Kathula Sri Raghavi",
      role: "ML & DL | Full Developmer",
      image: "/raghavi.jpg", // put raghavi.jpg in your public folder
      bio: "CSE (Data Science) undergrad at BVRIT (9.75 CGPA). Skilled in AI/ML, Web Development, and Data Science. SDE Intern at Blue Cloud Softech, with experience in LLM + RAG pipelines, drug discovery, and scalable web apps. Hackathon winner with projects like Farm2Fork, Career Catalyst, and HoloQuest.",
      skills: ["Python", "Machine Learning", "Web Development", "LLMs", "Databases"],
      social: {
        linkedin: "https://www.linkedin.com/in/kathula-sri-raghavi",
        github: "https://github.com/sriraghavi22",
        twitter: "#"
      }
    },
    {
      name: "Anugu Abhijith Reddy",
      role: "Full-Stack Web Developer | AI & ML",
      image: "/abhijith.jpg", // put your photo as abhijith.jpg inside public/ folder
      bio: "Passionate about Web Development and Machine Learning, with experience building AI-driven and full-stack applications. Former SDE Intern at Olynk, skilled in JavaScript, React, Node.js, and ML model development. Hackathon finalist with impactful projects like Career Catalyst and HealthSphere.",
      skills: ["JavaScript", "React.js", "Node.js", "Python", "Machine Learning", "MongoDB", "TypeScript"],
      social: {
        linkedin: "https://www.linkedin.com/in/abhijith-reddy-a-/",
        github: "https://github.com/abhijithreddy05",
        twitter: "#"
      }
    },
    {
      name: "Shanmukh Chinnakotla",
      role: "Marketing | Full Stack Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Data-driven marketing expert with proven track record of growing businesses through innovative digital strategies and analytics.",
      skills: ["Content Strategy", "Social Media", "JavaScript", "React.js", "Node.js"],
      social: {
        linkedin: "https://www.linkedin.com/in/shanmukh-chinnakotla-099778259/",
        github: "#",
        twitter: "#"
      }
    },
    // {
    //   name: "David Park",
    //   role: "DevOps & Cloud Architect",
    //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    //   bio: "Cloud infrastructure specialist ensuring scalable, secure, and efficient deployment of applications across multiple platforms.",
    //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    //   social: {
    //     linkedin: "#",
    //     github: "#",
    //     twitter: "#"
    //   }
    // },
    // {
    //   name: "Lisa Wang",
    //   role: "UI/UX Design Lead",
    //   image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    //   bio: "Creative designer focused on user-centered design principles. Creates intuitive interfaces that enhance user experience and engagement.",
    //   skills: ["Figma", "Sketch", "User Research", "Prototyping"],
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind Neurvis, each bringing unique expertise 
            and passion to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Team Excels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Collaborative Spirit</h4>
                <p className="text-gray-600">We believe great solutions emerge from diverse perspectives working together.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-600">Our team stays ahead by constantly exploring new technologies and methodologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation Focus</h4>
                <p className="text-gray-600">We're not just building software, we're crafting the future of digital experiences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Amazing Team?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for innovation and excellence.
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;