import React from 'react';
import { Code, Smartphone, Brain, Database, TrendingUp, Zap } from 'lucide-react';

// Smooth scroll handler
const handleScroll = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web applications using modern technologies like React, Node.js, Python, and cloud platforms.",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ML-Integrated Websites",
      description: "Seamless integration of AI capabilities into web applications for intelligent user experiences.",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Custom ML models for prediction, classification, and automation to solve complex business problems.",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Deep Learning",
      description: "Advanced neural networks for computer vision, NLP, and AI-powered solutions using TensorFlow and PyTorch.",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies, SEO optimization, and analytics to boost your online presence.",
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions to bring your digital vision to life, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* <button className={`text-sm font-semibold ${service.textColor} hover:underline flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-200`}> */}
                {/* <span>Learn More</span> */}
                {/* <span>→</span> */}
              {/* </button> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can accelerate your business growth 
              and bring innovative solutions to your challenges.
            </p>
            <button
  onClick={(e) => handleScroll(e, '#contact')}
  className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
>
  Get Free Consultation
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;