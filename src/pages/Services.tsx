import { Link } from 'react-router-dom';
import { Container, FileCheck, Calendar, Truck, Shield, RecycleIcon, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { OrganicBackground } from '../components/OrganicBackground';

export function Services() {
  const containerTypes = [
    {
      size: '6-Yard',
      title: 'Compact Container',
      capacity: '6 cubic yards',
      idealFor: 'Small to medium manufacturing units',
      gradient: 'from-cyan-400 to-teal-400',
    },
    {
      size: '12-Yard',
      title: 'Standard Container',
      capacity: '12 cubic yards',
      idealFor: 'Large factories and processing plants',
      gradient: 'from-teal-400 to-emerald-400',
    },
    {
      size: 'Custom',
      title: 'Industrial Skip',
      capacity: 'Tailored sizing',
      idealFor: 'Heavy industrial operations',
      gradient: 'from-emerald-400 to-green-400',
    },
  ];

  const contractBenefits = [
    {
      icon: Calendar,
      title: 'Seamless Scheduling',
      description: 'Precision-timed collections that flow naturally with your operations.',
    },
    {
      icon: Shield,
      title: 'Complete Compliance',
      description: 'Full alignment with UAE environmental standards and regulations.',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'GPS-tracked vehicles ensuring punctual, reliable service delivery.',
    },
    {
      icon: RecycleIcon,
      title: 'Circular Processing',
      description: 'Maximum resource recovery supporting your sustainability goals.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Insights',
      description: 'Detailed reporting on volumes, methods, and environmental impact.',
    },
    {
      icon: Container,
      title: 'Premium Maintenance',
      description: 'Regular care and replacement ensuring pristine container conditions.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Site Assessment',
      description: 'We visit to understand your unique waste flow and requirements',
      color: 'cyan',
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'Receive a tailored solution with transparent, predictable pricing',
      color: 'teal',
    },
    {
      number: '03',
      title: 'Deployment',
      description: 'Pristine containers installed and integrated seamlessly',
      color: 'emerald',
    },
    {
      number: '04',
      title: 'Ongoing Partnership',
      description: 'Continuous optimization and dedicated support for your success',
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500"></div>
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 text-cyan-100" />
              <span className="text-sm text-white font-medium tracking-wide">Complete Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto font-light leading-relaxed">
              Premium waste management crafted for UAE industries
            </p>
          </div>
        </div>
      </section>

      {/* Container Solutions - Clean Tech Aesthetic */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl mb-8">
              <Container className="w-10 h-10 text-cyan-600" strokeWidth={2} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Container <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Solutions</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Pristine, high-tech containers designed for optimal efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {containerTypes.map((container, index) => (
              <div
                key={container.size}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 transform hover:-translate-y-3 border border-slate-100">
                  {/* Size Badge */}
                  <div className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${container.gradient} rounded-2xl mb-8 shadow-lg shadow-cyan-200/30 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-semibold text-lg">{container.size}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3 tracking-tight">{container.title}</h3>
                  <p className="text-slate-500 mb-2 font-light">Capacity: {container.capacity}</p>
                  <p className="text-emerald-600 font-medium mb-8">Ideal for: {container.idealFor}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 mt-2 mr-3"></div>
                      <span className="text-slate-600 font-light">Weather-resistant construction</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 mt-2 mr-3"></div>
                      <span className="text-slate-600 font-light">Secure locking system</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 mt-2 mr-3"></div>
                      <span className="text-slate-600 font-light">Optimized for easy loading</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Contracts - Flowing Design */}
      <section className="py-32 bg-gradient-to-br from-cyan-50/30 via-teal-50/20 to-emerald-50/30 relative overflow-hidden">
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl mb-8">
              <FileCheck className="w-10 h-10 text-teal-600" strokeWidth={2} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Annual <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Partnerships</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Long-term collaborations built on trust and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contractBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-teal-200/30 transition-all duration-500 group border border-white/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-teal-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Process - Flowing Timeline */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Partnership <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Journey</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              A seamless flow from first contact to ongoing success
            </p>
          </div>

          <div className="relative">
            {/* Flowing Line */}
            <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-cyan-200 via-teal-200 to-emerald-200 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-cyan-200/30 transition-all duration-500 inline-block">
                      <h3 className="text-2xl font-semibold text-slate-800 mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-light max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${step.color}-400 to-${step.color}-500 shadow-xl shadow-${step.color}-200/50 flex items-center justify-center`}>
                      <span className="text-white font-semibold text-xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-cyan-50/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Benefits */}
              <div className="p-12 lg:p-16 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 text-white relative overflow-hidden">
                <OrganicBackground />
                <div className="relative z-10">
                  <h3 className="text-4xl font-light mb-10 tracking-tight">What's Included</h3>
                  <ul className="space-y-6">
                    {[
                      'Fixed annual pricing with complete transparency',
                      'Dedicated account manager for your business',
                      '24/7 emergency support hotline',
                      'Quarterly reviews and optimization sessions',
                      'Digital portal for real-time tracking',
                      'Flexible scheduling tailored to your operations',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 mr-4 flex-shrink-0 mt-1" strokeWidth={2} />
                        <span className="text-lg font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="p-12 lg:p-16 bg-white flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-slate-800 mb-6 tracking-tight">
                  Ready to Begin?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
                  Let's create a customized solution that flows perfectly with your operations and sustainability goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-full hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 font-medium text-lg transform hover:scale-105"
                >
                  Request Your Quote
                  <ArrowRight className="ml-3 w-6 h-6" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
