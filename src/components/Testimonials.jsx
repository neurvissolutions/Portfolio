import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Neurvis transformed our vision into a robust AI-powered platform that exceeded all expectations. Their technical expertise in machine learning and full-stack development is unmatched. The team's attention to detail and commitment to quality made the entire process seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      project: "AI Analytics Platform"
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Founder & CEO, MedLink Healthcare",
      company: "MedLink Healthcare",
      content: "The mobile app Neurvis developed for our healthcare platform has revolutionized how we serve our patients. Their deep learning integration for diagnostic assistance is incredibly accurate, and the user experience is intuitive. Outstanding work!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      project: "Healthcare Mobile App"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Marketing Director, GrowthHub",
      company: "GrowthHub",
      content: "Our digital marketing campaigns saw a 300% improvement in ROI after implementing Neurvis's analytics dashboard. Their understanding of both technology and marketing strategy is remarkable. They delivered more than we hoped for.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      project: "Marketing Analytics Dashboard"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Operations Manager, IndustrialTech",
      company: "IndustrialTech",
      content: "The predictive maintenance system built by Neurvis has saved us millions in equipment downtime. Their machine learning models accurately predict failures before they happen. Exceptional technical expertise and project management.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Predictive Maintenance System"
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Product Manager, DataVault",
      company: "DataVault",
      content: "Working with Neurvis was a game-changer for our NLP project. They delivered a sophisticated text analysis tool that processes thousands of documents with incredible accuracy. Professional, reliable, and innovative team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      project: "NLP Analysis Tool"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with Neurvis and the results we've delivered.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <Quote className="w-12 h-12 text-teal-600 opacity-50" />
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
              />
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-teal-600 font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-sm text-gray-500">Project:</div>
                <div className="font-medium text-gray-700">
                  {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:shadow-2xl transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:shadow-2xl transition-all duration-200 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-teal-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.content.substring(0, 150)}..."
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-teal-600 text-xs">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-600">TechFlow</div>
            <div className="text-2xl font-bold text-gray-600">MedLink</div>
            <div className="text-2xl font-bold text-gray-600">GrowthHub</div>
            <div className="text-2xl font-bold text-gray-600">DataVault</div>
            <div className="text-2xl font-bold text-gray-600">IndustrialTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;