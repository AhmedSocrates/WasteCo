import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50/30 px-6">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-cyan-100 to-teal-100 mb-8">
          <AlertTriangle className="w-16 h-16 text-cyan-600" strokeWidth={1.5} />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-light text-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text tracking-tight mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-light text-slate-800 mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Back Home CTA */}
        <Link
          to="/"
          className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-full hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 font-medium text-lg transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-3" strokeWidth={2} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
