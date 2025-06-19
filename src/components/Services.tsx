import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Palette, ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

// OPTIMIZED SERVICES - UPDATED TO MATCH ACTUAL IMAGE CONTENT - REMOVED PRICES
const services = [
  {
    icon: Home,
    title: 'Premium Carpet',
    description: 'Luxurious carpets that combine comfort with elegance, perfect for any room in your home.',
    features: ['Stain Resistant', 'Luxury Textures', 'Sound Dampening', 'Easy Maintenance'],
    image: '/6.jpg', // Luxury bedroom carpet
    gradient: 'from-purple-500 to-indigo-600',
    subtitle: 'Professional Installation',
    iconBg: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Layers,
    title: 'Designer Vinyl',
    description: 'Stunning designer vinyl flooring with geometric patterns and luxury finishes for modern spaces.',
    features: ['Water Resistant', 'Pattern Designs', 'Easy Installation', 'Long Lasting'],
    image: '/3.jpg', // Geometric pattern vinyl
    gradient: 'from-emerald-500 to-teal-600',
    subtitle: 'Professional Installation',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Palette,
    title: 'Luxury Vinyl',
    description: 'Premium luxury vinyl with herringbone and parquet patterns offering style and practicality.',
    features: ['Luxury Patterns', 'Easy Clean', 'Comfort Underfoot', 'Design Variety'],
    image: '/8.jpg', // Herringbone luxury vinyl
    gradient: 'from-amber-500 to-orange-600',
    subtitle: 'Professional Installation',
    iconBg: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">Our Services</span>
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium flooring solutions designed to transform your space
          </p>
        </motion.div>

        {/* DESKTOP OPTIMIZED LAYOUT - SIMILAR TO REVIEWS SECTION */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Service Showcase Card */}
          <motion.div 
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
            key={activeService}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Dynamic border glow */}
            <motion.div 
              className={`absolute inset-0 rounded-3xl sm:rounded-[2rem] opacity-30 transition-all duration-1000 p-[1px]`}
              animate={{
                background: `linear-gradient(135deg, ${services[activeService].gradient.includes('purple') ? '#8B5CF6' : services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'}40, transparent, ${services[activeService].gradient.includes('purple') ? '#8B5CF6' : services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'}30)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-3xl sm:rounded-[2rem]" />
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - Service Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <motion.img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:from-transparent lg:to-black/30" />
                
                {/* Quality Badge */}
                <motion.div 
                  className="absolute top-4 left-4 lg:top-6 lg:left-6"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1 border border-white/20">
                    <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                    <span className="text-white text-xs font-semibold">Premium Quality</span>
                  </div>
                </motion.div>

                {/* Service Category Badge */}
                <motion.div 
                  className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/30 bg-gradient-to-r ${services[activeService].gradient} shadow-xl`}>
                    {services[activeService].subtitle}
                  </div>
                </motion.div>
              </div>
              
              {/* RIGHT SIDE - Service Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <motion.div
                  key={`content-${activeService}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Service Icon and Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg bg-gradient-to-r ${services[activeService].gradient}`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <services[activeService].icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {services[activeService].title}
                      </h3>
                      <p className="text-purple-300 text-sm font-medium">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-white/80 font-medium text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a 
                    href="http://wa.me/+447949087460?text=I'm interested in your flooring services"
                    className={`inline-flex items-center space-x-3 bg-gradient-to-r ${services[activeService].gradient} text-white px-6 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl relative overflow-hidden group w-full sm:w-auto justify-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Get Quote for {services[activeService].title}</span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Service Navigation Tabs - DESKTOP OPTIMIZED */}
          <div className="mt-8 sm:mt-12">
            <div className="flex justify-center">
              <div className="bg-black/80 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                <div className="flex items-center space-x-4">
                  {/* Service Counter */}
                  <div className="flex items-center space-x-2">
                    <motion.span 
                      key={`counter-${activeService}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-white font-bold text-lg"
                    >
                      {String(activeService + 1).padStart(2, '0')}
                    </motion.span>
                    <div 
                      className="w-6 h-0.5 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: services[activeService].gradient.includes('purple') ? '#8B5CF6' : 
                                        services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'
                      }}
                    />
                    <span className="text-white/60 text-lg">
                      {String(services.length).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-px h-6 bg-white/30" />
                  
                  {/* Service Navigation Dots */}
                  <div className="flex items-center space-x-3">
                    {services.map((service, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveService(index)}
                        disabled={activeService === index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`group relative flex items-center space-x-3 px-4 py-2 rounded-xl transition-all duration-300 ${
                          activeService === index 
                            ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg` 
                            : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {/* Service Icon */}
                        <motion.div 
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            activeService === index
                              ? 'bg-white/20'
                              : `bg-gradient-to-r ${service.iconBg} backdrop-blur-sm border border-white/20`
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <service.icon className="w-4 h-4" />
                        </motion.div>
                        
                        {/* Service Name - Desktop Only */}
                        <span className="hidden lg:block font-semibold text-sm">
                          {service.title}
                        </span>

                        {/* Active indicator */}
                        {activeService === index && (
                          <motion.div 
                            className="absolute inset-0 rounded-xl"
                            style={{ 
                              backgroundColor: services[activeService].gradient.includes('purple') ? '#8B5CF6' : 
                                              services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'
                            }}
                            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-purple-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -3, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-8 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl backdrop-blur-xl border border-indigo-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-md" />
      </motion.div>
    </section>
  );
};

export default Services;