import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-cyan-50/30 border-t border-cyan-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="xl" />
            <p className="text-slate-600 leading-relaxed max-w-md">
              Harmonizing industry and nature through intelligent waste management solutions. Supporting the UAE's sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-600 hover:text-cyan-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 hover:text-cyan-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-cyan-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-slate-600 leading-relaxed">Jebel Ali Industrial Area, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" strokeWidth={2} />
                <span className="text-slate-600">+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" strokeWidth={2} />
                <span className="text-slate-600">info@wasteco.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-100 mt-12 pt-8 text-center">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Wasteco - Al Ard Alkhadra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
