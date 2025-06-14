import React from 'react';
import { Award, Shield, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '16+ Years Experience',
    description: 'Trusted expertise in premium flooring installation and consultation'
  },
  {
    icon: Shield,
    title: 'Trusted Service',
    description: 'Reliable, professional service with quality guarantees'
  },
  {
    icon: MapPin,
    title: '100 Mile Coverage',
    description: 'Comprehensive service across Birmingham and West Midlands'
  },
  {
    icon: Users,
    title: 'Expert Fitters',
    description: 'Skilled professionals ensuring perfect installation every time'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Premium Flooring</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover what makes us the leading choice for luxury flooring solutions in the West Midlands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;