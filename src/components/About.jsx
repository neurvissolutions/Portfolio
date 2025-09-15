import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Target className="w-8 h-8" />,
      number: "50+",
      label: "Projects Completed",
      color: "text-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "30+",
      label: "Happy Clients",
      color: "text-teal-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate",
      color: "text-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "12+",
      label: "Countries Served",
      color: "text-purple-600"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new possibilities to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality Driven",
      description: "Every line of code, every design decision, and every user interaction is crafted with meticulous attention to detail.",
      icon: "⚡"
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships by understanding your unique needs and goals.",
      icon: "🎯"
    },
    {
      title: "Agile Approach",
      description: "We embrace flexibility and continuous improvement, adapting quickly to changing requirements and market needs.",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Neurvis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where minds and innovation meet to create extraordinary digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Neurvis, we believe that the intersection of creativity and technology 
              holds unlimited potential. Founded with a passion for innovation, we specialize 
              in creating intelligent solutions that not only meet today's challenges but 
              anticipate tomorrow's opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our multidisciplinary team combines deep technical expertise with creative 
              problem-solving to deliver projects that exceed expectations. From small 
              bug fixes to enterprise-scale applications, we approach every challenge 
              with the same level of dedication and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-teal-600">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="font-medium">AI & Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="font-medium">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-500">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Mobile Applications</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="font-medium">Digital Marketing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">3+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`mx-auto mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative technology solutions.
            </p>
            <button
  onClick={(e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
>
  Let's Talk
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;