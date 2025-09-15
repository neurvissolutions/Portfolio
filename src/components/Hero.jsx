import React from 'react';
import { ArrowRight, Brain, Lightbulb, Cog } from 'lucide-react';

const handleScroll = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Floating Icons */}
            <div className="flex justify-center lg:justify-start items-center space-x-8 mb-8">
              <div className="animate-bounce delay-0">
                <Brain className="w-12 h-12 text-blue-900" />
              </div>
              <div className="animate-bounce delay-150">
                <Lightbulb className="w-12 h-12 text-orange-500" />
              </div>
              <div className="animate-bounce delay-300">
                <Cog className="w-12 h-12 text-teal-600" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-emerald-700">Innovation</span> Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Intelligence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              From cutting-edge AI solutions to full-stack development, we transform ideas into
              digital realities that drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={(e) => handleScroll(e, '#contact')}
                className="group bg-gradient-to-r from-teal-600 to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={(e) => handleScroll(e, '#projects')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-900">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Logo */}
          {/* Right Logo */}
{/* Right Logo */}
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    {/* Background circle with shadow */}
    <div className="w-96 h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center shadow-2xl animate-pulse overflow-hidden">
      {/* Your Logo */}
      <img
        src="/neurvis.logo.jpeg"
        alt="Neurvis Logo"
        className="w-180 h-180 object-cover"
      />
    </div>

    {/* Decorative ping elements */}
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-60 animate-ping"></div>
    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-600 rounded-full opacity-60 animate-ping animation-delay-1000"></div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;