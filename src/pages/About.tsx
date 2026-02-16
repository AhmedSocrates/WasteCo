import { Shield, Target, Users, Award, Leaf, Sparkles, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';
import { OrganicBackground } from '../components/OrganicBackground';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Safety Excellence',
      description: 'Comprehensive protocols protecting people, partners, and our shared environment.',
      gradient: 'from-cyan-400 to-teal-400',
    },
    {
      icon: Target,
      title: 'Precision Service',
      description: 'Meticulous attention to every detail, ensuring seamless operations.',
      gradient: 'from-teal-400 to-emerald-400',
    },
    {
      icon: Leaf,
      title: 'Environmental Harmony',
      description: 'Committed to practices that nurture rather than deplete our ecosystem.',
      gradient: 'from-emerald-400 to-green-400',
    },
    {
      icon: Users,
      title: 'Partnership Spirit',
      description: 'Building lasting relationships founded on trust and mutual growth.',
      gradient: 'from-green-400 to-teal-400',
    },
  ];

  const statistics = [
    { 
      number: '500+', 
      label: 'Enterprise Partners',
      icon: Globe,
      gradient: 'from-cyan-400 to-teal-400',
    },
    { 
      number: '15+', 
      label: 'Years of Excellence',
      icon: Award,
      gradient: 'from-teal-400 to-emerald-400',
    },
    { 
      number: '99.8%', 
      label: 'On-Time Collections',
      icon: Target,
      gradient: 'from-emerald-400 to-green-400',
    },
    { 
      number: '60%', 
      label: 'Waste Recovered',
      icon: TrendingUp,
      gradient: 'from-green-400 to-cyan-400',
    },
  ];

  const certifications = [
    'ISO 14001 Environmental Management',
    'UAE Environmental Agency Certified',
    'Industrial Waste Handling Approved',
    'Occupational Health & Safety Compliant',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"></div>
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 text-emerald-100" />
              <span className="text-sm text-white font-medium tracking-wide">Our Story</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Al Ard Alkhadra
            </h1>
            <p className="text-2xl text-emerald-50 font-light tracking-wide mb-4">
              The Green Land
            </p>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto font-light leading-relaxed">
              Pioneering sustainable industrial harmony in the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-teal-600 mb-6">
                <Leaf className="w-5 h-5" strokeWidth={2} />
                <span className="text-sm uppercase tracking-widest font-medium">Our Mission</span>
              </div>
              <h2 className="text-5xl font-light text-slate-800 mb-8 tracking-tight leading-tight">
                Harmonizing Industry<br />
                <span className="font-semibold text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
                  With Nature
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  At <span className="font-medium text-emerald-600">Al Ard Alkhadra</span> – The Green Land – we believe industrial progress and environmental stewardship are not opposing forces, but complementary partners in building a sustainable future.
                </p>
                <p>
                  We enable UAE's manufacturers and enterprises to thrive while protecting our shared ecosystem, transforming waste from a challenge into an opportunity for renewal and growth.
                </p>
                <p>
                  Our vision extends beyond waste management. We're cultivating a circular economy where resources flow, regenerate, and support continuous prosperity across the Emirates.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1737280361800-56204a9c3cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGdyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4NzUxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainability"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-br from-cyan-50/30 via-teal-50/20 to-emerald-50/30 relative overflow-hidden">
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 text-emerald-600 mb-6">
              <Sparkles className="w-5 h-5" strokeWidth={2} />
              <span className="text-sm uppercase tracking-widest font-medium">Core Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Guided by <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Principle</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              The foundations of every partnership we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-teal-200/30 transition-all duration-500 group border border-white/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg shadow-cyan-200/30 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3 tracking-tight">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Our <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Impact</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">
              Trusted by UAE's leading industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className="group bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-cyan-200/30 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div className="text-5xl font-light text-slate-800 mb-3">{stat.number}</div>
                <div className="text-slate-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-cyan-50/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <img
                  src="https://images.unsplash.com/photo-1679915411269-8644ac69f235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVQUUlMjBmYWN0b3J5JTIwYnVpbGRpbmclMjBkYXlsaWdodHxlbnwxfHx8fDE3Njc5MDE4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial facility"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl mb-8">
                <Award className="w-10 h-10 text-cyan-600" strokeWidth={2} />
              </div>
              <h2 className="text-5xl font-light text-slate-800 mb-8 tracking-tight leading-tight">
                Excellence in<br />
                <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">
                  Safety & Compliance
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
                We maintain the highest standards, fully aligned with UAE environmental laws and international best practices, ensuring every partnership is built on a foundation of trust and responsibility.
              </p>

              <div className="space-y-5">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start bg-white p-5 rounded-2xl shadow-md shadow-slate-200/50">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-700 font-light leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Vision */}
      <section className="py-32 bg-white relative overflow-hidden">
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Supporting <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">UAE Vision 2030</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              Contributing to the Emirates' sustainability goals and economic diversification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-white to-cyan-50/50 p-10 rounded-3xl shadow-lg shadow-slate-200/50 text-center border border-cyan-100">
              <div className="text-5xl font-light text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text mb-4">75%</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Zero Waste</h3>
              <p className="text-slate-600 font-light leading-relaxed">Supporting Dubai's goal of diverting waste from landfills</p>
            </div>
            <div className="bg-gradient-to-br from-white to-teal-50/50 p-10 rounded-3xl shadow-lg shadow-slate-200/50 text-center border border-teal-100">
              <div className="text-5xl font-light text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text mb-4">100%</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Green Growth</h3>
              <p className="text-slate-600 font-light leading-relaxed">Enabling industrial expansion with environmental responsibility</p>
            </div>
            <div className="bg-gradient-to-br from-white to-emerald-50/50 p-10 rounded-3xl shadow-lg shadow-slate-200/50 text-center border border-emerald-100">
              <div className="text-5xl font-light text-transparent bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text mb-4">∞</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Circular Economy</h3>
              <p className="text-slate-600 font-light leading-relaxed">Maximizing resource recovery and material regeneration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
