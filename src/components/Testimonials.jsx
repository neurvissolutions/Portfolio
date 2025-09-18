import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonial = {
    id: 1,
    company: "Olynk.ai",
    logo: "Olynk_Logo.png", // Replace with your actual logo path
    content: [
    "At Neurvis, we collaborated with Olynk.ai to design and develop a dynamic direct-to-consumer (D2C) landing page. Our contribution focused on building the frontend with React, TypeScript, and Firebase, while incorporating creative animations that enhanced user engagement and strengthened the brand’s identity.",
    "We optimized the frontend for speed, responsiveness, and accessibility, ensuring a smooth experience across all devices.",
    "Additionally, we integrated Firebase for real-time data management and secure authentication, enabling the platform to scale reliably as Olynk.ai grows.",
    "This project highlights how Neurvis contributes cutting-edge engineering and design expertise to create digital experiences that truly stand out."
  ],
    rating: 5,
    project: "D2C Landing Page"
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here’s how Neurvis has helped innovative companies bring their ideas to life.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <Quote className="w-12 h-12 text-teal-600 opacity-50" />
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            "{testimonial.content}"
          </blockquote>

          <div className="flex items-center space-x-4">
            <img
              src={testimonial.logo}
              alt={testimonial.company}
              className="w-20 h-20 object-contain border-2 border-gray-200 rounded-xl bg-white p-2"
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">{testimonial.company}</div>
              <div className="text-sm text-gray-600">Project: {testimonial.project}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
