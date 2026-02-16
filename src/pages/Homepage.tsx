import { Link } from 'react-router-dom';
import { Clock, Shield, Leaf, ArrowRight, Sparkles, Wind, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { OrganicBackground } from '../components/OrganicBackground';
import { useState, useEffect } from 'react';

export function Homepage() {
  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1561558854-725731eab961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMG1hbmFnZW1lbnQlMjBmYWNpbGl0eSUyMGNsZWFufGVufDF8fHx8MTc2NzkwMzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Clean Management',
    },
    {
      url: 'https://images.unsplash.com/photo-1705164686320-cf877bf7f338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBmYWNpbGl0eSUyMG1vZGVybnxlbnwxfHx8fDE3Njc5MDM1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Modern Recycling',
    },
    {
      url: 'https://images.unsplash.com/photo-1759508531671-ddb076f8c5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNsZWFuJTIwY2l0eSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NzkwMzU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Clean UAE',
    },
    {
      url: 'https://images.unsplash.com/photo-1762184427756-e999e764516d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udGFpbmVycyUyMG9yZ2FuaXplZHxlbnwxfHx8fDE3Njc5MDM1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Industrial Solutions',
    },
    {
      url: 'https://images.unsplash.com/photo-1634007517395-b0a7ff41b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwVUFFJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY3OTAzNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      label: 'Green Building',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const values = [
    {
      icon: Clock,
      title: 'Precision Timing',
      description: 'Seamless, scheduled collections that flow with your operations, never disrupting your workflow.',
      gradient: 'from-cyan-400 to-teal-400',
    },
    {
      icon: Shield,
      title: 'Total Compliance',
      description: 'Fully aligned with UAE environmental standards, ensuring peace of mind and regulatory harmony.',
      gradient: 'from-teal-400 to-emerald-400',
    },
    {
      icon: Leaf,
      title: 'Natural Solutions',
      description: 'Eco-conscious practices that transform waste into resources, nurturing a circular ecosystem.',
      gradient: 'from-emerald-400 to-green-400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Centered Carousel */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-teal-50 px-6 py-2 rounded-full border border-cyan-100 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm text-cyan-700 font-medium tracking-wide">The Clean Ecosystem</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 leading-tight tracking-tight mb-4">
              Harmonizing Industry<br />
              <span className="font-semibold bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                & Nature
              </span>
            </h1>
          </div>

          {/* Image Carousel - Centered */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] max-w-5xl mx-auto mb-12">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center group z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-cyan-600" strokeWidth={2.5} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center group z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-cyan-600" strokeWidth={2.5} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-teal-500'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Below Carousel */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10">
              Intelligent B2B waste solutions for a sustainable UAE. We partner with leading manufacturers and enterprises to create a cleaner, greener future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="group px-10 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-full hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 font-medium inline-flex items-center transform hover:scale-105"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full hover:border-cyan-300 hover:bg-cyan-50/50 transition-all duration-300 font-medium inline-flex items-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Extreme White Space */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center space-x-2 text-cyan-600 mb-6">
              <Wind className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest font-medium">Pure Excellence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              The <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Clean</span> Advantage
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Where precision meets sustainability in waste management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-200/30 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${value.gradient} mb-8 shadow-lg shadow-cyan-200/30 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Flowing Layout */}
      <section className="py-32 bg-gradient-to-br from-cyan-50/30 via-teal-50/20 to-emerald-50/30 relative overflow-hidden">
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center space-x-2 text-teal-600 mb-6">
              <Droplets className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest font-medium">Our Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Complete <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Ecosystem</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Tailored solutions that flow seamlessly with your operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Container Solutions */}
            <div className="group bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-80 overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBwcm9jZXNzJTIwdGVjaG5vbG9neSUyMGNsZWFufGVufDF8fHx8MTc2NzkwMjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Container Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-semibold text-slate-800 mb-4 tracking-tight">Container Solutions</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">
                  Pristine, high-tech containers designed for optimal efficiency and minimal environmental impact.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-cyan-600 hover:text-teal-600 font-medium group/link"
                >
                  Discover More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Annual Contracts */}
            <div className="group bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-teal-200/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-80 overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1761474258304-3b41a0707764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuYXR1cmUlMjBEdWJhaXxlbnwxfHx8fDE3Njc5MDI0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Annual Contracts"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-semibold text-slate-800 mb-4 tracking-tight">Annual Partnerships</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">
                  Long-term collaborations built on trust, transparency, and sustainable growth together.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-teal-600 hover:text-emerald-600 font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Glowing Effect */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500"></div>
        <OrganicBackground />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight leading-tight">
            Ready to Create a<br />
            <span className="font-semibold">Cleaner Future Together?</span>
          </h2>
          <p className="text-xl text-cyan-50 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join leading UAE enterprises in building a sustainable ecosystem
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 bg-white text-cyan-600 rounded-full hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 font-medium text-lg transform hover:scale-105"
          >
            Start Your Partnership
            <ArrowRight className="ml-3 w-6 h-6" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  );
}