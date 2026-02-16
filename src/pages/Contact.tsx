import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { OrganicBackground } from '../components/OrganicBackground';

export function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    industry: '',
    phone: '',
    email: '',
    wasteVolume: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        industry: '',
        phone: '',
        email: '',
        wasteVolume: '',
        message: '',
      });
    }, 3000);
  };

  const industries = [
    'Manufacturing',
    'Food Processing',
    'Pharmaceuticals',
    'Chemicals',
    'Construction',
    'Logistics & Warehousing',
    'Automotive',
    'Electronics',
    'Textiles',
    'Other',
  ];

  const wasteVolumes = [
    'Less than 5 cubic yards/week',
    '5-10 cubic yards/week',
    '10-20 cubic yards/week',
    '20-50 cubic yards/week',
    'More than 50 cubic yards/week',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Jebel Ali Industrial Area', 'Dubai, UAE'],
      gradient: 'from-cyan-400 to-teal-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 4 XXX XXXX', '+971 50 XXX XXXX'],
      gradient: 'from-teal-400 to-emerald-400',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@wasteco.ae', 'quotes@wasteco.ae'],
      gradient: 'from-emerald-400 to-green-400',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Sun - Thu: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      gradient: 'from-green-400 to-cyan-400',
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
              <span className="text-sm text-white font-medium tracking-wide">Get in Touch</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight">Let's Connect</h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto font-light leading-relaxed">
              Begin your journey to seamless, sustainable waste management
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-cyan-50/30 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-cyan-200/30 transition-all duration-500 border border-white/50 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br ${info.gradient} shadow-lg shadow-cyan-200/30 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2 tracking-tight">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 font-light leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-4xl font-light text-slate-800 mb-3 tracking-tight">
                  Request Your <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Custom Quote</span>
                </h2>
                <p className="text-slate-600 mb-10 font-light leading-relaxed">
                  Share your details and we'll craft a personalized solution within 24 hours
                </p>

                {submitted ? (
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-12 text-center">
                    <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 mb-6">
                      <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-light text-slate-800 mb-3 tracking-tight">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                      We've received your request. Our team will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800 placeholder:text-slate-400"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800 placeholder:text-slate-400"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Industry Type */}
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                        Industry Type *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800 placeholder:text-slate-400"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800 placeholder:text-slate-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Estimated Waste Volume */}
                    <div>
                      <label htmlFor="wasteVolume" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                        Estimated Waste Volume *
                      </label>
                      <select
                        id="wasteVolume"
                        name="wasteVolume"
                        required
                        value={formData.wasteVolume}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800"
                      >
                        <option value="">Select estimated volume</option>
                        {wasteVolumes.map((volume) => (
                          <option key={volume} value={volume}>
                            {volume}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3 tracking-wide">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all font-light text-slate-800 placeholder:text-slate-400 resize-none"
                        placeholder="Share your specific requirements, challenges, or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-10 py-5 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white rounded-full hover:shadow-xl hover:shadow-cyan-300/50 transition-all duration-300 font-medium text-lg transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Submit Request
                      <Send className="ml-3 w-5 h-5" strokeWidth={2} />
                    </button>

                    <p className="text-sm text-slate-500 text-center font-light">
                      * Required fields. Your privacy is protected.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <OrganicBackground />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-slate-800 mb-4 tracking-tight">
              Visit Our <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text">Location</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">
              Strategically positioned in Jebel Ali for optimal UAE coverage
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 h-96 flex items-center justify-center border border-cyan-100">
            <div className="text-center p-8">
              <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 mb-6 shadow-xl shadow-cyan-200/50">
                <MapPin className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-lg font-medium text-slate-800 mb-2">Jebel Ali Industrial Area</p>
              <p className="text-slate-600 font-light">Dubai, United Arab Emirates</p>
              <p className="text-sm text-slate-500 mt-6 font-light italic">
                Interactive map integration available in production
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
