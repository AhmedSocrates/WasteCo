import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${isActive(link.path)
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-200/50'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-8 py-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-full hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 font-medium transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-cyan-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-cyan-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 rounded-2xl transition-all mb-2 ${isActive(link.path)
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-200/50'
                    : 'text-slate-600 hover:bg-cyan-50/50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-2xl text-center font-medium shadow-lg shadow-cyan-200/50"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
