import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' }
  ]; // Removed Contact

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/neurvis.logo.jpeg"
                alt="Neurvis Logo"
                className="w-55 h-20 object-cover"
              />
            </div>
            <div>
              <span className="text-2xl font-bold">
                <span className="text-blue-900">NEUR</span>
                <span className="text-teal-600">VIS</span>
              </span>
              <p className="text-xs text-gray-600 -mt-1">Where minds and innovation meet.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-gradient-to-r from-teal-600 to-blue-900 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-900 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;