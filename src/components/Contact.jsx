import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@neurvis.com",
      subContent: "We'll respond within 24 hours",
      color: "text-teal-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri 9AM-6PM EST",
      color: "text-blue-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      subContent: "Remote-first with global reach",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-900">
              Building
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us for
            a free consultation and discover how we can help accelerate your
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} mt-1`}>{info.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">
                        {info.title}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {info.content}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {info.subContent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-bold text-gray-900 mb-4">
                  Why Choose Neurvis?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">
                      Free initial consultation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">24/7 project support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">
                      Agile development process
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">
                      Post-launch maintenance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Replaced Form with Let’s Collaborate */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-teal-600 to-blue-900 rounded-3xl p-10 md:p-16 text-white shadow-xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let’s Collaborate
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                I’m excited to connect and explore how we can work together on
                innovative projects!
              </p>
              <a
                href="mailto:neurvis.solutions@gmail.com"
                className="inline-block bg-white text-teal-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project Today?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 50+ satisfied clients who trust Neurvis to deliver exceptional
              results on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;